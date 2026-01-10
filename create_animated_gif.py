#!/usr/bin/env python3
"""
Script to create an animated GIF from the globe network image.
Creates a pulsing glow effect and animated network lines.
"""

from PIL import Image, ImageDraw, ImageFilter, ImageEnhance
import numpy as np
import os

def create_animated_globe_gif(input_path, output_path, num_frames=30, duration=100):
    """
    Create an animated GIF with pulsing glow and animated network effects.
    
    Args:
        input_path: Path to the input image
        output_path: Path to save the animated GIF
        num_frames: Number of frames in the animation
        duration: Duration of each frame in milliseconds
    """
    # Load the base image
    base_image = Image.open(input_path).convert("RGBA")
    width, height = base_image.size
    
    frames = []
    
    for frame_num in range(num_frames):
        # Calculate animation progress (0 to 1, looping)
        progress = (frame_num / num_frames) * 2 * np.pi
        
        # Create a copy of the base image
        frame = base_image.copy()
        
        # Create a glow effect layer
        glow_layer = Image.new("RGBA", (width, height), (0, 0, 0, 0))
        draw = ImageDraw.Draw(glow_layer)
        
        # Calculate glow intensity (pulsing effect)
        glow_intensity = 0.3 + 0.2 * np.sin(progress)
        
        # Find bright areas (Earth glow) and enhance them
        # Convert to numpy array for processing
        img_array = np.array(frame)
        
        # Create a mask for bright/glowing areas (teal/cyan colors)
        # Look for pixels with high brightness in teal/cyan range
        brightness = np.mean(img_array[:, :, :3], axis=2)
        bright_mask = brightness > 100
        
        # Apply pulsing glow to bright areas
        if np.any(bright_mask):
            # Create glow effect
            glow_alpha = (brightness * glow_intensity).astype(np.uint8)
            glow_alpha = np.clip(glow_alpha, 0, 255)
            
            # Apply glow to teal/cyan areas
            teal_mask = (img_array[:, :, 1] > img_array[:, :, 0]) & (img_array[:, :, 1] > img_array[:, :, 2])
            combined_mask = bright_mask & teal_mask
            
            # Enhance glow on network lines and Earth
            for y in range(height):
                for x in range(width):
                    if combined_mask[y, x]:
                        # Add pulsing glow
                        glow_strength = int(glow_intensity * 50)
                        r, g, b, a = img_array[y, x]
                        # Enhance teal/cyan colors
                        g = min(255, g + glow_strength)
                        b = min(255, b + glow_strength)
                        img_array[y, x] = [r, g, b, a]
        
        # Convert back to PIL Image
        frame = Image.fromarray(img_array)
        
        # Add animated network line pulse effect
        # Create overlay for network lines animation
        overlay = Image.new("RGBA", (width, height), (0, 0, 0, 0))
        overlay_draw = ImageDraw.Draw(overlay)
        
        # Animate network lines with a traveling pulse
        pulse_position = (frame_num / num_frames) * width
        
        # Draw animated pulse along network lines (simplified - just add glow dots)
        for i in range(5):
            x_pos = int((pulse_position + i * width / 5) % width)
            # Draw a small glowing dot that travels along
            overlay_draw.ellipse(
                [x_pos - 10, height // 2 - 10, x_pos + 10, height // 2 + 10],
                fill=(0, 255, 255, int(100 * (1 - abs(np.sin(progress))))),
                outline=(0, 255, 255, int(150 * (1 - abs(np.sin(progress)))))
            )
        
        # Blend overlay with frame
        frame = Image.alpha_composite(frame, overlay)
        
        # Add subtle brightness enhancement for pulsing effect
        enhancer = ImageEnhance.Brightness(frame)
        brightness_factor = 1.0 + 0.1 * np.sin(progress)
        frame = enhancer.enhance(brightness_factor)
        
        # Convert back to RGB for GIF (GIF doesn't support alpha)
        frame_rgb = Image.new("RGB", frame.size, (0, 0, 0))
        frame_rgb.paste(frame, mask=frame.split()[3] if frame.mode == "RGBA" else None)
        
        frames.append(frame_rgb)
    
    # Save as animated GIF
    frames[0].save(
        output_path,
        save_all=True,
        append_images=frames[1:],
        duration=duration,
        loop=0,
        optimize=True
    )
    
    print(f"Animated GIF created successfully: {output_path}")
    print(f"Frames: {num_frames}, Duration per frame: {duration}ms")

if __name__ == "__main__":
    input_image = "public/home/home-statistics-globe.png"
    output_gif = "public/home/home-statistics-globe-animated.gif"
    
    if not os.path.exists(input_image):
        print(f"Error: Input image not found at {input_image}")
        exit(1)
    
    create_animated_globe_gif(input_image, output_gif, num_frames=40, duration=80)
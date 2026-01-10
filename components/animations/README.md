# Scroll Animation Components

This project includes a reusable scroll animation system that works seamlessly with Lenis smooth scroll.

## Available Animation Types

- `fade-in` - Simple fade in effect
- `fade-up` - Fade in while moving up
- `fade-down` - Fade in while moving down
- `fade-left` - Fade in while moving from right
- `fade-right` - Fade in while moving from left
- `scale` - Scale from 0.8 to 1 with fade
- `slide-up` - Slide up from below (larger movement)
- `slide-down` - Slide down from above
- `slide-left` - Slide from right (larger movement)
- `slide-right` - Slide from left (larger movement)

## Usage

### Basic Usage

```tsx
import { AnimateOnScroll } from "@/components/animations"

<AnimateOnScroll animation="fade-up">
  <div>Your content here</div>
</AnimateOnScroll>
```

### With Custom Options

```tsx
<AnimateOnScroll
  animation="fade-right"
  delay={0.2}
  duration={0.8}
  threshold={0.2}
  rootMargin="50px"
  triggerOnce={true}
>
  <Box>Your content</Box>
</AnimateOnScroll>
```

### Staggered Animations

Create a staggered effect by using different delays:

```tsx
<AnimateOnScroll animation="fade-up" delay={0.1}>
  <Box>Item 1</Box>
</AnimateOnScroll>

<AnimateOnScroll animation="fade-up" delay={0.2}>
  <Box>Item 2</Box>
</AnimateOnScroll>

<AnimateOnScroll animation="fade-up" delay={0.3}>
  <Box>Item 3</Box>
</AnimateOnScroll>
```

### Using Custom HTML Elements

```tsx
<AnimateOnScroll animation="fade-in" as="section">
  <h2>Section Title</h2>
</AnimateOnScroll>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `animation` | `AnimationType` | `"fade-in"` | Type of animation to apply |
| `delay` | `number` | `0` | Delay before animation starts (in seconds) |
| `duration` | `number` | `0.6` | Animation duration (in seconds) |
| `threshold` | `number` | `0.1` | Intersection observer threshold (0-1) |
| `rootMargin` | `string` | `"0px"` | Intersection observer root margin |
| `triggerOnce` | `boolean` | `true` | Whether to animate only once |
| `className` | `string` | `""` | Additional CSS classes |
| `as` | `keyof JSX.IntrinsicElements` | `"div"` | HTML element to render |

## Using the Hook Directly

You can also use the `useScrollAnimation` hook directly for more control:

```tsx
import { useScrollAnimation } from "@/components/animations"

function MyComponent() {
  const { ref, isVisible } = useScrollAnimation("fade-up", {
    threshold: 0.3,
    delay: 0.2,
  })

  return (
    <div ref={ref} className={isVisible ? "visible" : "hidden"}>
      Content
    </div>
  )
}
```

## Examples in the Project

Check `app/page.tsx` for examples of animations applied to:
- Statistics section items (fade-up with staggered delays)
- Section headings (fade-up)
- Product showcase sections

import { Box, Button, Container, Typography } from '@mui/material'
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Testimonial images
import clientAvatar1 from "@/public/home/testimonial-avatar-01.webp"
import clientAvatar2 from "@/public/home/testimonial-avatar-02.webp"
import testimonialLogo from "@/public/home/testimonial-logo.svg"
import Image from 'next/image';
import Icon from '@/components/ui/icon';

export default function Testimonials() {
  return (
      <Box component="section" className="testimonialsWrapper secPadd pt-0">
        <Container>
          <Box className="sectionHeading" sx={{ textAlign: "center" }}>
            <Typography variant="h2" component="h2">
              What our customers are saying about us:
            </Typography>
            <Typography variant="body1" component="p">
              Begin planning your child’s career at the right time with
              internationally recognised career psychologists
            </Typography>
          </Box>
          <Box className="testimonialsSliderOuter" sx={{ mt: 4 }}>
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              navigation
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
              }}
              className="testimonials-swiper"
            >
              {[
                {
                  id: 1,
                  avatar: clientAvatar1,
                  name: "Priti Varma Sarin",
                  role: "Student",
                  text: 'We have had perhaps the best experience of getting our children counselled for their career with the psychologist at Tera Parichay. She was not only incredibly knowledgeable and helpful but also ethical. While we had tried services of other "career counsellors", we found that for them it was just another business, they weren\'t qualified for it, they had not studied for the field.',
                  link: "/",
                  colorScheme: "secondary",
                },
                {
                  id: 2,
                  avatar: clientAvatar2,
                  name: "Kavya Sethi",
                  role: "Student",
                  text: "My experience with counsellors at Tera Parichay, has been absolutely phenomenal. During the final years of my schooling, life had a lot of tough decision thrown my way, with respect to making big career choices. For a 16-year-old student, making these decisions, while having the pressure of excelling in my board examination was extremely stressful and overwhelming. ​However, through adequate guidance from the counsellors at Tera Parichay, this journey did not seem as tough or as overwhelming.",
                  link: "/",
                  colorScheme: "primary",
                },
              ].map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <Box
                    className={`testimonialsSliderCard testimonialsSliderCard--${testimonial.colorScheme}`}
                    data-color-scheme={testimonial.colorScheme}
                  >
                    <Box
                      className="cardHeader"
                      sx={{ display: "flex", alignItems: "end", gap: 2 }}
                    >
                      <Box className="clientAvatar">
                        <Image src={testimonial.avatar} alt="client-avatar" />
                      </Box>
                      <Box className="rating">
                        <Icon name="star" />
                        <Icon name="star" />
                        <Icon name="star" />
                        <Icon name="star" />
                        <Icon name="star" />
                      </Box>
                    </Box>
                    <Box className="cardContent">
                      <Typography variant="body1" component="p">
                        {testimonial.text}
                      </Typography>
                      <Button
                        variant="text"
                        href={testimonial.link}
                      >
                        Read More
                      </Button>
                    </Box>
                    <Box
                      className="cardFooter"
                      sx={{ display: "flex", gap: 2 }}
                    >
                      <Box className="clientName">
                        <Typography variant="h3" component="h3">
                          {testimonial.name}
                        </Typography>
                        <Typography variant="body1" component="p">
                          {testimonial.role}
                        </Typography>
                      </Box>
                      <Box className="testimnonialLogo">
                        <Image src={testimonialLogo} alt="testimonial-logo" />
                      </Box>
                    </Box>
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Container>
      </Box>
  )
}

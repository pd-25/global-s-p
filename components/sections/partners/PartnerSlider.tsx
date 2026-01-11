import { Box, Container, Typography } from "@mui/material";
import ourClientsLogo1 from "@/public/home/dummy-logo-01.svg"
import ourClientsLogo2 from "@/public/home/dummy-logo-02.svg"
import ourClientsLogo3 from "@/public/home/dummy-logo-03.svg"
import ourClientsLogo4 from "@/public/home/dummy-logo-04.svg"
import Image from "next/image";
export default function PartnerSlider() {
  return (
          <Box component="section" className="ourClientsWrapper secPadd">
        <Container>
          <Box className="sectionHeading" sx={{ textAlign: "center" }}>
            <Typography variant="h2" component="h2">
              Our Valuable Partners
            </Typography>
            <Typography variant="body2" component="p">
              Supported By
            </Typography>
            {/* Left to Right Marquee */}
            <Box
              sx={{
                mt: 4,
                mb: 2,
                overflow: "hidden",
                position: "relative",
                "&:hover .marquee-track": {
                  animationPlayState: "paused",
                },
              }}
              className="marquee-container"
            >
              <Box className="marquee-track marquee-track--ltr">
                {[
                  ourClientsLogo1,
                  ourClientsLogo2,
                  ourClientsLogo3,
                  ourClientsLogo4,
                  ourClientsLogo1,
                  ourClientsLogo2,
                  ourClientsLogo3,
                  ourClientsLogo4,
                ].map((logo, index) => (
                  <Box
                    key={`ltr-${index}`}
                    className="ourClientsLogo"
                    sx={{
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "0 20px",
                      opacity: 0.7,
                      height: "70px",
                      transition: "opacity 0.3s ease",
                      "&:hover": {
                        opacity: 1,
                      },
                    }}
                  >
                    <Image
                      src={logo}
                      alt="our-clients-logo"
                      width={150}
                      height={80}
                    />
                  </Box>
                ))}
                {/* Duplicate for seamless loop */}
                {[
                  ourClientsLogo1,
                  ourClientsLogo2,
                  ourClientsLogo3,
                  ourClientsLogo4,
                  ourClientsLogo1,
                  ourClientsLogo2,
                  ourClientsLogo3,
                  ourClientsLogo4,
                ].map((logo, index) => (
                  <Box
                    key={`ltr-duplicate-${index}`}
                    className="ourClientsLogo"
                    sx={{
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "0 20px",
                      opacity: 0.7,
                      transition: "opacity 0.3s ease",
                      "&:hover": {
                        opacity: 1,
                      },
                    }}
                  >
                    <Image
                      src={logo}
                      alt="our-clients-logo"
                      width={150}
                      height={80}
                    />
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Right to Left Marquee */}
            <Box
              sx={{
                mt: 2,
                overflow: "hidden",
                position: "relative",
                "&:hover .marquee-track": {
                  animationPlayState: "paused",
                },
              }}
              className="marquee-container"
            >
              <Box className="marquee-track marquee-track--rtl">
                {[
                  ourClientsLogo1,
                  ourClientsLogo2,
                  ourClientsLogo3,
                  ourClientsLogo4,
                  ourClientsLogo1,
                  ourClientsLogo2,
                  ourClientsLogo3,
                  ourClientsLogo4,
                ].map((logo, index) => (
                  <Box
                    key={`rtl-${index}`}
                    className="ourClientsLogo"
                    sx={{
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "0 20px",
                      opacity: 0.7,
                      transition: "opacity 0.3s ease",
                      "&:hover": {
                        opacity: 1,
                      },
                    }}
                  >
                    <Image
                      src={logo}
                      alt="our-clients-logo"
                      width={150}
                      height={80}
                    />
                  </Box>
                ))}
                {/* Duplicate for seamless loop */}
                {[
                  ourClientsLogo1,
                  ourClientsLogo2,
                  ourClientsLogo3,
                  ourClientsLogo4,
                  ourClientsLogo1,
                  ourClientsLogo2,
                  ourClientsLogo3,
                  ourClientsLogo4,
                ].map((logo, index) => (
                  <Box
                    key={`rtl-duplicate-${index}`}
                    className="ourClientsLogo"
                    sx={{
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "0 20px",
                      opacity: 0.7,
                      transition: "opacity 0.3s ease",
                      "&:hover": {
                        opacity: 1,
                      },
                    }}
                  >
                    <Image
                      src={logo}
                      alt="our-clients-logo"
                      width={150}
                      height={80}
                    />
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
  )
}

import { Box, Button, Container, Stack, TextField, Typography } from "@mui/material";
import Image from "next/image";
// Hero section images
import HeroBg from "@/public/home/home-hero-pic.webp"
import HeroPerson from "@/public/home/home-hero-person.webp"
import SearchIcon from "@/public/search.png"
import Link from "next/link";

export default function Banner() {
  return (
    <Box
        component="section"
        className="heroWrapper"
        sx={{ position: "relative" }}
      >
        <Box className="heroBg">
          <Image src={HeroBg} alt="hero-bg" width={1000} height={1080} />
        </Box>
        <Container sx={{ position: "relative", zIndex: 1 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 3,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{ flex: 1, width: { xs: "100%", md: "50%" } }}
              className="heroTextWrapper"
            >
              <Stack spacing={3}>
                <Box className="heroText">
                  <Typography
                    variant="h1"
                    component="h1"
                    sx={{
                      mb: 2,
                      color: "white",
                    }}
                  >
                    The leading B2B marketplace for European trade
                  </Typography>
                  <Typography
                    variant="body1"
                    component="p"
                    sx={{
                      fontSize: { xs: "14px", md: "24px" },
                      lineHeight: 1.5,
                      color: "white",
                    }}
                  >
                    Post your request to verified suppliers.
                  </Typography>
                </Box>
                <Stack
                  direction="row"
                  spacing={2}
                  className="searchForm"
                  sx={{ alignItems: "flex-end" }}
                >
                  <TextField
                    id="standard-basic"
                    placeholder="Search Items e,g, CNC Milling,Packaging , Gas"
                    variant="outlined"
                    fullWidth
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        color: "white",
                        padding: "0 70px 0 15px",
                        fontSize: "15px",
                        height: "61px",
                        "& fieldset": {
                          borderColor: "white",
                          borderRadius: "18px",
                          transition: "all 0.3s ease",
                        },
                        "&:hover fieldset": {
                          borderColor: "white",
                        },
                        "& .MuiInputBase-input::placeholder": {
                          color: "white",
                          opacity: 0.7,
                          fontSize: "15px",
                        },
                      },
                      "& .MuiOutlinedInput-root.Mui-focused": {
                        "& fieldset": {
                          borderColor: "#7FAF0D",
                        },
                      },
                    }}
                  />
                  <Button variant="contained" type="submit">
                    <Image
                      src={SearchIcon}
                      alt="search-icon"
                      width={32}
                      height={32}
                    />
                  </Button>
                </Stack>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                  className="btnHolder"
                >
                  <Button
                    variant="contained"
                    href="/"
                    sx={{ fontSize: "20px" }}
                  >
                    Get Quote
                  </Button>
                  <Button
                    variant="outlined"
                    href="/"
                    sx={{ fontSize: "20px" }}
                  >
                    Learn More
                  </Button>
                </Stack>
              </Stack>
            </Box>
            <Box
              sx={{ flex: 1, width: { xs: "100%", md: "50%" } }}
              className="heroPersonImage"
            >
              <Image src={HeroPerson} alt="hero-person" />
            </Box>
          </Box>
        </Container>
      </Box>
  )
}

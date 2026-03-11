'use client'
import { Box, Container, Typography } from "@mui/material"
import Image from "next/image"
import type { ValuablePartner } from "@/interfaces/interface"

// ─── Logo Item ────────────────────────────────────────────────────────────────

const logoItemSx = {
  flexShrink: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0 20px",
  opacity: 0.7,
  height: "70px",
  transition: "opacity 0.3s ease",
  "&:hover": { opacity: 1 },
}

function LogoItem({
  partner,
  keyPrefix,
}: {
  partner: ValuablePartner
  keyPrefix: string
}) {
  return (
    <Box key={`${keyPrefix}-${partner.id}`} className="ourClientsLogo" sx={logoItemSx}>
      <Image
        src={partner.logo || "/home/dummy-logo-01.svg"}
        alt={partner.name}
        width={150}
        height={80}
        unoptimized
        onError={(e) => {
          e.currentTarget.onerror = null
          e.currentTarget.src = "/home/dummy-logo-01.svg"
        }}
      />
    </Box>
  )
}

// ─── Marquee Row ──────────────────────────────────────────────────────────────

function MarqueeRow({
  partners,
  direction,
  mt = 2,
}: {
  partners: ValuablePartner[]
  direction: "ltr" | "rtl"
  mt?: number
}) {
  return (
    <Box
      sx={{
        mt,
        mb: direction === "ltr" ? 2 : 0,
        overflow: "hidden",
        position: "relative",
        "&:hover .marquee-track": { animationPlayState: "paused" },
      }}
      className="marquee-container"
    >
      <Box className={`marquee-track marquee-track--${direction}`}>
        {/* Original set */}
        {partners.map((partner) => (
          <LogoItem
            key={`${direction}-${partner.id}`}
            partner={partner}
            keyPrefix={direction}
          />
        ))}
        {/* Duplicate for seamless loop */}
        {partners.map((partner) => (
          <LogoItem
            key={`${direction}-dup-${partner.id}`}
            partner={partner}
            keyPrefix={`${direction}-dup`}
          />
        ))}
      </Box>
    </Box>
  )
}

// ─── Main Component ────────────────────────────────────────────────────────────

interface PartnerSliderProps {
  partners: ValuablePartner[]
}

export default function PartnerSlider({ partners }: PartnerSliderProps) {
  // Split partners into two halves so each marquee row shows a different set
  const half = Math.ceil(partners.length / 2)
  const firstHalf = partners.slice(0, half)
  const secondHalf = partners.slice(half)

  // If API returned nothing, fall back to showing all in both rows
  const ltrPartners = firstHalf.length > 0 ? firstHalf : partners
  const rtlPartners = secondHalf.length > 0 ? secondHalf : partners

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

          {partners.length > 0 ? (
            <>
              {/* Left to Right Marquee */}
              <MarqueeRow partners={ltrPartners} direction="ltr" mt={4} />
              {/* Right to Left Marquee */}
              <MarqueeRow partners={rtlPartners} direction="rtl" mt={2} />
            </>
          ) : (
            <Box sx={{ py: 6 }}>
              <Typography variant="body1" color="text.secondary">
                No partners available.
              </Typography>
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  )
}

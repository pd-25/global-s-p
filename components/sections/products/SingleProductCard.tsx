import React from "react"
import Image from "next/image"
import {
    Box,
    Typography,
    Stack,
    Button,
} from "@mui/material"
import verifiedIcon from "@/public/product/verified-badge.svg"
import placeholderFlag from "@/public/flag/usa.svg"
import { routes } from "@/config/routes"
import Link from "next/link"

interface SingleProductCardProps {
    imageUrl: string
    supplierFlagUrl: string
    supplierName: string
    title: string
    slug: string
    verified?: boolean
}

export default function SingleProductCard({
    imageUrl,
    supplierFlagUrl,
    supplierName,
    title,
    slug,
    verified = true,
}: SingleProductCardProps) {
    // console.log('supplierFlagUrl ---- ', supplierFlagUrl);
    
    const hasImage = Boolean(imageUrl)
    const hasFlag = Boolean(supplierFlagUrl)

    // console.log('hasFlag ---- ', hasFlag);


    return (
        <Box className="lisitngCard">
            <Box className="lisitngCardImage">
                {hasImage ? (
                    <Link href={routes.productDetails.replace("[slug]", slug)}>
                        <img
                            src={imageUrl}
                            alt={title}
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                    </Link>
                ) : (
                    <Box
                        sx={{
                            width: "100%",
                            height: "100%",
                            minHeight: 180,
                            background: "linear-gradient(135deg, #e8edf2 0%, #d0d8e0 100%)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#9aa5b4",
                            fontSize: 13,
                        }}
                    >
                        No Image
                    </Box>
                )}
            </Box>

            <Stack
                direction="row"
                spacing={1}
                sx={{ padding: "15px" }}
                alignItems="center"
                justifyContent="space-between"
            >
                <Box
                    className="locationInfo"
                    sx={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                    {hasFlag ? (
                        <img
                            src={supplierFlagUrl}
                            alt="country-flag"
                            width={27}
                            height={27}
                            style={{ objectFit: "cover", borderRadius: "2px" }}
                        />
                    ) : (
                        <Image
                            src={"placeholderFlag"}
                            alt="flag"
                            width={27}
                            height={27}
                        />
                    )}
                    {supplierName && (
                        <Typography
                            variant="body1"
                            component="p"
                            sx={{
                                fontSize: "11px",
                                fontWeight: "400",
                                color: "#000",
                                textTransform: "uppercase",
                            }}
                        >
                            {supplierName}
                        </Typography>
                    )}
                </Box>
                {verified && (
                    <Box className="verifiedBadge">
                        <Image
                            src={verifiedIcon}
                            alt="verified-icon"
                            width={20}
                            height={20}
                        />
                    </Box>
                )}
            </Stack>

            <Box className="lisitngCardContent">
                <Typography variant="h3" className="lisitngCardTitle">
                    <Link href={routes.productDetails.replace("[slug]", slug)} style={{ color: "#fff", textDecoration: "none" }}>
                        {title}
                    </Link>

                </Typography>
                <Box className="actionBtn" sx={{ mt: 2 }}>
                    <Button variant="contained" href={routes.productContactPage.replace("[slug]", slug)}>
                        Submit Inquiry
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}
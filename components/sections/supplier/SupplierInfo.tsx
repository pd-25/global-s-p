import Icon from "@/components/ui/icon";
import { Box, Button, IconButton, Popover, Stack, Typography } from "@mui/material";
import Image from "next/image";
import badReviewImage from "@/public/product/bad-review.svg"
import okayReviewImage from "@/public/product/okay-review.svg"
import goodReviewImage from "@/public/product/good-review.svg"
import verifiedIcon from "@/public/product/verified-badge.svg"
import { useState } from "react";
import { routes } from "@/config/routes";
import Link from "next/link";
import { SupplierInfoProps } from "@/interfaces/interface";


export default function SupplierInfo({ supplier }: SupplierInfoProps) {
    console.log('supplier - -', supplier);
    
    const [infoAnchorEl, setInfoAnchorEl] = useState<HTMLElement | null>(null)
    const [showPhone, setShowPhone] = useState(false)
    const [showVat, setShowVat] = useState(false)

    const infoOpen = Boolean(infoAnchorEl)
    const infoId = infoOpen ? "supplier-info-popover" : undefined

    const handleInfoClick = (event: React.MouseEvent<HTMLElement>) => {
        setInfoAnchorEl(event.currentTarget)
    }
    const handleInfoClose = () => {
        setInfoAnchorEl(null)
    }

    return (
        <Box className="widget supplierCardWidget">
            <Box className="supplierCardWidgetContent">
                <Box className="supplierHeader">
                    {/* Supplier Logo */}
                    <Box className="supplierAvatar" mb={1}>
                        <Image
                            src={supplier.logo}
                            alt={`${supplier.name} logo`}
                            width={80}
                            height={80}
                            style={{ borderRadius: "8px", objectFit: "cover" }}
                        />
                    </Box>

                    {/* Supplier Name + Verified Badge */}
                    <Stack direction="row" spacing={1} alignItems="center" justifyContent="space-between">
                        <Typography
                            variant="h3"
                            className="supplierName"
                            sx={{ fontSize: "16px !important", fontWeight: 700, textTransform: "uppercase", color: "#000" }}
                        >
                            {supplier.name}
                        </Typography>
                        {supplier.is_verified && (
                            <Image src={verifiedIcon} alt="verified-icon" width={22} height={22} />
                        )}
                    </Stack>

                    {/* Address */}
                    <Typography variant="body2" sx={{ color: "#000000", mt: 0.5 }}>
                        {supplier.address}, {supplier.zipcode}
                    </Typography>

                    {/* Country Flag + Name */}
                    <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 2 }}>
                        <Image
                            src={supplier?.country?.country_flag}
                            alt={supplier?.country?.name}
                            width={27}
                            height={18}
                            style={{ objectFit: "cover", borderRadius: "2px" }}
                        />
                        <Typography variant="body2" sx={{ color: "#000000", fontSize: "14px !important", fontWeight: 400 }}>
                            {supplier?.country?.name}
                        </Typography>
                    </Stack>

                    <Box sx={{ height: "1px", background: "#000", width: "100%", mx: "auto", mt: 2 }} />

                    {/* <Button variant="contained" sx={{ backgroundColor: "#7FAF0D", mt: 2, textTransform: "none", width: "100%", }}> */}
                    <Link href={routes.supplierContactPage.replace("[slug]", supplier.slug)}>
                        <Button variant="contained" sx={{ backgroundColor: "#7FAF0D", mt: 2, textTransform: "none", width: "100%", }}>
                            Contact Supplier
                        </Button>
                    </Link>
                    {/* </Button> */}
                    {/* <Button variant="outlined" sx={{ mt: 3, textTransform: "none", width: "100%", }}>
                        Notify Me
                    </Button> */}
                    <Box sx={{ height: "1px", background: "#000", width: "100%", mx: "auto", mt: 3 }} />
                </Box>

                {/* Links Section */}
                <Box className="supplierLinks" sx={{ pt: 3 }}>
                    <Stack spacing={2}>
                        {/* Visit Website */}
                        <Button
                            variant="text"
                            startIcon={<Icon name="link" width={18} height={18} />}
                            sx={{ color: "#7FAF0D", textTransform: "none", justifyContent: "flex-start" }}
                            href={supplier.company_site}
                            target="_blank"
                            rel="noopener noreferrer"
                            component="a"
                        >
                            {supplier.company_site}
                        </Button>

                        {/* Phone Number */}
                        <Button
                            variant="text"
                            startIcon={<Icon name="phoneGreen" width={18} height={18} />}
                            sx={{ color: "#7FAF0D", textTransform: "none", justifyContent: "flex-start" }}
                            onClick={() => setShowPhone((prev) => !prev)}
                        >
                            {showPhone ? supplier.company_phone_number : "Show phone number"}
                        </Button>

                        {/* VAT Number */}
                        <Button
                            variant="text"
                            startIcon={<Icon name="vat" width={18} height={18} />}
                            sx={{ color: "#7FAF0D", textTransform: "none", justifyContent: "flex-start" }}
                            onClick={() => setShowVat((prev) => !prev)}
                        >
                            {showVat ? supplier.vat_number : "Show VAT number"}
                        </Button>
                    </Stack>
                </Box>

                <Box sx={{ height: "1px", background: "#000", width: "100%", mx: "auto", mt: 3 }} />

                {/* Meta Info */}
                <Box className="supplierMeta" sx={{ pt: 3 }}>
                    <Stack spacing={1}>
                        <Stack direction="row" spacing={1} alignItems="center">
                            <Icon name="delivery" width={24} height={24} />
                            <Typography variant="body2">
                                Delivery: <strong style={{ fontWeight: 600 }}>{supplier.delivery_area}</strong>
                            </Typography>
                        </Stack>
                        <Stack direction="row" spacing={1} alignItems="center">
                            <Icon name="foundedYear" width={24} height={24} />
                            <Typography variant="body2">
                                Founded: <strong style={{ fontWeight: 600 }}>{supplier.founded_year}</strong>
                            </Typography>
                        </Stack>
                        <Stack direction="row" spacing={1} alignItems="center">
                            <Icon name="employees" width={24} height={24} />
                            <Typography variant="body2">
                                Employees: <strong style={{ fontWeight: 600 }}>{supplier.employee_strength}</strong>
                            </Typography>
                        </Stack>
                    </Stack>
                </Box>

                <Box sx={{ height: "1px", background: "#000", width: "100%", mx: "auto", mt: 3 }} />

                {/* Supplier Type */}
                <Box className="supplierType" sx={{ pt: 3 }}>
                    <Stack direction="row" spacing={1} mb={1.5} alignItems="center" justifyContent="space-between">
                        <Typography variant="h4" sx={{ fontSize: "16px", fontWeight: 700 }}>Supplier type</Typography>
                        <IconButton aria-label="info" onClick={handleInfoClick}>
                            <Icon name="info" width={24} height={24} />
                        </IconButton>
                        <Popover
                            id={infoId}
                            open={infoOpen}
                            anchorEl={infoAnchorEl}
                            onClose={handleInfoClose}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                        >
                            <Box sx={{ p: 2, maxWidth: 300 }}>
                                <Typography variant="h4" sx={{ color: "#000000", fontWeight: 700, marginBottom: "10px" }}>
                                    Supplier type
                                </Typography>
                                <Typography variant="body2" sx={{ color: "#000000" }}>
                                    These are the general business activities for this supplier.
                                </Typography>
                            </Box>
                        </Popover>
                    </Stack>

                    <Stack direction="row" spacing={1} alignItems="center">
                        <Icon name="supplierType" width={24} height={24} />
                        <Typography variant="body2">{supplier?.supplier_type?.name}</Typography>
                    </Stack>
                </Box>

                <Box sx={{ height: "1px", background: "#000", width: "100%", mx: "auto", mt: 3 }} />

                {/* Rating */}
                <Box className="supplierRating" sx={{ pt: 2, textAlign: "center" }}>
                    <Typography variant="body1" sx={{ mb: 2, fontWeight: 700, color: "#587a09", fontSize: "14px !important" }}>
                        How would you rate the company and product information?
                    </Typography>
                    <Stack direction="row" spacing={3} justifyContent="center" alignItems="center" className="supplierRatingButtons">
                        <IconButton aria-label="bad-review" sx={{ color: "#E41648" }}>
                            <Image src={badReviewImage} alt="bad-review" width={31} height={31} />
                            Bad
                        </IconButton>
                        <IconButton aria-label="okay-review" sx={{ color: "#0060DF" }}>
                            <Image src={okayReviewImage} alt="okay-review" width={31} height={31} />
                            Okay
                        </IconButton>
                        <IconButton aria-label="good-review" sx={{ color: "#71A300" }}>
                            <Image src={goodReviewImage} alt="good-review" width={31} height={31} />
                            Good
                        </IconButton>
                    </Stack>
                </Box>
            </Box>
        </Box>
    )
}

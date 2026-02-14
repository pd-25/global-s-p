import Quotes from "@/components/sections/admin/quotes/Quotes";
import { Box, Button, Container, Typography, Icon } from "@mui/material";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Quotes | Global Source Export",
    description: "Manage customer quote requests and inquiries.",
};

export default function QuotePage() {
    return (
        <Container maxWidth="xl" sx={{ py: 4 }}>
            <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box>
                    <Typography variant="h4" sx={{ fontWeight: 700, color: 'text.primary' }}>
                        Quotes
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Manage customer quote requests and inquiries.
                    </Typography>
                </Box>
                <Button variant="contained" color="secondary" startIcon={<Icon>download</Icon>}>
                    Export Data
                </Button>
            </Box>
            <Quotes />
        </Container>
    )
}

import React from "react";
import { Box,Button, Container } from "@mui/material";
import { HeaderComponents } from "../../components";
import { ContactsComponents } from "../../components";

export const LandingPage: React.FC<{}> = () => {
    return (
        <Box maxWidth="100%">
            <HeaderComponents title="BARBER SHOP URBANO" description="barber shop urbano" element={<Button variant="contained" fullWidth>URBANO</Button>} />
            <ContactsComponents />
        </Box>
    )
}
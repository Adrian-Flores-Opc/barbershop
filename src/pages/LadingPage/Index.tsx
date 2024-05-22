import React from "react";
import { Box,Button, Container } from "@mui/material";
import { HeaderComponents } from "../../components";
import { ContactsComponents } from "../../components";
import { RegisterComponents } from "../../components"; 

export const LandingPage: React.FC<{}> = () => {
    return (
        <Box maxWidth="100%">
            <HeaderComponents title="BARBERIA LINAJE URBANO" description="Barberia Linaje Urbano" element={<Button variant="contained" fullWidth>URBANO</Button>} />
            <RegisterComponents />
            <ContactsComponents />
        </Box>
    )
}
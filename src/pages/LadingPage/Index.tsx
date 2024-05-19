import React from "react";
<<<<<<< HEAD
import { Box,Button, Container } from "@mui/material";
import { HeaderComponents } from "../../components";
import { ContactsComponents } from "../../components";

export const LandingPage: React.FC<{}> = () => {
    return (
        <Box maxWidth="100%">
            <HeaderComponents title="BARBER SHOP URBANO" description="barber shop urbano" element={<Button variant="contained" fullWidth>URBANO</Button>} />
            <ContactsComponents />
        </Box>
=======
import { Button, Container } from "@mui/material";
import { useNotification } from "../../context/notification.context";
import { HeaderComponents } from "../../components";

export const LandingPage: React.FC<{}> = () => {

    const { getError, getSuccess } = useNotification()
    const handleClick = () => {
        getSuccess("HOLA YRVIN")
    }

    return (
        <Container sx={{ mt: 9 }} maxWidth="xl">
            <HeaderComponents title="BARBER SHOP URBANO" description="barber shop urbano" element={<Button variant="contained" fullWidth>URBANO</Button>} />
        </Container>
>>>>>>> 3994dd20317eb4e5a2328fba3659ce2813b6b149
    )
}
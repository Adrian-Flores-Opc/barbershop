import React from "react";
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
    )
}
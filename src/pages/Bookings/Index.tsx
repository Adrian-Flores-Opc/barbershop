import React from "react";
import { Button, Container } from "@mui/material";

export const BookingsPage: React.FC<{}> = () => {
    return (
        <Container sx={{ mt: 9 }} maxWidth="xl">
            <Button fullWidth variant="contained">
                Reservas Page
            </Button>
        </Container>
    )
}
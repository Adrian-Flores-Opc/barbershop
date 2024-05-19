import { AppBar, Box, Button, Container, Grid, Stack, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import ImagenLogo from "../assets/logo_sin_fondo_blanco.png"

export const NavBar: React.FC<{}> = () => {
    const navigate = useNavigate();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar>
                    <Container maxWidth="xl">
                        <Grid container direction="row" justifyContent="space-between" alignItems="center">
                            <Grid item>
                                <img src={ImagenLogo} alt="logo Barber shop" width={200}/>
                            </Grid>
                            <Grid item>
                                <Stack direction="row" spacing={2}>
                                    <Button onClick={() => navigate("Bookings")} variant="outlined">Reservas</Button>
                                    <Button onClick={() => navigate("Login")} variant="outlined">Login</Button>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
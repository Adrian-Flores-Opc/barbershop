import React from "react";
import { Button, Container, Grid, Paper, Box, Typography, TextField, Stack } from "@mui/material";
import { useNotification } from "../../context/notification.context";
import { LoginValidate } from "../../utils/validateForm";
import FondoMainPrincipal  from "../../assets/fondo_main_demo.jpeg"

type LoginType ={
    username: string,
    password: string    
}

export const LoginPage: React.FC<{}> = () => {

    const { getError, getSuccess } = useNotification()

    const [loginData, setLoginData] = React.useState<LoginType>({
        username: "",
        password: ""
    });


    const dataLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginData({...loginData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        LoginValidate.validate(loginData).then(() => {
            getSuccess('CHECK 🤙')
        }).catch((erorr: any) => {
            getError(erorr.message)
        })
    }

    return (
        <Container maxWidth="xl">
            <Grid container direction="column" alignItems="center" justifyContent="center" sx={{ minHeight: "100vh" }}>
                <Grid item>
                    <Paper sx={{ padding: "1.2em", borderRadius: "0.5em" }}>
                        <Typography variant="h4" sx={{ mt: 1, mb: 1 }}>Iniciar Sesiòn</Typography>
                        <Box component="form" onSubmit={handleSubmit}>
                            <TextField margin="normal" name="username" type="text" fullWidth label="Usuario" sx={{ mt:2, mb: 1.5 }} onChange={dataLogin} />
                            <TextField margin="normal" name="password" type="password" fullWidth label="Contraseña" sx={{ mt:1.5, mb: 1.5 }} onChange={dataLogin} />
                            <Button fullWidth type="submit" variant="contained" sx={{ mt:1.5, mb: 3 }}>Iniciar Sesiòn</Button>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}
import React from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import FondoDinamico from "../../assets/fondo_dinamico_estrella.jpeg";

type RegisterProps = {
    elementOne?: React.ReactNode | null;
    elementTwo?: React.ReactNode | null;
}

export const RegisterComponents: React.FC<RegisterProps> = ({ elementOne, elementTwo }) => {
    return (
        <div>
            <Box sx = {{ width: "100%", height: "800px", backgroundImage: `url(${FondoDinamico})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ height:"100%" }}>
                    <Grid item xs={6}>
                        <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ height:"100%" }}>
                            {elementOne !== undefined && (<Grid item sx={{ mt:4 }}>{elementOne}</Grid>)}
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ height:"100%" }}>
                            {elementTwo !== undefined && (<Grid item sx={{ mt:4 }}>{elementTwo}</Grid>)}
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}
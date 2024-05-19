import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
<<<<<<< HEAD
import FondoMainPrincipal  from "../../assets/fondo_1_pre_fondo.jpg"
=======
>>>>>>> 3994dd20317eb4e5a2328fba3659ce2813b6b149

type HeaderProps = {
    title: string;
    description: string;
    element?: React.ReactNode | null;
}

export const HeaderComponents: React.FC<HeaderProps> = ({title, description, element}) =>{
    return(
        <div>
<<<<<<< HEAD
            <Box sx = {{ width: "100%", height: "450px", backgroundImage: `url(${FondoMainPrincipal})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ height:"100%" }}>
                    <Grid item xs={12}>
                        <Grid container direction="column" justifyContent="center" alignItems="center" sx={{ height:"100%" }}>
                            <Grid item><Typography variant="h2" color="black">{title}</Typography></Grid>
                            <Grid item><Typography color="black">{description}</Typography></Grid>
=======
            <Box sx = {{ width: "100%", height: "350px" }}>
                <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ height:"100%" }}>
                    <Grid item xs={5}>
                        <Grid container direction="column" justifyContent="center" alignItems="center" sx={{ height:"100%" }}>
                            <Grid item><Typography variant="h2">{title}</Typography></Grid>
                            <Grid item><Typography>{description}</Typography></Grid>
>>>>>>> 3994dd20317eb4e5a2328fba3659ce2813b6b149
                            {element !== undefined && (<Grid item sx={{ mt: 4 }}>{element}</Grid>)}
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <Divider />
        </div>
    )
}
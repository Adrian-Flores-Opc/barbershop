import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import FondoMainPrincipal  from "../../assets/fondo_main_demo.jpeg"

type HeaderProps = {
    title: string;
    description: string;
    element?: React.ReactNode | null;
}

export const HeaderComponents: React.FC<HeaderProps> = ({title, description, element}) =>{
    return(
        <div>
            <Box sx = {{ width: "100%", height: "800px", backgroundImage: `url(${FondoMainPrincipal})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ height:"100%" }}>
                    <Grid item xs={12}>
                        <Grid container direction="column" justifyContent="center" alignItems="center" sx={{ height:"100%" }}>
                            <Grid item><Typography variant="h2" color="black">{title}</Typography></Grid>
                            <Grid item><Typography color="black">{description}</Typography></Grid>
                            {element !== undefined && (<Grid item sx={{ mt: 4 }}>{element}</Grid>)}
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <Divider />
        </div>
    )
}
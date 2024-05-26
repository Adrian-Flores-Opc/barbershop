import React from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import FondoMainPrincipal  from "../../assets/fondo_main_demo.jpeg"

type additionalProps = {
    title: string;
    element?: React.ReactNode | null;
}

export const AdditionalComponents: React.FC<additionalProps> = ({title, element}) =>{
    return(
        <div>
            <Box sx = {{ width: "100%", height: "300px", backgroundImage: `url(${FondoMainPrincipal})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ height:"100%" }}>
                    <Grid item xs={12}>
                        <Grid container direction="column" justifyContent="center" alignItems="center" sx={{ height:"100%" }}>
                            <Grid item><Typography variant="h3" color="black">{title}</Typography></Grid>
                            {element !== undefined && (<Grid item sx={{ mt: 4 }} >{element}</Grid>)}
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <Divider />
        </div>
    )
}
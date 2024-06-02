import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import FondoMainPrincipal  from "../../assets/fondo_main_demo.jpeg"
import FondoTwo from "../../assets/FondoTwo.png"
import FondoThree from "../../assets/FondoTree.png";
import Carousel from "react-material-ui-carousel";

type HeaderProps = {
    title: string;
    description: string;
    element?: React.ReactNode | null;
}

export const HeaderComponents: React.FC<HeaderProps> = ({title, description, element}) =>{
    const items = [{
        name: "Fondo One",
        fondo: FondoMainPrincipal
    },
    {
        name: "Fondo Two",
        fondo: FondoTwo
    },
    {
        name: "Fondo Three",
        fondo: FondoThree
    }];

    const [index, setIndex] = React.useState(0);

    const handleChange = (cur: number, prev: number) =>{
        setIndex(cur);
        console.log(cur, prev)
    }

    return(
        <div>
            <Carousel indicators={false}> 
                {items.map((item, i) => (
                    <Box sx = {{ width: "100%", height: "800px", backgroundImage: `url(${item.fondo})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
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
                ))}
            </Carousel>

            {/* <Box sx = {{ width: "100%", height: "800px", backgroundImage: `url(${FondoMainPrincipal})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ height:"100%" }}>
                    <Grid item xs={12}>
                        <Grid container direction="column" justifyContent="center" alignItems="center" sx={{ height:"100%" }}>
                            <Grid item><Typography variant="h2" color="black">{title}</Typography></Grid>
                            <Grid item><Typography color="black">{description}</Typography></Grid>
                            {element !== undefined && (<Grid item sx={{ mt: 4 }}>{element}</Grid>)}
                        </Grid>
                    </Grid>
                </Grid>
            </Box> */}
            {/* <Divider /> */}
        </div>
    )
}
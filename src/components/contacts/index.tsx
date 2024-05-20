import React from "react";
import { Grid, Box,Container, Stack, Typography,List,ListItem,ListItemAvatar,Avatar,ListItemText,  } from "@mui/material";
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
// import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ImagenLogo from "../../assets/logo_sin_fondo_blanco.png";
import { useNavigate } from "react-router-dom";

export const ContactsComponents: React.FC<{}>=({}) =>{
    function ListItemLink(props: any) {
        return <ListItem button component="a" {...props} />;
    }

    const navigate = useNavigate();
    const availableContacts = [{
        id: 1,
        title: "Calle Gregorio Reynolds # 1234",
        icon: <LocationOnIcon />,
        description: "Entre Av. 6 de Agosto y Av. 20 de Octubre Zona Sopocachi",
        link: "https://maps.app.goo.gl/a1ZG9fQGsGkrUWwz8"
    },{
        id: 2,
        title: "2 2154678 / 75806163",
        icon: <PhoneIcon />,
        description: "Llámenos para consultas gratuitas",
        link:""
    },{
        id: 3,
        title: "CORREO",
        icon: <EmailIcon />,
        description: "adriflores987@gmail.com",
        link:"mailto:adriflores987@gmail.com"
    },{
        id: 4,
        title: "WHATSAPP",
        icon: <WhatsAppIcon />,
        description: "(+591) 75806163",
        link:"https://wa.link/umkzie"
    }];
    return(
        <Grid container spacing={2} maxWidth="xl" bgcolor="black" sx={{ marginLeft:"0", maxWidth:"100%", top: "0", bottom:"0" }}>
          <Grid xs={4}>
            <Container maxWidth="xl" sx={{ textAlign:"center" }}>
                <img src={ImagenLogo} alt="logo Barber shop" width={150} />
                <List sx={{ width: '100%' }}>
                    {
                        availableContacts.map((group, index) => {
                            return(
                                <ListItemLink href={group.link} target="_blank">
                                   <ListItemAvatar>
                                    <Avatar>
                                        {group.icon}
                                    </Avatar>
                                   </ListItemAvatar>
                                   <ListItemText primary={group.title} secondary={group.description} />
                                </ListItemLink>
                            );
                        })
                    }
                </List>
            </Container>
          </Grid>
          <Grid xs={4}>
            <Box sx={{ width: "100%", marginTop: "95px"}}>
                <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ height:"100%" }}>
                    <Grid item xs={12}>
                        <Grid container direction="column" justifyContent="center" alignItems="center" sx={{ height:"100%" }}>
                            <Grid item><Typography variant="h6" color="white">HORARIOS DE ATENCION</Typography> </Grid>
                            <Grid item><Typography color="white">Lunes a Viernes</Typography> </Grid>
                            <Grid item><Typography color="white">09:00 - 17:30</Typography> </Grid>
                            <Grid item><Typography color="white">Sábados</Typography> </Grid>
                            <Grid item><Typography color="white">8:00 - 12:30</Typography> </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
          </Grid>
          <Grid xs={4}>
            <Box sx={{ width: "100%", marginTop: "95px"}}>
                <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ height:"100%" }}>
                    <Grid item xs={12}>
                        <Grid container direction="column" justifyContent="center" alignItems="center" sx={{ height:"100%" }}>
                            <Grid item><Typography variant="h6" color="white">BARBER SHOP URBANO</Typography></Grid>
                            <Grid item><Typography color="white">Contactos</Typography> </Grid>
                            <Grid item><Typography color="white">Realizar una reserva</Typography> </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ height:"100%", marginTop: "25px" }}>
                    <Grid item xs={12}>
                        <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ height: "100%"}}>
                            <Avatar sx={{ margin:"5px" }}><FacebookIcon /></Avatar>
                            <Avatar sx={{ margin:"5px" }}><XIcon /></Avatar>
                            <Avatar sx={{ margin:"5px" }}><YouTubeIcon /></Avatar>
                            <Avatar sx={{ margin:"5px" }}><WhatsAppIcon /></Avatar>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
          </Grid>
          <Grid xs={12}>
            <Box sx={{ width: "100%" }}>
                <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ height: "100%" }}>
                    <Grid item xs={12}>
                        <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ height: "100%" }}>
                            <Grid item><Typography color="white" fontWeight="100" fontSize="15px">©2024 Desarrollado por Damian Tegnology</Typography></Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
          </Grid>
        </Grid>
    )
}
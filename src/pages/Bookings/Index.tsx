import React from "react";
import { TextField,Box, Avatar, Button, Container, List, ListItem, ListItemAvatar, ListItemText, Typography, Divider, ListItemButton, Grid, Paper } from "@mui/material";
import { ContactsComponents, RegisterComponents } from "../../components";
import { makeStyles } from '@material-ui/core/styles';

export const BookingsPage: React.FC<{}> = () => {

    const useStyles = makeStyles({
        avatar: {
          backgroundColor: blue[100],
          color: blue[600],
        },
      });

    const availableBarbers = [{
        name: "Adrian Condori Flores",
        description: "BARBER - CENTRO ",
        details: "La mejor atención para nuestros clientes",
        avatar: "/static/images/avatar/1.jpg"
    },{
        name: "Damian Flores Flores",
        description: "BARBER - AVAROA ",
        details: "La mejor atención para nuestros clientes",
        avatar: "/static/images/avatar/2.jpg"
    },{
        name: "Yrvin Perez Perez",
        description: "BARBER - CAMACHO ",
        details: "La mejor atención para nuestros clientes",
        avatar: "/static/images/avatar/3.jpg"
    }];

    return (
        <Box maxWidth="100%">
            {/* <Box maxWidth="100%">
                <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ height:"100%" }}>
                    <Grid item xs={12}>
                        <Grid container direction="column" justifyContent="center" alignItems="center" sx={{ height:"100%" }}>
                            <List sx={{ width: '100%', maxWidth: 550, bgcolor: 'background.paper' }}>
                                {
                                    availableBarbers.map((group, index) => {
                                        return(
                                            <ListItemButton>
                                                <ListItemAvatar>
                                                    <Avatar alt={group.name} src={group.avatar} />
                                                </ListItemAvatar>
                                                <ListItemText
                                                    primary={group.name}
                                                    secondary={
                                                      <React.Fragment>
                                                        <Typography
                                                          sx={{ display: 'inline' }}
                                                          component="span"
                                                          variant="body2"
                                                          color="text.primary"
                                                        >
                                                          {group.description}
                                                        </Typography>
                                                        {group.details}
                                                      </React.Fragment>
                                                    }
                                                />                          
                                            </ListItemButton>
                                        )
                                    })
                                }
                            </List>
                        </Grid>
                    </Grid>
                </Grid>
            </Box> */}
            <RegisterComponents 
                elementOne={
                    <Button variant="contained" fullWidth>URBANO ONE</Button>
                } 
                elementTwo={
                    <Container maxWidth="sm">
                    <Grid container direction="column" alignItems="center" justifyContent="center" sx={{ minHeight: "100vh" }}>
                        <Grid item>
                            <Paper sx={{ padding: "1.2em", borderRadius: "0.5em" }}>
                                <Box component="form">
                                    <TextField margin="normal" name="username" type="text" fullWidth label="Nombre Completo" sx={{ mt:2, mb: 1.5 }}  />
                                    <TextField margin="normal" name="password" type="text" fullWidth label="Correo Electronico" sx={{ mt:1.5, mb: 1.5 }} />
                                    <TextField margin="normal" name="password" type="text" fullWidth label="Celular" sx={{ mt:1.5, mb: 1.5 }} />
                                    <Button fullWidth type="submit" variant="contained" sx={{ mt:1.5, mb: 3 }}>Iniciar Reserva</Button>
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>
                    </Container>
                }
            />
            <Divider />
            <ContactsComponents />
        </Box>
    )
}
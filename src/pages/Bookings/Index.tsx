import React from "react";
<<<<<<< HEAD
import { Box, Avatar, Button, Container, List, ListItem, ListItemAvatar, ListItemText, Typography, Divider, ListItemButton, Grid } from "@mui/material";
import { ContactsComponents } from "../../components";

export const BookingsPage: React.FC<{}> = () => {

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
            <Box maxWidth="100%">
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
            </Box>
            <Divider />
            <ContactsComponents />
        </Box>
=======
import { Button, Container } from "@mui/material";

export const BookingsPage: React.FC<{}> = () => {
    return (
        <Container sx={{ mt: 9 }} maxWidth="xl">
            <Button fullWidth variant="contained">
                Reservas Page
            </Button>
        </Container>
>>>>>>> 3994dd20317eb4e5a2328fba3659ce2813b6b149
    )
}
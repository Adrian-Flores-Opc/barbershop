import React from "react";
import { TextField,Box, Avatar, Button, Container, List, ListItem, ListItemAvatar, ListItemText, Divider, ListItemButton, Grid, Paper, CardMedia } from "@mui/material";
import { ContactsComponents, RegisterComponents } from "../../components";
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import Card from '@mui/material/Card';
import FondoPerfilUrbano from "../../assets/fondoPerfilUrbano.png";

const emails = ['username@gmail.com', 'user02@gmail.com'];
export interface SimpleDialogProps {
    open: boolean;
    selectedValue: string;
    onClose: (value: string) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
    const { onClose, selectedValue, open } = props;
  
    const handleClose = () => {
      onClose(selectedValue);
    };
  
    const handleListItemClick = (value: string) => {
      onClose(value);
    };
    
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
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Barberos Disponibles</DialogTitle>
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
      </Dialog>
    );
  }

export const BookingsPage: React.FC<{}> = () => {

    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(emails[1]);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = (value: string) => {
      setOpen(false);
      setSelectedValue(value);
    };

    return (
        <Box maxWidth="100%">
            <RegisterComponents 
                elementOne={
                    <Card sx={{ maxWidth: 350 }}>
                       <CardMedia component="img" alt="urbano" height="450" image={FondoPerfilUrbano} />
                    </Card>
                } 
                elementTwo={
                    <Container maxWidth="sm">
                        <Grid container direction="column" alignItems="center" justifyContent="center" sx={{ minHeight: "100vh" }}>
                            <Grid item>
                                <Paper sx={{ padding: "1.2em", borderRadius: "0.5em" }}>
                                    <Box component="form">
                                        <TextField margin="normal" name="username" type="text" fullWidth label="Nombre Completo" sx={{ mt:2, mb: 1.5 }}  />
                                        <TextField margin="normal" name="email" type="text" fullWidth label="Correo Electronico" sx={{ mt:1.5, mb: 1.5 }} />
                                        <TextField margin="normal" name="cellphone" type="text" fullWidth label="Celular" sx={{ mt:1.5, mb: 1.5 }} />
                                        <Button fullWidth variant="contained" sx={{ mt:1.5, mb: 3 }} onClick={handleClickOpen}>Iniciar Reserva</Button>
                                        <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose}></SimpleDialog>
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
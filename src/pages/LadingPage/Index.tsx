import React from "react";
import { Box,Button, Container, Divider } from "@mui/material";
import { AdditionalComponents, HeaderComponents } from "../../components";
import { ContactsComponents } from "../../components";
import { RegisterComponents } from "../../components"; 

export const LandingPage: React.FC<{}> = () => {
    return (
        <Box maxWidth="100%">
            <HeaderComponents title="BARBERIA LINAJE URBANO" description="Barberia Linaje Urbano" element={<Button variant="contained" fullWidth>URBANO</Button>} />
            <RegisterComponents 
                elementOne={<Button variant="contained" fullWidth>IMAGEN </Button>}
                elementTwo={
                    <div>
                        <Box component="section" sx={{ p: 2, border: '1px dashed grey', marginTop: "15px", width: 650, height: 130 }}>Servicio One</Box>
                        <Divider />
                        <Box component="section" sx={{ p: 2, border: '1px dashed grey', marginTop: "15px", width: 650, height: 130 }}>Servicio Two</Box>
                        <Divider />
                        <Box component="section" sx={{ p: 2, border: '1px dashed grey', marginTop: "15px", width: 650, height: 130}}>Servicio Tree</Box>
                    </div>
                }
            />
            <AdditionalComponents title="BARBERIA LINAJE URBANO" element={<Button variant="contained" fullWidth>URBANO</Button>}/>
            <ContactsComponents />
        </Box>
    )
}
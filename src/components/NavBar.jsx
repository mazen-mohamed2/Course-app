import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FolderIcon from "@mui/icons-material/Folder";
import ImageIcon from "@mui/icons-material/Image";
import DescriptionIcon from "@mui/icons-material/Description";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { MenuItem } from "@mui/material";
import Auth from "./Auth";
import { Link, Navigate } from "react-router-dom";





export default function NavBar() {

    /*
    react useState hook to save the current open/close state of the drawer,
    normally variables dissapear afte the function was executed
    */
    const [open, setState] = useState(false);
    const pages = ['Products', 'Pricing', 'Blog'];


    /*
    function that is being called every time the drawer should open or close,
    the keys tab and shift are excluded so the user can focus between
    the elements with the keys
    */
    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        //changes the function state according to the value of open
        setState(open);
    };
    const handleClick=()=>{
        localStorage.clear();
        window.location.replace("/")
    }
    const [isLoggedIn, setisLoggedIn] = useState(null);
  const logIn = () => {
    setisLoggedIn(true);


  };
  
    return (

        <AppBar position="static">
            <Container maxWidth="lg" disableGutters={true}>
                <Toolbar sx={{display:"flex", justifyContent:"space-between"}}>
                    <Link to={"/home"} style={{ textDecoration: 'none', color:"#fff" }}>
                    <Typography  variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
                        Brand
                    </Typography>
                    </Link>

                    <Box component="div" sx={{
                        display: {
                            xs: 'none',
                            sm: 'flex',
                            
                        }
                    }}>
                        
                        
                        {!isLoggedIn &&
            
            <Button color="inherit" onClick={handleClick}>
                             <Typography onClick={logIn}>LogOut</Typography>
                              </Button>
        }
              

                    </Box>

                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer(true)}
                        sx={{
                            mr: 2,
                            display: {
                                xs: 'block',
                                sm: 'none',
                            }
                        }}
                    >
                        <MenuIcon />
                    </IconButton>

                    {/* The outside of the drawer */}
                    <Drawer
                        //from which side the drawer slides in
                        anchor="right"
                        //if open is true --> drawer is shown
                        open={open}
                        //function that is called when the drawer should close
                        onClose={toggleDrawer(false)}
                        //function that is called when the drawer should open
                        onOpen={toggleDrawer(true)}
                    >
                        {/* The inside of the drawer */}
                        <Box sx={{
                            p: 2,
                            height: 1,
                            backgroundColor: "#dbc8ff",
                        }}>

                            {/* 
                  when clicking the icon it calls the function toggleDrawer 
                  and closes the drawer by setting the variable open to false
                  */}
                            <IconButton sx={{ mb: 2 }}>
                                <CloseIcon onClick={toggleDrawer(false)} />
                            </IconButton>

                            <Divider sx={{ mb: 2 }} />

                            <Box sx={{ mb: 2 }}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <ImageIcon sx={{ color: "primary.main" }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Pictures" />
                                </ListItemButton>

                                <ListItemButton>
                                    <ListItemIcon>
                                        <DescriptionIcon sx={{ color: "primary.main" }} />
                                    </ListItemIcon >
                                    <ListItemText primary="Documents" />
                                </ListItemButton>

                                <ListItemButton>
                                    <ListItemIcon>
                                        <FolderIcon sx={{ color: "primary.main" }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Other" />
                                </ListItemButton>
                            </Box>

                           

                            <Box sx={{
                                display: "flex",
                                justifyContent: "center",
                                position: "absolute",
                                bottom: "0",
                                left: "50%",
                                transform: "translate(-50%, 0)"
                            }}
                            >
                                <Button variant="contained" sx={{ m: 1, width: .5 }}>Register</Button>
                                <Button variant="outlined" sx={{ m: 1, width: .5 }} >Login</Button>
                            </Box>
                        </Box>

                    </Drawer>


                </Toolbar>
            </Container>
        </AppBar>

    );
}
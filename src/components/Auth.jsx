import { Box, Grid, Stack, Typography } from '@mui/material'
import React, { useRef } from 'react'
import { Outlet } from 'react-router-dom'
import Home from './Home'

const Auth = () => {

    const email = useRef()
    const password = useRef()
    const getEmail = localStorage.getItem("emailData")
    const getPassword = localStorage.getItem("passwordData")

    const handleSubmit = () => {
        if (email.current.value === "basem.ashraf@smartapp-eg.com" && password.current.value === "@@@123") {
            localStorage.setItem("emailData", "basem.ashraf@smartapp-eg.com")
            localStorage.setItem("passwordData", "@@@123")

        }
    }
    return (
        <Stack>
            {
                getEmail && getPassword ?
                    <Home /> :
                    <Grid container sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", my: "150px" }}>

                        <form component="form" onSubmit={handleSubmit} style={{ border: "solid #495057 2px", padding: "32px", borderRadius: "10px" }} >
                            <Typography align='center' my="20px" variant='h4' color="#495057">
                                Login
                            </Typography>

                            <Box >
                                <input type="text" ref={email} className="input-Auth" placeholder='Email....' />

                            </Box>



                            <Box my="1rem">
                                <input
                                    placeholder='Password....'
                                    type="password"
                                    ref={password}
                                    className="input-Auth"
                                />
                            </Box>




                            <Grid item xs={12} lg={12} md={12} sm={12} >
                                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <button className='Button-Auth'>
                                        Login
                                    </button>
                                </Box>
                            </Grid>

                        </form>
                    </Grid>
            }


            <Outlet />
        </Stack>
    )
}

export default Auth
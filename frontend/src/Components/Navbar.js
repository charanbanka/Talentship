import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
import { getUserDetails } from '../features/user/userSlice';
import { Avatar } from '@mui/material/node';

export default function Navbar() {
  const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  console.log(user)
  return (
    <Box sx={{ flexGrow: 1 }} className="m-3">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Talentship
          </Typography>
          <Typography variant='h5' color="secondary">{user.result.name}!</Typography>
          <Avatar className="ps-3" alt={user.result.name}  >{user.result.name.charAt(0)}</Avatar>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

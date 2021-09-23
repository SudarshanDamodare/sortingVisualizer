import React from 'react'
import '../styles/header.css'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" mr={5}>
            Sorting Visualizer
          </Typography>
          {/* <Button variant="text">Text</Button> */}
          <Button variant="text" color="inherit" onClick={()=>console.log('clicked')}>Generate New Array</Button>
          <Button color="inherit">Sort</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

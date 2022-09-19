import React from 'react'
import { AppBar , Box  , Toolbar,  Typography , Button} from '@mui/material'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>
   <Box sx  = {{flexGrow:1}}>
    <AppBar position='static' color = "secondary">
      <Toolbar>
        <Typography variant  = 'h5' component = "div" sx = {{flexGrow :1}}>
          greek-shop

        </Typography>
        <Button component = {NavLink} to = '/'  sx = {{color :'white' , textTransform : 'none'}}>home</Button>
        <Button component = {NavLink} to ='/contact' style  = {({isActive})=>{return {backgroundColor : isActive ? "blue" : ''}}}  sx = {{color : 'white'  , textTransform : 'none'}}> contact</Button>
        <Button component = {NavLink} to ='/login' style  = {({isActive})=>{return {backgroundColor : isActive ? "blue" : ''}}}  sx = {{color : 'white' , textTransform : 'none'}}>Login/Registration</Button>

      </Toolbar>

    </AppBar>



   </Box>

    </>
  )
}

export default Navbar
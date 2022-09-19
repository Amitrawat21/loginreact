import React, { useState } from 'react'
import { AppBar , Box  , Toolbar,  Typography , Button , Grid, Tab , Tabs , Card} from '@mui/material'
import UserLogin from './UserLogin'
import  pic1 from  '../../../image/pic1.png'

const TabPanel= (props)=>{
    const {children , value , index} = props

    return(

        <div role = 'tabpanel' hidden = {value !== index}>
            {
                value===index && (
                    <Box>{children}</Box>
                )
                    

                
            }

        </div>
    )

}

const LoginRes = () =>  {

    const[value , setValue] = useState(0)

    const handleChange = (event  , newValue)=>{
        setValue(newValue)

    }


  return (
   <>
   <Grid container sx = {{height  : "90vh"}}>
    <Grid item lg = {5} sm = {7} sx = {{ backgroundImage : `url(${pic1})` , backgroundRepeat : 'no-repeat' , backgroundSize : 'cover' , backgroundPosition : 'center'}}></Grid>
    <Grid item lg = {7} sm = {5}  >

<Card sx = {{ width : "100%" , height : "100%"}}>
<Box>
    <Box sx = {{borderBottom: 1 , borderColor: 'divider'}}>
        <Tabs  value={value} textColor = "secondary" indicatorColor='secondary' onChange={handleChange}>
            <Tab label = 'Login' sx = {{textTransform : 'none'  , fontWeight : 'bold'}}>
                
            </Tab>
            <Tab label   = "Registration"  sx = {{textTransform : 'none'  , fontWeight : 'bold'}}></Tab>

        </Tabs>
        <TabPanel value = {value}  index = {0}> <UserLogin/></TabPanel>
       
        <TabPanel value = {value}  index = {1}>Registration</TabPanel>



    </Box>
</Box>


</Card>

    </Grid>

   </Grid>
   
   </>
  )
}

export default LoginRes
import { Typography, Grid } from '@mui/material'
import React from 'react'

const BroPoints = () => {
  return (
    <div className='bro-points-container'>
        <Typography sx={{ textAlign: 'center' }} variant='h4'>Bro Points</Typography>
        <Grid container justifyContent="space-between" sx={{ mt:'20px' }}>
            <Grid item>
                <img style={{ width: '100px' }} src='https://img.freepik.com/free-vector/delivery-service-illustrated_23-2148505081.jpg?size=626&ext=jpg'/>
            </Grid>
            <Grid item>
                <img style={{ width: '100px'}} src='https://img.freepik.com/free-vector/loyalty-program-concept_74855-6543.jpg?size=626&ext=jpg&ga=GA1.2.23185032.1687856987&semt=sph'/> 
            </Grid>
            <Grid>
                <img style={{ width: '100px'}} src='https://img.freepik.com/free-vector/discount-concept-illustration_114360-5233.jpg?size=626&ext=jpg&ga=GA1.1.23185032.1687856987&semt=sph'/>
            </Grid>
        </Grid>
    </div>
  )
}

export default BroPoints

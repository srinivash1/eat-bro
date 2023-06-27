import { Grid, Typography } from '@mui/material'
import React from 'react'

const HowItWorks = () => {
    const howItWorksData = [
        {
            image: "https://eatcleanbro.com/media/wysiwyg/home-product/You_Pick_-_WhiteV2.png",
            title: "With no subscriptions or contracts, you can pick whatever you want to be delivered whenever you want."
        },
        {
            image: "https://eatcleanbro.com/media/wysiwyg/home-product/We_Cook_-_WhiteV2.png",
            title: "And we clean up! Our meals are fresh and never frozen. Chef prepared, nutritionist-approved."
        },
        {
            image: "https://eatcleanbro.com/media/wysiwyg/home-product/We_Deliver_-_WhiteV2.png",
            title: "Order By 2PM Today, Get It Tomorrow!"
        }
    ]
  return (
    <div className='how-it-works-container'>
        <Typography sx={{ textAlign: 'center', textTransform: 'uppercase' }} variant='h5'>How It Works</Typography>
        <Grid container justifyContent="space-between">
            {howItWorksData.map((data) => {
                return (
                    <Grid className='how-it-works-content-styles' item key={data.title}>
                        <img src={data.image} alt={data.title} />
                        <p style={{ fontSize: '12px', width: '167px', marginTop: '20px', textAlign: 'center'}}>{data.title}</p>
                    </Grid>
                )
            })}
        </Grid>
    </div>
  )
}

export default HowItWorks

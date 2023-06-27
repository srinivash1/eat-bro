import { Typography, Grid } from '@mui/material'
import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Featured = () => {
    var settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        dots: true,  
      };
    const featuredImages = [
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHqyGb---31x94w2LxQRsOq2PVcBRbrIVMRaJON8cD&s"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHqyGb---31x94w2LxQRsOq2PVcBRbrIVMRaJON8cD&s"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHqyGb---31x94w2LxQRsOq2PVcBRbrIVMRaJON8cD&s"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHqyGb---31x94w2LxQRsOq2PVcBRbrIVMRaJON8cD&s"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHqyGb---31x94w2LxQRsOq2PVcBRbrIVMRaJON8cD&s"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHqyGb---31x94w2LxQRsOq2PVcBRbrIVMRaJON8cD&s"
        }
    ]

   
  
  return (
    <div className='bro-points-container'>
        <Typography sx={{ textAlign: 'center' }} variant='h4'>Featured In</Typography>
        <Slider {...settings}>
        {featuredImages.map((images) => {
            return (
                <div>
                    <Grid key={images.image}>
                        <img src={images.image}/>
                    </Grid>
                </div>
            )
        })}
        </Slider>
    </div>
  )
}

export default Featured

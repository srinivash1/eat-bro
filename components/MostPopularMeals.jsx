import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React from 'react'
import { CardMedia, Grid } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MostPopularMeals = () => {
    var settings = {

        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        dots: true,
        
      };
    
      const mealData = [
        {
            image: "https://eatcleanbro.com/media/catalog/product/cache/0219ac262e0c9675eb911382f8ae1d3e/c/h/chicken_and_rice_isolated_plated.png",
            title: "Grilled Chicken & Brown Rice",
            price: "$11.99"
        },
        {
            image: "https://eatcleanbro.com/media/catalog/product/cache/0219ac262e0c9675eb911382f8ae1d3e/c/h/chicken_and_broccoli_isolated_plated.png",
            title: "Grilled Chicken & Broccoli",
            price: "$12.99"
        },
        {
            image: "https://eatcleanbro.com/media/catalog/product/cache/0219ac262e0c9675eb911382f8ae1d3e/t/u/turkey_corn_salsa.png",
            title: "Turkey Corn Salsa Taco Bowl",
            price: "$6.49"
        },
        {
            image: "https://eatcleanbro.com/media/catalog/product/cache/0219ac262e0c9675eb911382f8ae1d3e/t/u/turkey_burger_and_roasted_potatoes_plated_isolated_1.png",
            title: "Turkey Burger & Roasted Potatoes",
            price: "$12.99"
        },
        {
            image: "https://eatcleanbro.com/media/catalog/product/cache/0219ac262e0c9675eb911382f8ae1d3e/b/u/buffalo_chicken_wrap_plated.png",
            title: "Buffalo Chicken Wrap Plated",
            price: "$16.99"
        },
        {
            image: "https://eatcleanbro.com/media/catalog/product/cache/0219ac262e0c9675eb911382f8ae1d3e/c/h/chicken_and_broccoli_isolated_plated.png",
            title: "Grilled Chicken & Broccolis",
            price: "$12.99"
        },
        {
            image: "https://eatcleanbro.com/media/catalog/product/cache/0219ac262e0c9675eb911382f8ae1d3e/b/u/buffalo_chicken_wrap_plated.png",
            title: "Buffalo Chicken",
            price: "$16.99"
        },,
        {
            image: "https://eatcleanbro.com/media/catalog/product/cache/0219ac262e0c9675eb911382f8ae1d3e/b/u/buffalo_chicken_wrap_plated.png",
            title: "Chicken Wrap Plated",
            price: "$16.99"
        },

    ]
  return (
    <div className='container-bye'>
       <Typography sx={{ textAlign: 'center' }} variant='h3'>Meal Packs</Typography>
       <Slider {...settings}>
            {mealData.map((data) => {
                return (
                    <Grid flexWrap="nowrap" item key={data.title}>
                        <Card sx={{ margin: '30px' }}>
                            <CardMedia height="120" width="120" component="img" image={data.image}/>
                                <CardContent>
                                    <Button size='small' className='quick-view-button'>Quick View</Button>
                                    <Typography sx={{fontSize: 14}} variant="h6">
                                        {data.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {data.price}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button style={{ background: 'green', borderRadius: '4px', color: 'white'}} size="small">Add to Cart</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    )
                })}
        </Slider>
    </div>
  )
}

export default MostPopularMeals

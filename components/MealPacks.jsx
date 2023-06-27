import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React from 'react'
import { CardMedia, Grid } from '@mui/material';

const MealPacks = () => {
    const mealData = [
        {
            image: "https://eatcleanbro.com/media/catalog/product/cache/0219ac262e0c9675eb911382f8ae1d3e/c/l/clean_nutrient_dense_meal_bundle.png",
            title: "Clean Pack",
            subtitle: "Meals Starting at",
            price: "$11.99"
        },
        {
            image: "https://eatcleanbro.com/media/catalog/product/cache/0219ac262e0c9675eb911382f8ae1d3e/b/u/bulk_muscle_building_meal_bundle.png",
            title: "Muscle Building Pack",
            subtitle: "Meals Starting at",
            price: "$12.99"
        },
        {
            image: "https://eatcleanbro.com/media/catalog/product/cache/0219ac262e0c9675eb911382f8ae1d3e/l/o/low_carb_meal_bundle.png",
            title: "Low Carb Pack",
            subtitle: "Meals Starting at",
            price: "$6.49"
        },
        {
            image: "https://eatcleanbro.com/media/catalog/product/cache/0219ac262e0c9675eb911382f8ae1d3e/t/o/top_sellers_meal_bundle.png",
            title: "Top Sellers Pack",
            subtitle: "Meals Starting at",
            price: "$12.99"
        }

    ]
  return (
    <div>
       <Typography sx={{ textAlign: 'center' }} variant='h3'>Meal Packs</Typography>
       <Grid container spacing={2} justifyContent="space-evenly" sx={{ marginTop: '20px' }}>
        {mealData.map((data) => {
            return (
                <Grid key={data.title}>
                    <Card>
                        <CardMedia height="120" width="120" component="img" image={data.image}/>
                        <CardContent>
                            <Button size='small' className='quick-view-button'>Quick View</Button>
                            <Typography sx={{fontSize: 14}} variant="h6">
                                {data.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {data.subtitle}
                                <br />
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
       </Grid>
    </div>
  )
}

export default MealPacks

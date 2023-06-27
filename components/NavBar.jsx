import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import { Grid, TextField, IconButton, Button, styled, MenuItem } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import Select from '@mui/material/Select';

const NavBar = () => {
    const NavMenu = styled(Typography)`
        font-size: 16px;
    `;
    const [searchValue, setSearchValue] = useState("");

    const handleChange = () => {
        setSearchValue(e.target.value);
    }
  return (
    <div>
        <AppBar sx={{ background: '#FED766'}} position='static'>
            <Typography variant='h6' sx={{fontSize: '16px', color: '#2d4383', textDecoration: 'underline', textAlign: 'center', fontFamily: 'Fira Code', cursor: 'pointer'}}>
                SPEND $120+ | GET FREE DELIVERY
            </Typography>
        </AppBar>

        {/* <AppBar position="sticky" sx={{ background: 'white' }}> */}
        {/* Title */}
        <Grid container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '13px' }}>
          <Grid item>
            <img style={{ width: 50, height: 50, cursor: 'pointer' }} src='https://eatcleanbro.com/static/version1670935507/frontend/Redstage/eatcleanbro/en_US/images/logo.svg'/>
          </Grid>
          {/* Phone Number */}
          <Grid item>
            <Typography
              sx={{ cursor: 'pointer', color: '#2d4383' }}
              variant="h6"
              className='phone-number'
            >
              866-258-1890
            </Typography>
          </Grid>
          {/* For Search Bar */}
          <Grid item>
            <Grid>
              <TextField
                value={searchValue}
                onChange={handleChange}
                variant="outlined"
                placeholder='Search for items'
                sx={{ width: 150 }}
              />
              <SearchIcon style={{ background: 'green', borderRadius: '4px'}} />
            </Grid>
          </Grid>
          {/* Sign In */}
          <Grid item>
            <Button className='sign-button' sx={{ background: 'green' }}>Sign In</Button>
          </Grid>
          {/* Create an account */}
          <Grid>
            <Button className='create-button' sx={{ background: 'green' }}>Create An Account</Button>
          </Grid>
          {/* Cart Icon */}
          <Grid item>
            <ShoppingCartIcon sx={{ color: '#2d4383'}} />
          </Grid>
        </Grid>
      {/* </AppBar> */}

      {/* MenuItems */}
      <AppBar position='sticky' sx={{ background: '#2d4383'}}>
        <Grid container sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', padding: '13px' }}>
            <Grid item>
                {/* <Typography variant='h6' className='drop-down-items-font'>Our Menu</Typography> */}
                <NavMenu>Our Menu</NavMenu>
            </Grid>
            <Grid item>
                {/* <Typography variant='h6' className='drop-down-items-font'>Vip Program</Typography> */}
                <NavMenu>Vip Program</NavMenu>
            </Grid>
            <Grid item>
                {/* <Typography variant='h6' className='drop-down-items-font'>Bro Merch</Typography> */}
                <NavMenu>Bro Merch</NavMenu>
            </Grid>
            <Grid item>
                {/* <Typography variant='h6' className='drop-down-items-font'>Gift Cards</Typography> */}
                <NavMenu>Gift Cards</NavMenu>
            </Grid>
            <Grid item>
                {/* <Typography variant='h6' className='drop-down-items-font'>How It Works</Typography> */}
                <NavMenu>How It Works</NavMenu>
            </Grid>
            <Grid item>
                {/* <Typography variant='h6'className='drop-down-items-font'>Blog</Typography> */}
                <NavMenu>Blog</NavMenu>
            </Grid>
            <Grid item>
                {/* <Typography variant='h6'className='drop-down-items-font'>Contact Us</Typography> */}
                <NavMenu>Contact Us</NavMenu>
            </Grid>
        </Grid>
      </AppBar>
    </div>
  )
}

export default NavBar

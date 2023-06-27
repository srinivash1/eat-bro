import React from 'react';
import { Grid } from '@mui/material';

const Footer = () => {
  return (
    <div className='footer-container'>
        <Grid container>
          <Grid>
            <Grid item>
                  <img style={{ width: 50, height: 50, cursor: 'pointer' }} src='https://eatcleanbro.com/static/version1670935507/frontend/Redstage/eatcleanbro/en_US/images/logo-white.svg'/>
              </Grid>
              <Grid>
                <p style={{ fontWeight: 100, marginTop: 5 }}>NJ Kitchen: 607 Industrial Way W Eatontown, NJ 07724</p>
                <p style={{ fontWeight: 100, marginTop: 5 }}>866-258-1890</p>
                <p style={{ fontWeight: 100, marginTop: 5 }}>Info@EatCleanBro.com</p>
              </Grid>
            </Grid>
            {/* Menu Items */}
            <Grid sx={{ display: 'flex'}}>
              <Grid item sx={{ marginRight: '20px' }}>
                {/* <p>How It Works</p> */}
                <ul>
                  <li><a href="#">Process</a></li>
                  <li><a href="#">Pricing</a></li>
                  <li><a href="#">Schedule</a></li>
                  <li><a href="#">FAQ</a></li>
                  <li><a href="#">Bro Points</a></li>
                </ul>
              </Grid>

              <Grid item sx={{ marginRight: '20px' }}>
              <p>ACCOUNT</p>
                <ul>
                  <li><a href="#">Account Info</a></li>
                  <li><a href="#">My Orders</a></li>
                  <li><a href="#">Affiliate Program</a></li>
                  <li><a href="#">Affiliate Terms & Conditions</a></li>
                  <h1>Hello world</h1>
                </ul>
              </Grid>


              <Grid item sx={{ marginRight: '20px' }}>
              <p>Merch & Gifts</p>
                <ul>
                  <li><a href="#">Bro Merch</a></li>
                  <li><a href="#">Gift Cards</a></li>
                </ul>
              </Grid>


              <Grid item sx={{ marginRight: '20px' }}>
                <p>Bro Zone</p>
                <ul>
                  <li><a href="#">About ECB</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Terms of service</a></li>
                </ul>
              </Grid>
              
            </Grid>

            <Grid>
              <Grid item>
                <p>Subscribe to our newsletter</p>
              </Grid>
              <Grid item>
                <input type='email' placeholder='Enter your email...'/>
                <button>Subscribe</button>
              </Grid>
            </Grid>
            
        </Grid>
    </div>
  )
}

export default Footer

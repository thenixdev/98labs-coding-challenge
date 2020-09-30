import { Box, Grid } from '@material-ui/core';
import React, { PureComponent } from 'react';
import logo from '../../images/logo.PNG';
import HomeComponent from '../home/homepage';


class HeaderDesign extends PureComponent {
    render() {
        return (
            <Grid container>
                
                <Grid item xs={12} lg={12}>
                    <Box display='flex' justifyContent='center'>
                        <div className='storeLogo'>
                            <img src={logo} height='35px' width='35px' />
                            <div className='storeName'><strong>DEMO</strong> STORE</div>                    
                        </div>
                    </Box>
                </Grid>
            </Grid>
        )
    }
}

export default HeaderDesign

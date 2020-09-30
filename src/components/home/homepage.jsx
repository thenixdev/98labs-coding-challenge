import { Box, Button, Grid } from "@material-ui/core";
import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

export class HomeComponent extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <Grid container spacing={1}>
        <Grid item xs={2}/>
          <Grid item xs={4}>
            <Box display="flex-end" justifyContent="right">
              <Button variant="contained" color="primary">
                <Link to="/checkout" className='link'>
                  Frontend Developer - Basic Layout
                </Link>
              </Button>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box display="flex" justifyContent="left">
              <Button variant="contained" color="primary">
                <Link to="xyz" className='link'>
                  XYZ Machine Problem
                </Link>
              </Button>
            </Box>
          </Grid>
          <Grid item xs={2}/>
        </Grid>
      </React.Fragment>
    );
  }
}

export default HomeComponent;

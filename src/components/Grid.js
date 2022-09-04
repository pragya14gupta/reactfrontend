import React from 'react'
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Item';
const Grids = () => {
  return (
    <div><Grid container spacing={2}>
    <Grid item xs={8}>
      <Item>xs=8</Item>
    </Grid>
    <Grid item xs={4}>
      <Item>xs=4</Item>
    </Grid>
    <Grid item xs={4}>
      <Item>xs=4</Item>
    </Grid>
    <Grid item xs={8}>
      <Item>xs=8</Item>
    </Grid>
  </Grid></div>
  )
}

export default Grids;
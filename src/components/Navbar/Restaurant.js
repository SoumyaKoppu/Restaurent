import React from "react";
import CoffeCard from "./CoffeCard";
import { Grid } from "@material-ui/core";
import coffeMakerList from "./constants";

const Restaurant = () => {
  const getCoffeMakerCard = coffeMakerObj => {
    return (
      <Grid item xs={12} sm={6} lg={4} md={4} >
        <CoffeCard {...coffeMakerObj} />
      </Grid>
    );
  };

  return (<div style={{margin: '10px', padding: '30px'}}>
    <Grid container spacing={10}>
      {coffeMakerList.map(coffeMakerObj => getCoffeMakerCard(coffeMakerObj))}
    </Grid></div>
  );
};

export default Restaurant ;


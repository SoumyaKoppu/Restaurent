import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Image4 from './img4.jpg';



export default function MyCard() {

  return (
    <div >
         <Container maxWidth="lg" style={{backgroundImage:`url(${Image4})`,
        backgroundSize:"cover", height: "500px"}}>

         </Container>
    </div>
  );
}

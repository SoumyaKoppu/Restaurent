import React from 'react';
import Carousel from 'react-material-ui-carousel';
import autoBind from 'auto-bind';
import {
    Paper,
    Button,
    
} from '@material-ui/core'
import Image1 from "./img1.jpg"
import Image2 from "./img2.jpg"
import Image3 from "./img3.jpg"
import Image4 from "./img4.jpg"


function Project(props) {
    return (
       <Paper 
       className="Project"
            style={{
                backgroundImage: `url(${props.item.Image})`,
                backgroundSize: 'cover',
                height:"500px",
                width: "800px",
                position: 'static',
                backgroundRepeat: 'no-repeat',
            }}
            elevation={10}
        >
            <div>
            <h2 >{props.item.name}</h2>
            <p>{props.item.description}</p>
            </div>

            <Button variant="contained"  color="secondary" >
                Check it out!
            </Button>
        </Paper>
    )
}

const items = [
    {
        name: "Lear Music Reader",
        description: "A PDF Reader specially designed for musicians.",
        Image: Image1,
    },
    {
        name: "Hash Code 2019",
        description: "My Solution on the 2019 Hash Code by Google Slideshow problem.",
        Image: Image2,
    },
    {
        name: "Terrio",
        description: "A exciting mobile game game made in the Unity Engine.",
        Image: Image3,
    },
    {
        name: "React Carousel",
        description: "A Generic carousel UI component for React using material ui.",
        Image: Image4,
    }
]


export default class Home extends React.Component {
   

    constructor(props) {
        super(props);

        this.state = {
            autoPlay: false,
            timer: 500,
            animation: "slide",
            indicators: true,
            timeout: 500,
            navButtonsAlwaysVisible: true,
        }

        autoBind(this);
    }

   
    render() {
        return (
           
                <Carousel
                    className="SecondExample"
                    autoPlay={this.state.autoPlay}
                    timer={this.state.timer}
                    animation={this.state.animation}
                    indicators={this.state.indicators}
                    timeout={this.state.timeout}
                    navButtonsAlwaysVisible={this.state.navButtonsAlwaysVisible}
                    
                >
                    {
                        items.map((item, index) => {
                            return <Project item={item} key={index} />
                        })
                    }
                </Carousel>
           
        )
    }
}

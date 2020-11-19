import React from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

export default class Contact extends React.Component {
   
    state = {
        formData: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: '',
        },
        submitted: false,
    }

    handleChange = (event) => {
        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
    }

    handleSubmit = () => {
        this.setState({ submitted: true }, () => {
            setTimeout(() => this.setState({ submitted: false }), 5000);
        });
    }

    render() {

        const { formData, submitted } = this.state;
        return ( <div style={{marginTop:"120px"}}>
            <h1 style={{textAlign:"center"}}>CONTACT US</h1><br/> <Container maxWidth="md" >
            <ValidatorForm
                ref="form"
                onSubmit={this.handleSubmit}>
                
                <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={6} sm={12}>
                <TextValidator
                    label="First Name"
                    onChange={this.handleChange}
                    name="firstName"
                    value={formData.firstName}
                    validators={['required']}
                    errorMessages={['this field is required']}
                    margin="normal"
                    variant="outlined"
                    autoComplete="off" 
                    fullWidth
                />
                </Grid>
                <Grid item xs={12} md={6} lg={6} sm={12}>
                <TextValidator
                    label="Last Name"
                    onChange={this.handleChange}
                    name="lastName"
                    value={formData.lastName}
                    validators={['required']}
                    errorMessages={['this field is required']}
                    margin="normal"
                    variant="outlined"
                    autoComplete="off" 
                    fullWidth
                /></Grid>
                 <Grid item xs={12} md={6} lg={6} sm={12}>
                <TextValidator
                    label="Email"
                    onChange={this.handleChange}
                    name="email"
                    value={formData.email}
                    validators={['required', 'isEmail']}
                    errorMessages={['this field is required', 'email is not valid']}
                    margin="normal"
                    variant="outlined"
                    autoComplete="off" 
                    fullWidth
               /></Grid>
                <Grid item xs={12} md={6} lg={6} sm={12}>
                <TextValidator
                    label="Phone"
                    onChange={this.handleChange}
                    name="phone"
                    value={formData.phone}
                    validators={['required', 'isNumber','minStringLength:10', 'maxStringLength:10']}
                    errorMessages={['this field is required', 'phone number is invalid','please enter 10 digit mobile number','please enter 10 digit mobile number']}
                    margin="normal"
                    variant="outlined"
                    autoComplete="off"
                    fullWidth 
               /></Grid>
                <Grid item xs={12} md={12} lg={12} sm={12}>
                <TextValidator
                    label="Message"
                    onChange={this.handleChange}
                    name="message"
                    value={formData.message}
                    validators={['required']}
                    errorMessages={['this field is required']}
                    margin="normal"
                    variant="outlined"
                    autoComplete="off" 
                    fullWidth/> </Grid><br/>
                    <Grid>
                <Button
                    color="secondary"
                    variant="contained"
                    type="submit"
                    disabled={submitted}
                    size="large"
                >
                    {
                        (submitted && 'Your form is submitted!')
                        || (!submitted && 'Submit')
                    }
                </Button></Grid></Grid><br/>
             </ValidatorForm>
 </Container></div>    
  );
    }
}
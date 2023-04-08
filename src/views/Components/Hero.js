
import React from "react";
import Container from "@mui/material/Container";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import '../assets/css/home.css';
import 'animate.css'
import '../assets/css/cssanimation.css'

const HeroBackground = styled(Box)({
    
  height: '85vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const HeroText = styled(Typography)({
    
  
  textAlign: 'center',
});

const Service = styled(Typography)(({theme})=>({
    margin: '10px',
    padding: '10px',
    width:'200px',
    color: '#00000000',
    position: 'absolute',
   
    textShadow: '0px 0px 3px rgba(0,0,0, 0.5)',
    transition:'0.2s ease',
    '&:hover': {
        cursor: 'default',
        textShadow: '0px 0px 1px rgba(0,0,0, 0.5)',
        transform:'scale(1.1)'
        
        
    }

}));


const Hero = () => {
    // const classes = useStyles();
    return (
        <HeroBackground className="hero" sx={{ mt: 12, overflow:'hidden' }}>
            <Box className='hero-grad' sx={{height:'85vh', width:'100%'}}>

            
      <Container maxWidth="lg" sx={{display:'flex',flexDirection:'column', alignItems:'center'}}>
        <HeroText className="cssanimation blurIn delay-1 " variant="h1" sx={{color:'primary.light', mb: 0, textShadow: '0px 0px 10px rgba(255, 255, 255, 0.5)' }}>
           
                    </HeroText>
                    {/* <HeroText className="cssanimation fadeInBottom delay-1" variant="body" color="white" sx={{m:0}} >Technologies & Solutions Pvt. Ltd</HeroText> */}
        <HeroText className="cssanimation blurIn delay-1" variant="h4"  sx={{color:'text.secondary',fontWeight:"400",fontStyle:"italic", mb: 4 }}>
         " Your solution for seamless digital transformation "</HeroText>
                    {/* <Service className="cssanimation blurIn delay-800" sx={{left:'50px',top:'35vh'}} variant="h5">
                        Digital marketing
                    </Service>
                     <Service className="cssanimation blurIn delay-500" sx={{left:'100px',bottom:'18vh',width:'300px'}} variant="h4">
                        Web Development
                    </Service>
                     <Service className="cssanimation blurIn delay-400" sx={{right:'5vw',top:'35vh'}} variant="h6">
                        Android Development
                    </Service>
                     <Service className="cssanimation blurIn delay-300" sx={{left:'65vw',bottom:'70vh'}} variant="h4">
                        Internships
                    </Service>
                     <Service className="cssanimation blurIn delay-600" sx={{left:'350px',bottom:'440px',width:'100px'}} variant="h4 ">
                        Courses
                    </Service>
                     <Service className="cssanimation blurIn delay-400" sx={{left:'70vw',top:'75vh', width:'300px'}} variant="h4">
                        Career Training
                    </Service>
                    <Service className="cssanimation blurIn delay-600" sx={{left:'420px',top:'15vh',width:'100px'}} variant="h5">
                        Branding
                    </Service>
                    <Service className="cssanimation blurIn delay-700" sx={{right:'40vw',top:'85vh',width:'250px'}} variant="h5">
                        Project Assistance
                    </Service>
                    <Service className="cssanimation blurIn delay-500" sx={{right:'27vw',top:'70vh'}} variant="body">
                        Software Development
                    </Service>
                    <Service className="cssanimation blurIn delay-400" sx={{left:'25vw',top:'30vh', width:'150px'}} variant="body">
                        Graphic Design
                    </Service>
                    <Service className="cssanimation blurIn delay-300" sx={{left:'5vw',top:'85vh', width:'200px'}} variant="body">
                        Social Media Marketing
                    </Service>
                    <Service className="cssanimation blurIn delay-200" sx={{left:'10vw',top:'20vh', width:'100px'}} variant="h4">
                        SEO
                    </Service>
                    <Service className="cssanimation blurIn delay-700" sx={{left:'55vw',top:'33vh', width:'200px'}} variant="h6">
                        Creative Design
                    </Service> */}
                    
        <Button variant="contained" className="cssanimation fadeInBottom delay-1" size="large">
          Learn More
        </Button>
      </Container></Box>
    </HeroBackground>
  );
};

export default Hero;

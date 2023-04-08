
import "../views/assets/css/home.css"

import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Box from '@mui/material/Box'
import Preloader from './Components/Preloader';
import Container from "@mui/material/Container";
import Footer from "./Components/Footer";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider"
import Link from "@mui/material/Link"
import cssanimation from "./assets/css/cssanimation.css"
import { Button, CardActionArea, CardActions } from '@mui/material';
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import "./assets/images/bg5.jpg"
import Faq from "./Components/Faq"

const CardHover = ({children}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <Card onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} variant={isHovered ? 'elevation' : 'none'}
      elevation={isHovered ? 1 : 0} sx={{ width: '20vw',p:0 }}>
             
{children}
          </Card>

  )
}
  
  
const Home = () => {
  
    const [loading, setLoading] = useState(true);
const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };
  useEffect(() => {
     const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // Delay of 0.5 second

    return () => clearTimeout(timer);
  }, []);

  const handleServiceElevation = (event) => {
    
    
  }

 
  return (
    
    <Box>
      {/* <Preloader /> */}
      {loading ? <Preloader />:''}
        <Navbar />
      <Hero />
      <Box id="about-bg" sx={{backgroundImage:'linear-gradient(#3f6eb5 ,rgba(255, 255, 255, 0.815)'}}>
      <Container disableGutters id="about" maxWidth="lg" sx={{ my:10, p:6,bgcolor:'none'}} >
         <Divider textAlign="left" sx={{p:1,m:1, color:"text.secondary"}} ><Typography variant="h5">ABOUT US</Typography></Divider>
        
       
       
        <Box sx={{mx:6,mt:3}}>
        <Typography className="cssanimation fadeIn sequence delay-1"  variant="body1" sx={{ color:"text.primary" }}>
            With a strong focus on quality and customer satisfaction, Zephyr has earned a reputation for excellence in the industry.
            The company's team of experienced developers is dedicated to creating high-quality software that is reliable, scalable, and efficient.
            Whether it's building custom software from scratch, developing mobile apps, or integrating software systems, Zephyr has the expertise to deliver top-notch solutions.
        </Typography>
          <Typography className="cssanimation fadeIn sequence delay-1" variant="body1" sx={{mt:3, color: "text.primary" }}>
            At Zephyr, we understand how challenging it can be to find the perfect team that truly cares about your projects.
            That's why we have carefully handpicked a team of skilled developers
            who are specifically tailored to meet the unique needs of your software
            products. With our meticulous attention to detail, we ensure that your product
            stands out as a leader in its category. Don't hesitate to reach out to us for a
            more comprehensive overview of how we can bring your vision to life. We are here
            to provide you with detailed information and guidance every step of the way. Let's
            create something extraordinary together! <Typography variant="subtitle1" component="span" ><Link underline="none" sx={{"&:hover":{cursor:"pointer"},color:"primary.light",fontStyle:"italic",fontWeight:"600"}}> Contact us</Link></Typography> now.
        </Typography></Box>
      </Container></Box>
      <Container id="partners" maxWidth="lg" sx={{display:"flex",flexDirection:"column",alignItems:'center', height:'60vh',mt:15}}>
        <Typography variant="h4" sx={{ color: "text.secondary" }}>Our Previous Partners</Typography>
        <Container sx={{mt:1,height:"20vh",bgcolor:"primary.light"}}>
          <Box></Box>
          <Box></Box>
          <Box></Box>
          <Box></Box>
          <Box></Box>

        </Container>
        <Container sx={{mt:1,height:"20vh",bgcolor:"primary.light"}}>
          <Box></Box>
          <Box></Box>
          <Box></Box>
          <Box></Box>
          <Box></Box>

        </Container>
        <Container sx={{mt:1,height:"20vh",bgcolor:"primary.light"}}>
          <Box></Box>
          <Box></Box>
          <Box></Box>
          <Box></Box>
          <Box></Box>

        </Container>

      </Container>
      
      <Container id="Services" sx={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center', mt:5 }}>
        <Divider sx={{ p: 1, m: 1, width: '100%' }} />
        
        <Typography variant="h4" sx={{ color: 'text.secondary' }}>Services</Typography>
        <Box sx={{width:'100%'}}>
          <Container sx={{ display: 'flex', flexDirection: 'row', alignItems: 'start', justifyContent: 'space-evenly', width: '100%', p: 2, m: 3,mb:0 }}>
            <CardHover >
              
              <CardMedia className="webdevelopment-service " sx={{ height: '30vh' }} />
              
              <CardContent>
                <Typography variant="h6" color="text.secondary">web development</Typography>
              </CardContent>

          </CardHover>
           <CardHover>
<CardMedia className="ecommerce-service" sx={{ height: '30vh' }} />
              
              <CardContent>
                <Typography variant="h6" color="text.secondary">E-Commerce</Typography>
              </CardContent>
          </CardHover>
           <CardHover>
<CardMedia className="branding-service" sx={{ height: '30vh' }} />
              
              <CardContent>
                <Typography variant="h6" color="text.secondary">Branding</Typography>
              </CardContent>
          </CardHover>

        </Container>
        </Box>
        <Box sx={{width:'100%'}}>
           <Container sx={{ display: 'flex', flexDirection: 'row', alignItems: 'start', justifyContent: 'space-evenly', width: '100%', p: 2, m: 3, mt:0 }}>
          <CardHover>
            <CardMedia className="graphicdesign-service" sx={{ height: '30vh' }} />
              
              <CardContent sx={{ p: 2 }}>
                <Typography variant="h6" color="text.secondary" >Graphic Design</Typography>
              </CardContent>

          </CardHover>
           <CardHover>
            <CardMedia className="seo-service" sx={{ height: '30vh' }} />
              
              <CardContent>
                <Typography variant="h6" color="text.secondary">SEO</Typography>
              </CardContent>

          </CardHover>
           <CardHover>
            <CardMedia className="digital-service"  sx={{ height: '30vh' }} />
              
              <CardContent>
                <Typography variant="h6" color="text.secondary" >Digital Marketing</Typography>
              </CardContent>

          </CardHover>

        </Container>
        </Box>

      </Container>
      <Container id="Internships" sx={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center', mt:5 }}>
<Typography variant="h4" sx={{ color: 'text.secondary' }}>Internship Training</Typography>
        
        <Container sx={{display:'flex',flexDirection:'row', justifyContent:'space-between',m:2,p:2,pb:0,width:'100%'}}>
         
          <Card variant="elevation" elevation={2} sx={{ m: 3, width: '100%' }}>
          

              <CardMedia className="stack"
              sx={{ height: "25vh" }}
              
            />
           <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Fullstack
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>

           <CardActions>
        <Button size="small" sx={{color:'primary.light'}}>Learn More</Button>
        <Button size="small">Contact Us</Button>
      </CardActions>
          </Card>
          <Card variant="elevation" elevation="2" sx={{m:3,width:'100%'}}>
 <CardMedia className="dataScience"
              sx={{ height: "25vh" }}
              
            />
           <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Data Science
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>

           <CardActions>
        <Button size="small" sx={{color:'primary.light'}}>Learn More</Button>
        <Button size="small">Contact Us</Button>
      </CardActions>
          </Card>
          <Card variant="elevation" elevation="2" sx={{m:3,width:'100%'}}>
 <CardMedia className="ai"
              sx={{ height: "25vh" }}
              
            />
           <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          AI & ML
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>

           <CardActions>
        <Button size="small" sx={{color:'primary.light'}}>Learn More</Button>
        <Button size="small">Contact Us</Button>
      </CardActions>
          </Card>
          
        </Container>

        {/* .................. */}
         <Container sx={{display:'flex',flexDirection:'row', justifyContent:'space-between',m:2,p:2,pt:0,width:'100%'}}>
         
          <Card variant="elevation" elevation={2} sx={{ m: 3, width: '100%' }}>
          

              <CardMedia className="devops"
              sx={{ height: "25vh" }}
              
            />
           <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Java
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>

           <CardActions>
        <Button size="small" sx={{color:'primary.light'}}>Learn More</Button>
        <Button size="small">Contact Us</Button>
      </CardActions>
          </Card>
          <Card variant="elevation" elevation="2" sx={{m:3,width:'100%'}}>
 <CardMedia className="digital"
              sx={{ height: "25vh" }}
              
            />
           <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Web Development
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>

           <CardActions>
        <Button size="small" sx={{color:'primary.light'}}>Learn More</Button>
        <Button size="small">Contact Us</Button>
      </CardActions>
          </Card>
          <Card variant="elevation" elevation="2" sx={{m:3,width:'100%'}}>
 <CardMedia className="graphic"
              sx={{ height: "25vh" }}
              
            />
           <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Python
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>

           <CardActions>
        <Button size="small" sx={{color:'primary.light'}}>Learn More</Button>
        <Button size="small">Contact Us</Button>
      </CardActions>
          </Card>
          
      </Container>
      </Container>
      <Box >
      <Container id="faq">
       
          <Container sx={{ p: 3, width: "65vw" }}>
                   <Divider sx={{m:2, color:'text.secondary'}} ><Typography variant="h5">FAQ</Typography></Divider>

          <Faq />
        </Container>

      </Container></Box>
      <Container id="contact">

      </Container>
     <Footer />
      </Box>
      
   
  )
};

export default Home;

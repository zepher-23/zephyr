
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
import { Button, CardActionArea, CardActions, styled } from '@mui/material';
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import "./assets/images/bg5.jpg"
import Faq from "./Components/Faq"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"


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
      elevation={isHovered ? 2 : 0} sx={{ width: '20vw',p:0 }}>
             
{children}
          </Card>

  )
}
const CustomTabs = styled((props) => (
  <Tabs {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" />
    }} />))
  ({
  '& .MuiTabs-indicator': {
    display: 'flex',
      justifyContent: 'center',
    alignItems:'center',
      backgroundColor: 'primary.main',
      boxShadow: '0 4px 12px 0 rgba(0,0,0,0.5)',
      height: '40px',
    // borderTopLeftRadius:'5px',
    // borderTopRightRadius:'5px',
      borderRadius: '10px',
      
      marginBottom: '3.5px',
   
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 60,
    width: '100%',
    height:'0',
    

    backgroundColor: '#fff',
  },

})
  
const CustomTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    fontWeight: 300,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
    color: '#FFFFFF99',
    zIndex:'1000',
    '&.Mui-selected': {
      
      color: '#ffffff88',
    },
    '&.Mui-focusVisible': {
      backgroundColor: 'rgba(100, 95, 228, 0.32)',
    },
  }),
);




const Home = () => {
  
    const [loading, setLoading] = useState(true);
 const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
     const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // Delay of 0.5 second

    return () => clearTimeout(timer);
  }, []);


 
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
      {/* <Container id="partners" maxWidth="lg" sx={{display:"flex",flexDirection:"column",alignItems:'center', height:'60vh',mt:15}}>
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

      </Container> */}
      
      <Container id="Services" sx={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center', mt:5 }}>
        <Typography variant="h4" sx={{ color: 'text.secondary' }}>Services</Typography>
        
        <Box sx={{ width: '100%' }}>
          
          {/* <Divider  sx={{ p: 1, m: 1, width: '100%' }} />         */}
          <Container sx={{ display: 'flex', flexDirection: 'row', alignItems: 'start', justifyContent: 'space-evenly', width: '100%', p: 2, m: 3,mb:0 }}>
            
            <CardHover >
              
              <CardMedia className="webdevelopment-service " sx={{ height: '30vh', backgroundSize:'contain'  }} />
              
              <CardContent>
                <Typography variant="h6" color="text.secondary">Web/Software Development</Typography>
              </CardContent>

          </CardHover>
           <CardHover>
<CardMedia className="ecommerce-service" sx={{ height:'30vh', backgroundSize:'contain' }} />
              
              <CardContent>
                <Typography variant="h6" color="text.secondary">E-Commerce</Typography>
              </CardContent>
          </CardHover>
           <CardHover>
<CardMedia className="branding-service" sx={{ height: '30vh', backgroundSize:'contain'  }} />
              
              <CardContent>
                <Typography variant="h6" color="text.secondary">Branding</Typography>
              </CardContent>
          </CardHover>

        </Container>
        </Box>
        <Box sx={{width:'100%'}}>
           <Container sx={{ display: 'flex', flexDirection: 'row', alignItems: 'start', justifyContent: 'space-evenly', width: '100%', p: 2, m: 3, mt:0 }}>
          <CardHover>
            <CardMedia className="graphicdesign-service" sx={{ height: '30vh', backgroundSize:'contain'  }} />
              
              <CardContent sx={{ p: 2 }}>
                <Typography variant="h6" color="text.secondary" >Graphic Design</Typography>
              </CardContent>

          </CardHover>
           <CardHover>
            <CardMedia className="seo-service" sx={{ height: '30vh', backgroundSize:'contain'  }} />
              
              <CardContent>
                <Typography variant="h6" color="text.secondary">SEO</Typography>
              </CardContent>

          </CardHover>
           <CardHover>
            <CardMedia className="digital-service"  sx={{ height: '30vh', backgroundSize:'contain'  }} />
              
              <CardContent>
                <Typography variant="h6" color="text.secondary" >Digital Marketing</Typography>
              </CardContent>

          </CardHover>

        </Container>
        </Box>

      </Container>
      {/* ....................COURSES.................. */}
      
      <Box className="coursesBanner" sx={{width:'100%'}}>
        <Container sx={{ p: 10, width:'60VW',m:0,ml:4,mt:5 }}>
          
           <Typography variant="h5" sx={{mb:3,color:'text.secondary', fontWeight:'300'}}> "Launch Your Software Career Today - Learn the Fundamentals with Our Programming Courses!"</Typography>
<Typography variant="body1" fontWeight='200'>
            Our programming courses are designed to provide you with
            the essential
            skills and knowledge to kick-start your software career. With our expert instructors,
            you'll learn the fundamentals of programming, develop problem-solving skills, and build a strong
            foundation in programming that can help you excel in any programming language. Plus, completing programming projects
            during the course will enable you to build a portfolio that showcases your skills and sets you apart from other candidates.
            Don't miss out on this opportunity to unlock endless career opportunities in the software industry.
            Enroll now and take the first step towards a bright future in programming.
          </Typography>
          <Typography variant="h6" sx={{color:'text.secondary',mt:2, fontWeight:'300'}}>
            Explore Our Courses - Select Your Ideal Programming Language, Career Track, Framework, and Duration to Customize Your Learning Journey!
          </Typography>
</Container>
      </Box>
      <Box sx={{
        width: '100%', backgroundColor: 'primary.main', py: 1, display: 'flex', flexDirection: 'row',
      justifyContent:'center'}}>
 
        <Box sx={{px:2,backgroundColor:'primary.dark',borderRadius:'10px'}}>
        <CustomTabs
          value={value}
          onChange={handleChange}
            aria-label="styled tabs example"
            
          centered
        >
          <CustomTab label="Language" />
          <CustomTab label="Career Track" />
            <CustomTab label="Frontend" />
            <CustomTab label="Backend" />
            <CustomTab label="Projects" />
        </CustomTabs>
        </Box>
        
      </Box>
      <Box sx={{ width: '100%', height: '60vh' }}>
        <Container sx={{backgroundColor:'primary.dark',height:'10vh'}}></Container>
        <Container sx={{backgroundColor:'primary.main',height:'10vh'}}></Container>
        <Container sx={{backgroundColor:'primary.light',height:'10vh'}}></Container>

        </Box>

      <Container id="Internships" sx={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center', mt:10 }}>
<Typography variant="h4" sx={{ color: 'text.secondary' }}>Internship Training</Typography>
        
        <Container sx={{display:'flex',flexDirection:'row', justifyContent:'space-between',m:2,p:2,pb:0,width:'100%'}}>
         
          <Card variant="elevation" elevation={2} sx={{ m: 3, width: '100%' }}>
          

              <CardMedia className="stack"
              sx={{ height: "25vh", backgroundSize:'contain'  }}
              
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
              sx={{ height: "25vh", backgroundSize:'contain'  }}
              
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
              sx={{ height: "25vh", backgroundSize:'contain'  }}
              
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
              sx={{ height: "25vh", backgroundSize:'contain'  }}
              
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
              sx={{ height: "25vh", backgroundSize:'contain'  }}
              
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
              sx={{ height: "25vh", backgroundSize:'contain'  }}
              
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

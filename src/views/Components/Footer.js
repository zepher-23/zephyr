import React from "react";
import Box from "@mui/material/Box";
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider';
import {styled} from '@mui/material/styles';
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import CopyrightIcon from '@mui/icons-material/Copyright';

const Li = styled(ListItemText)(({ theme }) => ({
    color: theme.palette.primary.text,
    opacity:'0.5',
    transition:'0.1s ease-in-out',
    '&:hover': {
        cursor: 'pointer',
        opacity:'1',
        color:theme.palette.primary.text
    }
}))

const Footer = () => {
    return (
        <div>
            <Box sx={{ height: 'auto',width:'100%',bgcolor:'primary.main' }}>
                <Container sx={{px:0}}>
                    {/* <Divider sx={{pt:5}} /> */}
                    <Container disableGutters={true} sx={{ display: 'flex', flexDirection: 'row',alignItems:'center', width: '100%', m: 1, pt:2}}>
                    <List dense={true} minWidth='md' sx={{mx:1, minWidth:'10vw'}} >
                        <Typography variant="h5" sx={{color:'primary.light'}}>Services</Typography>
                        <Li primary="Web Development" />
                        <Li primary="E-Commerce" />
                        <Li primary="SEO" />
                        <Li primary="Android Development" />
                        <Li primary="Branding" />
                        <Li primary="Graphic Design" />
                        </List>
                        <List dense={true}  sx={{ mx:1,minWidth:'15vw'}}>
                        <Typography variant="h5" sx={{color:'primary.light'}}>Internship & Courses</Typography>
                        <Li primary="Fullstack" />
                        <Li primary="Data Science" />
                        <Li primary="AI & ML" />
                        <Li primary="UX/UI Design" />
                        <Li primary="Quality Assurance" />
                        <Li primary="DevOps" />
                        </List>
                        <Container disableGutters={true} sx={{mx:1,width:'20vw',flexGrow:'1'}}>

                        </Container>
                        <Divider sx={{my:2}} orientation="vertical" flexItem/>
                        <Container disableGutters={true} sx={{width:"3vw",m:2,display:'flex',flexDirection:'column', justifyContent:'center',alignItems:'center'}}>
                            <Link href="https://www.facebook.com/zephyrtechnologiesindia/">
                                <FacebookIcon sx={{ color: "primary.light", '&:hover': { cursor: 'pointer', color: 'white' }, bgcolor: 'primary.dark', my: 1, p: "2px", borderRadius: '5px', transition: '0.2s ease-in-out' }} />
                            </Link> 
                            <Link href="https://in.linkedin.com/company/zephyrtechsolnpvtltd">
                                <LinkedInIcon sx={{ color: "primary.light", '&:hover': { cursor: 'pointer', color: 'white' }, bgcolor: 'primary.dark', my: 1, p: "2px", borderRadius: '5px', transition: '0.2s ease-in-out' }} />
                            </Link>
                            <Link href="https://www.instagram.com/zephyr_technologies/">
                            <InstagramIcon sx={{ color: "primary.light", '&:hover': { cursor: 'pointer', color: 'white' }, bgcolor: 'primary.dark', my: 1, p: "2px", borderRadius: '5px', transition: '0.2s ease-in-out' }} />
                            </Link>
                            <Link>
                            <TwitterIcon sx={{ color: "primary.light", '&:hover': { cursor: 'pointer', color: 'white' }, bgcolor: 'primary.dark', my: 1, p: "2px", borderRadius: '5px', transition: '0.2s ease-in-out' }} />
                            </Link>
                        </Container>
                    </Container>
                    <Divider />
                    <Box sx={{ py:1, justifyContent: 'center', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <CopyrightIcon  sx={{color:'primary.light',fontSize:'18px',opacity:'1'}} />
                        <Typography sx={{ color: 'primary.light', justifyContent: 'center',opacity:'1', alignItems: 'center', display: 'flex', mx: '5px', fontWeight: '700' }} variant="body">
                            Zephyr Technologies and Solutions Pvt. Ltd | 2023</Typography>
                    </Box>


                </Container>
                

            </Box>
      </div>
  );
};

export default Footer;

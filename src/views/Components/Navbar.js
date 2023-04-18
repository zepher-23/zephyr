import React, {useState, useEffect} from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';
import Box from "@mui/material/Box";


const NavLink = styled(Link)({
    transition:'0.1s ease',
    
    '&:hover': {
        transform: 'translateY(-3px)',
        borderBottom: `3px solid #fff`,
        borderRadius:'8px'
        
        
    },

    '&:active': {
        transform: 'translateY(-3px)',
        borderBottom: `3px solid #fff`,
        borderRadius:'8px'
        
        
    }
});




const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = (event) => {
        const tab = document.querySelector('.tab');

        tab.style.transform = 'translateY(0)';
        
        setOpen(true);
        if (open) {
    window.addEventListener('scroll', handleClose)
}
    }

    const handleClose = () => {
        const tab = document.querySelector('.tab');
        tab.style.transform = 'translateY(-150%)';
        
        // setOpen(true)
        

    }
    const [visible, setVisible] = useState(true);
    


  useEffect(() => {
      let prevScrollPos = window.pageYOffset;
     
    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
       
      const visible = currentScrollPos < 550 ;
     setVisible(visible)
       
      prevScrollPos = currentScrollPos;
    };
      
      
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    
    return (
        <Box>
        <AppBar className="navbar" position ='fixed' sx={{px:9,py:2,  transform: visible ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.5s ease-in-out'}}>
            <Toolbar>
                    <Box sx={{display:"flex",flexDirection:"column", flexGrow: '1' }}>
                        <Typography variant="h6" sx={{p:0,m:0,lineHeight:1}}><Link href="/" underline='none' color='inherit'>ZEPHYR</Link></Typography>
                        
                        <Typography variant="body"sx={{fontSize:"12px", color:'primary.text'}} > Technologies & Solutions Pvt. Ltd</Typography>
                </Box>
                <NavLink href='#services' onMouseEnter={handleOpen}  underline="none" sx={{ mx: 2, py: '1px' }} color='inherit'> Services</NavLink>

                <NavLink href='/internships' onMouseEnter={handleClose}  underline="none" sx={{ mx: 2,py:'1px' }} color='inherit'> Internship</NavLink>
                <NavLink href='/courses' onMouseEnter={handleClose} underline="none" sx={{mx:2, py:'1px'}}  color='inherit'> Courses</NavLink>
                <NavLink href='#about' onMouseEnter={handleClose} underline="none" sx={{mx:2, py:'1px'}} color='inherit'> About</NavLink>
                <NavLink href='#contact' onMouseEnter={handleClose} underline="none" sx={{ mx: 2, py: '1px' }} color='inherit'> Contact</NavLink> 
            </Toolbar>
            
            </AppBar>
            <Box position='fixed' className='tab' visibility={open ? 'visible' : 'hidden'} onMouseLeave={handleClose}
                sx={{ width: '100vw', height: '30vh',opacity:'0.9', backgroundColor: 'primary.main', zIndex: '99',transform:'translateY(-150%)', transition: '0.5s ease-out' }}>

            </Box>
        </Box>
    )
};

export default Navbar;

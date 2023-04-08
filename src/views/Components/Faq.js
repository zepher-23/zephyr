import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from "react";
import Box from "@mui/material/Box";

const Faq = () => {
    
const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

    return (
        <Box >
         <Accordion variant="outlined" expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6" sx={{fontWeight:'400', color:'text.secondary'}}>What is Fullstack Development?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
              Full stack development is a term used to describe a software development process that involves
              working on both the front-end and back-end of a web application.
              Full stack developers have the ability to work on all aspects of a web application,
              including the user interface, server-side logic, and database management.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion variant="outlined" expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant="h6" sx={{fontWeight:'400', color:'text.secondary'}}>What is DevOps?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
              DevOps is a set of practices that combines software development and IT operations to improve collaboration,
              communication, and automation throughout the software development lifecycle. The goal of DevOps is to increase
              the speed and efficiency of software development,
              while also improving the quality and reliability of software releases.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion variant="outlined" expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography variant="h6" sx={{fontWeight:'400', color:'text.secondary'}}>Not Disabled</Typography>
                </AccordionSummary>
                <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
        </Box>
    );
};

export default Faq;

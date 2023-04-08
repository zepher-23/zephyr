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
          <Typography variant="body1" sx={{fontWeight:'400', color:'text.secondary'}}>What is Fullstack Development?</Typography>
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
          <Typography variant="body1" sx={{fontWeight:'400', color:'text.secondary'}}>How to build skills for my career as a Software Developer?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
              To build skills as a software developer, you should practice coding regularly, stay up to date with the latest trends and
              technologies, collaborate with other developers, develop problem-solving and communication skills,
              focus on writing quality code, and practice good time management.
          </Typography>
        </AccordionDetails>
        </Accordion>
         <Accordion variant="outlined" expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography variant="body1" sx={{fontWeight:'400', color:'text.secondary'}}>What  programming language should I learn?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
              Choosing a programming language depends on your goals, interests, and the type of projects you want to work on.
              Consider job trends, your background, and explore online communities. Try out different languages before committing to one.
              Ultimately, choose a language that meets your individual needs and interests.
          </Typography>
        </AccordionDetails>
        </Accordion>
         <Accordion variant="outlined" expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography variant="body1" sx={{fontWeight:'400', color:'text.secondary'}}>What will I learn with an Internship at Zephyr?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
              Working for a software development company involves learning programming languages, software development methodologies,
              version control, testing, deployment, project management, communication, collaboration, and soft skills.
              As you gain more experience, you may specialize in specific areas such as front-end or back-end development.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion variant="outlined" expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5a-content"
          id="panel5a-header"
        >
          <Typography variant="body1" sx={{fontWeight:'400', color:'text.secondary'}}>What can Zephyr provide me more than the college?</Typography>
                </AccordionSummary>
                <AccordionDetails>
          <Typography >
              A software company can provide practical, real-world experience in software development,
              teach best practices, teamwork, industry knowledge, problem-solving skills,
              and specialized knowledge. While colleges provide a solid foundation, a software
              company can offer more relevant knowledge for the industry.
          </Typography>
        </AccordionDetails>
      </Accordion>
        </Box>
    );
};

export default Faq;

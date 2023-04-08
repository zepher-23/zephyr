import React from "react";
import CircularProgress from '@mui/material/CircularProgress'
import '../assets/css/preloader.css'

const Preloader = () => {
    return (
      <div className="preloader">
            <CircularProgress sx={{ zIndex: '9999' }} color='preLoader' />
    </div>
  ) ;
};

export default Preloader;

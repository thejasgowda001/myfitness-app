import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.jpg';

const HeroBanner = () => (
  <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography color="#000" fontWeight="600" fontSize="26px">MyFitness Club</Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
      Respect <br />
      Your Body
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
      Discover the exercises that best suit your fitness goals
    </Typography>
    <Stack>
      <a href="#exercises" className="exercise-btn" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: 'rgb(246, 139, 0)', padding: '14px', fontSize: '22px', textTransform: 'none', color: '#000', borderRadius: '4px' }}>Explore Exercises</a>
    </Stack>
    <Typography fontWeight={600} color="rgb(246, 139, 0)" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Exercise
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;

import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/muscle.png';

const Footer = () => (
  <Box mt="80px" bgcolor="rgb(246, 139, 0)">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="MyFitness Club" style={{ width: '200px', height: '80px' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px"> Made by Thejas </Typography>
  </Box>
);

export default Footer;

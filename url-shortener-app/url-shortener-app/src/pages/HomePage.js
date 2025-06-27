import React, { useState } from 'react';
import UrlShortenerForm from '../components/UrlShortenerForm';
import StatsPage from './StatsPage';
import { Box } from '@mui/material';

const HomePage = () => {
  const [shortened, setShortened] = useState([]);

  return (
    <Box>
      <UrlShortenerForm onShorten={(data) => setShortened(prev => [...prev, data])} />
      <StatsPage stats={shortened} />
    </Box>
  );
};

export default HomePage;

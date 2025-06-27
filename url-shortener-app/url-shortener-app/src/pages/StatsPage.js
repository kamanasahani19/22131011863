import React from 'react';
import { Typography, Box } from '@mui/material';

const StatsPage = ({ stats }) => (
  <Box p={2}>
    <Typography variant="h5">URL Shortener Statistics</Typography>
    {stats.map((stat, idx) => (
      <Box key={idx} mt={2} border={1} p={2}>
        <Typography><strong>Short URL:</strong> {stat.shortUrl}</Typography>
        <Typography><strong>Created:</strong> {stat.createdAt}</Typography>
        <Typography><strong>Expiry:</strong> {stat.expiry}</Typography>
        <Typography><strong>Clicks:</strong> {stat.clicks.length}</Typography>
        {stat.clicks.map((click, i) => (
          <Box key={i} ml={2}>
            <Typography>Time: {click.timestamp}</Typography>
            <Typography>From: {click.source}</Typography>
            <Typography>Location: {click.geo}</Typography>
          </Box>
        ))}
      </Box>
    ))}
  </Box>
);

export default StatsPage;

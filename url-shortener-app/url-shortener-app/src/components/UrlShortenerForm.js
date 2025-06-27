import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import logger from '../middleware/logger';
import { validateUrl, validateShortcode, validateMinutes } from '../utils/validators';
import { shortenUrl } from '../utils/api';

const UrlShortenerForm = ({ onShorten }) => {
  const [urls, setUrls] = useState([{ url: '', validity: '', shortcode: '' }]);

  const handleChange = (index, field, value) => {
    const newUrls = [...urls];
    newUrls[index][field] = value;
    setUrls(newUrls);
  };

  const handleSubmit = async () => {
    for (let i = 0; i < urls.length; i++) {
      const { url, validity, shortcode } = urls[i];
      if (!validateUrl(url)) return alert("Invalid URL");

      const data = await shortenUrl({ url, validity, shortcode });
      logger('Shortened URL created', { input: urls[i], result: data });
      onShorten(data);
    }
  };

  return (
    <Box>
      {urls.map((entry, idx) => (
        <Box key={idx} mb={2}>
          <TextField label="Long URL" fullWidth onChange={(e) => handleChange(idx, 'url', e.target.value)} />
          <TextField label="Validity (mins)" fullWidth onChange={(e) => handleChange(idx, 'validity', e.target.value)} />
          <TextField label="Custom Shortcode" fullWidth onChange={(e) => handleChange(idx, 'shortcode', e.target.value)} />
        </Box>
      ))}
      <Button variant="contained" onClick={handleSubmit}>Shorten</Button>
    </Box>
  );
};

export default UrlShortenerForm;

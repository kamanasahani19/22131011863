export const shortenUrl = async ({ url, validity, shortcode }) => {
  const response = await fetch('http://localhost:5000/api/shorten', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ url, validity, shortcode })
  });
  return await response.json();
};

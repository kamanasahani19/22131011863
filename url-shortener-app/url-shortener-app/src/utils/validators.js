export const validateUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export const validateShortcode = (code) => /^[a-zA-Z0-9]{4,10}$/.test(code);
export const validateMinutes = (mins) => !isNaN(mins) && parseInt(mins) > 0;

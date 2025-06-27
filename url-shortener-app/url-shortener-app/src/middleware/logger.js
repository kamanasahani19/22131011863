const logger = (message, data = {}) => {
  const log = {
    timestamp: new Date().toISOString(),
    message,
    ...data
  };
  localStorage.setItem('lastLog', JSON.stringify(log));
};

export default logger;

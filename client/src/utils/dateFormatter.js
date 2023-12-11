const formatDate = (timestamp, locale = 'en-US') => {
  const date = new Date(parseInt(timestamp))
  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  };
  
  return date.toLocaleString(locale, options);
};

export default formatDate;
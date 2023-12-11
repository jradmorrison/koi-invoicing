const formatDate = (timestamp, locale = 'en-US') => {
  const date = new Date(parseInt(timestamp))
  // console.log(timestamp);
  // console.log(date);
  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  };
  
  return date.toLocaleString(locale, options);
};

export default formatDate;
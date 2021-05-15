const fixDate = (date) => {
  if (date < 1) return `${-1 * date + 1} BCE`;
  return date;
};

export default fixDate;

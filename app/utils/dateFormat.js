export const formateDate = (dateString) => {
  const date = new Date(dateString);

  const day = date.getDay();
  const year = date.getFullYear();
  const monthIndex = date.getMonth();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = months[monthIndex];

  return `${day} ${month} ${year}`;
};

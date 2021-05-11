export const getDate = (date: string) => {
  const result = new Date(date);

  const year = result.getFullYear();
  const month = result.getMonth();
  const day = result.getDay();

  let monthName;

  switch (month) {
    case 0:
      monthName = "January";
      break;
    case 1:
      monthName = "Fabruary";
      break;
    case 2:
      monthName = "March";
      break;
    case 3:
      monthName = "April";
      break;
    case 4:
      monthName = "May";
      break;
    case 5:
      monthName = "June";
      break;
    case 6:
      monthName = "July";
      break;
    case 7:
      monthName = "August";
      break;
    case 8:
      monthName = "September";
      break;
    case 9:
      monthName = "October";
      break;
    case 10:
      monthName = "November";
      break;
    case 10:
      monthName = "December";
      break;
    default:
      monthName = "Some Month in Future";
      break;
  }

  return `${monthName} ${day}, ${year}`;
};

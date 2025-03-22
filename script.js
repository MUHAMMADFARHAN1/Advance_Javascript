/*
Exercise 1 Completed!

function calculateDateDifference(date_1, date_2) {
  let date1 = new Date(date_1);
  let date2 = new Date(date_2);

  let daysOne = date1.getDate();
  let daysTwo = date2.getDate();

  let hoursOne = date1.getTime() / (1000 * 3600);
  let hoursTwo = date2.getTime() / (1000 * 3600);

  let minutesOne = date1.getTime() / (1000 * 60);
  let minutesTwo = date2.getTime() / (1000 * 60);

  if (date1 > date2) {
    console.log("The difference in days is: " + (daysOne - daysTwo));
    console.log(
      "The difference in hours is: " + Math.round(hoursOne - hoursTwo)
    );
    console.log(
      "The difference in minutes is: " +
        Math.round(minutesOne - minutesTwoinutesTwo)
    );
  } else {
    console.log("The difference in days is: " + (daysTwo - daysOne));
    console.log(
      "The difference in hours is: " + Math.round(hoursTwo - hoursOne)
    );
    console.log(
      "The difference in minutes is: " + Math.round(minutesTwo - minutesOne)
    );
  }
}

calculateDateDifference("2023-10-05 14:30:45", "2023-10-10 10:15:30");
*/

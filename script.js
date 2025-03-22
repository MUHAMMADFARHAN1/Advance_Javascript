/*
//  Exercise 1 Completed!

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

    console.log(
      daysOne -
        daysTwo +
        " days, " +
        Math.round(hoursOne - hoursTwo) +
        " hours, " +
        Math.round(minutesOne - minutesTwo) +
        " minutes"
    );
  } else {

    console.log(
      daysTwo -
        daysOne +
        " days, " +
        Math.round(hoursTwo - hoursOne) +
        " hours, " +
        Math.round(minutesTwo - minutesOne) +
        " minutes"
    );
  }
}

calculateDateDifference("2023-10-05 14:30:45", "2023-10-10 10:15:30");
*/
// ^[A-Za-z]{3}-\d{6}$
/*
function validateProductSKU(input) {
  let regexCheck = /^[A-Za-z]{3}-\d{6}$/;
  let test = regexCheck.test(input);
  //   console.log("The result is: " + test);
  return test;
}
console.log(validateProductSKU("ABC-123456"));
console.log(validateProductSKU("123-ABCDEF"));
// validateProductSKU("ABC-123456");
*/

// Exercise 3 - there is some cinfusion here still
//https://www.tutorialspoint.com/javascript/javascript_setinterval.htm
// I had to copy the syntax for the function from above website, regular one doesnt work
//COnfusion solved
/*
function processOrder(orderId, callback, delay) {
  console.log(`The order received ${orderId}, beginning with proceessing.`);

  //This is wrong syntax, the one in line immediatelz below is right, but it cn be used as we only want single trigger setTimeout(callback(orderId));
  setTimeout(callback, 0, orderId);
}

processOrder(
  "ORDER123",
  (order) => {
    console.log(`Payment confirmed for order: ${order}`);
    setTimeout(() => {
      console.log(`Order shipped: ${order}`);
    }, 2000);
  },
  10000
);
*/

//Exercise 4
//https://www.tutorialspoint.com/javascript/javascript_setinterval.htm
// I had to copy the syntax for the function from above website, regular one doesnt work
function monitorInventory(productId, callback, delay) {
  console.log(`The order received ${productId}, beginning with proceessing.`);
  let stock = 5;
  setInterval(callback, delay, stock);
}

monitorInventory("PROD123", (stock) => console.log(stock), 2000);

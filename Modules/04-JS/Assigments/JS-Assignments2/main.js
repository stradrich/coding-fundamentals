function calculateAge(birthdate) {
    // Current dd/mm/yyyy (max and min date)
    const maxDate = new Date();
    const minDate = ['01/01/1900']; 
    let currentAge;
    
    // Split string from parameter/argument (birthdate) and turn it into an array
    let formatedDate = birthdate.split("/"); 

    // dd/mm/yyyy as an array
    console.log(formatedDate[0]); // day = [0];
    console.log(formatedDate[1]); // month = [1];
    console.log(formatedDate[2]); // year = [2];

    // Different months have different days (How to express this properly?!)
    // let monthWithThirtyOneDays = ["01", '03', '05', '07','08','10','12'] 
    // let monthWithThirtyDays = ['04','06','09','11']
    // let monthWithTwentyEightDays = ['02'] // non leap year
    // let monthWithTwentyNineDays = ['02'] // leap year
    // formatedDate[1] has 4 possibilities....formatedDate[2] has 2 possibilities
    
    // Check if age is the same as current date
    if (birthdate === maxDate) {
        console.log('Welcome to the world!')
    // Check if age is the too old to be true
    } else if (birthdate <= minDate) {
        console.log('Wow, rare centenarian, why are you still alive?! ')
    // Check if age is smaller and greater than current date, if so, current date subtract birthday
    } else if (birthdate > minDate && birthdate < maxDate) {
        currentAge = maxDate - formatedDate;   
    } else {
        console.log('You are not born yet')
    } return currentAge; 



    // for (let i = 0; i < 2; i++) {
    //     currentAge = currentAge + year[2];
    // }
    // return currentAge;
}

calculateAge('30/01/2023'); // Should be the same as current date. Output: Welcome to the world!
calculateAge('01/01/2030'); // Output: Wow, rare centenarian, why are you still alive?! 
calculateAge('01/01/1991'); // Output: 32
calculateAge('01/01/2030'); // Output: You are not born yet!


// Sigma's  expected output
// console.log(calculateAge("20/7/2002") === 19)
// console.log(calculateAge("1/1/1979") === 43) 


// console.log(calculateAge("20/7/2002")) // output: 19
// console.log(calculateAge("1/1/1979")) // output: 43







// STEPS
// 29th January 2023
// Step 1: split string into day, dd/mm/yyyy
// Step 2: leap year or non leap year (I actually don't need this)
// Step 3: current date minue split string
// Step 4: Join spilt string and return current age

// 20th January 2023
// Step 1: How to split the string into dd/mm/yyyy
// Step 2: Leap Year or Non Leap Year?
// Step 3: Turn everything into days
// Step 4: Leap Year = 366; Non Leap Year = 365
// Step 5: currentYear = leap or not leap? birthday = leap or not leap? 
// in between years, how many is leap and not leap? 
// Step 6: Sum of all the day and turn into a year
// Step 7: Return age (You are dd/mm/yyyy years old);
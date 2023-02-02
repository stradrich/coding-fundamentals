function calculateAge(date) {
    // Change dob from paramter into string
    let dob = new Date(date)
    
 
    // Calculate month difference from the current date (in milliseconds)
    let monthDifferences = Date.now() - dob.getTime(); // get current date and time from the built in method, returns the number of milliseconds since January 1, 1970 00:00:00.
    
    // Convert monthDifference in date format 
    let currentAge = new Date(monthDifferences);
    
    // Extract year from date format 
    let year = currentAge.getUTCFullYear() 
    
    // Calculate the user's age
    let realAge = (year - 1970) // returns the number of milliseconds since January 1, 1970 00:00:00.


    if (isNaN(realAge)) {
        console.log('Unrecognized format, please use the correct date format mm/dd/yyy')
    } else if (realAge == '0') {
        console.log('Welcome to the world!')
    } else if (realAge < '0') {
        console.log('You\'re not born yet!') 
    } else if (realAge > '100') {
        console.log(`Wow, you are ${realAge}! A true centenarian, what is keeping you alive?`)
    } else
    console.log(realAge);
    

}


calculateAge('abc');
calculateAge('01/31/2023');
calculateAge('01/01/2030');
calculateAge('01/01/1900');
calculateAge('01/01/1991');


//Sigma's expected output
console.log(calculateAge("20/7/2002") === 19)
console.log(calculateAge("1/1/1979") === 43)


// References: 
// https://www.freecodecamp.org/news/javascript-date-format-how-to-format-a-date-in-js/
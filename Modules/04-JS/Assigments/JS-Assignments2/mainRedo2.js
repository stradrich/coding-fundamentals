function calculateAge(date) {
   // Manipulate date format to whatever you want, in this case, dd/mm/yyyy
   let birthdate = date.split('/');
   let dayUK = birthdate[0];
   let monthUK = birthdate[1];
   let yearUK = birthdate[2];

   let dateFormatUK = `${monthUK}/${dayUK}/${yearUK}`
    
    var dob = new Date(dateFormatUK);
    //calculate month difference from current date in time
    var month_diff = Date.now() - dob.getTime();
    
    //convert the calculated difference in date format
    var age_dt = new Date(month_diff); 
    
    //extract year from date    
    var year = age_dt.getUTCFullYear();
    
    //now calculate the age of the user
    var age = (year - 1970);
  
      if (isNaN(age)) {
    console.log(" Wrong date format, pls check local date format, DD/MM/YYYY")

      }  else if (age == "0") { 
   console.log("Welcome to the world!")
             
      }  else if (age < "0") { 
   console.log("You are not born yet!")
  
  } else if (age> "100") {
   console.log("Age of " + age + ". Wow, rare centenarian, why are you still alive?!")
  
  }else
   console.log(age)
}

calculateAge("01/30/2023"); // Should be the same as current date. Output: Welcome to the world!
calculateAge("01/01/1900"); // Output: Wow, rare centenarian, why are you still alive?! 
calculateAge("01/01/1991"); // Output: 32
calculateAge("01/01/2030"); // Output: You are not born yet!
calculateAge("02/07/2002"); // Output: 20
calculateAge("01/01/1979"); // Output: 44
calculateAge("30/01/1979"); // Output: wrong date format

// Sigma's expected output
// console.log(calculateAge("20/7/2002") === 19)
// console.log(calculateAge("1/1/1979") === 43) 
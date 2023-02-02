 // Change format to your desired order 
 let objectDate = new Date();

 let day = objectDate.getDate();
 console.log(day); // 31
 
 let month = objectDate.getMonth();
 console.log(month + 1); // 2
 
 let year = objectDate.getFullYear();
 console.log(year); // 2023
 
  let format1 = month + "/" + day + "/" + year;
 console.log(format1); // 7/23/2022
 
 let format2 = day + "/" + month + "/" + year;
 console.log(format2); // 23/7/2022
 
 let format3 = month + "-" + day + "-" + year;
 console.log(format3); // 7-23-2022
 
 let format4 = day + "-" + month + "-" + year;
 console.log(format4); // 23-7-2022
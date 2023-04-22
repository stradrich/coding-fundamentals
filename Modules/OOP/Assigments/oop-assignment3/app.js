// Task: Build a Calendar App

// In this assignment, you are going to build a calendar app. Here's a guide on what the app should have:

// User can run the app.
// User can view their schedules.
// User can add a new event.
// User can edit an existing event title and time.
// User can cancel an event.
// User can quit the app.

const prompt = require('prompt-sync')();

class CalendarApp {
   
    constructor() {
       const table = [];
      //  this.i = 1; ${this.i}
       this.promptMessage = `
      ---------- CALENDAR APP ----------
      How'd you like to organize your schedule? 
      1. View my Calendar
      2. Add new event
      3. Edit an event
      4. Cancel an event 
      5. Quit app

      Enter (1/2/3/4/5):
    `;
    // CREATE DATA SLOTS
       // row = 'Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Satuday'
       this.rows = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
       // col = `00:00 01:00 02:00 03:00 04:00 05:00 06:00 07:00 08:00 09:00 10:00 11:00 12:00 13:00 14:00 15:00 16:00 17:00 18:00 19:00 20:00 21:00 22:00 23:00 ` 
       const timeArr = Array.from({length: 24}, (_, i) => i < 10 ? `0${i}:00` : `${i}:00`); // creates an array of 24 strings, where each string represents a 1-hour time value in 24-hour format.
       this.col = timeArr;

       for (let i = 0; i < this.rows.length; i++) {
        const row = [];
        for (let j = 0; j < this.col.length; j++) {
           row.push([]);
        }
        table.push(row);
     }
  
     this.schedule = table; // to access the event at Sunday 1:00 pm, you would use this.schedule[0][13][0] >>> [col][row][? Can insert many tasks in that particular hour]
    //  this.schedule[2][12] // Tuesday 12:00 pm
   
    }

    // print all the time slots with different days
     displayTable() {
        console.log('\t' + this.col.join('\t'));
        for (let i = 0; i < this.rows.length; i++) {
        console.log(`${this.rows[i]}\t${this.schedule[i].map((col) => col.length > 0 ? 'X' : '-').join('\t')}`);
      }
      }

  
    // STEP 1: RUN APP
    run() {
    let input = prompt(this.promptMessage)
    console.log(input)
    
    switch (parseInt(input)) {
     
      default:
        console.log("Invalid input, please try again")
        break;

    // OPTION 1
        // STEP 2: VIEW SCHEDULE  
      case 1: 
      // console.log('hi')
      console.log(this.schedule) // View time slots in console
     
      break;

      // AFTER VIEW (1) SHOULD BE ABLE TO GO BACK TO MAIN MENU! (2) Update changes 
      

    // OPTION 2
      // STEP 3: ADD NEW EVENT
      case 2:
      const newEventInput = prompt(`How'd you like use your time slot? 
                            (i.g) input | Monday, 12PM, hiking | would be 1 12 hiking : `)  // access: Sunday, 12am would be [0][0][0], Monday, 1pm would be [1][13][0]
                                          // [Day: Sunday = 0, Monday = 1 ... so on], [Time: 0-23], [Event(s)]
                                          // The input expected by the prompt is in the format of [Day][Time][Event(s)], where [Day] is an integer between 0 and 6 representing the day of the week (0 being Sunday, 1 being Monday, etc.), [Time] is an integer between 0 and 23 representing the hour of the day, and [Event(s)] is a string describing what the user wants to use the time slot for.
      // break;
      console.log('TEST')

      // !!!add some input validation code to ensure that the user input is within the expected range of values.

      let dayTimeEeventpart = newEventInput.split(' ') // split the input string into an array of parts using '[' as the delimiter
      let days = parseInt(dayTimeEeventpart[0]) // extract the day value from the second element of the array
      let time = parseInt(dayTimeEeventpart[1]) // extract the time value from the third element of the array
      let events = dayTimeEeventpart[2]
      // let events = dayTimeEeventpart[2].substring(0, dayTimeEeventpart[3].length - 1) // extract the event description from the fourth element of the array, removing the closing bracket at the end

      this.schedule[days][time].push(events);  // 6 17 Meeting 
      break;

    // OPTION 3
      // STEP 4: EDIT EVENT 

       case 3:
      const editEventInput = prompt(`Which time slot you'd like to edit? 
                            (i.g) access: Sunday, 12am would be [0][0][0],
                                          Monday, 1pm would be [1][13][0]`) 
                                          // [Day: Sunday = 0, Monday = 1 ... so on], [Time: 0-23], [Event(s)]
                                          // The input expected by the prompt is in the format of [Day][Time][Event(s)], where [Day] is an integer between 0 and 6 representing the day of the week (0 being Sunday, 1 being Monday, etc.), [Time] is an integer between 0 and 23 representing the hour of the day, and [Event(s)] is a string describing what the user wants to use the time slot for.
      //  break;

     // !!!add some input validation code to ensure that the user input is within the expected range of values.

     // !!! it's possible that there may be multiple events scheduled for the same time slot. 
     // !!! To fix this, you could add some code to prompt the user to select which event they want to edit, or modify the input format to allow for multiple events to be listed in the input string.

      let editDayTimeEventpart = editEventInput.split['['] // split the input string into an array of parts using '[' as the delimiter
      let editDays = parseInt(editDayTimeEventpart[1]) // extract the day value from the second element of the array
      let editTime = parseInt(editDayTimeEventpart[2]) // extract the time value from the third element of the array
      let editEvents = editDayTimeEventpart[3].substring(0, editDayTimeEventpart[3].length - 1) // extract the event description from the fourth element of the array, removing the closing bracket at the end

      this.schedule[editDays][editTime].push(editEvents); 
      break;
  
    // OPTION 4
      // STEP 5: DELETE EVENT
      case 4:

        let deleteEventInput = prompt(`Which time slot you'd like to delete? 
                              (i.g) access: Sunday, 12am would be [0][0][0]
                                            Monday, 1pm would be [1][13][0]`) 
                                            // [Day: Sunday = 0, Monday = 1 ... so on], [Time: 0-23], [Event(s)]
                                            // The input expected by the prompt is in the format of [Day][Time][Event(s)], where [Day] is an integer between 0 and 6 representing the day of the week (0 being Sunday, 1 being Monday, etc.), [Time] is an integer between 0 and 23 representing the hour of the day, and [Event(s)] is a string describing what the user wants to use the time slot for.
  
        // !!!add some input validation code to ensure that the user input is within the expected range of values.

        let deleteDayTimeEeventpart = deleteEventInput.split['['] // split the input string into an array of parts using '[' as the delimiter
        let deleteDays = parseInt(deleteDayTimeEeventpart[1]) // extract the day value from the second element of the array
        let deleteTime = parseInt(deleteDayTimeEeventpart[2]) // extract the time value from the third element of the array
        let deleteEvents = deleteDayTimeEeventpart[3].substring(0, deleteDayTimeEeventpart[3].length - 1) // extract the event description from the fourth element of the array, removing the closing bracket at the end
  
        this.schedule[deleteDays][deleteTime][deleteEvents] = deleteEventInput; 
        break; 
  
    // OPTION 4
      // STEP 6: QUIT APP
      case 5:
      console.log('Ciao bella!')
      return

    }
    this.run();
    }
}

const myCalendarApp = new CalendarApp
myCalendarApp.run()


// Month
// Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday
// date?
// Time




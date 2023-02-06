function weeklySalary(hours) {
    // let salary = 10 * hours 
    // let overTime = 15 * hours 
    let weekends = hours.indexOf[5][6];

    if (weekends) {
        total = (20 * 8) + (30 *(hours - 8)) 
    } else if (hours < 8) {
        total = (10 * 8) + (15 * (hours - 8))
    } else if (hours === 8) {
        total = hours * 10
    } else if (hours === 0) {
        total = 0;
    }
        
}

console.log(weeklySalary([8, 8, 8, 8, 8, 0, 0]) === 400)
console.log(weeklySalary([10, 10, 10, 0, 8, 0, 0]) === 410)
console.log(weeklySalary([0, 0, 0, 0, 0, 12, 0]) === 280)

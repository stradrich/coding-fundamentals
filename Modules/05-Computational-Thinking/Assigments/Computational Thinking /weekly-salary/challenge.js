function calculateSalary(hour, day) {
    const isWeekends = [6,7].includes(day) 
    const normalRate = 10 
    const overtimeRate = 15
    let salary = 0;


    if (hour <= 8) {
        salary = hour * normalRate
    } else {
        salary = (8 * normalRate) + ((hour - 8) * overtimeRate) 
    }
    return isWeekends ? salary * 2 : salary
     
}

console.log(calculateSalary(8,1))
console.log(calculateSalary(10,5))
console.log(calculateSalary(5,7))

function weeklySalary(hours) {
    return hours.reduce((total, current, index) => total + calculateSalary(current, index + 1), 0)
        
}

console.log(weeklySalary([8, 8, 8, 8, 8, 0, 0]) === 400)
console.log(weeklySalary([10, 10, 10, 0, 8, 0, 0]) === 410)
console.log(weeklySalary([0, 0, 0, 0, 0, 12, 0]) === 280)
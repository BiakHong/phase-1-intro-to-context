// Your code here
function createEmployeeRecord(arr){
    let object = {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return object

}
function createEmployeeRecords(arrOfArr){
   let newArr = [];
   for(let i=0; i<arrOfArr.length; i++) {
       newArr[i]=createEmployeeRecord(arrOfArr[i])
    }
       return newArr;

}
function createTimeInEvent(empObj, date){
    let timeNdate = date.split(' ');
    let timeInObj = {
        type:"TimeIn",
        hour: parseInt(timeNdate[1]),
        date: timeNdate[0]
    }
    let updated = empObj
    updated.timeInEvents.push(timeInObj)

    return updated;

}
function createTimeOutEvent(empObj, date){
    let timeNdate = date.split(' ');
    let timeInObj = {
        type:"TimeOut",
        hour: parseInt(timeNdate[1]),
        date: timeNdate[0]
    }
    let updated = empObj
    updated.timeOutEvents.push(timeInObj)

    return updated;

}
function hoursWorkedOnDate(empObj, date){
  const timeIn = empObj.timeInEvents.find(event => event.date === date).hour
  const timeOut = empObj.timeOutEvents.find(event => event.date === date).hour

  return (timeOut - timeIn) / 100

}
function wagesEarnedOnDate(empObj, date){
    let wage = empObj.payPerHour;
    let hours = hoursWorkedOnDate(empObj, date)
    let total = wage * hours;
    return total;

}

function allWagesFor(empObj){
    let totals = empObj.timeInEvents.reduce((acc, date) => {
    
        return acc + wagesEarnedOnDate(empObj, date.date)
      }, 0) 
    
return totals

}
function calculatePayroll(empObj){
    let allEmp = empObj.reduce((acc, emp)=>{
        return acc + allWagesFor(emp)
    },0)
    return allEmp

}
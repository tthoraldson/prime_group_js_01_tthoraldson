// Completed by: Theresa T on 7/28/2016

var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

var employees = [atticus, jem, boo, scout];
var empSTIArray = [];

function Person(employeeName, employeeNumber, currentSalary, employeeRating) {
  this.employeeName = employeeName;
  this.employeeNumber = employeeNumber;
  this.currentSalary = currentSalary;
  this.employeeRating = employeeRating;
}

employees.forEach(function(person, i){
      employees[i] = new Person(person[0], person[1], person[2], person[3]);

});


employees.forEach(fun);

// function!
function fun(name) {
  var empArray = [];
  var bonus;
  name.currentSalary = parseInt(name.currentSalary); //turns employeeSalary into a number
  empArray.push(name.employeeName); //adds the name to the new array!

  switch(name.employeeRating){  //the employeeRating is entered into the switch
    case 2:
      bonus = 0;      // bonus is saved as float
      break;
    case 3:
      bonus = 0.04;   // 4% for a 3 rating
      break;
    case 4:
      bonus = 0.06;   // 6% for a 4 rating
      break;
    case 5:
      bonus = 0.1;    // 10% for a 5 rating
      break;
    default:
      bonus = 0;      // 0% for a defult
    }

    if(name.employeeNumber.length == 4) { // if the employee has been with the company for 15 years...
      bonus += 0.05;                      // +0.05 bonus
      parseInt(name.employeeNumber);
    }

    if (name.currentSalary > 65000) {     // currentSalary cap for bonus
      bonus -= 0.01;
    }
    if (bonus >= 0.13) {                  // bonus cap at 0.13
      bonus = 0.13;
    }

    var bonusAmount = bonus * name.currentSalary;     // the total bonus amount (without the current salary)
    var salary =  bonusAmount + name.currentSalary;   // the bonus amount + current salary

    empArray[1] = bonus;                              // appends the new array with their bonus
    empArray[2] = salary;                             // appends the new array with their new salary
    empArray[3] = Math.round(bonusAmount);



    empSTIArray.push(empArray);
    console.log(empArray);
    //document.write(empArray + "<br>");

    for (i = 0; i < empArray.length; i++) {
      document.write(empArray[i] + " ");
    }
  document.write("<br>");
}


//functions for the assignment with number and strings inclusive
function jamAssignmentDone (number1, number2, string_1){
    if (string_1 == "multiply"){
       const multiplicationDone = number1 * number2;
       console.log(multiplicationDone);
       return 

    }else if (string_1 == "divide"){
        const divisionDone = number1 / number2;
        console.log(divisionDone);
       return
       
    }else if (string_1 == "sum"){
        const sumDone = number1 + number2;
        console.log(sumDone)
        return
    }
}
//assigning properties to the function
jamAssignmentDone(50, 40,"multiply")
jamAssignmentDone(200, 10, "divide")
jamAssignmentDone(350, 200, "sum")
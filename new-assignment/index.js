function doMath (firstNumber, secondNumber, string){
  
    if(string==='multiply'){
      const productOfNumber = firstNumber * secondNumber
      return productOfNumber
      }
  
    if (string==='divide'){
    const divisionOfNumber = firstNumber / secondNumber
    return divisionOfNumber
    }
  
    if (string==='sum'){
    const sumOfNumber = firstNumber + secondNumber
    return sumOfNumber
    }
    }
    const result = doMath (20, 2, 'sum')//we can change the properties here if need be to give us a different result
    console.log (result)
  
   
  const pet = function(name) {
    const getName = function() {
      return name;
    }
    return getName;  
  }
  myPet = pet('Vivie');
  
  myPet(); 
  
  
  function myFunc(theObject) {
    theObject.brand = "Toyota";
  }
  
    const mycar = {
    brand: "Honda",
    model: "Accord",
    year: 1998
  };
  
  console.log(mycar.brand);
  
  myFunc(mycar);
  
  console.log(mycar.brand);
  
  "concatenation" is a fancy word for "stick these things together"
  Example:
  "Numeric" + "Addition"= "NumericAddition"
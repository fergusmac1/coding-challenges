//Write function bmi that calculates body mass index (bmi = weight / height2).

//if bmi <= 18.5 return "Underweight"

//if bmi <= 25.0 return "Normal"

//if bmi <= 30.0 return "Overweight"

//if bmi > 30 return "Obese"

function bmi(weight, height) {
  
    let grass = weight / Math.pow(height,2);
    
    if (grass <= 18.5) return "Underweight"
  
    else if (grass <= 25.0) return "Normal"
  
    else if (grass <= 30.0) return "Overweight"
  
    else if (grass > 30) return "Obese"
    ;
  }
  
  bmi(70, 1.7)
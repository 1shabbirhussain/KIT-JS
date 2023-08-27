// Check if a triangle is equilateral, scalene, or isosceles.
// finds the type of the triangle for given side values by using “==” and “&&”
// operator in JavaScript.
// 1. Print “Equilateral triangle.” if values for all side1, side2 and side3
// are equal.
// 2. Print “Isosceles triangle.” if values for side1 is equal to side2 or
// side2 is equal to side3
// 3. Else “Scalene triangle.” since values of all sides are unequal.

function checkTriangleType(side1, side2, side3) {
    if (side1 === side2 && side2 === side3) {
      console.log("Equilateral triangle.");
    } else if (side1 === side2 || side2 === side3 || side1 === side3) {
      console.log("Isosceles triangle.");
    } else {
      console.log("Scalene triangle.");
    }
  }
  
  checkTriangleType(5, 5, 5);  
  checkTriangleType(5, 6, 5);  
  checkTriangleType(3, 4, 5);  
  
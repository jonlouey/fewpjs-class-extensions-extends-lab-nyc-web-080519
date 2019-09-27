class Polygon {
    constructor(sides) {
      this.sides = sides
    }
  
    get countSides() {
      return this.sides.length
    }
  
    get perimeter() {
      if (!Array.isArray(this.sides)) return;
      let sum = 0;
      for (var int of this.sides) {
        sum += int
      }
      return sum
    }
  }

  //Create a parent class called polygon. 
  //The constructor within the parent class should take one arguement that will pass through all of the sides to the attributes as an array.
  // We then create two getter methods that will allow us to create new attributes by pulling information from the instance. 
  
  class Triangle extends Polygon {
  
    get isValid() {
      if (!Array.isArray(this.sides)) {return};
      if (this.countSides !== 3) {return};
      let side1 = this.sides[0]
      let side2 = this.sides[1]
      let side3 = this.sides[2]
      return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
    }
  }

  // Create a Triangle class that inherits from Polygon. 
  // Create an isValid method that takes the attributes of the instance and does some manipulation/ 
  
  class Square extends Polygon {
  
    get isValid() {
      if (!Array.isArray(this.sides)) {return};
      if (this.countSides !== 4) {return};
      let side1 = this.sides[0]
      let side2 = this.sides[1]
      let side3 = this.sides[2]
      let side4 = this.sides[3]
      return ((side1 === side2) && (side1 === side3) && (side1 === side4))
    }

  
    get area() {
      if (!Array.isArray(this.sides)) {return};
      if (this.countSides !== 4) {return};
      return this.sides[0] * this.sides[0]
    }
  }

  // Create a Triangle class that inherits from Polygon. 
  // Create an isValid method that takes the attributes of the instance and does some manipulation/ 
  // Create an area method that tkes the attributes of the instance and does some manipulation. 
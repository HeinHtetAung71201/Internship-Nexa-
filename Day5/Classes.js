// BluePrints for creating objects
//Basic Syntax
class Person{
    //constructor for initialization used as arguments in function
    constructor(name,age){
        this.namae=name;
        this.nen=age;
    }
    //Greet Method
    greet(){
        console.log(`Mingalar Par ${this.namae}`);
    }
}

const user1= new Person("Heintet",23);
// console.log(user1);
// console.log(user1.namae);
// console.log(user1.greet());
// console.log(typeof(user1));

//Class with getter and setter
class student{
    constructor(name,grade) {
        this.name=name;
        this._grade=grade;//_grade for private varible
    }
    //getter
    get grade(){
        return this._grade;
    }
    //setter
    set grade(value){
        if(value<0 || value >100){
            console.error("Grade must be between 0 and 100.");
        }
        else{
            this._grade = value;
        }
    }
    
}
//Building object using student class
    const student1=new student("KoHein",40);
    // console.log(student1.grade);
    // student1.grade(30);
    student1.grade=30;
    // student1.grade=120;
    // console.log(student1.grade);

//StaticMethods
//Belongs to the class itself, not to the instance of class
class MathHelper {
    static square(number) {
      return number * number;
    }
  
    static cube(number) {
      return number * number * number;
    }
  }
//   does not need to make instance for class
//   console.log(MathHelper.square(5)); // Output: 25
//   console.log(MathHelper.cube(3));   // Output: 27

// Inherence (extending the class by another class)
// Parent class (Base class)
class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a sound.`);
    }
  }
  
  // Child class (Derived class)
  class Dog extends Animal {
    
    bark(){
        console.log("woof woof");
    }
    // speak() {
    //   console.log(`${this.name} barks.`);
    // }
  }
  
  const dog = new Dog("Buddy");
//   dog.speak();// Output: Buddy barks.
//   dog.bark() ;

class BankAccount {
    #balance = 0; // Private property
  
    deposit(amount) {
      this.#balance += amount;
    }
  
    getBalance() {
      return this.#balance;
    }
  }
  
  const account = new BankAccount();
  account.deposit(1000);
//   console.log(account.getBalance()); // Output: 1000
//   console.log(account.#balance); // Error: Private field '#balance' must be declared in an enclosing class
  
// nameless class (Anonymous)
// const varible = class{
//     ...
// }
  
//Named Class
//  const varible = class Name{
//     .code
//  }
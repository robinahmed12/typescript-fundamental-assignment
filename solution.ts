// Problem 1: Filter Even Numbers
function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((n) => n % 2 === 0);
}

// Problem 2: Reverse String
function reverseString(str: string): string {
  return str.split("").reverse().join("");
}

// Problem 3: Union Type & Type Guard
type StringOrNumber = string | number;

function checkType(value: StringOrNumber): "String" | "Number" {
  if (typeof value === "string") return "String";
  return "Number";
}

// Problem 4: Generic getProperty with key constraint
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

// Problem 5: Book Interface & toggleReadStatus
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

function toggleReadStatus(book: Book): Book & { isRead: boolean } {
  return { ...book, isRead: true };
}

// Problem 6: Person class & Student subclass
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

// Problem 7: Array Intersection
function getIntersection(a: number[], b: number[]): number[] {
  const setB = new Set(b);
  return a.filter((n) => setB.has(n));
}

// --- Sample Runs ---
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));
console.log(reverseString("typescript"));
console.log(checkType("Hello"));
console.log(checkType(42));

const user = { id: 1, name: "John Doe", age: 21 };
console.log(getProperty(user, "name"));

const myBook = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};
console.log(toggleReadStatus(myBook));

const student = new Student("Alice", 20, "A");
console.log(student.getDetails());

console.log(getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));

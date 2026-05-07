# TypeScript Assignment

This assignment demonstrates core TypeScript concepts including:

- Functions
- Arrays
- Type Guards
- Generics
- Interfaces
- Intersection Types
- Object-Oriented Programming (OOP)
- Performance Optimization Techniques

Alongside solving practical TypeScript problems, two technical blogs were also written covering:

1. Generics in TypeScript
2. The Four Pillars of OOP in TypeScript

---

# Technologies Used

- TypeScript
- Node.js
- VS Code

---

# Problem Solutions Overview

---

# 1. filterEvenNumbers

## Description

Filters all even numbers from an array using the modulo operator.

## Technique Used

- `Array.filter()`
- Modulo check: `n % 2 === 0`

## Example

```ts
function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((n) => n % 2 === 0);
}
```

---

# 2. reverseString

## Description

Reverses a string using JavaScript array methods.

## Technique Used

- `split()`
- `reverse()`
- `join()`

## Example

```ts
function reverseString(text: string): string {
  return text.split("").reverse().join("");
}
```

---

# 3. checkType

## Description

Checks whether the input is a string or number using TypeScript type guards.

## Technique Used

- Union Type
- `typeof` Type Guard

## Example

```ts
type StringOrNumber = string | number;

function checkType(value: StringOrNumber): string {
  if (typeof value === "string") {
    return "String";
  }

  return "Number";
}
```

---

# 4. getProperty

## Description

Accesses object properties safely using Generics.

## Technique Used

- Generic Types
- `keyof` Constraint

## Example

```ts
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
```

## Key Concept

The constraint `K extends keyof T` ensures that only valid object keys are accepted at compile time.

---

# 5. toggleReadStatus

## Description

Updates a book object's read status while preserving immutability.

## Technique Used

- Intersection Types
- Spread Operator

## Example

```ts
type Book = {
  title: string;
  author: string;
};

function toggleReadStatus(
  book: Book
): Book & { isRead: boolean } {
  return {
    ...book,
    isRead: true,
  };
}
```

## Key Concept

The spread operator preserves immutability while the intersection type extends the object structure.

---

# 6. Person / Student Class

## Description

Demonstrates class inheritance in TypeScript.

## Technique Used

- Class Inheritance
- `super()` Constructor Call
- Template Literals

## Example

```ts
class Person {
  constructor(public name: string, public age: number) {}
}

class Student extends Person {
  constructor(
    name: string,
    age: number,
    public grade: string
  ) {
    super(name, age);
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}
```

---

# 7. getIntersection

## Description

Finds common elements between two arrays efficiently.

## Technique Used

- `Set`
- `Array.filter()`

## Example

```ts
function getIntersection(
  arr1: number[],
  arr2: number[]
): number[] {
  const set = new Set(arr2);

  return arr1.filter((item) => set.has(item));
}
```

## Performance Optimization

The second array is converted into a `Set` for **O(1)** lookup time, improving overall performance.

---

# Blog Topics Covered

## 1. How Generics Help Build Reusable and Strictly Typed Components

This blog explains:

- Generic Functions
- Generic Classes
- Type Safety
- Reusable Code Architecture
- Real-world API Examples

---

## 2. How the Four Pillars of OOP Reduce Complexity in TypeScript Projects

This blog covers:

- Inheritance
- Polymorphism
- Abstraction
- Encapsulation

It also explains how OOP principles improve scalability and maintainability in large TypeScript applications.

---

# Learning Outcomes

Through this assignment, the following TypeScript concepts were practiced:

- Strong Typing
- Generic Programming
- Object-Oriented Programming
- Type Guards
- Interfaces
- Intersection Types
- Array Manipulation
- Performance Optimization
- Scalable Code Architecture

---

# Conclusion

This assignment provided hands-on experience with both fundamental and advanced TypeScript concepts. It demonstrates how TypeScript helps developers build scalable, maintainable, and type-safe applications using modern programming techniques and clean architecture principles.

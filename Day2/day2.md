# C++ Program to Demonstrate Variable Declaration, Definition, and Data Types

```cpp
#include<iostream>
using namespace std;

int main(){
    // Step 1: Declaration and Definition of Variables
    
    // Declaration (Reserving space in memory without assigning a value)
    // int age;
    // cout << age << endl; // Note: Accessing an uninitialized variable may cause undefined behavior.

    // Definition (Assigning a value to the variable)
    int age = 25; // `age` is an integer with an initial value of 25
    age = 101; // Updating the value of `age`
    cout << age << endl; // Prints the updated value: 101

    // Step 2: Exploring Different Data Types in C++

    // Integer: Used to store whole numbers
    int count = 5; // Example of an integer variable
    
    // Float: Used to store decimal numbers with single precision
    float share = 3.14;
    
    // Character: Used to store a single character (enclosed in single quotes)
    char alphabet = 'z'; // Always use single quotes for characters
    
    // Double: Used to store decimal numbers with double precision
    double weight = 55.69889;
    
    // Boolean: Used to store `true` (1) or `false` (0) values
    bool isMale = false; // Boolean value representing `false`
    bool isChild = 1;    // Non-zero values are treated as `true`
    bool isFemale = true; // Explicitly assigning `true`
    bool isAdult = 0;     // Zero is treated as `false`

    // Step 3: Output the Values of Variables
    cout << count << endl; // Prints: 5
    cout << share << endl; // Prints: 3.14
    cout << alphabet << endl; // Prints: z
    cout << weight << endl; // Prints: 55.69889
    cout << isMale << endl; // Prints: 0 (false)

    // Step 4: Using the `sizeof` Operator
    // The `sizeof` operator returns the size (in bytes) of a variable or data type
    int marks = 12;
    cout << sizeof(marks) << endl; // Prints the size of an integer (typically 4 bytes on most systems)

    return 0; // Indicates that the program executed successfully
}
```

## Detailed Explanation

### 1. **What is a Variable?**
- A **variable** is a named storage location in memory used to hold a value.
- You can declare a variable (reserving space) and define it (assigning a value).

### 2. **Variable Declaration and Definition**
- **Declaration**: A variable is declared by specifying its type and name. For example:
  ```cpp
  int age;
  ```
  Here, memory is allocated for `age`, but no value is assigned yet.

- **Definition**: A variable is defined when a value is assigned:
  ```cpp
  int age = 25;
  ```
  Now, `age` has a value of 25.

### 3. **Data Types in C++**
C++ supports several fundamental data types:

- **`int`**: Used to store whole numbers (e.g., -3, 0, 7). Example:
  ```cpp
  int count = 5;
  ```

- **`float`**: Used to store decimal numbers with single precision. Example:
  ```cpp
  float share = 3.14;
  ```

- **`char`**: Used to store a single character (enclosed in single quotes). Example:
  ```cpp
  char alphabet = 'z';
  ```

- **`double`**: Used to store decimal numbers with double precision (higher accuracy). Example:
  ```cpp
  double weight = 55.69889;
  ```

- **`bool`**: Used to store boolean values (`true` or `false`). Example:
  ```cpp
  bool isMale = false;
  ```
  Note: In C++, `true` is internally represented as 1, and `false` as 0.

### 4. **Updating Variables**
- Variables can be updated by assigning a new value to them. Example:
  ```cpp
  int age = 25;
  age = 101; // Now `age` holds the value 101
  ```

### 5. **Using the `sizeof` Operator**
- The `sizeof` operator is used to determine the memory size of a variable or data type.
- Example:
  ```cpp
  int marks = 12;
  cout << sizeof(marks) << endl; // Prints the size of an integer (e.g., 4 bytes)
  ```

## Sample Output
```
101
5
3.14
z
55.6989
0
4
```

## Key Notes
- Always initialize variables before using them to avoid undefined behavior.
- Use appropriate data types for the kind of data you are storing (e.g., `int` for integers, `float` for decimals).
- Use the `sizeof` operator to check the memory size of variables when needed.

# Control Flow and Switch Case in C++

Control flow in C++ refers to the order in which instructions are executed in a program. Common control flow structures include conditional statements (`if-else`) and switch cases.

## Example: Using `if-else` for Conditional Control Flow

```cpp
#include<iostream>
using namespace std;

int main() {
    int marks;
    cout << "Enter your marks" << endl;

    cin >> marks;

    if(marks > 90) {
        cout << "You are in top 10";
    } else if(marks < 90 && marks > 80) {
        cout << "You are in top 20";
    } else {
        cout << "Better luck next time";
    } 
    return 0;
}
```

### Explanation:
- **`if` Condition**: Executes the block if the condition `marks > 90` evaluates to true.
- **`else if` Condition**: Checked only if the first `if` condition is false. For example, `marks < 90 && marks > 80`.
- **`else` Block**: Executes if none of the above conditions are true.
- This structure allows flexible handling of ranges and conditions.

## Example: Using `switch` for Control Flow

```cpp
#include<iostream>
using namespace std;

int main() {
    int marks;
    cout << "Enter your marks: ";
    cin >> marks;

    switch (marks) {
        case 90:
            cout << "You scored exactly 90." << endl;
            break;

        case 80:
            cout << "You scored exactly 80." << endl;
            break;

        case 70:
            cout << "You scored exactly 70." << endl;
            break;

        default:
            cout << "Your score doesn't match the predefined cases." << endl;
    }

    return 0;
}
```

### Explanation:
- **`switch` Statement**: Checks the value of `marks` and executes the matching `case` block.
- **`case` Blocks**: Each block represents a specific value for `marks`. For example:
  - `case 90`: Executes if `marks == 90`.
  - `case 80`: Executes if `marks == 80`.
- **`default` Block**: Executes if no `case` matches the value of `marks`.
- **`break` Statement**: Prevents fall-through, ensuring only the matching `case` is executed.

### Notes on `switch`:
1. **Limitations**:
   - `switch` only works with discrete values (e.g., integers or characters). Conditions like `marks > 90` cannot be used directly.
2. **Use Case**:
   - Prefer `switch` for fixed, predefined values.
   - Use `if-else` for ranges and complex conditions.

## Summary of Control Flow
- Use `if-else` for flexible condition handling, such as ranges or logical operators.
- Use `switch` for checking exact, predefined values to simplify code readability.

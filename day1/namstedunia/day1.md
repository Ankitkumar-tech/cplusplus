# Explanation of Code with Example

```cpp
#include<iostream>
using namespace std;

// Explanation:
// - The `cout` is used to print output.
// - Initially, the compiler asks: "Where is this `cout` coming from?"
// - To resolve this, we use `namespace std`, which acts like a "dictionary" for finding definitions.
// - For example, if we take a word "ankitaalo," we look it up in a dictionary to find its meaning.
// - Similarly, `namespace std` tells the compiler to refer to the standard library for `cout`.

// Next, the compiler asks: "Where is the dictionary located?"
// - It is like saying, "The dictionary is in a cupboard or almirah."
// - Here, the dictionary is included using `#include<iostream>`.

int main() {
    cout << "Namaste Dunia" << endl; // Prints "Namaste Dunia"
    return 0; // Indicates successful execution of the program
}

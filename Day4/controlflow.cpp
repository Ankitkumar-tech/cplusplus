// #include<iostream>
// using namespace std;

// int main(){

   
//    int marks ;
//    cout << "Enter your marks" << endl;

//    cin >> marks;


//    if(marks>90){
//     cout << "You are in top 10" ;
//    }
//    else if(marks<90 && marks >80){
//     cout << "You are in top 20";
//    }
//    else{
//     cout << "Better luck next time";
//    } 
//     return 0;

// }


// switch case 

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

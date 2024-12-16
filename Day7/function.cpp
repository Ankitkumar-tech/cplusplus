
#include<iostream>
using namespace std;

int calculateSum(int a , int b){
  
  return a+b;
}

void printnumber(int a){
    cout << a ;
}

int main(){

int sum =calculateSum(5,7);
int sum2=calculateSum(17,-7);
printnumber(5);
cout << sum <<endl;
cout << sum2 <<endl;


}
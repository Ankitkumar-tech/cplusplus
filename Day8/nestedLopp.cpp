
#include<iostream>
using namespace std;
#include<string>
void nestedLoop(int n){
   
   for(int i=1; i<=n ; i++){

      string bag="";
       for(int j=1; j<=n; j++){
         bag+=to_string(i)  +to_string(j)+" ";
       }

       cout << bag <<endl; 
   }

   
}


int main(){
  
    nestedLoop(5);
    return 0;

}
#include<iostream>
using namespace std;

// int main(){

   
//     // bool arr[10];

//     int arr[] ={10,20,30};



//     cout << arr[1] <<" "<< arr[2] << " arr[3]" <<endl;

//     // fill take 3 thing starting point , ending point , value you want to change with
//     fill(arr,arr+3,101);
//     cout << arr[1] <<" "<< arr[2] << " arr[3]";
//     return 0;
// }


//Taking input in array 


// int main(){

//    int a[10];
   
//    for(int i=0; i<10; i++){

//     cout << "Enter the number" ;
//     cin >> a[i];


//     cout << a[0] ;

//    }
    
//     return 0;

// }




// Find the taarget element 

int findTarget(int arr[] , int size, int target){

    for (int i=0; i<size ; i++){
        if(arr[i]==target){
            return true;
        }
    }

   return false;
}


int main(){

   
   int arr[100];

   int size ;

   cout <<"Enter the size" << endl;

   cin >> size;

   for(int i=0; i<size ; i++){
    cin >> arr[i] ;
   }


   int target ; 
   cout <<"Enter the Target" <<endl;

   cin >> target;

   int x =findTarget(arr,size,target);

   cout<< x <<endl;

    return 0;

}
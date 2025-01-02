

// #include <iostream>

// #include <vector>

// using namespace std;


// void callMeVector( vector <int> v){
//     int size  = v.size();

//     cout<<size<<endl;
    
//     for(int i=0; i<size ; i++){
//         cout << v[i] <<endl;
//     }
// }


// int main(){


//     vector <int> v ;
//     v.push_back(1);
//     v.push_back(2);
//     v.push_back(11);
//     v.push_back(23);
//     // cout <<v[0] ;

//     callMeVector(v) ;
//     cout <<"Hello World" ;
//     return 0;

// }




#include <iostream>
#include <vector>
using namespace std;

void check(){
    // vector <int> c ;
    // c.push_back(10);
    // c.push_back(20);
    // c.push_back(30);
    // // cout<< c.front()<<endl;
    // // cout<< c.back() <<endl;
    // // cout << *(c.begin()) <<"element " <<endl;
    // int j =0;
    // vector <int> :: iterator i= c.begin();
    // while(i<c.end()){
    //     cout << * i <<endl;
    //     i++;
    // }
    // while(j<c.size()){
    //     cout <<c[j] <<endl;
    //     j++;
    // }


// initilize a two d array  
vector <vector <int> > arr(5,vector<int>(4,10));

vector <vector <int>> twodarray(3,vector<int>(4,0));

cout <<twodarray[1][1] << endl;

cout << arr[1][0] << endl;
int row = arr.size();
int col =arr[0].size();

cout <<row <<"  " <<col <<endl ;

}

int main(){


  
  check();

    return 0;
}



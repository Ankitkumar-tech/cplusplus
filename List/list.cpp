#include <iostream>
#include <list>
using namespace std;


int main(){
  
  list <int> store;

  store.push_back(10);
  // 10
   store.push_back(20);

   //10->20
    store.push_back(30);
     //10->20 -> 30
     store.push_back(40);
     //10->20 -> 30 -> 40


    list <int> ::iterator it =store.begin();

    while(it!=store.end()){
        cout << *it <<endl;
        it++;
    }


    return 0;
}

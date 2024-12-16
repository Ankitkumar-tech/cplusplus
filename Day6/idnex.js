//Code to Generate test cases
 
const readNewFile = (fileIn, fileOut) => {
    const fs = require("fs");
    let value = fs.readFileSync(fileIn, "utf8");
    writeNewFile(fileOut, code(value));
  };
  
  const writeNewFile = (file, data) => {
    const fs = require("fs");
    fs.writeFileSync(file, String(data), (err) => {
      if (err) {
        console.log(err);
      }
    });
  };
  
  const testCaseGenerator = () => {
    // creates 10 test cases
    let lengthsArr = [10,20,50,100,2000,3000,5000,8000,90000,100000]
    for (let i = 0; i < 10; i++) {
      let N = lengthsArr[i];
      let X = Math.floor(Math.random() * 100 )
      let A = generateArrayWithOneDuplicateUnsorted(N);
  
     //  let inp = N + " " + X + "\n" + A.join(" ")
      let inp = N + "\n" + A.join(" ")
  
      writeNewFile(`${i+1}.in`, String(inp));
      readNewFile(`${i+1}.in`, `${i+1}.out`);
    }
  };
  
  
  
  const code = (input) => {
    input = input.trim().split("\n");
    let n = +input[0]
    let arr = input[1].split(" ").map(Number);
 
       
 var sum = 0;
 for (i = 0; i < n; i++) sum += arr[i];
 return sum - ((n - 1) * n) / 2;
 
 
  };
  testCaseGenerator();
  
  //Generates an array of length N
  function generateArray(length) {
    let result = [];
    for ( let i = 0; i < length; i++ ) {
        result.push(Math.floor(Math.random()*100))
    }
    return result;
  }
  
  // returns value of a string
  function value(str){
    let obj = {};
    let i = 1;
    let lower  = "abcdefghijklmnopqrstuvwxyz"
    for(let el of lower){
      obj[el] = i++;
    }
    let sum = 0;
  
   for(let el of str){
      sum+= obj[el];
    }
    return sum;
  }
  
  // creates a random string
  function generateString(length) {
  const characters ='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
  
    return result;
  }
  
  // returns sum of an arr
  function arrSum(arr){
    let sum = 0;
    for(let el of arr){
      sum += el;
    }
    return sum;
  }
 
  // Array with only one duplicate
 
  function generateArrayWithOneDuplicateUnsorted(n) {
    // Initialize the array with numbers from 1 to n-1
    let arr = [];
    for (let i = 1; i < n; i++) {
      arr.push(i);
    }
 
    // Randomly select the index where the duplicate number will be inserted
    let duplicateIndex = Math.floor(Math.random() * n);
 
    // Randomly select the number to be duplicated
    let duplicateNumber = Math.floor(Math.random() * (n - 1)) + 1;
 
    // Insert the duplicate number at the selected index
    arr.splice(duplicateIndex, 0, duplicateNumber);
 
    // Randomly shuffle the array
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
 
    return arr;
  }
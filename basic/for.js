// for (let i=0; i<100; i++){
// console.log(i);
// }

//<<<<<<<<.......prog for fibnocci using forloop....>>>>>
// function fib(n) {
//   let result = [0 , 1];
//   for (let i=2;i<n; i++){
//   result.push(result[i-2]+result[i-1]);
// }
// return result;
// }
// console.log(fib(3));





//<<<<<<<<.......prog for fibnocci using while loop....>>>>>

// function fbnci(n) {
//   let result = [0 , 1];
//   let i=2;
//   while(i<n){
//     result.push(result[i-2]+result[i-1]);
//     i++;
//   }
//   return result;
// }
// console.log(fbnci(7));

    //<<<<<<<<.......prog for fibnocci using dowhileloop....>>>>>
    // function fibnocci(n) {
    //   let result = [0 , 1];
    //   let i = 2;
    //   do {
    //     result.push(result[i-2]+result[i-1]);
    //     i++;
    //   }
    //   while (i<n);
    //   return result;
    // }
    //   console.log(fibnocci(6));

  // <<<<<<<....Prog for fibnocci with recrusive fn.....>>>>>>>>

    //  function fib(n) {
    //     if (n == 0) return [0]
    //     if (n == 1) return [0, 1]
    //     let arr = fib(n - 1)
    //     return [...arr,arr[n-1] + arr[n-2]]
    //   }
    //   console.log(fib(5));


    // function doSomethingProductive() {
    //   const myWallet = 0;
    
    //   let salary = 1000;
    //   let previousSavings = 200;
    //   let expenses = 500;
    
    //   const bankBalance = myWallet + salary - previousSavings - expenses;
    
    //   return bankBalance;
    //      return { bankBalance: bankBalance, myWallet, salary, previousSavings, expenses };
    // }
    // console.log('doSomethingProductive ===>', doSomethingProductive());

  //   function tmmmt(){
  //     const salary = 1000;
  //     let employee = 2000;
  //     let previous = 5000;
  //     let happy = 10000;
  //   }
  //   const budget = salary + employee- previous + happy;
  //   return budget;
  // console.log('tmmmt ===>', tmmmt());




    
  //let numbersArray = [5, 2, 10];

  //function calcSumOfNumbersArray(numArray) {
    //console.log('calcSumOfNumbersArray Function is running with parameters>>>>', numArray);
  
  //   let _sum = 0;
  //   let index = 0;
  
  //   while (index < numArray.length){
  //     index++
  //     const element = numArray[index];
  
  //   console.log('Sum before addition', _sum);
  //     _sum = _sum + element;
  //  console.log('Sum after addition', _sum);
  //   }
  // return _sum;
  // }
  
  // let myOutput = calcSumOfNumbersArray(numbersArray);
  // console.log('>>>>>', myOutput);





 
let numbersArray = [5, 2, 10];

  function calcSumOfNumbersArray(numArray) {
    console.log('calcSumOfNumbersArray Function is running with parameters>>>>', numArray);
    //const element = numArray[index];
  
    let _sum = 0;
    let index = 0;
  do{
    console.log('Sum before addition', _sum);
    const element = numArray[index];
      _sum = _sum + element;
   console.log('Sum after addition', _sum);
   index++
  }while (index < numArray.length){
    return _sum;
  }
}
  
  let myOutput = calcSumOfNumbersArray(numbersArray);
  console.log('>>>>>', myOutput);








  
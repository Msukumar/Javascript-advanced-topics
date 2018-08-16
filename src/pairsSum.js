getPairsWithSum = (data, sum) => {
    data.sort((a,b) => a - b);
    let low = 0, totalPairs  = []; 
    let high = data.length-1;
    while(low < high){
      let result = data[low] + data[high];
       if(result === sum){
        totalPairs.push([data[low] + "," +data[high]]);
        low++;
      }else if(result > sum){
        high--;
      } else {
        low++;
      }
      
     }
    return totalPairs;
  }
  var list = [1, 2, 3, 4, 6, 4, 7, 5, 9, 10, 11, -3];
    // 8 is target sum
  console.log(getPairsWithSum(list, 8));
    //prints below pairs
    // [["-3,11"],["1,7"],["2,6"],["3,5"],["4,4"]]
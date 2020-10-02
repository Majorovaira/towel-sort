
// You should implement your task here.

module.exports = function towelSort (matrix) {

   let result = [];
   if(matrix != null){
   for(let i = 0; i < matrix.length; i ++){
       if (i % 2 == 0) {
       result = result.concat(matrix[i]);
       }
       else {
           for(let j = matrix[i].length - 1; j >= 0; j --) {
               result.push(matrix[i][j]);
           }
       }
   }
}
  return result;
}

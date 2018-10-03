module.exports = function longestConsecutiveLength(array) {
  const arr = array.sort((a,b) => a-b);
  const result = [1], length = arr.length, uniqueArray = [arr[0]];
  let sequencesCounter = 1;
  if (length == 0) return 0;
  if (length == 1) return 1;
  for (let i = 1, j = 1; i < length; i++){
     if (arr[i] !== uniqueArray[j-1]) uniqueArray[j++] = arr[i];
    }
  for (let i = 0; i < length; i++){
    if(uniqueArray[i] == (uniqueArray[i+1]-1)) sequencesCounter++; else{
      result.push(sequencesCounter);
      sequencesCounter = 1;
    }
  }
  return Math.max(...result);
}
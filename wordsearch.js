// By Pardeep && Jarret


const wordToFind =(letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    let verticalJoin;
    for (l of horizontalJoin) {
        if (l.includes(word)) return true;
    };
    console.log(horizontalJoin)
    return false;

};

  const transpose = function(matrix) {
    let results = [];
    let tempArr = [];
    for (let i = 0; i < matrix[0].length; i++) {
      for (let j = 0; j < matrix.length; j++) {
        tempArr.push(matrix[j][i]);
        // console.log(tempArr)
      }
      results.push(tempArr);
      tempArr = [];
      // console.log(results);
    }
    return results;
  };

  const wordSearch = (letters, word) => { 
  if(wordToFind(letters, word)){
        return true ;
    }
  else if(wordToFind(transpose(letters, word))){
        // console.log("true", wordToFind)
        return true ;
    }
   return false ;
}


module.exports = wordSearch
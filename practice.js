function doubleValues(arr){
    let newArr = []
    arr.forEach(function(val){
      newArr.push(val * 2)
    });
    return newArr;
  }
  
  function onlyEvenValues(arr){
    let newArr = []
    arr.forEach(function(val){
      if(val % 2 == 0 ){
        newArr.push(val)
      }
    });
    return newArr;
  }
  
  function showFirstAndLast(arr){
    let newArr = []
    arr.forEach(function(val){
        newArr.push(val.charAt(0) + val.charAt(val.length - 1))
    });
    return newArr;
  }
  
  function addKeyAndValue(arr, key, value) {
    arr.forEach(function(val) {
      val[key] = value;
    });
    return arr;
  }
  
  function vowelCount(str) {
    let splitArr = str.split("");
    let obj = {};
    const vowels = "aeiou";
    splitArr.forEach(function(letter) {
      let lowerCasedLetter = letter.toLowerCase()
      if (vowels.indexOf(lowerCasedLetter) !== -1) {
        if (obj[lowerCasedLetter]) {
          obj[lowerCasedLetter]++;
        } else {
          obj[lowerCasedLetter] = 1;
        }
      }
    });
    return obj;
  }
  
  function doubleValuesWithMap(array){
    return array.map(function(value){
      return (value * 2)
    });
  }
  
  function valTimesIndex(arr){
      return arr.map(function(value){
      return (value * arr.indexOf(value))
    });
  }
  
  function extractKey(arr,key){
    return arr.map(function(val){
      return val[key]
  
    })
  }
  
  function extractFullName(arr){
    return arr.map(function(obj){ 
      return obj.first + " " + obj.last
  
    })
  }
  
  function filterByValue(arr, key){
    return arr.filter(function(val){
      return val[key];
    });
  }
  
  function find(arr, value){
    return arr.filter(function(val){
      return val ===value
    })[0];
  }
  
  function findInObj(arr, key, value){
    return arr.filter(function(val){
      return value === val[key];
    })[0];
  }
  
  function removeVowels(str){
    const vowels = "aeiou";
    return str
      .toLowerCase()
      .split("")
      .filter(function(val) {
        return vowels.indexOf(val) === -1;
      })
  }
  
  function doubleOddNumbers(arr){
    return arr.filter(function(val){
      return (val % 2 !== 0 )
    })
      .map(function(val){
     return val * 2
    })
  }

  
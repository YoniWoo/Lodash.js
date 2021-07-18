const _ = {
  clamp(number, lower, upper) {
    let lowerClampedValue = Math.max(number, lower);
    let clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },
  inRange(number, start, end) {
    if(end === undefined){
      end = start;
      start = 0;
    };
    if(start > end){
      let temp;
      temp = start;
      start = end;
      end = temp;
    };
    let isInRange = start <= number && number < end;
    return isInRange;
  },
  words(string){
    let newArray = string.split(' ');
    return newArray;
  },
  pad(string, length){
    if(length <= string.length){
      return string;
    };
    let startPaddingLength = Math.floor((length - string.length) / 2);
    let endPaddingLength = length - string.length - startPaddingLength;
    let paddedString =' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);

    return paddedString;
  },
  has(object, key){
    let hasValue = object[key] != undefined;
    return hasValue;
  },
  invert(object){
    let invertedObject = {};
    for(let key in object){
      const originalValue = object[key];
      invertedObject[originalValue] = key;
    }
    return invertedObject;
  },
  findKey(object, predicate){
    for(let key in object){
      let value = object[key];
      let predicateReturnValue = predicate(value);
      if(predicateReturnValue){
        return key;
      };
    };
    undefined
    return undefined;
  },
  drop(array, number){
    if(number === undefined){
      number = 1;
    };
    let droppedArray = array.slice(number);
    return droppedArray;
  },
  dropWhile(array, predicate){
    let cb = (element, index) =>{
      return !predicate(element, index, array);
    };
    let dropNumber = array.findIndex(cb);
    let droppedArray = this.drop(array, dropNumber);
    return droppedArray;
  },
  chunk(array, size){
    if(size === undefined){
      size = 1;
    }
    let arrayChunks = [];
    for(let counter = 0; counter < array.length; counter += size){
      let arrayChunk = array.slice(counter, counter+size);
      arrayChunks.push(arrayChunk)
    }
    return arrayChunks;
  }
};

module.exports = _ ;

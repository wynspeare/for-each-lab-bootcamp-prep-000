
function iterativeLog(array) {
  var element = {};
  var index = array.indexOf(array[element]);
  array.forEach(function (element, index) {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback){
  var array2 = ["English", "Spanish", "French"]
  array2.forEach(callback);
  return array2
}

function doToArray (array, callback){
array.forEach(callback)
}

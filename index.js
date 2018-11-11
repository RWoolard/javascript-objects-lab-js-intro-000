var recipe = {};

function updateObjectWithKeyAndValue(object, key, value) {
   object.assign({}, {[key] : value})

}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var newObject = {};

}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}

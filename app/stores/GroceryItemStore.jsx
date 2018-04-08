var dispatcher = require('./../dispatcher.js');

function GroceryItemStore(){
  //var items = [];
  var items = [{
    name: "Ben N Jerry's Phish Food"
  }, {
    name: "Greek Yogurt"
  }, {
    name: "Reese's",
    puchased:true
  }, {
    name: "Bananas"
  }];

  var listeners = [];

  function getItems(){
    return items;
  }

  function addGroceryItem(item){
    items.push(item);
    triggerListeners();
  }

  function onChange(listener){
    listeners.push(listener);
  }

  function triggerListeners(){
    listeners.forEach(function(listener){
      listener(items);
    })
  };

  dispatcher.register(function(event){
    var split = event.type.split(':');
    if (split[0]==='grocery-item'){
      switch(split[1]){
        case "add":
        addGroceryItem(event.payload);
        break;
      }
    }
  });

  return {
    getItems:getItems,
    onChange:onChange
  }

}

module.exports = new GroceryItemStore();
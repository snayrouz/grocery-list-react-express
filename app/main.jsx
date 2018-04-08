var React = require('react');
var ReactDOM = require('react-dom');
var GroceryItemList = require('./components/GroceryItemList.jsx');

var initial = [{
  name: "Ben N Jerry's Phish Food"
}, {
  name: "Greek Yogurt"
}, {
  name: "Reese's",
  puchased:true
}, {
  name: "Bananas"
}];
ReactDOM.render(<GroceryItemList items={initial} />,app)

var React = require('react');
var createReactClass = require("create-react-class");
var GroceryItem = require('./GroceryItem.jsx');

module.exports = createReactClass({
  render:function(){
    return (
      <div>
        <h1>Grocery List</h1>
        <div>
          {this.props.items.map(function(item, index){
            return(
              <GroceryItem item={item} key={"item"+index}/>
            )
          })
          }
        </div>
      </div>
    )
  }
})

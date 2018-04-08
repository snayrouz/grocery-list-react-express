var React = require('react');
var createReactClass = require("create-react-class");
var action = require('./../actions/GroceryItemActionCreator.jsx')

module.exports = createReactClass({
  delete:function(e){
    e.preventDefault();
    action.delete(this.props.item);
  },
  render:function(){
    return(
      <div>
        <div>
          <h4 className={this.props.item.purchased ? "strikethrough" : ""}>{this.props.item.name}</h4>
        </div>
        <form className="three columns" onSubmit={this.delete}>
          <button>&times;</button>
        </form>
      </div>
    )
  }
})

var React = require('react');
var action = require('./../actions/GroceryItemActionCreator.jsx')
var createReactClass = require("create-react-class");

module.exports = createReactClass({
  getInitialState:function(){
    return {input:""};
  },
  handleInputName:function(e){
    this.setState({input : e.target.value})
  },
  addItem:function(e){
    e.preventDefault();
    action.add({
      name:this.state.input
    });
    this.setState({
      input:''
    })
  },
  render:function(){
    return (
      <div className='grocery-addItem'>
        <form onSubmit={this.addItem}>
          <input value={this.state.input} onChange={this.handleInputName}/>
          <button> Add Item </button>
        </form>
      </div>
    )
  }
})

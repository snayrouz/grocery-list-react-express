var React = require('react');
var createReactClass = require("create-react-class");

module.exports = createReactClass({
  render:function(){
    return (
      <div className='grocery-addItem'>
        <form>
          <input />
          <button> Add Item </button>
        </form>
      </div>
    )
  }
})

var React = require('react');
var createReactClass = require("create-react-class");

module.exports = createReactClass({
  render:function(){
    return(
      <div>{this.props.item.name}</div>
    )
  }
})

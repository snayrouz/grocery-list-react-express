var $ = require('jquery')

module.exports = {
  get:function(url){
    return new Promise(function(success,error){
      $.ajax({
        url:url,
        dataType:"json",
        success:sucess,
        error:error
      })
    })
  },
  post:function(url,data){
    return new Promise(function(success,error){
      $.ajax({
        url:url,
        type:"POST",
        data:data,
        success:sucess,
        error:error
      })
    })
  }
}

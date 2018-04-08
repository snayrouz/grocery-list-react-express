module.exports = function(app){

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

  app.route('/api/items')
  .get(function(req,res){
    res.send(items);
  })
  
}

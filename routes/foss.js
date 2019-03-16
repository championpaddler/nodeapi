
  
var express = require('../node_modules/express');
var HRGRoutes = express.Router();


// Require model in our routes module

// Defined Create route
HRGRoutes.route('/getwords').get(function (req, res) {
  try {




    

  } catch (error) {
    res.status(400).json({ 'Status': error });


  }



});

// HRGRoutes.route('/updatefile').get(function (req, res) {
//   try {

//     const csvFilePath=path.join(__dirname+'/hospitals_lat_lng_sheet.csv')
// csv()
// .fromFile(csvFilePath)
// .then((jsonObj)=>{

// jsonObj.forEach(element => {
//   console.log(element);


//   var data = {};
//   data['Name'] = element['Name of Hospital'];
//   data['Address'] = element['Address'];
//   data['lat'] = element['Latitude'];
//   data['long'] = element['Longitude'];
//   data['bdc'] = Math.floor(Math.random()*50).toString();
//   console.log(data);


//   let newuser = new Business(data);
//   newuser.save()
//     .then(user => {
      
//     })
//     .catch(err => {
//       res.status(400).json({ 'Status': 'Error Processing Data' });
//     });
  
// }); 
//  /**
//      * [
//      * 	{a:"1", b:"2", c:"3"},
//      * 	{a:"4", b:"5". c:"6"}
//      * ]
//      */ 
// })

    

//   } catch (error) {
//     res.status(400).json({ 'Status': error });


//   }



// });



// test route
HRGRoutes.route('/').get(function (req, res) {

  res.send({ "Status": "Api is Working" });

});
module.exports = HRGRoutes;
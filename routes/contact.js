var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'contact' });
});

router.post('/send',function(req,res,next){

  var transporter = nodemailer.createTransport({
service : 'Gmail',
auth :{
  user:'email',
  pass:'password'
}
});
var mailOptions = {

  from : req.body.name +'<'+req.body.email+'>',
  to: 'email',
  subject: 'This was the subject',
  text : 'Name ' + req.body.name + 'Email ' +req.body.email + 'Message ' + req.body.message,
  html : '<p><h1>ThiS was HTml</h1> Name ' + req.body.name + 'Email ' +req.body.email + 'Message ' + req.body.message+'</p>'
};
transporter.sendMail(mailOptions,function(error,info){
  if(error){
    console.log(error);
    res.redirect('/');
  }else{
    console.log("Message Sent " + info.response);
    res.redirect('/');
  }
});
});
module.exports = router;

const express = require('express')
const app = express()
const port = 3000
app.set('views', './views')
app.set("view engine", "pug");
app.use(express.json());

app.use(express.urlencoded({
  extended: true
}))

app.get('/hello', (req, res) => {
  res.send('Lorem Ipsum')
})

app.listen(port, () => {
  console.log(`${port}`)
})

app.get('/form', (req, res) => {
  res.sendFile('C:/Users/NikitaDrik/Desktop/Assignment_8/formHTML.html');
})

app.post('/formdata', (req, res) => {
	  const username = req.body.username;
	  const mail = req.body.mail;
	  const pas = req.body.pas;
	  var empass = 'Username: ' + username + ',      Email: ' + mail + ',     Password: ' + pas; 
	  res.render('template', { title: 'Text from the form', message: empass});
	  res.end();
})

app.post('/jsondataresp', (req, res) => {
	try{
		var jsonobj = JSON.parse(req.body.jsondata);
		var jsoninfo = JSON.stringify(jsonobj,null,2);
		var jsonresult = jsoninfo.replace('{','').replace('}','').replace('"','');
		
		res.render('template', { title: 'Information from JSON form', message: jsonresult}); 
	} catch (e) {
		res.render('template', { title: 'Error in JSON', message: "Text is not in JSON"}); 
	}
	
	res.end();
})

app.get('/jsondata', function (req, res) {
  res.sendFile('C:/Users/NikitaDrik/Desktop/Assignment_8/JsonHTML.html');
});
  
app.get('/', function (req, res) {
  res.render('template', { title: 'Hello', message: 'Use /form, /hello, or /jsondata'});
});
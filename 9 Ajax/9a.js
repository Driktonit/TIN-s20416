const express = require('express')
const app = express()
const port = 3000
app.set('views', './views')
app.set("view engine", "pug");
app.use(express.json());

app.use(express.urlencoded({
  extended: true
}))


app.listen(port, () => {
  console.log(`${port}`)
})

app.get('/', (req, res) => {
  res.sendFile('C:/Users/NikitaDrik/Desktop/09_taskTIN/9aHTML.html');
})

app.post('/resp', (req, res) => {
	try{
		var obj = JSON.parse(req.body.jsondata);
		var n1 = parseInt(obj.data[0].number1);
		var n2 = parseInt(obj.data[0].number2);
		var operator = obj.data[0].operator;
		
		var result = 0;
		
		if(operator == '+')
			result = n1 + n2;
		else if(operator == '-')
			result = n1 - n2;
		else if(operator == '*')
			result = n1 * n2;
		else if (operator == '/' && n2 != 0)
			result = n1 / n2;
		else 
			res.render('template', { title: 'Information from JSON form', message: "Error"}); 

		var jsonresult = JSON.stringify(result);
		
		res.render('template', { title: 'Information from JSON form', message: jsonresult}); 
	} catch (e) {
		res.render('template', { title: 'Error in JSON', message: "Text is not in JSON"}); 
	}
	
	res.end();
})

//B

app.get('/b', (req, res) => {
  res.sendFile('C:/Users/Michal_/Desktop/Dee/9bHTML.html');
})

app.post('/num', (req, res) => {
	try{
		res.resp
		var n1 = parseInt(req.body.n1);
		var n2 = parseInt(req.body.n2);
		var operator = req.body.operator;
		
		var result = 0;
		if(operator == 'add')
			result = n1 + n2;
		else if(operator == 'sub')
			result = n1 - n2;
		else if(operator == 'mult')
			result = n1 * n2;
		else if (operator == 'div' && n2 != 0)
			result = n1 / n2;
		else 
			res.render('template', { title: 'Information from JSON form', message: "Error"}); 

		var jsonresult = JSON.stringify(result);
		res.render('template', { title: 'Information from JSON form', message: jsonresult}); 
	} catch (e) {
		res.render('template', { title: 'Error in JSON', message: "Text is not in JSON"}); 
	}
	
	res.end();
})
function func(url_in, a, b) {
    if (url_in.includes("+")) {
      return a + b;
    }
    if (url_in.includes("-")) {
      return a - b;
    }
    if (url_in.includes("/")) {
      return a / b;
    }
    if (url_in.includes("*")) {
      return a * b;
    }
}

function check (a, b) {
    if(isNaN(a) || isNaN(b)) return false;
    else return true;
  }

var http = require('http');
var url = require('url');

var server = http.createServer((request, res) => {
  var url_parts = url.parse(request.url, true);
  var query = url_parts.query;

  var a = parseInt(query.a);
  var b = parseInt(query.b);

  if(check(a, b) === true) {
    var result = func(request.url, a, b);
    res.write(result);
    res.end();
  } else {
    res.write('err');
    res.end();
  }
});

server.listen(10000);

console.log("Started");
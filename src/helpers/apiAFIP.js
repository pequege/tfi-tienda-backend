var http = require('follow-redirects').http;
var fs = require('fs');

var options = {
  'method': 'POST',
  'hostname': 'istp1service.azurewebsites.net',
  'path': '/LoginService.svc',
  'headers': {
    'Content-Type': 'text/xml; charset=utf-8',
    'SOAPAction': 'http://ISTP1.Service.Contracts.Service/ILoginService/SolicitarAutorizacion',
    'Cookie': 'ARRAffinity=22a7daa836b64a8ce56c907737553d08297ff2e76cd06a1f52c29956b9a85c17; ASP.NET_SessionId=rrdypzmrbqm434zdhjbdt02i'
  },
  'maxRedirects': 20
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
    return body;
  });

  res.on("error", function (error) {
    console.error(error);
  });
});

var postData =  "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<soap:Envelope xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\">\n    <soap:Body>\n        <SolicitarAutorizacion xmlns=\"http://ISTP1.Service.Contracts.Service\">\n            <codigo>6E635339-9E86-4287-BE8C-6763A3196687</codigo>\n        </SolicitarAutorizacion>\n    </soap:Body>\n</soap:Envelope>";

req.write(postData);

req.end();
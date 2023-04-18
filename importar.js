var http = require('http'),
    fs=require('fs')
    parser=require('./parser_vars.js'),
    p=parser.parse_vars,
    datos=parser.batman;

    
const hora = require('./hora');

    console.log(hora.format24());   // 14:30:45
    console.log(hora.format12());   // 02:30:45 PM
    console.log(hora.timestamp()); // 1612280445871
    

http.createServer(function(req,res){
    fs.readFile('./form.html', function(err,html){
        var html_string=html.toString();

        var respuesta=p(req),
        parametros=respuesta['parametros'],
        valores=respuesta['valores'];

        for(var i=0; i<parametros.length; i++){
            var html_string=html_string.replace('{'+parametros[i]+'}',valores[i]);
        }

        html_string=html_string.replace('{identidad}',datos['identidad']);
        html_string=html_string.replace('{poder}',datos['poder']);

        res.writeHead(200,{'Content-type':'text'});
        res.write(html_string);
        res.end();
    });
}).listen(8080);
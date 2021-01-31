const http = require('http');

function rqListener(req, res) {
    
    //console.log(req);
    console.log(req.url, req.method, req.headers);

    res.setHeader('Content-Type', 'text/html');
    res.write('<html><title>My NodeJS App,</title><body><h2>Welcome!</h2></body></html>');
    res.end();
    // end execution:
    // process.exit();
}

const server = http.createServer(rqListener);


server.listen(3000);

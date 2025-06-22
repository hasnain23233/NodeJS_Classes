const queryString = require('querystring');

function userData(req, res) {
    let databody = [];

    req.on('data', (chunk) => {
        databody.push(chunk);
    });

    req.on('end', () => {
        let rowData = Buffer.concat(databody).toString();
        let readable = queryString.parse(rowData);

        res.setHeader('Content-Type', 'text/html');
        res.write(`
            <h1>Thanks for submitting!</h1>
            <p><strong>Name:</strong> ${readable.username}</p>
            <p><strong>Password:</strong> ${readable.password}</p>
        `);
        res.end();
    });
}

module.exports = userData;

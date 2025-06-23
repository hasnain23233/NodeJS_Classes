const queryString = require('querystring')
const fs = require('fs')
function contact(req, res) {
    if (req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`
            <html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Contact Us - Xindagii</title>
  <style>
    body {
      margin: 0;
      font-family: 'Segoe UI', sans-serif;
      background-color: #f5f7fa;
    }

    nav {
      background-color: #0a192f;
      color: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
    }

    .logo {
      font-size: 1.5rem;
      font-weight: bold;
    }

    .nav-actions {
      display: flex;
      gap: 1rem;
      align-items: center;
    }

    .nav-actions a {
      color: #fff;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s ease;
    }

    .nav-actions a:hover {
      color: #64ffda;
    }

    .btn-contact {
      padding: 0.5rem 1rem;
      background-color: #64ffda;
      color: #0a192f;
      border: none;
      border-radius: 5px;
      text-decoration: none;
      font-weight: bold;
      transition: background-color 0.3s ease;
    }

    .btn-contact:hover {
      background-color: #52e0c4;
    }

    .contact-section {
      max-width: 500px;
      margin: 4rem auto;
      background-color: #fff;
      padding: 2rem;
      border-radius: 10px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    }

    .contact-section h1 {
      text-align: center;
      color: #0a192f;
      margin-bottom: 2rem;
    }

    form label {
      display: block;
      margin-bottom: 0.5rem;
      color: #333;
      font-weight: 500;
    }

    form input {
      width: 100%;
      padding: 0.75rem;
      margin-bottom: 1.5rem;
      border: 1px solid #ccc;
      border-radius: 6px;
      font-size: 1rem;
    }

    form button {
      width: 100%;
      padding: 0.75rem;
      background-color: #0a192f;
      color: #fff;
      border: none;
      border-radius: 6px;
      font-size: 1rem;
      font-weight: bold;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    form button:hover {
      background-color: #112e47;
    }
  </style>
</head>
<body>

  <nav>
    <div class="logo">Xindagii</div>
    <div class="nav-actions">
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/contact" class="btn-contact">Contact Us</a>
    </div>
  </nav>

  <section class="contact-section">
    <h1>Contact Us</h1>
    <form action="/submit" method="post">
      <label for="name">Name</label>
      <input type="text" id="name" name="name" placeholder="Enter your name" required>

      <label for="phone">Phone Number</label>
      <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required>

      <label for="email">Email</label>
      <input type="email" id="email" name="email" placeholder="Enter your email address" required>

      <button type="submit">Submit</button>
    </form>
  </section>

</body>
</html>
        `)
    }
    else if (req.url === '/submit' && req.method === 'POST') {
        let readData = [];

        req.on('data', (chunk) => {
            readData.push(chunk);
        });

        req.on('end', () => {
            let body = Buffer.concat(readData).toString();
            let parsedData = queryString.parse(body);
            console.log(parsedData);
            let content = `Username is ${parsedData.name}, email is ${parsedData.email} and the phone number is ${parsedData.phone}`
            console.log("Name:", parsedData.name);
            console.log("Email:", parsedData.email);
            console.log("Phone:", parsedData.phone);
            fs.writeFileSync('class16/dataUser/' + parsedData.name + '.txt', content)
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(`<h1>Thanks, ${parsedData.name}!</h1>`);
        });
    }
}

module.exports = contact
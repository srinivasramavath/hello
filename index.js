const express = require("express");
const app = express();

// Define a route to serve the CSS file directly
app.get("/styles.css", (req, res) => {
    res.setHeader("Content-Type", "text/css");
    res.send(`
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f9;
            color: #333;
        }

        header {
            background-color: #007bff;
            color: white;
            padding: 1rem 0;
            text-align: center;
        }

        main {
            padding: 1rem;
            max-width: 600px;
            margin: 2rem auto;
            background: white;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        h1 {
            margin: 0;
        }

        a {
            color: #007bff;
            text-decoration: none;
            font-weight: bold;
        }

        a:hover {
            text-decoration: underline;
        }

        ul {
            list-style-type: none;
            padding: 0;
        }

        ul li {
            margin: 0.5rem 0;
        }
    `);
});

// Routes for different pages
app.get("/", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>DevOps App</title>
            <link rel="stylesheet" href="/styles.css">
        </head>
        <body>
            <header>
                <h1>Welcome to the DevOps App</h1>
            </header>
            <main>
                <p>This is the home page of our application. Explore the routes below:</p>
                <ul>
                    <li><a href="/myself">Go to /myself</a></li>
                    <li><a href="/ready">Go to /ready</a></li>
                </ul>
            </main>
        </body>
        </html>
    `);
});

app.get("/myself", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Myself Page</title>
            <link rel="stylesheet" href="/styles.css">
        </head>
        <body>
            <header>
                <h1>Myself Page</h1>
            </header>
            <main>
                <p>Hello World! My self Srinivas :).</p>
                <a href="/">Back to Home</a>
            </main>
        </body>
        </html>
    `);
});

app.get("/ready", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Ready Page</title>
            <link rel="stylesheet" href="/styles.css">
        </head>
        <body>
            <header>
                <h1>Ready Page</h1>
            </header>
            <main>
                <p>Hello, it is working! Congratulations on your work.</p>
                <a href="/">Back to Home</a>
            </main>
        </body>
        </html>
    `);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

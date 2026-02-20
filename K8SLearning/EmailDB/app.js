const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// connect to MongoDB

const mongoHost = process.env.MONGO_HOST || 'localhost';
const mongoPort = process.env.MONGO_PORT || '27017';
const mongoUrl = `mongodb://${mongoHost}:${mongoPort}/emailDB`;

mongoose.connect(mongoUrl, {
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB', err);
});

// schema and model

const Email = mongoose.model('Email', {
    email: String
});

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.post('/submit', async (req, res) => {
    const { email } = req.body;

    try {
        const newEmail = new Email({ email });
        await newEmail.save();
        res.redirect('/');
        // res.send('Email saved successfully!');

    } catch (err) {
        res.status(500).send('Error saving email');
    }
})

app.get('/emails', async (req, res) => {
    try {

        const emails = await Email.find({});
        res.json(emails);
    }
    catch (err) {
        res.status(500).send('Error fetching emails');
    }
})

app.get('/exit', (req, res) => {
    res.send('Shutting down the server...');
    process.exit(0);
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


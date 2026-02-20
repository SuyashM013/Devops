const express = require('express');
const app = express();
const PORT = 3500;

app.get('/', (req ,res) => {
    res.send('The app and server is working fine');
})

app.get('/exit', (req, res) => {
    res.send("Server stoped");
    process.exit(0);
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

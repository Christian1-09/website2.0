const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const path = require('path');
const port = 3019;

const app = express();

app.use(express.static(path.join(__dirname)));
app.use(express.static(path.join(__dirname, 'Final-website')));
app.use('/fonts', express.static(path.join(__dirname, 'Final-website/fonts'), {
  setHeaders: (res, path) => {
    if (path.endsWith('.woff2')) {
      res.setHeader('Content-Type', 'font/woff2');
    }
  }
}));
app.use(express.urlencoded({extended: true}));

const userSchema = new mongoose.Schema({
    rating: Number,
    name: String,
    Comment: String
});

const Users = mongoose.model("data", userSchema);



mongoose.connect('mongodb://127.0.0.1:27017/reviews')
  .then(() => console.log("MongoDB connection successful"))
  .catch(err => console.error("MongoDB connection error:", err));


app.post('/post', async (req, res) => {
    try {
        const { rating, name, Comment } = req.body;
        const user = new Users({
            rating,
            name,
            Comment
        });
        await user.save();
        console.log("New review saved:", user);
        res.send("Form submission Successful");
    } catch (error) {
        console.error("Error saving review:", error);
        res.status(500).send("Error submitting form");
    }
});
app.get("/post",(req,res) => {
    Users.find()
    .then((data) =>{
        res.json(data);
    }).catch((error) => {
        console.error("Error fetching data:",error);
        res.status(600).send("Error fetching data from MongoDB");
    });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Final-website', 'main.html'));
});


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
     console.log(`View application at http://localhost:${port}`);
});





require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const passport = require("passport");
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const courseRoutes = require('./routes/course');
const Course = require('./models/Course');
const cookieSession = require("cookie-session");
const passportStrategy = require("./passport");

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  cookieSession({
    name: "session",
    keys: ["cyberwolve"], // Replace with a secure key
    maxAge: 24 * 60 * 60 * 100,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:5173", // Replace with your client-side URL
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

mongoose
  .connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MongoDB Connected');
    const courses = [
      { title: 'JavaScript Basics', duration: '4 weeks' },
      { title: 'React for Beginners', duration: '6 weeks' },
      { title: 'Node.js Fundamentals', duration: '5 weeks' },
      { title: 'Full-Stack Development', duration: '8 weeks' },
    ];
    Course.insertMany(courses)
      .then(() => {
        console.log('Mock data inserted');
      })
      .catch((err) => {
        console.error('Error inserting mock data:', err);
      });
  })
  .catch((err) => console.log(err));

app.use('/api/users', userRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/users', authRoutes);

app.listen(5000, () => console.log('Server started on port 5000'));
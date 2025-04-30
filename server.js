// const express = require('express');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const app = express();

// // Load env variables
// dotenv.config();

// // Middleware
// app.use(express.json());

// // DB Connection
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => console.log('MongoDB connected'))
// .catch((err) => console.log(err));

// // Routes
// app.use('/api/auth', require('./routes/auth'));

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// const express = require('express');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const app = express();

// // Load env variables
// dotenv.config();

// // Middleware
// app.use(express.json());

// // DB Connection
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => console.log('MongoDB connected'))
// .catch((err) => console.log(err));

// // Routes
// app.use('/api/auth', require('./routes/auth'));

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');  // Import cors
const app = express();

// Load env variables
dotenv.config();

// Middleware
app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173", // Frontend URL
  credentials: true // Allow cookies to be sent with the request
}));
// DB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log(err));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.get('/api/test', (req, res) => {
  console.log("GET /api/test hit");
  res.json({ message: "API is working" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// In this folder we make Airbnb full backend project using Express.js and Node.js

const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const path = require('path')
const { default: mongoose } = require('mongoose')
require('dotenv').config()
const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session)
const multer = require('multer')

// Import routes
const userRoute = require('./routes/user/app')
const { hostRoute } = require('./routes/host/hostRout')
const authRouter = require('./routes/auth/login')

// Utility & Error Handler
const pathUtils = require('./utility/pathUtils')
const Error = require('./controllers/Error')

// MongoDB connection string
const mongoLink = process.env.class34_mongoDB

const app = express()

// Serve static files
app.use(multer().single('photo'))
app.use(express.static(path.join(pathUtils, 'public')))

// Set view engine
app.set('view engine', 'ejs')
app.set('views', path.join(pathUtils, 'views'))


//creating store 
const sessionStore = new MongoDBStore({
    uri: mongoLink,
    collection: 'session'
})

// Middleware for logging requests
app.use((req, res, next) => {
    console.log(req.url, req.method)
    next()
})

// Body parser and cookie parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

//useing express_session middleware use here
app.use(session({
    secret: "Doroing.com",
    resave: false,
    saveUninitialized: true,
    store: sessionStore
}))

// Middleware to check login status from cookie
app.use((req, res, next) => {
    req.isLoggedIn = req.session.isLoggedIn === true;
    next();
});

// Auth routes (Login)
app.use(authRouter)

// Public user routes (accessible even if not logged in)
app.use(userRoute)

// Protect host routes (require login)
app.use((req, res, next) => {
    if (req.isLoggedIn) {
        next()
    } else {
        res.redirect('/login')
    }
})

// Protected routes
app.use(hostRoute)

// 404 Error route
app.use(Error.getEror404)

// MongoDB connection
mongoose.connect(mongoLink)
    .then(() => {
        console.log('✅ Successfully connected to the database')
        app.listen(4200, () => {
            console.log('🚀 Server is running at http://localhost:4200 authentication')
        })
    })
    .catch((err) => {
        console.log("❌ Failed to connect to the database", err)
    })

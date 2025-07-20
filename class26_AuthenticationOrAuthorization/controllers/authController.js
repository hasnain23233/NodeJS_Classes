const { check } = require("express-validator")

exports.getLogin = (req, res, next) => {
    res.render('auth/login', {
        isLoggedIn: false
    })
}
exports.getSignUp = (req, res, next) => {
    res.render('auth/signup', {
        isLoggedIn: false
    })
}
exports.postLogin = (req, res, next) => {
    req.session.isLoggedIn = true
    res.redirect('/')
}
exports.postLogout = (req, res, next) => {
    req.session.destroy(() => {
        res.redirect('/login')
    })
}
exports.postsignup = [
    check('firstName')
        .trim()
        .isLength({ min: 2 })
        .withMessage('Your first name at lest 2 chractors ')
        .matches(/^[A-Za-z\s]+S/)
        .withMessage('First Name should only alphabets')
    ,
    check('lastName')
        .matches(/^[A-Za-z\s]+S/)
        .withMessage('Last Name should only alphabets')
    ,
    check('email')
        .isEmail()
        .withMessage('Please Enter a valid email')
        .normalizeEmail()
    ,
    check('password')
        .isLength({ min: 8 })
        .withMessage('Your Pasword at lest 8 charactores')
        .matches(/[a-z]/)
        .withMessage('Your Password Should Lowercase Alphabets')
        .matches(/[A-Z]/)
        .withMessage('Your Password Should Uppercase Alphabets')
        .matches(/[!@#$%^&*(),.?":{}|<>]/)
        .withMessage('Your password must contain at least one special character')
    ,
    check('confirmPassword')
        .trim()
        .custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error('Password does not match')
            }
            return true
        })
    ,
    check('userType')
        .isEmpty()
        .withMessage('use type was empty')
        .isIn(['guest', 'host'])
        .withMessage('Invalid user type')
    ,
    check('agree')
        .isEmpty()
        .withMessage('Please accept the terms and conditions')
        .custom((value, { req }) => {
            if (value !== 'on') {
                throw new Error('Please accept the terms and conditions')
            }
            return true
        })
    ,
    (req, res, next) => {
        console.log(req.body)
        res.redirect('/login')
    }
]
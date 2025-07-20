const { check } = require("express-validator")

exports.getLogin = (req, res, next) => {
    res.render('auth/login', {
        isLoggedIn: false
    })
}
exports.getSignup = (req, res, next) => {
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
exports.postSignup = [
    check('firstName')
        .trim()
        .isLength({ min: 3 })
        .withMessage('Your name at lest three chractores')
        .matches(/^[A-Za-z\s]+$/)
        .withMessage('First name should contain only alphabets')
    ,
    check('lastName')
        .optional({ checkFalsy: true })
        .matches(/^[A-Za-z\s]*$/)
        .withMessage('First name should contain only alphabets')
    ,

    check('email')
        .isEmail()
        .withMessage('Please enter a valid email')
        .normalizeEmail()
    ,

    check('password')
        .isLength({ min: 8 })
        .withMessage('Your password should be 8 chracters')
        .matches(/[a-z]/)
        .withMessage('Password must contain at least one lowercase letter')
        .matches(/[A-Z]/)
        .withMessage('Password must contain at least one uppercase letter')
        .matches(/[!@#$%^&*(),.?":{}|<>]/)
        .withMessage('Password must contain at least one special character'),
    ,
    check('confirmPassword')
        .trim()
        .custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error('Password do not match')
            }
            return true
        })
    ,
    check('userType')
        .notEmpty()
        .withMessage('Your type was empty')
        .isIn(['guest', 'host'])
        .withMessage('Invalid user type')
    ,
    check('agree')
        .notEmpty()
        .withMessage('Pleas accept the terms and conditions')
        .custom((value) => {
            if (value !== 'on') {
                throw new Error('Pleas accept the terms and conditions')
            }
            return true
        })
    ,

    (req, res, next) => {
        console.log(req.body)
        res.redirect('/login')
    }
]
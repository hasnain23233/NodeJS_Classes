const { check, validationResult } = require("express-validator")
const AuthUser = require("../models/authUser")
const bcrypt = require('bcryptjs')

exports.getLogin = (req, res, next) => {
    res.render('auth/login', {
        isLoggedIn: false
    })
}
exports.getSignUp = (req, res, next) => {
    res.render('auth/signup', {
        isLoggedIn: false,
        errors: [],
        oldPut: {}
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
        .withMessage('Your first name must be at least 2 characters long')
        .matches(/^[A-Za-z\s]+$/)
        .withMessage('First name should contain only alphabets'),

    check('lastName')
        .optional({ checkFalsy: true }) // If you want to allow empty last name
        .matches(/^[A-Za-z\s]*$/)
        .withMessage('Last name should contain only alphabets'),

    check('email')
        .isEmail()
        .withMessage('Please enter a valid email')
        .normalizeEmail(),

    check('password')
        .isLength({ min: 8 })
        .withMessage('Your password must be at least 8 characters long')
        .matches(/[a-z]/)
        .withMessage('Password must contain at least one lowercase letter')
        .matches(/[A-Z]/)
        .withMessage('Password must contain at least one uppercase letter')
        .matches(/[!@#$%^&*(),.?":{}|<>]/)
        .withMessage('Password must contain at least one special character'),

    check('confirmPassword')
        .trim()
        .custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error('Passwords do not match');
            }
            return true;
        }),

    check('userType')
        .notEmpty()
        .withMessage('User type was empty')
        .isIn(['guest', 'host'])
        .withMessage('Invalid user type'),

    check('agree')
        .notEmpty()
        .withMessage('Please accept the terms and conditions')
        .custom((value) => {
            if (value !== 'on') {
                throw new Error('Please accept the terms and conditions');
            }
            return true;
        }),

    (req, res, next) => {
        const { firstName, lastName, email, password, userType } = req.body;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).render('auth/signup', {
                isLoggedIn: false,
                errors: errors.array().map(err => err.msg),
                oldPut: { firstName, lastName, email, password, userType }
            });
        }

        bcrypt.hash(password, 12).then(hashedPassword => {
            const user = new AuthUser({ firstName, lastName, email, password: hashedPassword, userType })
            return user.save()
        }).then(() => {
            res.redirect('/login');
        }).catch((err) => {
            console.log('Sorry User was not save', err.message)
            return res.status(422).render('auth/signup', {
                isLoggedIn: false,
                errors: [err.message],
                oldPut: { firstName, lastName, email, password, userType }
            });
        })

    }
];

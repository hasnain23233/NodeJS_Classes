const { check, validationResult } = require("express-validator")
const UserAuth = require("../models/UserAuth")
const bcryptjs = require('bcryptjs')

exports.getLogin = (req, res, next) => {
    res.render('auth/login', {
        isLoggedIn: false,
        errors: [],
        oldPut: {}
    })
}
exports.getSignup = (req, res, next) => {
    res.render('auth/signup', {
        isLoggedIn: false,
        errors: [],
        oldPut: {}
    })
}
exports.postLogin = async (req, res, next) => {
    const { email, password } = req.body
    const user = await UserAuth.findOne({ email })
    console.log(req.body)
    if (!user) {
        return res.status(422).render('auth/login', {
            isLoggedIn: false,
            errors: ['Invalid Email or Password'],
            oldPut: { email }
        });
    }

    const isMetched = await bcryptjs.compare(password, user.password)
    if (!isMetched) {
        return res.status(422).render('auth/login', {
            isLoggedIn: false,
            errors: ['Invalid Email or Password'],
            oldPut: { email }
        });
    }


    req.session.isLoggedIn = true
    req.session.user = user
    await req.session.save()
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
        const { firstName, lastName, email, password, userType } = req.body;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).render('auth/signup', {
                isLoggedIn: false,
                errors: errors.array().map(err => err.msg),
                oldPut: { firstName, lastName, email, password, userType }
            });
        }

        bcryptjs.hash(password, 12).then(hashedPassword => {
            const user = new UserAuth({ firstName, lastName, email, password: hashedPassword, userType })
            return user.save()
        }).then(() => {
            res.redirect('/login')
        }).catch((err) => {
            console.log('user was not save ', err.message)
            return res.status(422).render('auth/signup', {
                isLoggedIn: false,
                errors: [err.message],
                oldPut: { firstName, lastName, email, password, userType }
            });
        })
    }
]
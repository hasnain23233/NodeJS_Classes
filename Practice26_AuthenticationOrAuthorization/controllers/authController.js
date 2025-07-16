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
exports.postSignup = (req, res, next) => {
    console.log(req.body)
    res.redirect('/login')
}
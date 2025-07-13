exports.getLogin = (req, res, next) => {
    res.render('auth/login', {
        isLoggedIn: false
    })
}
exports.postLogin = (req, res, next) => {
    res.cookie('isLoggedIn', true, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 // 1 hour
    })
    res.redirect('/')
}
exports.postLogout = (req, res, next) => {
    res.cookie('isLoggedIn', false)
    res.redirect('/login')
}
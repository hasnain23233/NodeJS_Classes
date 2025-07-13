exports.getLogin = (req, res, next) => {
    res.render('auth/login', {
        isLoggedIn: false
    })
}
exports.postLogin = (req, res, next) => {
    console.log(req.body)
    res.cookie('isLoggedIn', true, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 // 1 hour
    })
    res.redirect('/')
}
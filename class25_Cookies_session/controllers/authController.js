exports.getLogin = (req, res, next) => {
    res.render('auth/login', {
        isLoggedIn: false
    })
}
exports.postLogin = (req, res, next) => {
    console.log(req.body)
    req.isLoggedIn = true
    res.redirect('/')
}
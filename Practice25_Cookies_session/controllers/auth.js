exports.getLogin = (req, res, next) => {
    res.render('./auth/login', {
        isLoggedIn: false
    })
}

exports.postLogin = (req, res, next) => {
    console.log(req.body)
    req.session.isLoggedIn = true
    res.redirect('/')
}
exports.postLoginOut = (req, res, next) => {
    res.cookie('isLoggedIn', false)
    res.redirect('/login')
}
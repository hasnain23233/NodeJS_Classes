exports.getLogin = (req, res, next) => {
    res.render('auth/login')
}
exports.postLogin = (req, res, next) => {
    const { password, username } = req.body
    console.log(password, username)
    res.redirect('/')
}
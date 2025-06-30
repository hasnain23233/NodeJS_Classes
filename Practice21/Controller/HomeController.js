
const HomeData = require('../Models/HomeData')

exports.getAddHome = (req, res, next) => {
    res.render('add_home')
}
exports.postAddHome = (req, res, next) => {
    console.log(req.body.name, req.body.email, req.body.home)
    const { name, email, home, img } = req.body
    const ReqesterData = new HomeData(name, email, home, img)
    ReqesterData.save()
    const sucessReqister = {
        name: req.body.name,
        email: req.body.email,
        home: req.body.home,
        img: req.body.img
    }
    res.render('Success', { sucessReqister: sucessReqister })
}

exports.getHomePage = (req, res, next) => {
    HomeData.fetchingData((data) => {
        res.render('home_page', { HomeData: data })
    })
}

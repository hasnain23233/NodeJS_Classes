const HomeData = require('../Models/HomeData')
exports.getAddHome = (req, res, next) => {
    res.render('host/add_home')
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
    res.render('host/Success', { sucessReqister: sucessReqister })
}
exports.getHostHomeList = (req, res, next) => {
    HomeData.fetchingData((data) => {
        res.render('host/adminHomeList', { HomeData: data })
    })
}
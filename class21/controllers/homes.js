const RegiesterHome = require('../models/HomeData')

exports.getsHome = (req, res, next) => {
    res.render('host/add_home')
}

exports.postAddHome = (req, res, next) => {
    const { name, email, home, img } = req.body
    const Homedata = new RegiesterHome(name, email, home, img)
    Homedata.save()
    const sucessReqister = {
        name: req.body.name,
        email: req.body.email,
        home: req.body.home,
    }
    res.render('host/Success', { sucessReqister: sucessReqister })
}
exports.getHomeList = (req, res, next) => {
    RegiesterHome.fetchingAll((data) => {
        res.render('store/homeList', { HomeData: data })
    })
}
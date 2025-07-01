const RegiesterHome = require('../models/HomeData')


exports.getHomeList = (req, res, next) => {
    RegiesterHome.fetchingAll((data) => {
        res.render('store/homeList', { HomeData: data })
    })
}
exports.getBooking = (req, res, next) => {
    res.render('store/booking')
}
exports.getfavourites = (req, res, next) => {
    RegiesterHome.fetchingAll((data) => {
        res.render('store/favourites', { HomeData: data })
    })
}
exports.postAddFvt = (req, res, next) => {
    console.log("Come to add to favourites", req.body)
    res.redirect('/favourites')
}
exports.getInder = (req, res, next) => {
    RegiesterHome.fetchingAll((data) => {
        res.render('store/index', { HomeData: data })
    })
}
exports.getHomeDetails = (req, res, next) => {
    const homeId = req.params.homeId

    RegiesterHome.findById(homeId, home => {
        if (!home) {
            console.log('home not found')
            res.redirect('/homes')
        } else {

            res.render('store/homeDetails', { homeDetail: home })
        }
    })
}

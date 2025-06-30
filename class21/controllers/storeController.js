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
exports.getInder = (req, res, next) => {
    RegiesterHome.fetchingAll((data) => {
        res.render('store/index', { HomeData: data })
    })
}

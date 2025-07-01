
const HomeData = require('../Models/HomeData')


exports.getHomePage = (req, res, next) => {
    HomeData.fetchingData((data) => {
        res.render('store/Index', { HomeData: data })
    })
}
exports.getBooking = (req, res, next) => {
    HomeData.fetchingData((data) => {
        res.render('store/booking', { HomeData: data })
    })
}
exports.getHomeList = (req, res, next) => {
    HomeData.fetchingData((data) => {
        res.render('store/homeList', { HomeData: data })
    })
}
exports.getFvtList = (req, res, next) => {
    HomeData.fetchingData((data) => {
        res.render('store/fvtList', { HomeData: data })
    })
}
exports.getResverList = (req, res, next) => {
    HomeData.fetchingData((data) => {
        res.render('store/reserve', { HomeData: data })
    })
}
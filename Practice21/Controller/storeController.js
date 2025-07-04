const favrouties = require('../Models/favrouties')
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
    favrouties.addFavrouties(favIds => {
        const cleanFavIds = favIds.map(id => id.trim()); // ✅ clean array
        HomeData.fetchingData((data) => {
            const fvtHome = data.filter(home => cleanFavIds.includes(String(home.id).trim()));
            res.render('store/fvtList', { fvtHome });
        });
    });
};


exports.postFvtList = (req, res, next) => {
    console.log("Your page id is ", req.body)
    favrouties.getFavrouties(req.body.id, error => {
        if (error) {
            console.log("Error while marking favourites:", error)
        }
        res.redirect('/favourites')
    })
}
exports.getResverList = (req, res, next) => {
    HomeData.fetchingData((data) => {
        res.render('store/reserve', { HomeData: data })
    })
}


exports.getHomeDetails = (req, res, next) => {
    const homeId = req.params.homeId
    HomeData.findbyId(homeId, (home) => {
        if (!home) {
            console.log('your home was not found')
            res.redirect('/homes')
        } else {
            res.render('store/homeDetails', { homeDetail: home })
        }
    })
}
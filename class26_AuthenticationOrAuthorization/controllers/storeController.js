const Home = require('../models/HomeData')
const User = require('../models/authUser')

exports.getIndex = (req, res, next) => {
    console.log('session value is ', req.session)
    Home.find().then((data) => {
        res.render('store/index', {
            HomeData: data,
            isLoggedIn: req.isLoggedIn,
            user: req.session.user
        })
    }).catch((error) => {
        console.log('we can`t connect to database', error)
    })
}
exports.getHomeList = (req, res, next) => {
    Home.find().then(data => {
        res.render('store/homeList', {
            HomeData: data,
            isLoggedIn: req.isLoggedIn,
            user: req.session.user
        })
    }).catch((error) => {
        console.log('we can`t connect to database', error)
    })
}
exports.getBooking = (req, res, next) => {
    res.render('store/booking', {
        isLoggedIn: req.isLoggedIn,
        user: req.session.user
    })
}

exports.getfavourites = async (req, res, next) => {
    const userId = req.session.user._id
    const user = await User.findById(userId).populate('favourites')
    res.render('store/favourites', {
        fvtHomes: user.favourites,
        isLoggedIn: req.isLoggedIn,
        user: req.session.user
    });
};



exports.postAddFvt = async (req, res, next) => {
    const homeid = req.body.id
    const userId = req.session.user._id;

    const user = await User.findById(userId);
    if (!user.favourites.includes(homeid)) {
        user.favourites.push(homeid)
        await user.save()
    }
    res.redirect('/favourites');

}

exports.postRemoveForFavroit = async (req, res, next) => {
    const homeid = req.params.homeId
    const userId = req.session.user._id
    const user = await User.findById(userId);

    if (user.favourites.includes(homeid)) {
        user.favourites = user.favourites.filter(fav => fav != homeid)
        await user.save()
    }
    res.redirect('/favourites');

}

exports.getHomeDetails = (req, res, next) => {
    const homeId = req.params.homeId

    Home.findById(homeId).then((home) => {
        if (!home) {
            console.log('home not found')
            res.redirect('/homes')
        } else {

            res.render('store/homeDetails', {
                homeDetail: home,
                isLoggedIn: req.isLoggedIn,
                user: req.session.user
            })
        }
    })
}
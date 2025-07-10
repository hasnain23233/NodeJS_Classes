const Favourites = require('../models/favourites')
const Home = require('../models/HomeData')

exports.getIndex = (req, res, next) => {
    Home.find().then((data) => {
        res.render('store/index', { HomeData: data })
    }).catch((error) => {
        console.log('we can`t connect to database', error)
    })
}
exports.getHomeList = (req, res, next) => {
    Home.find().then((data) => {
        res.render('store/homeList', { HomeData: data })
    }).catch((error) => {
        console.log('we can`t connect to database', error)
    })
}
exports.getBooking = (req, res, next) => {
    res.render('store/booking')
}

exports.getfavourites = (req, res, next) => {
    Favourites.getToFvt().then(favIds => {
        favIds = favIds.map(fav => fav.houseID)
        Home.find().then((homes) => {
            const cleanFavIds = favIds.map(id => String(id).trim());
            const fvtHomes = homes.filter(home => cleanFavIds.includes(String(home._id).trim()));
            res.render('store/favourites', { fvtHomes: fvtHomes });
        });
    });
};



// Controller
exports.postAddFvt = (req, res, next) => {
    const homeId = req.body.id;
    console.log("🏠 House ID Received:", homeId);  // Debug

    const fvtModel = new Favourites(homeId);
    fvtModel.save()
        .then((result) => {
            console.log("✅ fvt added ", result.insertedId);
        })
        .catch((error) => {
            console.log("❌ We can`t add the fvt ", error.message);
        })
        .finally(() => {
            res.redirect('/favourites');
        });
};


exports.postRemoveForFavroit = (req, res, next) => {
    const homeId = req.params.homeId
    Favourites.deleteById(homeId).then((result) => {
        console.log("✅ fvt remove ", result.insertedId);
    })
        .catch((error) => {
            console.log("❌ We can`t remove the fvt ", error.message);
        })
        .finally(() => {
            res.redirect('/favourites');
        });
}



exports.getHomeDetails = (req, res, next) => {
    const homeId = req.params.homeId

    Home.findById(homeId).then((home) => {
        if (!home) {
            console.log('home not found')
            res.redirect('/homes')
        } else {

            res.render('store/homeDetails', { homeDetail: home })
        }
    })
}
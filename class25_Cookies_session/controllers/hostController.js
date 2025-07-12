const Home = require('../models/HomeData')
exports.getsHome = (req, res, next) => {
    res.render('host/editHome', {
        title: "Register Your Home",
        editing: false,
        isLoggedIn: req.isLoggedIn
    })
}


exports.getEditHome = (req, res, next) => {
    const homeId = req.params.homeId
    const queryEditing = req.query.editing === 'true'

    Home.findById(homeId).then((home) => {
        if (!home) {
            console.log('sorry your home page was not found!!')
            return res.redirect('/host_home_List')
        }
        console.log(homeId, queryEditing, home)
        res.render('host/editHome', {
            home: home,
            editing: queryEditing,
            title: "Edit Your Home",
            isLoggedIn: req.isLoggedIn
        })
    })
}

exports.gethostHomeList = (req, res, next) => {
    Home.find().then((data) => {
        res.render('host/hostHomeList', {
            HomeData: data,
            isLoggedIn: req.isLoggedIn
        })
    })
}

// Add New Home
exports.postAddHome = (req, res, next) => {
    const { name, email, home, img, description } = req.body;
    const Homedata = new Home({ name, email, home, img, description }); // ✅ Fix here
    Homedata.save().then(() => {
        console.log('save the homes')
    });
    const sucessReqister = { name, email, home, description };
    res.render('host/Success', {
        sucessReqister,
        isLoggedIn: req.isLoggedIn
    });
};

// Edit Existing Home
exports.postEditHome = (req, res, next) => {
    const { id, name, email, home, img, description } = req.body;
    Home.findById(id).then((homes) => {
        homes.name = name
        homes.email = email
        homes.home = home
        homes.img = img
        homes.description = description
        homes.save().then(() => {
            console.log("home was edit ")
        });
        res.redirect('/host_home_List');
    })
};

exports.postDeleteHome = (req, res, next) => {
    const homeId = req.params.homeId
    console.log("You are deleting home ", homeId)
    Home.findByIdAndDelete(homeId).then(() => {
        res.redirect('/host_home_List')
    })
}



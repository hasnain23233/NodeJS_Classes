const Home = require('../models/HomeData')
exports.getsHome = (req, res, next) => {
    res.render('host/editHome', {
        title: "Register Your Home",
        editing: false,
        isLoggedIn: req.isLoggedIn,
        user: req.session.user
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
            isLoggedIn: req.isLoggedIn,
            user: req.session.user
        })
    })
}

exports.gethostHomeList = (req, res, next) => {
    console.log(req.body)
    Home.find().then((data) => {
        res.render('host/hostHomeList', {
            HomeData: data,
            isLoggedIn: req.isLoggedIn,
            user: req.session.user
        })
    })
}

// Add New Home
exports.postAddHome = (req, res, next) => {
    const { name, email, home, description } = req.body;
    if (!req.file) {
        return res.status(422).send('No image provided')
    }

    const photo = req.file.path
    const Homedata = new Home({ name, email, home, photo, description });
    console.log(req.file)
    Homedata.save().then(() => {
        console.log('save the homes')
    });
    const sucessReqister = { name, email, home, description };
    res.render('host/Success', {
        sucessReqister,
        isLoggedIn: req.isLoggedIn,
        user: req.session.user
    });
};

// Edit Existing Home
exports.postEditHome = (req, res, next) => {
    const { id, name, email, home, description } = req.body;

    Home.findById(id).then((homes) => {
        homes.name = name
        homes.email = email
        homes.home = home
        homes.description = description
        if (req.file) {
            home.photo = req.file.path
        }
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



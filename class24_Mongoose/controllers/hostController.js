const Home = require('../models/HomeData')
exports.getsHome = (req, res, next) => {
    res.render('host/editHome', {
        title: "Register Your Home",
        editing: false,
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
            title: "Edit Your Home"
        })
    })
}

exports.gethostHomeList = (req, res, next) => {
    Home.find().then(data => {
        res.render('host/hostHomeList', { HomeData: data })
    })
}

// Add New Home
exports.postAddHome = (req, res, next) => {
    const { name, email, home, img, description } = req.body;
    const Homedata = new Home({ name, email, home, img, description }); // ✅ Fix here
    Homedata.save().then(() => {
        console.log('Save the home data')
    });
    const sucessReqister = { name, email, home, description };
    res.render('host/Success', { sucessReqister });
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
        homes.save().then((data) => {
            console.log("home updated", data)
        }).catch(() => {
            console.log('Sorry we cann`t update home')
        })
        res.redirect('/host_home_List');
    }).catch((err) => {
        console.log('Error while fetching home', err)
    })
};

exports.postDeleteHome = (req, res, next) => {
    const homeId = req.params.homeId
    console.log("You are deleting home ", homeId)
    Home.findByIdAndDelete(homeId).then(() => {
        res.redirect('/host_home_List')
    })
}



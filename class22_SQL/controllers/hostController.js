const RegiesterHome = require('../models/HomeData')
exports.getsHome = (req, res, next) => {
    res.render('host/editHome', {
        title: "Register Your Home",
        editing: false,
    })
}


exports.getEditHome = (req, res, next) => {
    const homeId = req.params.homeId
    const queryEditing = req.query.editing === 'true'

    RegiesterHome.findById(homeId, home => {
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
    RegiesterHome.fetchingAll().then(([data]) => {
        res.render('host/hostHomeList', { HomeData: data })
    })
}

// Add New Home
exports.postAddHome = (req, res, next) => {
    const { name, email, home, img, description } = req.body;
    const Homedata = new RegiesterHome(null, name, email, home, img, description); // ✅ Fix here
    Homedata.save();
    const sucessReqister = { name, email, home };
    res.render('host/Success', { sucessReqister });
};

// Edit Existing Home
exports.postEditHome = (req, res, next) => {
    const { id, name, email, home, img, description } = req.body;
    const Homedata = new RegiesterHome(id, name, email, home, img, description); // ✅ Fix here
    Homedata.save();
    res.redirect('/host_home_List');
};

exports.postDeleteHome = (req, res, next) => {
    const homeId = req.params.homeId
    console.log("You are deleting home ", homeId)
    RegiesterHome.deleteById(homeId, err => {
        if (err) {
            console.log('error while deleting', err)
        }
        res.redirect('/host_home_List')
    })
}



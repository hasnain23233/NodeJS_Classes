const Home = require('../models/HomeData')
const fs = require('fs')
const path = require('path')
const pathUtils = require('../utility/pathUtils')

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

    // Convert file path to relative URL
    const photo = '/class27_FileDownloadAndEdit/upload/' + req.file.filename;

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
// Edit Existing Home
exports.postEditHome = (req, res, next) => {
    const { id, name, email, home, description } = req.body;

    Home.findById(id).then((homes) => {
        if (!homes) {
            console.log("❌ Home not found for editing");
            return res.redirect('/host_home_List');
        }

        homes.name = name;
        homes.email = email;
        homes.home = home;
        homes.description = description;

        if (req.file) {
            // Delete old image if it exists
            if (homes.photo) {
                // Extract old file name from stored URL
                const oldFileName = homes.photo.split('/').pop();
                const oldImagePath = path.join(pathUtils, 'upload', oldFileName);

                fs.unlink(oldImagePath, (err) => {
                    if (err) {
                        console.log('⚠ Error deleting old image:', err.message);
                    } else {
                        console.log('🗑 Old image deleted successfully:', oldFileName);
                    }
                });
            }

            // Save new image path (relative URL for browser)
            homes.photo = '/class27_FileDownloadAndEdit/upload/' + req.file.filename;
        }

        return homes.save();
    }).then(() => {
        console.log("✅ Home was edited");
        res.redirect('/host_home_List');
    }).catch(err => {
        console.error("❌ Error editing home:", err);
    });
};



exports.postDeleteHome = (req, res, next) => {
    const homeId = req.params.homeId
    console.log("You are deleting home ", homeId)
    Home.findByIdAndDelete(homeId).then(() => {
        res.redirect('/host_home_List')
    })
}



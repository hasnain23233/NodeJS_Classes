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
    RegiesterHome.fetchingAll((data) => {
        res.render('host/hostHomeList', { HomeData: data })
    })
}

exports.postAddHome = (req, res, next) => {
    const { name, email, home, img } = req.body
    const Homedata = new RegiesterHome(name, email, home, img)
    Homedata.save()
    const sucessReqister = {
        name: req.body.name,
        email: req.body.email,
        home: req.body.home,
    }
    res.render('host/Success', { sucessReqister: sucessReqister })
}


exports.postEditHome = (req, res, next) => {
    const { id, name, email, home, img } = req.body
    const Homedata = new RegiesterHome(id, name, email, home, img)
    Homedata.save()
    res.redirect('/host_home_List')
}


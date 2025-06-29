const fs = require('fs')


const HomeData = []

exports.getsHome = (req, res, next) => {
    res.render('add_home', { HomeData: HomeData })
}



exports.postAddHome = (req, res, next) => {
    const content = `name: ${req.body.name} . Email is ${req.body.email} and your house is ${req.body.home} `
    HomeData.push({
        name: req.body.name,
        email: req.body.email,
        home: req.body.home,
        img: req.body.img
    })
    const sucessReqister = {
        name: req.body.name,
        email: req.body.email,
        home: req.body.home,
    }
    fs.writeFileSync(`airbnd/HomeData/${req.body.name}.txt`, content)
    res.render('Success', { sucessReqister: sucessReqister })
}
exports.getHomeList = (req, res, next) => {
    res.render('home_page', { HomeData })
}
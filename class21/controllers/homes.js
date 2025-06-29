const { HomeData } = require("../routes/host/hostRout")

exports.getsHome = (req, res, next) => {
    res.render('add_home', { HomeData: HomeData })
}
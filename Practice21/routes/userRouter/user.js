const express = require('express')

const router = express.Router()
const UserStoreController = require('../../Controller/storeController')

router.get('/', UserStoreController.getHomePage)
router.get('/booking', UserStoreController.getBooking)
router.get('/favourites', UserStoreController.getFvtList)
router.get('/homes', UserStoreController.getHomeList)
router.get('/reserve', UserStoreController.getResverList)

router.get('/home/:homeId', UserStoreController.getHomeDetails)
router.post('/favourites', UserStoreController.postFvtList)

module.exports = router
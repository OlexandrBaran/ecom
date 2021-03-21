const Router = require('express')
const router = new Router()
const userControler = require('../controlers/userControler')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/regestration', userControler.regestration)
router.post('/login', userControler.login)
router.get('/auth', authMiddleware, userControler.check)




module.exports = router
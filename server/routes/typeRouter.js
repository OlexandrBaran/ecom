const Router = require('express')
const router = new Router()
const typeControler = require('../controlers/typeControler')
const checkRole = require('../middleware/chekRoleMiddleware')


router.post('/', checkRole('ADMIN'), typeControler.create)
router.get('/', typeControler.getAll)




module.exports = router
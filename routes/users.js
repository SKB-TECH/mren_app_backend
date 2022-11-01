const router = require("express").Router()
const userController = require('../controllers/user')

// les routes pour les operation crud users
router.get('/:id', userController.getUser)
router.put('/update/:id', userController.update_user)
router.delete('/delete/:id', userController.delete_user)
router.patch('/:id/follow', userController.follow)
router.patch('/:id/unfollow', userController.unfollow)

module.exports = router
const Router = require('express').Router;
const userController = require('../controllers/user-controller');
const router = new Router();
const { body } = require('express-validator')

const authMiddleware = require('../middleware/auth-middleware'); //для функций которым нужна авторизация
//пример router.get('/test', authMiddleware, userController.test);
const categoryController = require('../controllers/category-controller');
const brandsController = require('../controllers/brands-controller');

router.post('/registration',
    body('email').isEmail(),
    body('password').isLength({ min: 5, max: 30 }),
    userController.registration
);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/activate/:link', userController.activate);
router.get('/refresh', userController.refresh);
router.get('/test', userController.test);
router.get('/popularCategory', categoryController.getPopularCategory);
router.get('/setCategory', categoryController.setCategory);
router.get('/getBrandsFirstLetter', brandsController.getBrandsFirstLetters);
router.get('/setBrands', brandsController.setBrands);
router.get('/getAllBrands', brandsController.getAllBrands);

module.exports = router;
const Router = require('express').Router;
const userController = require('../controllers/user-controller');
const router = new Router();
const { body } = require('express-validator')

const authMiddleware = require('../middleware/auth-middleware'); //для функций которым нужна авторизация
//пример router.get('/test', authMiddleware, userController.test);
const categoryController = require('../controllers/category-controller');
const brandsController = require('../controllers/brands-controller');
const subcategoryController = require('../controllers/subcategory-controller');
const productController = require('../controllers/product-controller');
const cartController = require('../controllers/cart-controller');

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

router.get('/getSubcategory', subcategoryController.getSubcategories);
router.get('/setSubcategory', subcategoryController.setSubcategory);
router.post('/getSubcategoryProducts', subcategoryController.getSubcategoryProdicts);

router.get('/getProducts', productController.getProducts);
router.get('/setProduct', productController.setProducts);
router.post('/getProductById', productController.getProductById);

router.get('/getCarts', cartController.getCarts);
router.post('/setCart', cartController.setCarts);
router.post('/getCartById', cartController.getCartById);
router.delete('/deleteCartProductById/:id', cartController.deleteCartProductById)

module.exports = router;
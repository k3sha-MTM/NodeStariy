const {Router} = require('express')
const router = Router()
const Optium = require('../models/Optium')

router.get('/',async(req, res)=>{
    const optiums = await Optium.find({}).lean()
    res.render('index', {
        title: 'OptiumStariy',
        optiums
    })
})
router.get('/admin',async(req, res)=>{
    res.render('admin', {title: 'OptiumStariy'})
})
router.get('/login',async(req, res)=>{
    res.render('login', {title: 'Login'})
})
router.post('/createproduct',async(req, res)=>{
    const optium = new Optium({
        Name: req.body.Name,
        Price: req.body.Price,
        Image: req.body.Image
    })
    await optium.save()
    res.redirect('/')
    //res.render('/', {title: 'Create Product'})
})
module.exports = router

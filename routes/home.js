const {Router} = require('express')
const router = Router()
const Optium = require('../models/Optium')
const User = require('../models/User')

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
router.post('/login',async(req, res)=>{
    
    const user = new User({
        Login: req.body.Login,
        Password: req.body.Password
    })
    await user.save()
    res.redirect('/')
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

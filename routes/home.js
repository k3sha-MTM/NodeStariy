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
    const optiums = await Optium.find({}).lean()
    
    res.render('admin', {
        title: 'OptiumStariy', 
        optiums})
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
        Image: req.body.Image,
        ImageLogo: req.body.ImageLogo
    })
    await optium.save()
    res.redirect('/')
    //res.render('/', {title: 'Create Product'})
})
router.post('/deleteproduct',async(req, res)=>{

    console.log(req.body.id)
    const optium = await Optium.findById(req.body.id)
    await optium.remove()
    res.redirect('/admin')

})
module.exports = router

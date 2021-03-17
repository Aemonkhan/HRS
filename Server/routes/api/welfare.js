const express = require('express')
const Welfare = require('../../models/welfare.js');
const router = express.Router()

router.get('/', async (req, res) => {
    // get posts from posts
    const welfare = await Welfare.find();
    res.json({
        success: true,
        status: 200, //ok
        data: registration
    })

})
router.post('/add', async (req, res) => {
    console.log("....", req.body)
    try {
        const welfare = await Welfare.create(req.body)
        res.json({
            success: true,
            status: 201,
            dbid: welfare._id
        })

    } catch (error) {
        res.json({
            success: false,
            status: 400,
            error
            
        })

    }


})
router.get('/:id', async (req, res) => {
    const welfare = await Welfare.findById(req.params.id);
    res.json({
        success: true,
        status: 200, //ok
        data: welfare
    })

})
router.put('update/:id', async (req, res) => {
    console.log('update')
    const welfare = await Welfare.findByIdAndUpdate(req.params.id, req.body);
    res.json({
        success: true,
        status: 200, //ok
        data: welfare,
        msg: 'updated successfully'
    })


})
router.delete('/:id', async (req, res) => {
    try {
         const welfare = await Welfare.findByIdAndDelete(req.params.id);
    res.json({
        success: true,
        status: 200, //ok
        msg: 'post is deleted successfully'
    })
   
    } catch (error) {
        console.log(error)
    }

})
module.exports = router

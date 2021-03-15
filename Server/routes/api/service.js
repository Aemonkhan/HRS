const express = require('express')
const Service = require('../../models/service.js');
const router = express.Router()

router.get('/', async (req, res) => {
    // get posts from posts
    const service = await service.find();
    res.json({
        success: true,
        status: 200, //ok
        data: service
    })

})
router.post('/add', async (req, res) => {
    console.log("....", req.body)
    try {
        const service = await Service.create(req.body)
        res.json({
            success: true,
            status: 201,
            dbid: post._id
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
    const service = await Service.findById(req.params.id);
    res.json({
        success: true,
        status: 200, //ok
        data: post
    })

})
router.put('update/:id', async (req, res) => {
    console.log('update')
    const service = await Service.findByIdAndUpdate(req.params.id, req.body);
    res.json({
        success: true,
        status: 200, //ok
        data: service,
        msg: 'updated successfully'
    })


})
router.delete('/:id', async (req, res) => {
    try {
         const service = await Service.findByIdAndDelete(req.params.id);
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

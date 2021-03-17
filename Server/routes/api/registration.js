const express = require('express')
const Registration = require('../../models/registration.js');
const router = express.Router()

router.get('/', async (req, res) => {
    // get posts from posts
    const registration = await Registration.find();
    res.json({
        success: true,
        status: 200, //ok
        data: registration
    })

})
router.post('/add', async (req, res) => {
    console.log("....", req.body)
    try {
        const reg = await Registration.create(req.body)
        res.json({
            success: true,
            status: 201,
            dbid: reg._id
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
    const registration = await Registration.findById(req.params.id);
    res.json({
        success: true,
        status: 200, //ok
        data: registration
    })

})
router.put('update/:id', async (req, res) => {
    console.log('update')
    const registration = await Registration.findByIdAndUpdate(req.params.id, req.body);
    res.json({
        success: true,
        status: 200, //ok
        data: registration,
        msg: 'updated successfully'
    })
    console.log(res.body)

})
router.delete('/:id', async (req, res) => {
    try {
        const registration = await Registration.findByIdAndDelete(req.params.id);
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

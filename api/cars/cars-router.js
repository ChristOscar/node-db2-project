const Cars = require('./cars-model');
const router = require('express').Router();
const { checkCarId, checkCarPayload, checkVinNumberValid, checkVinNumberUnique } = require('./cars-middleware');

router.get('/', (req, res, next) =>{
    Cars.getAll()
    .then(cars => {
        res.json(cars);
    })
    .catch(next)
});

router.post('/',checkCarPayload, checkVinNumberValid, checkVinNumberUnique, (req,res, next) =>{
    Cars.create()
    .then(cars => {
        res.status(201).json(cars);
    })
    .catch(next)
});

router.get('/:id', checkCarId, (req, res, next)=>{
    const {id} = req.params;
    Cars.getById(id)
    .then(cars =>{
        res.json(cars);
    })
    .catch(next)
});

// eslint-disable-next-line no-unused-vars
router.use((err, req, res, next)=>{
    res.status(err.status || 500).json({
        custom: 'Something happened in the cars-router',
        message: err.message,
        stack: err.stack,
    })
})

module.exports = router;
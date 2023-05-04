const express =require('express')
const router=express.Router()

let {people} = require('../raw_data')
const {
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson

}= require('../controllers/people')


// router.get('/',getPeople)
// router.post('/',createPerson)
// router.post('/api/postman/people',createPersonPostman)
// router.put('/:id',updatePerson)
// router.delete('/:id',deletePerson)

router.route('/').get(getPeople).post(createPerson)
router.route('/postman').post(createPersonPostman)
router.route('/:id').put(updatePerson).delete(deletePerson)

module.exports =router
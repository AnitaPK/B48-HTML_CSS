express = require('express')
const projectController = require('../controllers/projectController')

router = express();

data = ['fruits']


router.get('/showProjects', projectController.getAllProducts)

router.post('/addProjects', projectController.addProject);


module.exports =  router;
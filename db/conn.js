const { Sequilize } = require('sequilize')

const sequilize = new Sequilize('nodemvc', 'root', '', {
    host: 'localhost',
    dialext: 'mysql',
})
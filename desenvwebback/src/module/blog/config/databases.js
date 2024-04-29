const db = require('../../../../config/databases');
module.exports = {
    development: {
        ...db.blog
    },
    homolog: {
        ...db.blog
    },
    production: {
        ...db.blog
    },
}
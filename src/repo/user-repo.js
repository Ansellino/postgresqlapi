const pool = require('../pool');

class UserRepo {
    static async find() {
        const { rows } = await pool.query('SELECT * FROM users;');
        
        return rows;
    }

    static async findById() {}

    static async insert() {}

    static async update() {}

    static async delete() {}

}

module.exports = UserRepo;

/* Option 1
module.exports = {
    find() {

    },
    findById() {

    },
    insert() {

    }
}; 

Option 2
class UserRepo {
    find() {

    }

    findById() {

    }

    insert() {

    }
}

module.exports = new UserRepo();
*/


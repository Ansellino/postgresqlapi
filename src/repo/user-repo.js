const pool = require('../pool');
const toCamelCase = require('./utils/to-camel-case');

class UserRepo {
    static async find() {
        const { rows } = await pool.query('SELECT * FROM users;');
        
        return toCamelCase(rows);
    }

    static async findById(id) {
        /* WARNING: REALLY BIG SECURITY ISSUE! Sql ijection if using this!
        const { rows } = await pool.query(`
           SELECT * FROM users WHERE id = ${id};
        `  limit 1);
        */

        /*
        const { rows } = await pool.query(`
            SELECT * FROM users WHERE id = $1 AND USERNAME = $2;
        `, [id, username]);
        */
        
        const { rows } = await pool.query(`
            SELECT * FROM users WHERE id = $1;
        `, [id]);

        return toCamelCase(rows)[0]; //return row 1
    }

    static async insert(username, bio) {
        const { rows } = await pool.query(
            'INSERT INTO users (username, bio) VALUES ($1, $2) RETURNING *;',
            [username, bio]
        );

        return toCamelCase(rows)[0];
    }

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


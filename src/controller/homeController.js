import pool from '../configs/connectDB';

let getHomePage = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM `users`');
    console.log(typeof rows);
    return res.render("index.ejs", { dataUser: rows });
}

let getDatailPage = async (req, res) => {
    let id = req.params.userId;
    let [user] = await pool.execute('SELECT * FROM `users` WHERE id = ?', [id]);
    // console.log(typeof user);
    return res.send(user);
}

let createNewUser = async (req, res) => {
    let { firstName, lastName, email, address } = req.body;
    console.log(req.body);
    await pool.execute('INSERT INTO `users` (firstName, lastName, email, address) VALUES (?, ?, ?, ?)',
        [firstName, lastName, email, address]);
    return res.redirect('/');
}

let deleteUser = async (req, res) => {
    let userId = req.body.userId;
    await pool.execute('delete from `users` where id = ?', [userId]);
    return res.redirect('/');
}

let getEditPage = async (req, res) => {
    let id = req.params.id;
    let [user] = await pool.execute('SELECT * FROM `users` WHERE id = ?', [id]);
    return res.render("update.ejs", { dataUser: user[0] });
}

let postUpdateUser = async (req, res) => {
    let { firstName, lastName, email, address, id } = req.body;
    await pool.execute('update `users` set firstName = ?, lastName = ?, email = ?, address = ?  where id = ?',
        [firstName, lastName, email, address, id]);
    return res.redirect('/');
}

module.exports = {
    getHomePage,
    getDatailPage,
    createNewUser,
    deleteUser, getEditPage, postUpdateUser
}


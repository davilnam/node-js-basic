import { application } from 'express';
import pool from '../configs/connectDB';

let getHomePage = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM `users`');
    return res.render("index.ejs", { dataUser: rows });
}

let getDatailPage = async (req, res) => {
    let id = req.params.userId;
    let [user] = await pool.execute('SELECT * FROM `users` WHERE id = ?', [id]);
    console.log(typeof user);
    return res.send(user);
}

let createNewUser = async (req, res) => {
    let { firstName, lastName, email, address } = req.body;
    await pool.execute('INSERT INTO `users` (firstName, lastName, email, address) VALUES (?, ?, ?, ?)',
        [firstName, lastName, email, address]);
    return res.redirect('/');
}


module.exports = {
    getHomePage,
    getDatailPage,
    createNewUser
}
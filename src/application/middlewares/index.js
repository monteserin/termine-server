import express from 'express';
import cors from 'cors';
import withSockets from './with-sockets';

const Middlewares = (app, io) => {
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(withSockets(io));
    app.use(cors()) // Use this after the variable declaration
    app.use(function (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header('Access-Control-Allow-Credentials', true);
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');

        if (req.method === 'OPTIONS') {
            res.end();
        } else {
            next();
        }
    });
};

export default Middlewares;
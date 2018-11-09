'use strict'
let express = require('express');
let model = require('../models/model')
let router = express.Router();

router.get('', (req, res) => { res.send("Welcome to Compressor") });
/**
 * @swagger
 * definitions:
 *   string:
 *     properties:
 *       value:
 *         type: string
 */

/**
 * @swagger
 * /compress:
 *   post:
 *     tags:
 *       - Testing api
 *     description: Return compress string
 *     parameters:
 *       - name: string
 *         description: string for compress
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/string'
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: a string after compress
 */
router.post('/compress', (req, res) => {
    res.send({ value: model.compression(req.body.value) });
});

/**
 * @swagger
 * /decompress:
 *   post:
 *     tags:
 *       - Testing api
 *     description: Return decompress string
 *     parameters:
 *       - name: string
 *         description: string for decompress
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/string'
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: a string after decompress
 */
router.post('/decompress', (req, res) => {
    res.send({ value: model.decompression(req.body.value) });
});

module.exports = router;
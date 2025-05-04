const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RegisterInput'
 *     responses:
 *       201:
 *         description: The user was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RegisterInput'
 *       400:
 *         description: The user was not found
 *       404:
 *         description: Some server error
 */
router.post('/register', authController.registerController)

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginInput'
 *     responses:
 *       201:
 *         description: The user was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LoginInput'
 *       400:
 *         description: The user was not found
 *       404:
 *         description: Some server error
 */
router.post('/login', authController.loginController)

module.exports = router
const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Returns the list of all the users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: The list of the users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
router.get('/', userController.findAllController)

/**
 * @swagger
 * /users/detail-user/{username}:
 *   get:
 *     summary: Get the user by username
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: username
 *         schema:
 *           type: string
 *         required: true
 *         description: The user's username
 *     responses:
 *       200:
 *         description: The users description by username
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserResponse'
 *       400:
 *         description: The user's data description was not found
 */
router.get('/detail-user/:username', userController.findOneController)

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a new item
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserCreateInput'
 *     responses:
 *       201:
 *         description: The item was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserCreateInput'
 *       400:
 *         description: The item was not found
 *       404:
 *         description: Some server error
 */
router.post('/', userController.createUserController)

/**
 * @swagger
 * /users/detail-user/{username}:
 *   patch:
 *     summary: Update the user data by username
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: username
 *         schema:
 *           type: string
 *         required: true
 *         description: The user's username
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserUpdateInput'
 *     responses:
 *       200:
 *         description: The user data was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserUpdateResponse'
 *       400:
 *         description: The user data was not found
 *       404:
 *         description: The bad request error
 */
router.patch('/detail-user/:username', userController.updateUserController)

/**
 * @swagger
 * /users/detail-user/{username}:
 *   delete:
 *     summary: Remove the user data by username
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: username
 *         schema:
 *           type: string
 *         required: true
 *         description: The user data username
 *     responses:
 *       200:
 *         description: The user data was deleted
 *       400:
 *         description: The user data was not found
 *       404:
 *         description: The bad request error
 */
router.get('/detail-user/:username', userController.deleteUserController)

module.exports = router
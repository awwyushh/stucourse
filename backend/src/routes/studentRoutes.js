import express from "express";
import { addStudent, getStudents, deleteStudent } from "../controllers/studentController.js";

const router = express.Router();

/**
 * @openapi
 * /students:
 *   get:
 *     summary: Get all students
 *     responses:
 *       200:
 *         description: List of students
 *   post:
 *     summary: Add a new student
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *             properties:
 *               name:
 *                 type: string
 *                 example: Alice
 *               email:
 *                 type: string
 *                 example: alice@example.com
 *     responses:
 *       200:
 *         description: Student added successfully
 *
 * /students/{id}:
 *   delete:
 *     summary: Delete a student
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Student ID
 *     responses:
 *       200:
 *         description: Student deleted
 */

router.post("/", addStudent);
router.get("/", getStudents);
router.delete("/:id", deleteStudent);

export default router;
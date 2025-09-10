import express from "express";
import { addEnrollment, getEnrollments, deleteEnrollment } from "../controllers/enrollmentController.js";

const router = express.Router();

/**
 * @openapi
 * /enrollments:
 *   get:
 *     summary: Get all enrollments
 *     responses:
 *       200:
 *         description: List of enrollments with student + course info
 *   post:
 *     summary: Enroll a student into a course
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - student_id
 *               - course_id
 *             properties:
 *               student_id:
 *                 type: integer
 *                 example: 1
 *               course_id:
 *                 type: integer
 *                 example: 2
 *     responses:
 *       200:
 *         description: Enrollment created
 *
 * /enrollments/{id}:
 *   delete:
 *     summary: Delete an enrollment
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Enrollment ID
 *     responses:
 *       200:
 *         description: Enrollment deleted
 */

router.post("/", addEnrollment);
router.get("/", getEnrollments);
router.delete("/:id", deleteEnrollment);

export default router;

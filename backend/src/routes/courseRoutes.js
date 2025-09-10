import express from "express";
import { addCourse, getCourses, deleteCourse } from "../controllers/courseController.js";

const router = express.Router();

/**
 * @openapi
 * /courses:
 *   get:
 *     summary: Get all courses
 *     responses:
 *       200:
 *         description: List of courses
 *   post:
 *     summary: Add a new course
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - course_name
 *               - duration
 *             properties:
 *               course_name:
 *                 type: string
 *                 example: React Basics
 *               duration:
 *                 type: string
 *                 example: 6 weeks
 *     responses:
 *       200:
 *         description: Course added successfully
 *
 * /courses/{id}:
 *   delete:
 *     summary: Delete a course
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Course ID
 *     responses:
 *       200:
 *         description: Course deleted
 */

router.post("/", addCourse);
router.get("/", getCourses);
router.delete("/:id", deleteCourse);

export default router;

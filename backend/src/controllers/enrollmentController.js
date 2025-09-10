import db from "../db.js";

export const addEnrollment = async (req, res) => {
  try {
    const { student_id, course_id } = req.body;
    const result = await db.query(
      `INSERT INTO enrollments (student_id, course_id)
       VALUES ($1, $2) RETURNING *`,
      [student_id, course_id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getEnrollments = async (req, res) => {
  try {
    const result = await db.query(
      `SELECT e.id, s.name AS student, s.email, c.course_name, c.duration
       FROM enrollments e
       JOIN students s ON e.student_id = s.id
       JOIN courses c ON e.course_id = c.id
       ORDER BY e.id`
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteEnrollment = async (req, res) => {
  try {
    const { id } = req.params;
    await db.query("DELETE FROM enrollments WHERE id = $1", [id]);
    res.json({ message: "Enrollment deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

import db from "../db.js";

export const addCourse = async (req, res) => {
  try {
    const { course_name, duration } = req.body;
    const result = await db.query(
      "INSERT INTO courses (course_name, duration) VALUES ($1, $2) RETURNING *",
      [course_name, duration]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getCourses = async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM courses ORDER BY id");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteCourse = async (req, res) => {
  try {
    const { id } = req.params;
    await db.query("DELETE FROM courses WHERE id = $1", [id]);
    res.json({ message: "Course deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

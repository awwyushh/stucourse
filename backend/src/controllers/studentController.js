import db from "../db.js";

export const addStudent = async (req, res) => {
  try {
    const { name, email } = req.body;
    const result = await db.query(
      "INSERT INTO students (name, email) VALUES ($1, $2) RETURNING *",
      [name, email]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getStudents = async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM students ORDER BY id");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    await db.query("DELETE FROM students WHERE id = $1", [id]);
    res.json({ message: "Student deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

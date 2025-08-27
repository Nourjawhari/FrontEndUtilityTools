const { get_db } = require("../../config/connect_db");
const { append_error_file } = require("../../helper/utility")

module.exports = async function load_platform(req, reply) {
  const db = await get_db();

  try {
    // Run the query against Postgres
    const { rows } = await db.query(`SELECT * FROM platform WHERE is_disabled = false`);

    if (rows.length === 0) {
      console.log("Platforms not found");
      return reply.code(404).send({ message: "No platforms found" });
    }

    // return platforms information
    return reply.code(200).send(rows);
  } catch (err) {

    await append_error_file(err.message);
    console.error("Database error:", err.message);
    return reply.code(500).send({ message: "Internal server error" });
  }
};

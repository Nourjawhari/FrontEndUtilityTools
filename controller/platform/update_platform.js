const { get_db } = require("../../config/connect_db");
const { append_error_file } = require("../../helper/utility")

module.exports = async function update_platform(req, reply) {
  const db = await get_db();

  try {

    const { platform_id, is_disabled } = req.body

    // Run the query against Postgres
    const { rows } = await db.query(`UPDATE platform SET is_disabled = $2 WHERE platform_id = $1 RETURNING *`, [platform_id, is_disabled]);

    if (rows.length === 0) {
      console.log("Platforms not found");
      return reply.code(404).send({ message: "No platforms found" });
    }

    // return platforms information
    return reply.code(200).send(rows[0]); 
  } catch (err) {

    await append_error_file(err.message);
    console.error("Database error:", err.message);
    return reply.code(500).send({ message: "Internal server error" });
  }
};

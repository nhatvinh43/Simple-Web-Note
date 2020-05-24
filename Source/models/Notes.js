const db = require("../utils/database.js");
const tbName = "note";

module.exports = {
  getAll: async () => {
    const sql = `SELECT * FROM ${tbName} ORDER BY idNote desc limit 9`;
    const rows = await db.load(sql);
    return rows;
  },
  addNote: async (title, content, date) => {
    const sql = `insert into ${tbName} (title, content, noteDate) values ('${title}', '${content}', '${date}')`;
    await db.load(sql);
  },
};

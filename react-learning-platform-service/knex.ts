export const db = require("knex")({
  client: "sqlite3",
  connection: {
    filename: "./courses.sqlite",
  },
});

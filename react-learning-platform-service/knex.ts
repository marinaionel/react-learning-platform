export const db = require("knex")({
  client: "pg",
  connection: process.env.PG_CONNECTION_STRING,
  searchPath: ["knex", "public"],
});


// export const db = require("knex")({
//  client: "sqlite3",
//  connection: {
//    filename: "./courses.sqlite",
//  },
// });
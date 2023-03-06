
export default {

  development: {
    client: "mysql2",
    connection: {
      database: "cinema",
      user: "root",
      password: "993366pe"
    }, 
    migrations: {
      directory: "./src/database/migrations"
    }
  }

};

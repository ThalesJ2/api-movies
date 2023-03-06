
export function up(knex) {

    try {
        
        return knex.schema
        .createTable("movie",(table)=>{
            table.increments("id").primary();
            table.string("name",65).notNullable();
            table.string("author",75).notNullable();
            table.text("synopsis",450).notNullable();
            table.string("image",75).notNullable();
            table.dateTime("launch_year").notNullable();
        })
        
        .createTable("gender",(table)=>{
            table.increments("id").primary();
            table.string("name").notNullable();
            table.integer("id_movie").unsigned().references("id")
            .inTable("movie")
            .onDelete("CASCADE").index();
        })
    } catch (error) {console.log(error);}
  
};

export function down(knex){

    try {
        return knex.schema
        .dropTable("gender")
        .dropTable("movie");
    } catch (error) { console.log(error);}
  
};

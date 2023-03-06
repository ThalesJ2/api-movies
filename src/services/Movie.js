import knex from "../database/knex.js";

async function getGender (movies){
        
    if(movies.length > 1)
    {
        try {

            let genders = await knex.select("id_movie","name").from("gender");    
            let newMovies = movies.map(item =>{
                let aux = item;
                
                genders.forEach(g =>{
                    if(g.id_movie==item.id_movie)
                        aux.genders.push(g.name);
                
                })
                
                return aux;
            });
            return newMovies;
        } catch (error) {

            console.log(error);
            return error;
        }
        
    }
}

export default {

     getMovie: async()=>{
        try {
            let movies = await knex.select("id","name","synopsis","author","launch_year","image").from("movie");
            let result =  await getGender(movies.map(m=>({name:m.name,id_movie:m.id,
                                          synopsis:m.synopsis, launch_year:m.launch_year,
                                          image:m.image,genders:[]})));
            return{status:true,result};

        } catch (error) {
            console.log(error);
            return {status:false};
        }

    },

 
    create: async(name,synopsis,author,launch_year,image,gender)=>{

        try {
            let id_movie =  await knex.insert({name,synopsis,author,launch_year,image}).from("movie");
            id_movie[0];
            let genders = gender.map(g=>({name:[g],id_movie,}));
            let createGenders = await knex.insert(genders).table("gender");
            
            return {status:true,id_movie};
        } catch (error) {
            console.log(error);
            return {status:false};
        }
    } 

}
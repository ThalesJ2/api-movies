import Movie from "../services/Movie.js";


export default {

    readAll: async(req,res)=>{

        let movies = await Movie.getMovie();

        if(movies.status)
            return res.json(movies.result);
        else
            return res.sendStatus(500);
    },

    createMovie: async(req,res)=>{
        let {name,synopsis,author,launch_year,image,gender} = req.body;

       

        if(name == "" ||  name == undefined)
            return  res.sendStatus(400);
        else
        if(synopsis == "" || synopsis == undefined)
            return res.sendStatus(400);
        else
        if(author == "" || author == undefined)
            return res.sendStatus(400);
        else
        if(launch_year == "" || launch_year == undefined)
            return res.sendStatus(400);
        else
        if(image == "" || image == undefined)
            return res.sendStatus(400);
        else
        if(gender.length <=0 || undefined)
            return res.sendStatus(400);

        let result = await Movie.create(name,synopsis,author,launch_year,image,gender);

        if(result.status)
            return res.sendStatus(200);
        else
            return res.sendStatus(500);
    }

}
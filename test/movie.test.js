import app from "../src/app.js";
import supertest from "supertest";
let request = supertest(app);

describe("Cadastro de Filmes",()=>{


    test("deve cadastrar um filme com sucesso",async()=>{
            
        try {

            let res = await request.post("/movies"); 
            let status = res.statusCode;
            expect(status).toEqual(200);
            
        } catch (error) { console.log(error); fail(error); }
        
    });

    test("deve impedir que filmes sejam cadastrados sem dados",async()=>{

        try {
            
            let res = await request.post("/movies"); 
            let status = res.statusCode;
            expect(status).toEqual(400);
            
        } catch (error) { console.log(error); fail(error); }
  
    });

    test("deve listar todos os filmes com sucesso",async()=>{

        try {

            let res = await request.get("/movies");
            let status = res.statusCode;
            expect(status).toEqual(200);
            
        } catch (error) { console.log(error); fail(error);}

    });

});
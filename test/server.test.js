import app from "../src/app.js";
import supertest from "supertest";
let request = supertest(app);

test("O servidor deve estar rodando na porta 8000",async()=>{

    try {
        let res = await request.get("/");
        expect(res.statusCode).toEqual(200);
    } catch (error) {
        console.log(error);
        fail(error);
    }
});
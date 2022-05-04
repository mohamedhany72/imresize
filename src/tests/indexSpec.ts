import supertest from "supertest";
import app from "../server";

const request = supertest(app);

describe("test endpoint response", (): void => {
    it("get the main page endpoint", async (): Promise<void> => {
        const response = await request.get("/");
        expect(response.status).toBe(200);
    });
    it("get the api/images endpoint with file name only (view the unprocessed image)", async (): Promise<void> => {
        const response = await request.get("/api/images/fjord");
        expect(response.status).toBe(200);
    });
    it("throw error when entring a file name that don't exist", async (): Promise<void> => {
        const response = await request.get("/api/images/vjord");
        expect(response.status).not.toBe(200);
    });
    it("get the api/images endpoint with good params", async (): Promise<void> => {
        const response = await request.get("/api/images/fjord/200/200");
        expect(response.status).toBe(200);
    });
    it("get the api/images endpoint with bad params", async (): Promise<void> => {
        const response = await request.get("/api/images/fjord/hundred/200");
        expect(response.status).not.toBe(200);
    });
});

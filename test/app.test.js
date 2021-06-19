const request = require('supertest');
const app = require('../app');

describe('GET /health', () => {
    it('Should return a JSON containing current machine specs', () => {
        return request(app).get('/health')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((res) => {
                expect(res.body).toEqual(
                    expect.objectContaining({
                        OS_name: expect.any(String),
                        platform_version: expect.any(String),
                        memory_usage: expect.any(Number),
                        CPU_usage: expect.any(Number)
                    })
                )
            })
    });

    it('Should return NOT_FOUND', () => {
        return request(app).get('/')
            .expect('Content-Type', /json/)
            .expect(404)
            .then((res) => {
                expect(res.body).toEqual(
                    expect.objectContaining({
                        message: expect.any(String)
                    })
                )
            })
    });
});

describe('GET /tweets', () => {
    it('Should return list with 10 tweets containing a given string', async () => {
        try {
            const res = await request(app).get('/tweets?query=Autodesk')
                .expect('Content-Type', /json/)
                .expect(200);
            expect(res.body).toEqual(
                expect.objectContaining({
                    tweets: expect.arrayContaining([expect.any(String)])
                })
            )
        } catch (err) {
            throw err;
        }
    });

    it('Should return BAD_REQUEST', async () => {
        const res = await request(app).get('/tweets?query=')
            .expect('Content-Type', /json/)
            .expect(400);
        expect(res.body).toEqual(
            expect.objectContaining({
                message: expect.any(String)
            })
        )
    });
});
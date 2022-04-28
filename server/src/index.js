import express from 'express';
import pkg from '@prisma/client';
const { PrismaClient } = pkg;

const app = express();
app.use(express.json());

const prisma = new PrismaClient();

app.post("/", async (req, res) => {
    const {name, cost, category} = req.body;
    const game = await prisma.game.create({
        data: {
            name: name,
            cost: cost,
            category: category,
        },
    });
    res.json(game);
});

app.post("/createManyGames", async (req, res) => {
    const { gamesList } = req.body;
    const games = await prisma.game.createMany({
        data: gamesList,
    });
    res.json(games);
});

app.get("/", async (req, res) => {
    const games = await prisma.game.findMany();
    res.json(games);
});

app.get("/ById/:id", async (req, res) => {
    const id = req.params.id;
    const game = await prisma.game.findUnique({
        where: {
            id: Number(id),
        },
    });
    res.json(game);
});

app.put("/", async (req, res) => {
    const {id, name, cost, category} = req.body;
    const updateGame = await prisma.game.update({
        where: {
            id: id,
        },
        data: {
            name: name,
            cost: cost,
            category: category,
        },
    });
    res.json(updateGame);
});

app.delete("/:id", async (req, res) => {
    const id = req.params.id;
    const deleteGame = await prisma.game.delete({
        where: {
            id: Number(id),
        },
    });
    res.json(deleteGame);
})

app.listen(3001, () => {
    console.log("Server Running")
})
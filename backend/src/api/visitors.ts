import { Router } from "express";
import { AppDataSource } from "../db";
import { Visitor } from "../entity/Visitor";

const router = Router();
const repo = AppDataSource.getRepository(Visitor);

router.get("/", async (_, res) => res.json(await repo.find()));

router.post("/", async (req, res) => {
  const visitor = repo.create(req.body);
  await repo.save(visitor);
  res.status(201).json(visitor);
});

router.put("/:id", async (req, res) => {
  await repo.update(req.params.id, req.body);
  res.sendStatus(204);
});

router.delete("/:id", async (req, res) => {
  await repo.delete(req.params.id);
  res.sendStatus(204);
});

export default router;

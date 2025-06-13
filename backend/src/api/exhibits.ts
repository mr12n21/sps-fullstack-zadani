import { Router } from "express";
import { AppDataSource } from "../db";
import { Exhibit } from "../entity/Exhibit";

const router = Router();
const repo = AppDataSource.getRepository(Exhibit);

router.get("/", async (_, res) => res.json(await repo.find()));

router.post("/", async (req, res) => {
  const exhibit = repo.create(req.body);
  await repo.save(exhibit);
  res.status(201).json(exhibit);
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

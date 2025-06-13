import { Router, Request, Response } from "express";
import { AppDataSource } from "../db";
import { Visitor } from "../entity/Visitor";

const repo = AppDataSource.getRepository(Visitor);
const router = Router();

router.get("/", async (_: Request, res: Response) => {
  res.json(await repo.find());
});

router.post("/", async (req: Request, res: Response) => {
  const v = repo.create(req.body);
  await repo.save(v);
  res.status(201).json(v);
});

router.put("/:id", async (req: Request, res: Response) => {
  await repo.update(req.params.id, req.body);
  res.sendStatus(204);
});

router.delete("/:id", async (req: Request, res: Response) => {
  await repo.delete(req.params.id);
  res.sendStatus(204);
});

export default router;

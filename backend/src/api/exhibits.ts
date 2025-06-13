import { Router, Request, Response } from "express";
import { AppDataSource } from "../db";
import { Exhibit } from "../entity/Exhibit";

const repo = AppDataSource.getRepository(Exhibit);
const router = Router();

router.get("/", async (_: Request, res: Response) => {
  res.json(await repo.find());
});

router.post("/", async (req: Request, res: Response) => {
  const e = repo.create(req.body);
  await repo.save(e);
  res.status(201).json(e);
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

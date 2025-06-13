import { Router } from "express";
import { AppDataSource } from "../db";
import { Visit } from "../entity/Visit";
import { Visitor } from "../entity/Visitor";
import { Exhibit } from "../entity/Exhibit";

const router = Router();
const repo = AppDataSource.getRepository(Visit);

router.get("/", async (_, res) => res.json(await repo.find({ relations: ["visitor", "exhibit"] })));

router.post("/", async (req, res) => {
  const { visitorId, exhibitId, date } = req.body;
  const visitor = await AppDataSource.getRepository(Visitor).findOneBy({ id: visitorId });
  const exhibit = await AppDataSource.getRepository(Exhibit).findOneBy({ id: exhibitId });
  if (!visitor || !exhibit) return res.status(400).json({ error: "Invalid visitor or exhibit" });

  const visit = repo.create({ visitor, exhibit, date });
  await repo.save(visit);
  res.status(201).json(visit);
});

export default router;

import { Router, Request, Response } from "express";
import { AppDataSource } from "../db";
import { Visit } from "../entity/Visit";
import { Visitor } from "../entity/Visitor";
import { Exhibit } from "../entity/Exhibit";

const visitRepo = AppDataSource.getRepository(Visit);
const visitorRepo = AppDataSource.getRepository(Visitor);
const exhibitRepo = AppDataSource.getRepository(Exhibit);
const router = Router();

router.get("/", async (_: Request, res: Response) => {
  res.json(await visitRepo.find({ relations: ["visitor", "exhibit"] }));
});

router.post("/", async (req: Request, res: Response) => {
  const { visitorId, exhibitId } = req.body;

  const visitor = await visitorRepo.findOneBy({ id: visitorId });
  const exhibit = await exhibitRepo.findOneBy({ id: exhibitId });
  if (!visitor || !exhibit) {
    return res.status(400).json({ error: "Invalid visitor or exhibit" });
  }

  const visit = visitRepo.create({ visitor, exhibit });
  await visitRepo.save(visit);

  res.status(201).json(visit);
});

export default router;

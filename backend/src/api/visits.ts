import { Router, Request, Response } from "express";
import { AppDataSource } from "../db";
import { Visit } from "../entity/Visit";
import { Visitor } from "../entity/Visitor";
import { Exhibit } from "../entity/Exhibit";

const router = Router();
const visitRepo = AppDataSource.getRepository(Visit);
const visitorRepo = AppDataSource.getRepository(Visitor);
const exhibitRepo = AppDataSource.getRepository(Exhibit);

// GET /api/visits
router.get("/", async (_req: Request, res: Response) => {
  try {
    const visits = await visitRepo.find({ relations: ["visitor", "exhibit"] });
    res.json(visits);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch visits" });
  }
});

// POST /api/visits
router.post("/", async (req: Request, res: Response) => {
  try {
    const { visitor_id, exhibit_id, visit_date } = req.body;

    const visitor = await visitorRepo.findOneBy({ id: visitor_id });
    const exhibit = await exhibitRepo.findOneBy({ id: exhibit_id });

    if (!visitor || !exhibit) {
      return res.status(400).json({ error: "Invalid visitor or exhibit ID" });
    }

    const visit = visitRepo.create({ visitor, exhibit, visit_date });
    await visitRepo.save(visit);

    // Načteme znovu s relacemi, aby byl výstup kompletní
    const savedVisit = await visitRepo.findOne({
      where: { id: visit.id },
      relations: ["visitor", "exhibit"],
    });

    res.status(201).json(savedVisit);
  } catch (error) {
    res.status(500).json({ error: "Failed to create visit" });
  }
});

export default router;

import { Router, Request, Response } from "express";
import { AppDataSource } from "../db";
import { Visitor } from "../entity/Visitor";

const router = Router();
const visitorRepo = AppDataSource.getRepository(Visitor);

// GET /api/visitors
router.get("/", async (_req: Request, res: Response) => {
  try {
    const visitors = await visitorRepo.find();
    res.json(visitors);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch visitors" });
  }
});

// GET /api/visitors/:id
router.get("/:id", async (req: Request, res: Response) => {
  try {
    const visitor = await visitorRepo.findOneBy({ id: Number(req.params.id) });
    if (!visitor) return res.status(404).json({ error: "Visitor not found" });
    res.json(visitor);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch visitor" });
  }
});

// POST /api/visitors
router.post("/", async (req: Request, res: Response) => {
  try {
    const { firstname, lastname } = req.body;
    const visitor = visitorRepo.create({ firstname, lastname });
    await visitorRepo.save(visitor);
    res.status(201).json(visitor);
  } catch (error) {
    res.status(500).json({ error: "Failed to create visitor" });
  }
});

// PUT /api/visitors/:id
router.put("/:id", async (req: Request, res: Response) => {
  try {
    const visitor = await visitorRepo.findOneBy({ id: Number(req.params.id) });
    if (!visitor) return res.status(404).json({ error: "Visitor not found" });

    visitor.firstname = req.body.firstname ?? visitor.firstname;
    visitor.lastname = req.body.lastname ?? visitor.lastname;
    await visitorRepo.save(visitor);
    res.json(visitor);
  } catch (error) {
    res.status(500).json({ error: "Failed to update visitor" });
  }
});

// DELETE /api/visitors/:id
router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const result = await visitorRepo.delete(Number(req.params.id));
    if (result.affected === 0) return res.status(404).json({ error: "Visitor not found" });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Failed to delete visitor" });
  }
});

export default router;

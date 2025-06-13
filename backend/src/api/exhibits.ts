import { Router, Request, Response } from "express";
import { AppDataSource } from "../db";
import { Exhibit } from "../entity/Exhibit";

const router = Router();
const repo = AppDataSource.getRepository(Exhibit);

// GET all exhibits
router.get("/", async (_req: Request, res: Response) => {
  try {
    const all = await repo.find();
    res.json(all);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch exhibits" });
  }
});

// GET exhibit by ID
router.get("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const exhibit = await repo.findOneBy({ id: Number(id) });
    if (!exhibit) {
      return res.status(404).json({ message: "Exhibit not found" });
    }
    res.json(exhibit);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch exhibit" });
  }
});

// POST create new exhibit
router.post("/", async (req: Request, res: Response) => {
  const { name, description } = req.body;
  try {
    const exhibit = repo.create({ name, description });
    await repo.save(exhibit);
    res.status(201).json(exhibit);
  } catch (error) {
    res.status(500).json({ message: "Failed to create exhibit" });
  }
});

// PUT update exhibit by ID
router.put("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const { name, description } = req.body;
  try {
    const exhibit = await repo.findOneBy({ id: Number(id) });
    if (!exhibit) {
      return res.status(404).json({ message: "Exhibit not found" });
    }
    exhibit.name = name ?? exhibit.name;
    exhibit.description = description ?? exhibit.description;
    await repo.save(exhibit);
    res.json(exhibit);
  } catch (error) {
    res.status(500).json({ message: "Failed to update exhibit" });
  }
});

// DELETE exhibit by ID
router.delete("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const exhibit = await repo.findOneBy({ id: Number(id) });
    if (!exhibit) {
      return res.status(404).json({ message: "Exhibit not found" });
    }
    await repo.remove(exhibit);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Failed to delete exhibit" });
  }
});

export default router;

import { Request, Response } from 'express';
import { Exhibit } from '../models/exhibit';

export const listExhibits = async (req: Request, res: Response) => {
  const exhibits = await Exhibit.findAll();
  res.json(exhibits);
};

export const getExhibit = async (req: Request, res: Response) => {
  const exhibit = await Exhibit.findByPk(req.params.id);
  if (exhibit) {
    res.json(exhibit);
  } else {
    res.status(404).json({ error: 'Exhibit not found' });
  }
};

export const createExhibit = async (req: Request, res: Response) => {
  const { name, description } = req.body;
  const exhibit = await Exhibit.create({ name, description });
  res.status(201).json(exhibit);
};

export const updateExhibit = async (req: Request, res: Response) => {
  const exhibit = await Exhibit.findByPk(req.params.id);
  if (exhibit) {
    await exhibit.update(req.body);
    res.json(exhibit);
  } else {
    res.status(404).json({ error: 'Exhibit not found' });
  }
};

export const deleteExhibit = async (req: Request, res: Response) => {
  const exhibit = await Exhibit.findByPk(req.params.id);
  if (exhibit) {
    await exhibit.destroy();
    res.status(204).send();
  } else {
    res.status(404).json({ error: 'Exhibit not found' });
  }
};

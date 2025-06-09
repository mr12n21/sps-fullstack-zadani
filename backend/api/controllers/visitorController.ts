import { Request, Response } from 'express';
import { Visitor } from '../models/visitor';

export const listVisitors = async (req: Request, res: Response) => {
  const visitors = await Visitor.findAll();
  res.json(visitors);
};

export const getVisitor = async (req: Request, res: Response) => {
  const visitor = await Visitor.findByPk(req.params.id);
  if (visitor) {
    res.json(visitor);
  } else {
    res.status(404).json({ error: 'Visitor not found' });
  }
};

export const createVisitor = async (req: Request, res: Response) => {
  const { firstname, lastname } = req.body;
  const visitor = await Visitor.create({ firstname, lastname });
  res.status(201).json(visitor);
};

export const updateVisitor = async (req: Request, res: Response) => {
  const visitor = await Visitor.findByPk(req.params.id);
  if (visitor) {
    await visitor.update(req.body);
    res.json(visitor);
  } else {
    res.status(404).json({ error: 'Visitor not found' });
  }
};

export const deleteVisitor = async (req: Request, res: Response) => {
  const visitor = await Visitor.findByPk(req.params.id);
  if (visitor) {
    await visitor.destroy();
    res.status(204).send();
  } else {
    res.status(404).json({ error: 'Visitor not found' });
  }
};
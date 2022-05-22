import { NextFunction, Request, Response } from 'express';
import connector from '../config/connector';

const NAMESPACE = 'Authors';

const get = async (req: Request, res: Response, next: NextFunction) => {
  let query = `SELECT * FROM authors`;

  connector.get(query, NAMESPACE, req, res, next);
};

const find = async (req: Request, res: Response, next: NextFunction) => {
  let { id } = req.params;

  let query = `SELECT * FROM authors WHERE id = ${id}`;

  connector.get(query, NAMESPACE, req, res, next);
};

const create = async (req: Request, res: Response, next: NextFunction) => {
  let { name } = req.body;

  let query = `INSERT INTO authors (name) VALUES ("${name}")`;

  connector.post(query, NAMESPACE, req, res, next);
};

const update = async (req: Request, res: Response, next: NextFunction) => {
  let { id } = req.params;
  let { name } = req.body;

  let query = `UPDATE authors SET authors.name = "${name}" WHERE authors.id = ${id}`;

  connector.put(query, NAMESPACE, req, res, next);
};

const del = async (req: Request, res: Response, next: NextFunction) => {
  let { id } = req.params;

  let query = `DELETE FROM authors WHERE authors.id = ${id}`;

  connector.del(query, NAMESPACE, req, res, next);
};

export default {
  get,
  find,
  create,
  update,
  del
};

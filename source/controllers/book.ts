import { NextFunction, Request, Response } from 'express';
import connector from '../config/connector';

const NAMESPACE = 'Authors';

const get = async (req: Request, res: Response, next: NextFunction) => {
  let query = `SELECT books.*, authors.name as author_name FROM books INNER JOIN authors ON authors.id = books.author_id`;

  connector.get(query, NAMESPACE, req, res, next);
};

const find = async (req: Request, res: Response, next: NextFunction) => {
  let { id } = req.params;

  let query = `SELECT books.*, authors.name as author_name FROM books INNER JOIN authors ON authors.id = books.author_id WHERE books.id = ${id}`;

  connector.get(query, NAMESPACE, req, res, next);
};

const create = async (req: Request, res: Response, next: NextFunction) => {
  let { title, author_id } = req.body;

  let query = `INSERT INTO books (title, author_id) VALUES ("${title}", ${author_id})`;

  connector.post(query, NAMESPACE, req, res, next);
};

const update = async (req: Request, res: Response, next: NextFunction) => {
  let { id } = req.params;
  let { title, author_id } = req.body;

  let query = `UPDATE books SET books.title = "${title}", books.author_id = ${author_id} WHERE books.id = ${id}`;

  connector.put(query, NAMESPACE, req, res, next);
};

const del = async (req: Request, res: Response, next: NextFunction) => {
  let { id } = req.params;

  let query = `DELETE FROM books WHERE books.id = ${id}`;

  connector.del(query, NAMESPACE, req, res, next);
};

export default {
  get,
  find,
  create,
  update,
  del
};

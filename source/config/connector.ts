import { NextFunction, Request, Response } from 'express';
import { Connect, Query } from './database';
import logging from './logging';

const get = (
  query: string,
  NAMESPACE: string,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  Connect()
    .then((connection) => {
      Query(connection, query)
        .then((results) => {
          logging.info(NAMESPACE, query);

          return res.status(200).json({
            results
          });
        })
        .catch((error) => {
          logging.error(NAMESPACE, error.message, error);

          return res.status(200).json({
            message: error.message,
            error
          });
        })
        .finally(() => {
          logging.info(NAMESPACE, 'Closing connection.');
          connection.end();
        });
    })
    .catch((error) => {
      logging.error(NAMESPACE, error.message, error);

      return res.status(200).json({
        message: error.message,
        error
      });
    });
};

const post = (
  query: string,
  NAMESPACE: string,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  Connect()
    .then((connection) => {
      Query(connection, query)
        .then((results) => {
          logging.info(NAMESPACE, query);

          return res.status(200).json({
            message: 'created succesfully'
          });
        })
        .catch((error) => {
          logging.error(NAMESPACE, error.message, error);

          return res.status(200).json({
            message: error.message,
            error
          });
        })
        .finally(() => {
          logging.info(NAMESPACE, 'Closing connection.');
          connection.end();
        });
    })
    .catch((error) => {
      logging.error(NAMESPACE, error.message, error);

      return res.status(200).json({
        message: error.message,
        error
      });
    });
};

const put = (
  query: string,
  NAMESPACE: string,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  Connect()
    .then((connection) => {
      Query(connection, query)
        .then((results) => {
          logging.info(NAMESPACE, query);

          return res.status(200).json({
            message: 'updated succesfully'
          });
        })
        .catch((error) => {
          logging.error(NAMESPACE, error.message, error);

          return res.status(200).json({
            message: error.message,
            error
          });
        })
        .finally(() => {
          logging.info(NAMESPACE, 'Closing connection.');
          connection.end();
        });
    })
    .catch((error) => {
      logging.error(NAMESPACE, error.message, error);

      return res.status(200).json({
        message: error.message,
        error
      });
    });
};

const del = (
  query: string,
  NAMESPACE: string,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  Connect()
    .then((connection) => {
      Query(connection, query)
        .then((results) => {
          logging.info(NAMESPACE, query);

          return res.status(200).json({
            message: 'deleted succesfully'
          });
        })
        .catch((error) => {
          logging.error(NAMESPACE, error.message, error);

          return res.status(200).json({
            message: error.message,
            error
          });
        })
        .finally(() => {
          logging.info(NAMESPACE, 'Closing connection.');
          connection.end();
        });
    })
    .catch((error) => {
      logging.error(NAMESPACE, error.message, error);

      return res.status(200).json({
        message: error.message,
        error
      });
    });
};

export default {
  get,
  post,
  put,
  del
};

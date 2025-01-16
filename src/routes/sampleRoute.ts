import express, { Request, Response } from 'express';

const router = express.Router();

/**
 * @swagger
 * /api/sample:
 *   get:
 *     description: Returns a sample response
 *     responses:
 *       200:
 *         description: Sample response
 */
router.get('/sample', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Sample route' });
});

export default router;

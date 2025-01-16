
import express, { Request, Response } from 'express';

const router = express.Router();

/**
 * @swagger
 * /api/v1/health:
 *   get:
 *     description: Returns the server status and health information
 *     responses:
 *       200:
 *         description: Health check response with status, uptime, timestamp, and API version
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 uptime:
 *                   type: integer
 *                   example: 12345
 *                 timestamp:
 *                   type: string
 *                   example: 2025-01-16T12:34:56Z
 *                 version:
 *                   type: string
 *                   example: 1.0.0
 */
router.get('/health', (req: Request, res: Response) => {
  const uptime = Math.floor(process.uptime());
  const timestamp = new Date().toISOString();
  const version = '1.0.0'; // You can fetch this from package.json dynamically if needed

  res.status(200).json({
    status: 'OK',
    uptime,
    timestamp,
    version,
  });
});

export default router;

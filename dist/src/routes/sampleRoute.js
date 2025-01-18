"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
/**
 * @swagger
 * /api/sample:
 *   get:
 *     description: Returns a sample response
 *     responses:
 *       200:
 *         description: Sample response
 */
router.get('/sample', (req, res) => {
    res.status(200).json({ message: 'Sample route' });
});
exports.default = router;

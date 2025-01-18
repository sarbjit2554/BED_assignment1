"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// app.ts
const express_1 = __importDefault(require("express"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const sampleRoute_1 = __importDefault(require("./routes/sampleRoute"));
const healthRoute_1 = __importDefault(require("./routes/healthRoute"));
// Initialize Express app first
const app = (0, express_1.default)();
// Swagger options for API documentation
const swaggerOptions = {
    definition: {
        openapi: '3.0.0', // OpenAPI version
        info: {
            title: 'API Documentation', // Title of the API
            version: '1.0.0', // API version
            description: 'A simple Express API documentation with Swagger', // Description
        },
    },
    apis: ['./src/routes/*.ts'], // Path to your route files
};
// Generate Swagger documentation
const swaggerSpec = (0, swagger_jsdoc_1.default)(swaggerOptions);
// Middleware to parse JSON in request bodies
app.use(express_1.default.json());
// Use the imported routes
app.use('/api', sampleRoute_1.default); // Use sample route at /api
app.use('/api/v1', healthRoute_1.default); // Use health route at /api/v1
// Serve Swagger UI at '/api-docs' route
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpec));
// Default route
app.get('/', (req, res) => {
    res.send('Hello, API World!');
});
// Export the app for use elsewhere
exports.default = app;

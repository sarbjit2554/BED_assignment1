// app.ts
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import sampleRoute from './routes/sampleRoute'; 
import healthRoute from './routes/healthRoute';
import { calculatePortfolioPerformance, calculateCompoundInterest, calculateInvestmentGrowth } from './Portfolio/portfolioPerformance';

// Initialize Express app first
const app = express();

// Swagger options for API documentation
const swaggerOptions: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0', // OpenAPI version
    info: {
      title: 'API Documentation',  // Title of the API
      version: '1.0.0',            // API version
      description: 'A simple Express API documentation with Swagger', // Description
    },
  },
  apis: ['./src/routes/*.ts'], // Path to your route files
};

// Generate Swagger documentation
const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Middleware to parse JSON in request bodies
app.use(express.json());

// Use the imported routes
app.use('/api', sampleRoute);         // Use sample route at /api
app.use('/api/v1', healthRoute);      // Use health route at /api/v1

// Correcting the repeated '/api/portfolio' route
app.get('/api/portfolio', (req, res) => {
  console.log('Portfolio route hit'); // Log message to the console
  const { initialInvestment, currentValue } = req.query;

  // Assuming the portfolio performance function is imported and available
  const result = calculatePortfolioPerformance(
    Number(initialInvestment),
    Number(currentValue)
  );

  res.json(result); // Respond with the result of the calculation
});

// Serve Swagger UI at '/api-docs' route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Default route
app.get('/', (req, res) => {
  res.send('Hello, API World!');
});

// Export the app for use elsewhere
export default app;

// server.ts
import morgan from "morgan";
import express, { type Express } from "express";

// Init db
import "./config/sequelize";
// Import config from .env
import config, { type Config } from "./config/config";
// Routes
import routes from "./routes";
// Error handler
import errorHandler from "./middleware/errorHandler";

// Server port
const PORT = config.server_port;

// Express app init.
const app: Express = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Middleware for logging HTTP requests
app.use(morgan('dev'));

// Routes handler
app.use('/api/v1/', routes);
// Error handler
app.use(errorHandler);

// Start server, handle error.
(function startServer() {
    // Running the server
    const server = app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    });

    server.on('error', (err: any) => {
        console.error('Failed to start server:', err);
    });
})();
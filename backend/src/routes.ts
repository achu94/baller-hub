import express, { type Request, type Response, type NextFunction } from "express";

// Country Route
import countriesRoute from "./routes/countriesRoute";

// Router
const router = express.Router();

// Countries endpoint
router.use('/countries', countriesRoute);


router.get("/", (_req: Request, res: Response, next: NextFunction) => {
    try {
        res.status(200).json({
            message: "Hello World!",
            success: true
        })
    } catch (error: unknown) {
        next(new Error((error as Error).message));
    }
});

export default router;
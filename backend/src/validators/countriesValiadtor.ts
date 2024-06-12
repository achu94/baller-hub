import { body, validationResult } from "express-validator";
import { type Request, type Response, type NextFunction } from "express";

export const validateCountries = [
    body("name")
        .notEmpty()
        .withMessage("Name is required")
        .isString()
        .withMessage('Country name must be a string'),
    body("code")
        .notEmpty()
        .withMessage('Code is required')
        .isLength({ min: 2, max: 2 })
        .withMessage('Country code must be exactly 2 characters long'),
    body("flag")
        .notEmpty()
        .withMessage('Flag is required')
        .isURL()
        .withMessage('Flag URL must be a valid URL')
];

export const handleValidationErrors = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    next();
};
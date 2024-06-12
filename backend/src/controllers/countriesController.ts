import type { Request, Response, NextFunction } from 'express';
import { getCountries, addCountry, updateCountry, removeCountry } from '../services/countriesServices';

// Controller for fetching countries
export const getCountriesController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // Call the getCountries service function and pass the id parameter
        const countries = await getCountries(parseInt(req.params.id));

        // Send the response with the fetched countries
        res.json({ countries });
    } catch (error) {
        // If an error occurs, pass it to the next middleware for error handling
        next(error);
    }
};

// Controller for adding a country
export const addCountryController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // Call the addCountry service function with the country data from the request body
        const country = await addCountry(req.body);

        // Send the response with the added country
        res.json({ country });
    } catch (error) {
        // If an error occurs, pass it to the next middleware for error handling
        next(error);
    }
};

// Controller for updating a country
export const updateCountryController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // Call the updateCountry service function with the country data from the request body
        const updatedCount = await updateCountry(req.body);

        // Send the response with the number of affected rows
        res.json({ updatedCount });
    } catch (error) {
        // If an error occurs, pass it to the next middleware for error handling
        next(error);
    }
};

// Controller for removing a country
export const removeCountryController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // Call the removeCountry service function with the country data from the request body
        const deletedCount = await removeCountry(req.body);

        // Send the response with the number of deleted rows
        res.json({ deletedCount });
    } catch (error) {
        // If an error occurs, pass it to the next middleware for error handling
        next(error);
    }
};

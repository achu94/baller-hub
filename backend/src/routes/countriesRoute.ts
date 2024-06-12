import express from "express";
import { getCountriesController, addCountryController, updateCountryController, removeCountryController } from "../controllers/countriesController";
import { validateCountries, handleValidationErrors } from "../validators/countriesValiadtor";

const router = express.Router();

// get all countires
router.get('/', getCountriesController);

// get countries via ID
router.get('/id?', getCountriesController);

// add countiry 
router.post('/add', validateCountries, handleValidationErrors, addCountryController);

// update countiry
router.put('/update', validateCountries, handleValidationErrors, updateCountryController);

// remove countiry
router.delete('/remove', validateCountries, handleValidationErrors, removeCountryController);


export default router;
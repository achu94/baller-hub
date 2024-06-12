import Country from "../models/countries";

export const getCountries = async (id?: number): Promise<Country[]> => {
    try {
        if (id) {
            const country = await Country.findByPk(id);
            return country ? [country] : [];
        }

        return await Country.findAll();
    } catch (error) {
        console.error('Failed to fetch countries:', error);
        throw error; // Re-throw the actual error for consistency
    }
}

export const addCountry = async (country: Country): Promise<Country> => {
    try {
        return await Country.create(country);
    } catch (error) {
        console.error('Failed to add country:', error);
        throw error; // Re-throw the actual error for consistency
    }
}

export const updateCountry = async (country: Country): Promise<number> => {
    try {
        const [affectedCount] = await Country.update({ ...country }, { where: { id: country.id } });
        return affectedCount;
    } catch (error) {
        console.error('Failed to update country:', error);
        throw error; // Re-throw the actual error for consistency
    }
}

export const removeCountry = async (country: Country): Promise<number> => {
    try {
        const deletedCount = await Country.destroy({ where: { id: country.id } });
        return deletedCount;
    } catch (error) {
        console.error('Failed to remove country:', error);
        throw error; // Re-throw the actual error for consistency
    }
}

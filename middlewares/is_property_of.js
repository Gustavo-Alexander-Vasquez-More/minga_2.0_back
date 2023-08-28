import Manga from '../models/Manga.js';

export default async (req, res, next) => {
    try {
        const mangaId = req.params._id; // Obtén el ID del manga de los parámetros de la solicitud
        const manga = await Manga.findById(mangaId); // Busca el manga por su ID

        if (!manga) {
            return res.status(404).json({
                message: 'Manga not found'
            });
        }

        // Verifica si el autor/editorial coincide con el dueño del manga
        if (req.author && req.author._id.toString() === manga.author_id.toString()) {
            next(); // Continúa si el autor coincide
        } else if (req.company && req.company._id.toString() === manga.company_id.toString()) {
            next(); // Continúa si la editorial coincide
        } else {
            return res.status(403).json({
                message: 'You are not author of this manga'
            });
        }
        
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: 'Internal server error'
        });
    }
   
};

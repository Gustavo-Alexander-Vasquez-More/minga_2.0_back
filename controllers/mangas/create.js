import Manga from '../../models/Manga.js';
import Category from '../../models/Category.js';

export default async (req, res) => {
  try {
    const { title, category_id, description, cover_photo } = req.body;

    // Buscar la categoría por su nombre
    const category = await Category.findOne({ name: category_id });

    if (!category) {
      return res.status(404).json({
        response: null,
        message: 'Category not found',
      });
    }

    // Crear el manga y asignar el category_id
    const createManga = await Manga.create({ title, category_id: category._id, description, cover_photo });

    res.status(200).json({
      response: createManga,
      message: 'Manga is created!',
    });
  } catch (error) {
    res.status(400).json({
      response: null,
      message: 'The manga is not created',
    });
  }
};

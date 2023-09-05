import  Chapter from '../../models/Chapter.js'

export default async(req, res)=>{
    try {
        const mangaId = req.query.manga_id;
        const queries={manga_id:mangaId}
        
        let pagination = { page: 1, limit: 6 };
        if (req.query.page) {
          pagination.page = req.query.page;
        }
        if (req.body.limit) {
          pagination.limit = req.body.limit;
        }
        const totalDocuments = await Chapter.find(queries,'manga_id').countDocuments();
        pagination.page = parseInt(pagination.page);
        pagination.limit = parseInt(pagination.limit);
    
        const read_chapters = await Chapter.find(queries,'manga_id')
          .select("id title cover_photo pages order")
          .skip(pagination.page > 0 ? (pagination.page - 1) * pagination.limit : 0)
          .limit(pagination.limit > 0 ? pagination.limit : 0);
    
        const nextPageHasDocuments = pagination.page * pagination.limit < totalDocuments;
        const nextPage = nextPageHasDocuments ? pagination.page + 1 : null;
        const currentPage = pagination.page;  // Agregar el número de página actual
    
        
        return res.status(200).json({
          success: true,
          response: read_chapters,
          prev: pagination.page > 1 ? pagination.page - 1 : null,
            next: nextPage,
          currentPage: currentPage
          
        });
      } catch (error) {
        console.log(error);
      }
}
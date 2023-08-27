const errorHandler = (err, req, res, next) => {
    console.log(err);
    
    res.status(err.status || 500).json({
        statusCode: err.status,
        message: err.message
    });

    next(); // Colocado después de enviar la respuesta
};

export default errorHandler;

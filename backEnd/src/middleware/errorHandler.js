import ApiResponse from "../utils/ApiResponse.js";

const notFoundHandler = (req, res, next) => {
  res.status(404).json({
    message: `invalid Request ${req.method}: ${req.originalUrl}`,
  });

  next();
};

const errorHandler = (err, req, res, next) => {
  console.log(err);
  res.status(err.statusCode || 500).json({
    message: err.message || "Internal server Error",
    errors: err.errors || [],
    data: err.data || null,
  });
};

export { notFoundHandler, errorHandler };

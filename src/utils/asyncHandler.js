const asyncHandler = (requestHandler) =>  {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res,next)).catch(err => {
            console.log(err);
            next(err);
        })
    }
}

export {asyncHandler}
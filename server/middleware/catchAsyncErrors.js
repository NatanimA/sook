module.exports = (theFunc) => (req,res,next) => {
    Promise.resolve(theFunc(req,res)).catch(next);
}

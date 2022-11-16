module.exports = (req, res, next) => {
  req.colors = [];
  req.colors.push('red');
  next();
};

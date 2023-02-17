const authorize = (req, res, next) => {
  const { user } = req.query;

  if (user === "sonia") {
    req.user = { name: "sonia" };
    next();
  } else {
    res.status(401).send(`${user} non sei autorizzato`);
  }
};

module.exports = authorize;

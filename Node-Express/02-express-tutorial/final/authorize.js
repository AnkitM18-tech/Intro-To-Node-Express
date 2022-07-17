const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "john") {
    req.user = { name: "John", id: 3 }; // can also add objects to requests.
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};

module.exports = authorize;

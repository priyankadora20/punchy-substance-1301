const loginvalidate = (req, res, next) => {
  let data = req.body;
  if (req.method === "POST") {
    if (data.email && data.password) {
      if (
        typeof (data.email === "string") &&
        typeof (data.password === "string")
      ) {
        next();
      } else {
        res.send("Validation Failed");
      }
    } else {
      res.send("Please Enter all Fields");
    }
  } else {
    next();
  }
};

module.exports = { loginvalidate };

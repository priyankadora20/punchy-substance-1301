const signupvalidate = (req, res, next) => {
  let data = req.body;
  if (req.method === "POST") {
    if (data.email && data.password && data.name) {
      if (
        typeof (data.email === "string") &&
        typeof (data.password === "string") &&
        typeof (data.name === "string")
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

module.exports = { signupvalidate };

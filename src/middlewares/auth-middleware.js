const jwt = require("jsonwebtoken");

module.exports.verifyToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    //temporarily! should be (!token) check console
    if (token == "Bearer") {
      return res.status(401).json("You have to log in to the system!");
    }

    const uToken = token.replace("Bearer ", "");

    const userData = jwt.verify(uToken, process.env.SECRET_KEY);

    if (userData) {
      return next();
    }

    return res
      .status(401)
      .json("Token doesn't exist or you are not authorized!");
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: true, message: "Internal server error (token)" });
  }
};

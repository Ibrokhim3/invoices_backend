const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const pool = require("../config/db_config");

// const SIGNUP = async (req, res) => {
//   try {
//     const { email, password, username } = req.body;

//    const user =  await pool.query(`SELECT email from users where email=$1`, [email]);

//     if(user.rows[0]){
//       return res.status(400).json("The user already exists");
//     }
//     const hashedPsw = await bcrypt.hash(password, 12);

//     await pool.query(`INSERT INTO users( email, password, username) VALUES($1,$2, $3)`, [
//       email,
//       hashedPsw,
//       username
//     ]);

//     return res.status(201).json("Signup");
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).json({ error: true, message: "Internal server error" });
//   }
// };

const LOGIN = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await pool.query(`SELECT * FROM users where email=$1`, [
      email,
    ]);

    if (!user) {
      return res.status(404).json("User not found");
    }

    const comparePsw = await bcrypt.compare(password, user.rows[0].password);
    // if (password !== user.rows[0].password) {
    //   return res.status(400).json("Password invalid");
    // }

    if (!comparePsw) {
      return res.status(401).json("Invalid password!");
    }

    const accessToken = jwt.sign(
      { user_id: user.rows[0].user_id },
      process.env.SECRET_KEY,
      {
        expiresIn: process.env.JWT_TIME,
      }
    );

    return res
      .status(201)
      .json({ accessToken, user: "user", msg: "You're logged in" });
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json({ error: true, message: "Internal server error" });
  }
};

module.exports = { LOGIN };

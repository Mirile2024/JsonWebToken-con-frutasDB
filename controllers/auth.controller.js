const jwt = require("jsonwebtoken");
const usuarios = require("../data/usuarios");
process.loadEnvFile();
const secretKey = process.env.SECRET_KEY;

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = usuarios.find((u) => u.email === email && u.password === password);
  if (!user) {
    return res.status(401).json({ error: "Email o Password incorrectos" });// mejor seguridad para las contraseñas
  }
  const { username } = user;
  const token = jwt.sign({ username}, secretKey, { expiresIn: "1h" });
  res.status(200).json({ token });
};

module.exports = {login};
import jwt from "jsonwebtoken";
const JWT_SECRET = "Thisisasecretkey";

const fetchuser = async(req, res, next) => {
  // Get the user from the jwt token and add id to req object
  const token = req.header("Authorization");
  // console.log(req.headers)
  if (!token) {
    res.status(401).send({ error: "Please authenticate using a valid token" });
    return;
  }
  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({ error: "Please authenticate using a valid token" });
  }
};

export default fetchuser;

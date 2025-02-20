import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SCRET, {
    expiresIn: "7d",
  });

  res.cookie("jwt",token,{
    maxAge: 7 * 24 * 60 * 1000,
    httpOnly: true, //prevent XSS attacks cross-site scripting attacks
    sameSite: "strict", //CSRF atacks cross-site request forgery attacks
    secure: process.env.NODE_ENV !== "development",
  });

  return token;
};

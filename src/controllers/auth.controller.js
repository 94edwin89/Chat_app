import User from "../models/user.model.js";

export const signup = async (req, res) => {
  const { email, password, fullName } = req.body;
  try {
    // hased password
    if (password < 6) {
      return res
        .status(400)
        .json({ message: "password must be atlest 6 characters" });
    }
    const user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "Email already exists" });

    const salt = await bcrpt.genSalt(10);
    const hashedPassword = await bcrpt.hash(password, salt);

    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
    });

  } catch (error) {}
};

export const login = (req, res) => res.send("login route");

export const logout = (req, res) => res.send("logout route");

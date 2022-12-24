const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Joi = require("joi");

const schema = Joi.object({
  name: Joi.string().min(3).max(16).required(),
  email: Joi.string().email().required(),
  password: Joi.string()
});

const register = async (req, res) => {
  const { name, email, password } = req.body;
  const { error } = schema.validate({ name, email, password });
  if (error) {
    res.json({ message: 'signup failed', errors: error.details })
  } else {
    const user = await userModel.findOne({ email });
    if (!user) {
      bcrypt.hash(password, 4, async (err, hash) => {
        console.log(err);
        await userModel.insertMany({ name, email, password: hash, registeredSummits: [] });
      });
      res.json({ message: 'success' });
    } else {
      res.json({ message: 'email already exists' });
    }
  }
}

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email });
  if (user) {
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      const token = jwt.sign({ name: user.name, id: user._id, registeredSummits: user.registeredSummits }, process.env.JWT_KEY);
      res.json({ message: 'signin successful', token });
    } else {
      res.json({ message: 'password incorrect' });
    }
  } else {
    res.json({ message: 'signin failed' });
  }
}

const getUserById = async (req, res) => {
  const userId = req.params.id;
  const user = await userModel.findById({ _id: userId }).populate('registeredSummits');
  return res.json(user);
}

module.exports = {
  register,
  login,
  getUserById
}
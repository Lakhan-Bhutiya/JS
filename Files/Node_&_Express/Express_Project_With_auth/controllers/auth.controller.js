const authService = require('../services/auth.service');

exports.register = async (req, res, next) => {
  try {
    await authService.register(req.body);
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const token = await authService.login(req.body);
    res.status(200).json({ token });
  } catch (err) {
    next(err);
  }
};

const User = require("../model/user-model");
const bcrypt = require("bcryptjs");
const Expense = require("../model/expense-model");

const home = async (req, res) => {
  try {
    res.status(200).json({ message: "Hello world via controller" });
  } catch (error) {
    console.error(error);
  }
};

const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ message: "User Already Exists!" });
    }
    const saltRound = 10;
    const hashPassword = await bcrypt.hash(password, saltRound);

    const userCreated = await User.create({
      username,
      email,
      phone,
      password: hashPassword,
    });

    res.status(200).json({
      message: "Registration Sucessfull",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    console.error(error);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });

    if (!userExist) {
      return res.status(400).json({ message: "Invalid, Please try it later" });
    }
    const isPasswordValid = await bcrypt.compare(password, userExist.password);

    if (isPasswordValid) {
      return res.status(200).json({
        message: "Login sucessfull",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      return res.status(401).json({ message: "invalid Credentail" });
    }
  } catch (error) {
    console.error(error);
  }
};

const user = async (req, res) => {
  try {
    const userData = req.user;
    console.log(userData);
    return res.status(200).json({ userData });
  } catch (error) {
    console.error(error);
  }
};

const createExpenses = async (req, res) => {
  try {
    const userId = req.user._id;
    const { title, description, amount, category } = req.body;

    if (!title || !description || !amount || !category) {
      return res
        .status(400)
        .json({
          message:
            "All fields (title, description, amount, category) are required.",
        });
    }

    const newExpense = await Expense.create({
      title,
      description,
      amount,
      category,
      userId,
    });

    await User.findByIdAndUpdate(
      userId,
      { $push: { expenses: newExpense._id } },
      { new: true }
    );

    return res
      .status(200)
      .json({ message: "Expense added successfully!", expense: newExpense });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

const getExpenses = async (req, res) => {
  try {
    const userId = req.user._id;

    const expenses = await Expense.find({ userId });

    if (!expenses || expenses.length === 0) {
      return res
        .status(404)
        .json({ message: "No expenses found for this user." });
    }

    return res.status(200).json({ expenses });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

const deleteExpensesById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Expense.deleteOne({ _id: id });
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Expenses Not Found!" });
    }
    res.status(200).json({ message: "Expenses Deleted Successfully!" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  home,
  register,
  login,
  createExpenses,
  getExpenses,
  user,
  deleteExpensesById,
};

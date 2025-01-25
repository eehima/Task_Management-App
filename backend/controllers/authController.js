// import authcontroller
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


// signup authentication

exports.signup = async (req, res) => {

    const { username, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ username, email, password: hashedPassword });
        res.status(201).json({ 
            message: "User created successfully"

        });
    } catch (error) {
        res.status(400).json({
            errror: error.message
        })
    }

};

// login authentication

exports.login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
            expiresIn: "1h",
        });
        res.status(200).json({ message: "Login successful", token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

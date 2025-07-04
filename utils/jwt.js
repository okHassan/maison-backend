import jwt from "jsonwebtoken";

export const generateToken = (payload) =>
    jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: "7d" },
        (err, token) => {
            if (err) throw err;
            console.log("JWT Token generated successfully");
            
            // Send the user and token in response
            res.status(200).json({
                message: "User logged in successfully",
                user: {
                    ...user._doc,
                    password: undefined
                },
                token
            });
        })
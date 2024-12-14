const { z } = require("zod");

const signupSchema = z.object({
 
    username: z
    .string({ required_error: "Username is required" })
    .trim()
    .min(3, { message: "Username must be at least 3 characters" })
    .max(60, { message: "Username must not be more than 60 characters" })
    .regex(/^[^\d]/, { message: "Username cannot start with a number" }) 
    .regex(/^[a-zA-Z0-9@]+$/, { message: "Username can only contain alphanumeric characters and '@'" }), 

 
    email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be at least 3 characters" })
    .max(60, { message: "Email must not be more than 60 characters" }),

    phone: z
    .string({ required_error: "Phone number is required" })
    .trim()
    .min(10, { message: "Phone number must be at least 10 characters" })
    .max(20, { message: "Phone number must not be more than 20 characters" })
    .regex(/^\d+$/, { message: "Phone number must contain only numbers" }), 

   
    password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(7, { message: "Password must be at least 7 characters" })
    .max(20, { message: "Password must not be more than 20 characters" })
    .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" }) 
    .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" }) 
    .regex(/[0-9]/, { message: "Password must contain at least one number" }) 
    .regex(/[\W_]/, { message: "Password must contain at least one special character" }), 

});

module.exports = signupSchema;

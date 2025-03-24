import User from "../model/user.js"

import { createHmac, randomBytes } from "crypto"; // FIXED: Added missing import

async function handelMenteeSignup(req, res) {
  try {
    const { name, email, password, role, preferredLanguages, socialLinks } = req.body;

    if (!password) {
      return res.status(400).json({ success: false, msg: "Password is required" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, msg: "Email is already registered." });
    }

    console.log("Received Data:", { name, email, password, role, preferredLanguages, socialLinks });

    // Generate salt and hash password
    const salt = randomBytes(16).toString("hex");
    const hashedPassword = createHmac("sha256", salt).update(password).digest("hex");

    console.log("Generated Salt:", salt);
    console.log("Hashed Password:", hashedPassword);

    // Create new user
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      salt,
      currentRole: role,
      preferredLanguages, // Ensure this matches schema
      socialLinks,
    });

    return res.status(201).json({
      success: true,
      msg: "User successfully created.",
      email: newUser.email,
      name: newUser.name,
    });
  } catch (error) {
    console.error("Signup Error:", error); // FIXED: Logging actual error
    return res.status(500).json({
      success: false,
      msg: "An error occurred during signup",
    });
  }
}


  


async function handelMenteeSignin(req,res) {
    
    
try{
    const {email,password}=req.body;
    console.log(req.body)
    const user= await User.findOne({email:email})

    
   if(!user){
    return res.status(400).json({
        success:false,
        msg:"User not found"
       })
    }


   const newPassword= createHmac("sha256",user.salt)
   .update(password)
   .digest("hex")

    
   if(newPassword!=user.password){
    return res.status(400).json({
        success:false,
        msg:"Incorrect Password"
       })

   }




   return res.status(200).json({
    success:true,
    msg:"Sucessfully logged in",
    email:user.email,
    name:user.name
   })

}

catch(err){
        return res.status(500).json({
          success: false,
          msg: "An error occurred during Login", 
        });
}
}



export {handelMenteeSignin,handelMenteeSignup};
const User = require("../models/User")

// Require jsonwebtoken
const jwt = require("jsonwebtoken");

 // Require bcrypt
const bcrypt = require("bcrypt");
const salt = 10;

// POST - Create User
exports.auth_signup_post = (req, res) => {
    let user = new User(req.body)
    let hash = bcrypt.hashSync(req.body.password,salt)
    
    user.password = hash

    // Save user
    user.save()
    .then(() => {
       res.json({message: "user created successfully"})
    })
    .catch((err) => {
        console.log(err)
        res.send("please  try again later")
    })
};



// POST = Sign In (JWT Authentication)
exports.auth_signin_post = async (req, res) => {
    let { emailAddress, password } = req.body;
  
    console.log(emailAddress);
  
    try {
      let user = await User.findOne({ emailAddress });
      console.log(user);
  
      if (!user) {
        return res.json({ message: "User Not Found" });
      }
  
      // Compare Password
      const isMatch = await bcrypt.compareSync(password, user.password);
      console.log(password);
      console.log(user.password);
  
      if (!isMatch) {
        return res.json({ message: "Password doesnot matched" });
      }
  
      // Generate JWT
  
      const payload = {
        user: {
          id: user._id,
          name: user.firstName
        },
      };
  
      jwt.sign(
        payload,
        process.env.SECRET,
        { expiresIn: 36000000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token }).status(200);
        }
      );
    } catch (error) {
      console.log(error);
      res.json({ message: "Your are not loggedIn !!!" }).status(400);
    }
  };

//   //GET - logout
//   exports.auth_logout_get = (req, res) => {
//     // Invalidate the session
//     req.logout(function (err) {
//       if (err) {
//         return next(err);
//       }
//       res.redirect("/auth/signin");
//     });
//   };

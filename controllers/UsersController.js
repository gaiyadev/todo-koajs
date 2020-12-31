const jwt = require('jsonwebtoken');
const User = require('../models/user')




/** ===============================================================================================
 * USER REGISTRATION TO THE SYSTEM
 * ================================================================================================= *
 */
exports.sign_up =  function  *(next){

    const { email, password } = this.request.body;

    if (!email || !password ) {
        this.response.status = 400;
        this.body = {
                status: false,
                error: "All fields are required"
                }
        return
    }else {
          
     User.findOne({ email: email }).then(user => {
        if (user) {
            console.log(user)
            this.response.status = 400; 
            this.body = {
                status: false,
                error: "Email is  already in use"
                }                
            return;               
        }else {
            const newUser = new User({
                email: email,
                password: password,
            });
            User.newUser(newUser, (err, user) => {
                if (err) return err; 
                this.response.status = 201,        
                this.body = {
                    status: true,
                    user: user,
                    message: "Account created successfully"
                    }
                 return true
                 });
        }
      
         }); 
    }
  

}





exports.login = async function *(next){
    const {email, password}= this.request.body;

    if (!email || !password ) {
        this.response.status = 400;
        this.body = {
                status: false,
                error: "ALl fields are required"
                }
        return
    }

    await User.findOne({ email: email }).then(user => {
        // this.response.status = 400;
        if (!user || user== undefined) {
            this.response.status = 400
            this.body= {
                status: false,
                error: "Invalid username or password",
            }
            return
        } else {       

            User.comparePassword(password, user.password, (err, isMatch) => {
                if (err) throw err;
                if (!isMatch) {
                    this.response.status = 400
                    this.body= {
                        status: false,
                        error: "Invalid username or password",
                    }
                      return
                } else {
                    // success login ... Generating jwt for auth   
                
                    jwt.sign({
                        _id: user._id,
                        email: user.email,
                    },
                        process.env.JWT_SECRET,
                        {
                            expiresIn: 3600
                        }, (err, token) => {
                            if (err) throw err;

                            this.response.status = 200
                            this.body= {
                                status: true,
                                token: token,
                                message: "Login successfully"
                            }                          
                        });
                }
            })
        }
       
       
    });    
}

exports.test = function *(next) {
        this.body = 'TODO API WITH kojs yess';
        yield next;  
      }

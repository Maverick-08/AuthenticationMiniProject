/* STEPS
1. user will send username and password 
2. connect to database
2.1 check if the username exists
2.2 if not respond no such user exist
2.3 if it does match password
2.4 if the password does not match respond incorrect password
2.5 if the password matches generate an access token and refresh token
3 store the accesstoken in cookies
4 store the refreshToken 
*/
const userAuthenticationHandler = (req,res)=>{
    let username = req.body.username
    let password = req.body.password
}

module.exports = {userAuthenticationHandler}
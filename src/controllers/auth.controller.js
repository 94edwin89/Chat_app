export const signup = (req,res)=>{
    const {email,password,fullName}=req.body
try {
    // hased password
} catch (error) {
    
}
};

export const login = (req, res) => res.send("login route");

export const logout = (req, res) => res.send("logout route");
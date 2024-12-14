const home = async (req, res) =>{
    try {
        res.status(200).json( {message: "Hello world via controller"})
    } catch (error) {
        console.error(error);
        
    }
}


const register = async (req, res) =>{
    try {
        res.status(200).json( {message: "register via controller"})
        
    } catch (error) {
        console.error(error);
        
    }
}


module.exports = {home, register}
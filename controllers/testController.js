
const testingController = (req , res )=>{
    res.status(200).send("<h1>Node Start</h1>");
}

const homeController = (req ,res)=>{
    res.send("<h2> Is very HPY today :</h2>")
}


module.exports = {testingController, homeController};
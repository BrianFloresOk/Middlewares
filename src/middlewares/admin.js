const adminMiddleware = (req, res, next) => {
    const adminUsers = ["Ada", "Greta", "Vim", "Tim"];
    let nombre = req.query.user;
    let adminPass = adminUsers.find(admin => {
        return admin === nombre
    })
    if(adminPass) {
        next()
    } else {
        res.send("No tienes permisos para ingresar ")
    }

}

module.exports = adminMiddleware
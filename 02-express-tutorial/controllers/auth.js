function auth (req, res, next) {
    if (req.cookies.name) {
        req.user = req.cookies.name;
        next();
    } else {
        res.status(401).json({ message: 'unauthorized'})
    }
}

function authLogon (req, res) {
    if (req.body.name) {
        res.cookie("name", req.body.name);
        statusCode = 201;
    message = `Hello ${req.body.name}`
    } else {
        statusCode = 400;
        message = 'unauthorized'
    } 
    res.status(statusCode).json({ 'message': message })
}

function authLogoff (req, res) {
        res.clearCookie('name');
        statusCode = 200;
        res.status(statusCode).json({ 'message': 'The user is logged out' })
}

module.exports = { auth, authLogon, authLogoff }
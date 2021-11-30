/*
    Cross Origin Resource Sharing (CORS)

    Mechanism that uses additional HTTP headers to tell browsers to give a web application
    running at on origin access to selected resources from different origin.

    The CORS standard woeks by adding new HTTP headers that let servers describe
    which origins are permitted to read that info from the web browser.

    access-control-allow-origin => responce header that tells the browser to allow code from any origin

    access-control-allow-methods => responce heade that specifies the methods allowed when accessing the 
    resource in respnse to a preflight request

    access-control-allow-headers => responce header  that's use in responce to a preflight request that
    indicates which HTTP headers can be used during the actual request.
*/

module.exports = (req, res, next) => {
    res.header
    res.header('access-control-allow-origin', '*')
    res.header('access-control-allow-methods', 'GET, POST, PUT, DELETE')
    res.header('access-control-allow-headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')

    next()
}
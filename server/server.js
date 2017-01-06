/**
 * Created by metrokobe on 2016/12/24.
 */
const http = require('http');
class Server {
    constructor(route){
        // super();
        this.route = route;
        this.server = this.createServer();

    }
    createServer(){
        console.log('http server is start...')
        if( !this.route || this.route.routes.length <= 0){
            console.log('route is error,push route');
        }
        return http.createServer((req, res)=>{
            this.route.handleRequest(req, res);
        })
    }
    listen(port=8080){
        this.server.listen(port);
    }
}

module.exports =  Server ;


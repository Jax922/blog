const path = require('path');
const Server = require('./server/server');
const Route = require('./server/route');
const routers = require('./router')
const keys = Object.keys(routers);


const route = new Route(path.resolve(__dirname, './pages'));
for(let i=0;i<keys.length;i++){
    route.addRoute(routers[keys[i]]);
}
const server = new Server(route);
server.listen(8081);


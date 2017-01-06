/**
 * Created by metrokobe on 2016/12/24.
 */
const uuid = require('uuid');
const path = require('path');
const fs = require('fs');
const renderContent = require('../renderContent');


class Route {
    constructor(staticPath){
        // super();
        // this.checkPath(staticPath);
        this.staticPath = staticPath;
        this.routes = [];
    }
    checkPath(path){
        if(fs.existsSync(path)){
            throw new Error('this path is not exists');
            return false;
        }else{
            return true;
        }
    }
    handleRequest(req, res){
        const route = this._filterUrl(req.url);
        if(route){
            route.handle && route.handle(req, res);
        }else{
            this.staticServer(req.url, req, res);
            // res.end('404');
        }
    }

    _filterUrl(url){
        let route = null ;
        for(let i=0;i<this.routes.length;i++){
            if(this.routes[i].url === url){
                route = this.routes[i];
            }
        }
        return route;
    }
    addRoute(route){
        if(!route || !route._id){
            console.error('传入一个正确的路由');
        }
        route._id = uuid.v4();
        this.routes.push(route)
    }
    staticServer(url, req, res){
        const filePath = path.join(this.staticPath, url);
        // this.checkPath(filePath);
        renderContent(filePath, req, res);
    }
}


module.exports =  Route ;
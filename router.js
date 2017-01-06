/**
 * Created by metrokobe on 2016/12/24.
 */
const path = require('path');
const render = require('./renderContent');
const PATH = './pages';
class RouteData {
    constructor(url='/', page=path.resolve(__dirname, PATH, './home.html')){
        this.url = url;
        this._id = -1;
        this.page = path.resolve(__dirname, PATH, page);
    }
    handle(req, res){
        render(this.page, req, res);
    }
}

const home = new RouteData('/home', 'home.html');
const list = new RouteData('/list', 'list.html');
const detail = new RouteData('/detail', 'detail.html');

module.exports = {
    home,
    list,
    detail
}
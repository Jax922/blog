/**
 * Created by metrokobe on 2016/12/24.
 */
const minitype = require('./lib/minitype');
const path = require('path');
const fs = require('fs');
const etag = require('./lib/etag');
function render(page, req, res){
    const extname = path.extname(page);
    fs.readFile(page, (error, content)=>{
        if(error){
            res.writeHead(500);
            res.end();
        }else{
            const isCache = addCache(content, req, res);
            if(isCache){
                res.statusCode = 304;
                res.end();
            }else{
                if(minitype[extname] != undefined){
                    res.setHeader('Content-type', minitype[extname]);
                }
                const cacheTime = 1*24*3600;
                // res.setEncoding('utf-8');
                res.setHeader('Content-Length',content.length);
                res.setHeader('Etag', etag(content));
                res.setHeader('Cache-Control', `max-age=${cacheTime}`);
                res.statusCode = 200;
                res.end(content);
            }
        }
    })
}

function addCache(content, req, res){
    console.log(req.headers);
    const reqMatch = req.headers['if-none-match'];
    if(reqMatch && reqMatch === etag(content)){
        return true;
    }else{
        return false;
    }
}

module.exports = render;
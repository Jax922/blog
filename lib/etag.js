/**
 * Created by metrokobe on 2016/12/25.
 */
const crypto = require('crypto');
function etag(str){
    const sha1 = crypto.createHash('sha1');
    sha1.update(str);
    return sha1.digest('base64');
}

module.exports = etag ;
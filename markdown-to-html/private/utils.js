/**
 * Created by charlie on 1/17/16.
 *
 * Use walk-core.js to access this module.
 */

const path = require('path');

function utils() {}

utils.makeMarkdownLink = function(fileName) {
    'use strict';
    return '* [' + fileName + '](' + fileName + ')';
};

utils.swapExtension = function(fileName, ext) {
    'use strict';
    return fileName.substr(0, fileName.lastIndexOf('.')) + ext;
};

utils.stripExtension = function(fileName) {
    'use strict';
    return fileName.substr(0, fileName.lastIndexOf('.'));
};

utils.getExtension = function(fileName) {
    'use strict';
    fileName = fileName.trim();
    const array = fileName.split('.');
    if (array.length === 1 || (array[0] === '' && array.length === 2)) {
        return '';
    }
    return array.pop().toLowerCase();
};

utils.fileNameFromPath = function(pathStr) {
    'use strict';
    return path.basename(pathStr);
};

utils.writeFile = function(fileName, report, response) {
    'use strict';
    fs.writeFile(fileName, JSON.stringify(report, null, 4), function(err) {
        if (err) {
            throw (err);
            // response.send({result:'failure'});
        } else {
            console.log('wrote file');
            response.send({
                result: 'success'
            });
        }
    });
};

module.exports = utils;

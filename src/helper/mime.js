const path = require('path');

const mimeTypes = {
    'css': {
        'text': 'text/css',
        'icon': 'http://lorempixel.com/50/50/'
    },
    'js': {
        'text': 'text/javascript',
        'icon': 'http://lorempixel.com/40/40/'
    },
    'html': {
        'text': 'text/html',
        'icon': 'http://lorempixel.com/30/30/'
    },
    'json': {
        'text': 'application/json',
        'icon': 'http://lorempixel.com/60/60/'
    },
    'txt': {
        'text': 'text/plain',
        'icon': 'http://lorempixel.com/45/45/'
    }
};

module.exports = (filePath) => {
    //取扩展名
    let ext = path.extname(filePath).split('.').pop().toLowerCase();

    if (!ext) {
        ext = filePath;
    }

    return mimeTypes[ext] || mimeTypes['txt'];
};

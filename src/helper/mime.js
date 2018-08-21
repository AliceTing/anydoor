const path = require('path');

const mimeTypes = {
    'css': {
        'text': 'text/css',
        'icon': 'https://www.google.com.hk/search?q=css&newwindow=1&safe=strict&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjHhNLasfvcAhXGXLwKHeUfC70Q_AUICigB&biw=1680&bih=900#imgrc=RnairDYTHuzNJM:'
    },
    'js': {
        'text': 'text/javascript',
        'icon': 'https://www.google.com.hk/search?newwindow=1&safe=strict&biw=1680&bih=900&tbm=isch&sa=1&ei=rpN6W6zwEYPT8QX2t42YBw&q=js+png&oq=js+png&gs_l=img.3..0i12k1j0i30k1l2j0i5i30k1l3j0i5i10i30k1j0i5i30k1l3.1887.4007.0.4143.6.5.1.0.0.0.406.948.0j4j4-1.5.0....0...1c.1.64.img..0.6.948...0j0i12i24k1.0.8pA73HKp_8g#imgrc=F0yxRbnJHTwD_M:'
    },
    'html': {
        'text': 'text/html',
        'icon': 'https://www.google.com.hk/search?newwindow=1&safe=strict&biw=1680&bih=900&tbm=isch&sa=1&ei=tJN6W7TJCoKD8gWyyp6wDA&q=html+png&oq=html+png&gs_l=img.3..0i19k1l4j0i7i30i19k1l3j0i7i10i30i19k1j0i7i30i19k1l2.81890.82406.0.82671.4.4.0.0.0.0.145.415.0j3.3.0....0...1c.1.64.img..1.3.414...0j0i12k1j0i7i30k1.0.qYtWhopQVLw#imgrc=uniGGlD7DVdgzM:'
    },
    'json': {
        'text': 'application/json',
        'icon': 'https://www.google.com.hk/search?newwindow=1&safe=strict&biw=1680&bih=900&tbm=isch&sa=1&ei=GZR6W6TBPMT28gWpxYvQAw&q=json+png&oq=json+png&gs_l=img.3..0i19k1j0i7i30i19k1l2.42923.44628.0.44778.7.6.1.0.0.0.140.772.0j6.6.0....0...1c.1.64.img..0.6.648...0j0i7i30k1.0.Rmdjsk1Yq0s#imgrc=AcQHL-C7NCnTeM:'
    },
    'txt': {
        'text': 'text/plain',
        'icon': 'https://www.google.com.hk/search?newwindow=1&safe=strict&biw=1680&bih=900&tbm=isch&sa=1&ei=SJR6W6TEFoaX8QXzso6IDg&q=txt+png&oq=txt+png&gs_l=img.3..0i10i19k1j0i7i10i30i19k1.33308.33559.0.34293.3.3.0.0.0.0.145.273.0j2.2.0....0...1c.1.64.img..1.2.272...0i19k1j0i7i30i19k1.0.4SxiLxa6rtQ#imgrc=rHGzgno_RMQgCM:'
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

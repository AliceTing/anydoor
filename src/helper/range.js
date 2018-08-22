module.exports = (totalSize, req ,res) => {
    const range = req.headers['range'];
    if (!range) {
        return {code : 200};
    }

// const sizes = range.match(/bytes=(\d*)-(\d)*/);
};

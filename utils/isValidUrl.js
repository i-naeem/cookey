const isValidUrl = (url) => {
    try { return Boolean(new URL(string)); }
    catch (e) { return false; }
}

module.exports = isValidUrl;
function InvalidCodeZip(message) {
    this.message = message;
}

function NotFoundCodeZip(message) {
    this.message = message;
}

InvalidCodeZip.prototype = Error;
NotFoundCodeZip.prototype = Error;

export {
    InvalidCodeZip,
    NotFoundCodeZip
}
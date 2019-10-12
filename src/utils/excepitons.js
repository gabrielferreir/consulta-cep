function InvalidCodeZip(message) {
    this.message = message;
}

function NotFoundCodeZip(message) {
    this.message = message;
}

InvalidCodeZip.prototype = Object.create(Error.prototype);
InvalidCodeZip.prototype.name = "InvalidCodeZip";
InvalidCodeZip.prototype.constructor = InvalidCodeZip;

NotFoundCodeZip.prototype = Object.create(Error.prototype);
NotFoundCodeZip.prototype.name = "NotFoundCodeZip";
NotFoundCodeZip.prototype.constructor = NotFoundCodeZip;

export {
    InvalidCodeZip,
    NotFoundCodeZip
}
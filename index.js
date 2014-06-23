var es = require('event-stream');

module.exports = function(opt) {
  return es.map(function (file, cb) {
    var src = 'javascript:' + escape(file.contents.toString());
    file.contents = new Buffer(src);
    cb(null,file);
  });
};
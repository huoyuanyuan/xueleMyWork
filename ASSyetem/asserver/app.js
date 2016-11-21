var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var admin = require('./routes/admin');
var getData = require('./routes/asPlaceData');

//--------定义部分-----
var orm = require("orm");
var config = require("./config/config");
var session = require("express-session");
var MySQLStore = require("express-mysql-session")(session);

//---------------------

var app = express();


//设置跨域访问
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  //res.header("Access-Control-Allow-Headers", "X-Requested-With");
  //res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  //res.header("X-Powered-By",' 3.2.1')
  //res.header("Content-Type", "application/json;charset=utf-8");
  next();
});


//config sessionStore
var options = {
  host:"localhost",
  port:3306,
  user:"root",
  checkExpirationInterval: 900000,
  expiration: 86400000,
  database: "assystem",
};
var sessionStore = new MySQLStore(options);

app.use(session({
  key: 'session_cookie_name',
  secret: 'session_cookie_secret',
  store: sessionStore,
  resave: false,
  saveUninitialized: false
}));

//config orm
//admin表
app.use(orm.express(config.db,{
  define: function (db,models,next) {
    models.admin = db.define("admin",config.dbtable.admin,{id:"admin_id"});
    models.db = db;
    next();
  }
}));
//session表
app.use(orm.express(config.db,{
  define: function (db,models,next) {
    models.sessions = db.define("sessions",config.dbtable.sessions,{id:"session_id"});
    models.db = db;
    next();
  }
}));
//plug_in表
app.use(orm.express(config.db,{
  define: function (db,models,next) {
    models.plug_in = db.define("plug_in",config.dbtable.plug_in,{id:"plugIn_id"});
    models.db = db;
    next();
  }
}));
//asplace表
app.use(orm.express(config.db,{
  define: function (db,models,next) {
    models.asplace = db.define("asplace",config.dbtable.asplace,{id:"place_id"});
    models.db = db;
    next();
  }
}));
//asplaceas表
app.use(orm.express(config.db,{
  define: function (db,models,next) {
    models.asplaceas = db.define("asplaceas",config.dbtable.asplaceas,{id:"ASplaceAS_id"});
    models.db = db;
    next();
  }
}));
//astable表
app.use(orm.express(config.db,{
  define: function (db,models,next) {
    models.astable = db.define("astable",config.dbtable.astable,{id:"AS_id"});
    models.db = db;
    next();
  }
}));
//astarget表
app.use(orm.express(config.db,{
  define: function (db,models,next) {
    models.astarget = db.define("astarget",config.dbtable.astarget,{id:"target_id"});
    models.db = db;
    next();
  }
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/admin', admin);
app.use('/getData',getData)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;

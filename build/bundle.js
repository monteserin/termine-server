/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/application/common/utils/access.js":
/*!************************************************!*\
  !*** ./src/application/common/utils/access.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "verifyToken": () => (/* binding */ verifyToken)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _secret__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./secret */ "./src/application/common/utils/secret.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var verifyToken = function verifyToken(token) {
  return new Promise(function (resolve, reject) {
    jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().verify(token, _secret__WEBPACK_IMPORTED_MODULE_2__.getKey, function (err, decoded) {
      return err || !decoded ? reject(err) : resolve(_objectSpread(_objectSpread({}, decoded), {}, {
        id: decoded.sub || decoded.id
      }));
    });
  });
};

/***/ }),

/***/ "./src/application/common/utils/secret.js":
/*!************************************************!*\
  !*** ./src/application/common/utils/secret.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getKey": () => (/* binding */ getKey)
/* harmony export */ });
/* harmony import */ var jwks_rsa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jwks-rsa */ "jwks-rsa");
/* harmony import */ var jwks_rsa__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jwks_rsa__WEBPACK_IMPORTED_MODULE_0__);

var JWKS_URI = "https://termine.eu.auth0.com/.well-known/jwks.json";
var client = jwks_rsa__WEBPACK_IMPORTED_MODULE_0___default()({
  jwksUri: String(JWKS_URI)
});
var getKey = function getKey(header, callback) {
  client.getSigningKey(header.kid, function (err, key) {
    if (err) return callback(err);
    var signingKey = key.getPublicKey();
    callback(err, signingKey);
  });
};

/***/ }),

/***/ "./src/application/config/cloudinary.js":
/*!**********************************************!*\
  !*** ./src/application/config/cloudinary.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cloud_name": () => (/* binding */ cloud_name),
/* harmony export */   "api_key": () => (/* binding */ api_key),
/* harmony export */   "api_secret": () => (/* binding */ api_secret)
/* harmony export */ });
var cloud_name = 'da4rcdlvw';
var api_key = '569129219998658';
var api_secret = 'oUUuJqnI8GAU_zrQzcVGgR7XbS8';

/***/ }),

/***/ "./src/application/config/sockets.js":
/*!*******************************************!*\
  !*** ./src/application/config/sockets.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config)
/* harmony export */ });
var config = {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true
  },
  allowEIO3: true
};

/***/ }),

/***/ "./src/application/config/swagger.js":
/*!*******************************************!*\
  !*** ./src/application/config/swagger.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "swaggerConfig": () => (/* binding */ swaggerConfig)
/* harmony export */ });
var swaggerConfig = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Test API',
      version: '1.0.0'
    },
    components: {
      securitySchemes: {
        ApiKeyAuth: {
          type: 'apiKey',
          name: 'x-access-token',
          "in": 'header'
        }
      }
    },
    security: [{
      ApiKeyAuth: []
    }],
    securityDefinitions: {
      basicAuth: {
        type: 'basic'
      }
    }
  },
  // Path to the API docs
  apis: ['./src/entities/**/*.js', './src/entities/**/*.yml']
};

/***/ }),

/***/ "./src/application/database/index.js":
/*!*******************************************!*\
  !*** ./src/application/database/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "db": () => (/* binding */ db),
/* harmony export */   "DataTypes": () => (/* reexport safe */ sequelize__WEBPACK_IMPORTED_MODULE_2__.DataTypes),
/* harmony export */   "setAssociations": () => (/* binding */ setAssociations),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sequelize */ "sequelize");
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_2__);



var database = "borrame3";
var user = "root";
var password = "";
var host = "localhost";
var forceCleanDatabase = "false" === 'true';
var db = new sequelize__WEBPACK_IMPORTED_MODULE_2__.Sequelize(database, user, password, {
  host: host,
  dialect: 'mysql',
  logging: false
});

var setAssociations = function setAssociations(db) {
  Object.keys(db.models).forEach(function (modelName) {
    if ('associate' in db.models[modelName]) {
      db.models[modelName].associate(db.models);
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(onConnect) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return setAssociations(db);

          case 3:
            _context.next = 5;
            return db.authenticate();

          case 5:
            _context.next = 7;
            return db.sync({
              force: forceCleanDatabase
            });

          case 7:
            onConnect();
            console.log('Database connection OK!');
            _context.next = 15;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            console.log('Unable to connect to the database:');

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 11]]);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
})());

/***/ }),

/***/ "./src/application/documentation/index.js":
/*!************************************************!*\
  !*** ./src/application/documentation/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var swagger_jsdoc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swagger-jsdoc */ "swagger-jsdoc");
/* harmony import */ var swagger_jsdoc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swagger_jsdoc__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swagger_ui_express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swagger-ui-express */ "swagger-ui-express");
/* harmony import */ var swagger_ui_express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swagger_ui_express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_swagger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/swagger */ "./src/application/config/swagger.js");




var Documentation = function Documentation(app) {
  // JSON of specs
  var swaggerSpec = swagger_jsdoc__WEBPACK_IMPORTED_MODULE_0___default()(_config_swagger__WEBPACK_IMPORTED_MODULE_2__.swaggerConfig); // Api entrypoint

  app.use("/docs", (swagger_ui_express__WEBPACK_IMPORTED_MODULE_1___default().serve), swagger_ui_express__WEBPACK_IMPORTED_MODULE_1___default().setup(swaggerSpec));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Documentation);

/***/ }),

/***/ "./src/application/middlewares/error-handler.js":
/*!******************************************************!*\
  !*** ./src/application/middlewares/error-handler.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "asyncHandler": () => (/* binding */ asyncHandler),
/* harmony export */   "socketHandler": () => (/* binding */ socketHandler)
/* harmony export */ });
/*Tenemos una función que recibe como parámetro la función de cada controlador,
la ejecuta (resolve)
y si  hay algún error, lo mostrará por consola y lanzará un 500
*/
var asyncHandler = function asyncHandler(controller) {
  return function (req, res, next) {
    return Promise.resolve(controller(req, res, next))["catch"](function (err) {
      console.error('Request error:' + err.toString());
      if (err) return res.sendStatus(500).send();
    });
  };
};
var socketHandler = function socketHandler(controller) {
  return function (msg) {
    return Promise.resolve(controller(msg))["catch"](function (err) {
      console.error('Socket error:' + err);
    });
  };
};

/***/ }),

/***/ "./src/application/middlewares/index.js":
/*!**********************************************!*\
  !*** ./src/application/middlewares/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _with_sockets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./with-sockets */ "./src/application/middlewares/with-sockets.js");




var Middlewares = function Middlewares(app, io) {
  app.use(express__WEBPACK_IMPORTED_MODULE_0___default().urlencoded({
    extended: true
  }));
  app.use(express__WEBPACK_IMPORTED_MODULE_0___default().json());
  app.use((0,_with_sockets__WEBPACK_IMPORTED_MODULE_2__["default"])(io));
  app.use(cors__WEBPACK_IMPORTED_MODULE_1___default()());
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Middlewares);

/***/ }),

/***/ "./src/application/middlewares/restricted-access.js":
/*!**********************************************************!*\
  !*** ./src/application/middlewares/restricted-access.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getHeader": () => (/* binding */ getHeader),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Application_common_utils_access__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Application/common/utils/access */ "./src/application/common/utils/access.js");



var getHeader = function getHeader(req, header) {
  return req.headers[header];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(req, res, next) {
    var token, _yield$verifyToken, id;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            token = getHeader(req, 'authorization');

            if (token) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", res.status(400).send('No token provided.'));

          case 3:
            _context.prev = 3;
            _context.next = 6;
            return (0,_Application_common_utils_access__WEBPACK_IMPORTED_MODULE_2__.verifyToken)(token);

          case 6:
            _yield$verifyToken = _context.sent;
            id = _yield$verifyToken.id;

            if (id) {
              _context.next = 10;
              break;
            }

            return _context.abrupt("return", res.status(403).send('Wrong credentials'));

          case 10:
            req.userId = id;
            return _context.abrupt("return", next());

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](3);
            return _context.abrupt("return", res.status(401).send('Failed to authenticate token.'));

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 14]]);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
})());

/***/ }),

/***/ "./src/application/middlewares/with-sockets.js":
/*!*****************************************************!*\
  !*** ./src/application/middlewares/with-sockets.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var withSockets = function withSockets(io) {
  return function (req, res, next) {
    req.io = io;
    return next();
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withSockets);

/***/ }),

/***/ "./src/application/repository/generic-model.js":
/*!*****************************************************!*\
  !*** ./src/application/repository/generic-model.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var GenericModel = function GenericModel(Model) {
  return {
    create: function create(data) {
      return Model.create(data);
    },
    get: function get(conditions) {
      return Model.findAll(conditions ? {
        where: conditions
      } : {});
    },
    getById: function getById(id) {
      return Model.findOne({
        where: {
          id: id
        },
        raw: true
      });
    },
    updateById: function updateById(id, data) {
      return Model.update(data, {
        where: {
          id: id
        }
      });
    },
    update: function update(conditions, data) {
      return Model.update(data, {
        where: conditions
      });
    },
    deleteById: function deleteById(id) {
      return Model.destroy({
        where: {
          id: id
        }
      });
    },
    deleteByConditions: function deleteByConditions(conditions) {
      return Model.destroy({
        where: conditions
      });
    },
    findOrCreate: function findOrCreate(condition, newObj) {
      return Model.findOrCreate({
        where: condition,
        defaults: newObj
      });
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GenericModel);

/***/ }),

/***/ "./src/application/utils/cloudinary/index.js":
/*!***************************************************!*\
  !*** ./src/application/utils/cloudinary/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "uploadStream": () => (/* binding */ uploadStream),
/* harmony export */   "removeFile": () => (/* binding */ removeFile)
/* harmony export */ });
/* harmony import */ var cloudinary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cloudinary */ "cloudinary");
/* harmony import */ var cloudinary__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cloudinary__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _application_config_cloudinary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../application/config/cloudinary */ "./src/application/config/cloudinary.js");


var _Cloudinary$v = (cloudinary__WEBPACK_IMPORTED_MODULE_0___default().v2),
    uploader = _Cloudinary$v.uploader,
    config = _Cloudinary$v.config;
config({
  cloud_name: _application_config_cloudinary__WEBPACK_IMPORTED_MODULE_1__.cloud_name,
  api_key: _application_config_cloudinary__WEBPACK_IMPORTED_MODULE_1__.api_key,
  api_secret: _application_config_cloudinary__WEBPACK_IMPORTED_MODULE_1__.api_secret
});
var uploadStream = function uploadStream(fileBuffer, options) {
  return new Promise(function (resolve, reject) {
    uploader.upload_stream(options, function (error, result) {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    }).end(fileBuffer);
  });
};
var removeFile = function removeFile(public_id) {
  return new Promise(function (resolve, reject) {
    return uploader.destroy(public_id, function (err) {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

/***/ }),

/***/ "./src/entities/auth/adapters/http/index.js":
/*!**************************************************!*\
  !*** ./src/entities/auth/adapters/http/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../controller */ "./src/entities/auth/controller/index.js");
/* harmony import */ var _Middlwares_error_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Middlwares/error-handler */ "./src/application/middlewares/error-handler.js");
/* harmony import */ var _Middlwares_restricted_access__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Middlwares/restricted-access */ "./src/application/middlewares/restricted-access.js");




 // Para operaciones con acceso restringido, introduciremos un segundo parámetro que será la variable restrictedAccess


var router = express__WEBPACK_IMPORTED_MODULE_2___default().Router(); // GET ALL

router.post('/login', (0,_Middlwares_error_handler__WEBPACK_IMPORTED_MODULE_4__.asyncHandler)( /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(req, res) {
    var data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _controller__WEBPACK_IMPORTED_MODULE_3__["default"].login(req.body.token, req.body.isTeacher);

          case 2:
            data = _context.sent;
            res.send(data);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}()));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (app) {
  return app.use('/auth', router);
});

/***/ }),

/***/ "./src/entities/auth/auth0/api.js":
/*!****************************************!*\
  !*** ./src/entities/auth/auth0/api.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getManagementApi": () => (/* binding */ getManagementApi),
/* harmony export */   "getAuthenticationApi": () => (/* binding */ getAuthenticationApi)
/* harmony export */ });
/* harmony import */ var auth0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! auth0 */ "auth0");
/* harmony import */ var auth0__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(auth0__WEBPACK_IMPORTED_MODULE_0__);

var config = {
  domain: "termine.eu.auth0.com",
  clientId: "gjlTwflErIIyWWsaDVkO0p0QkV19Usiw",
  clientSecret: "qCLrIgfWyxDC0JCrYoFaOrE3HMvT56A4_aOjNyzBn3C19wrqIqKUCdkwHAEtMQDE",
  audience: "https://termine.eu.auth0.com/api/v2/"
};
var getManagementApi = function getManagementApi() {
  return new (auth0__WEBPACK_IMPORTED_MODULE_0___default().ManagementClient)(config);
};
var getAuthenticationApi = function getAuthenticationApi() {
  return new (auth0__WEBPACK_IMPORTED_MODULE_0___default().AuthenticationClient)(config);
};

/***/ }),

/***/ "./src/entities/auth/auth0/index.js":
/*!******************************************!*\
  !*** ./src/entities/auth/auth0/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "verifyAuthToken": () => (/* binding */ verifyAuthToken),
/* harmony export */   "ManagementClient": () => (/* binding */ ManagementClient),
/* harmony export */   "AuthenticationClient": () => (/* binding */ AuthenticationClient)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _secret__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./secret */ "./src/entities/auth/auth0/secret.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api */ "./src/entities/auth/auth0/api.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var verifyAuthToken = function verifyAuthToken(token) {
  return new Promise(function (resolve, reject) {
    jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().verify(token, _secret__WEBPACK_IMPORTED_MODULE_2__.getKey, function (err, decoded) {
      return err || !decoded ? reject(err) : resolve(_objectSpread(_objectSpread({}, decoded), {}, {
        id: decoded.sub || decoded.id
      }));
    });
  });
};
var ManagementClient = (0,_api__WEBPACK_IMPORTED_MODULE_3__.getManagementApi)();
var AuthenticationClient = (0,_api__WEBPACK_IMPORTED_MODULE_3__.getAuthenticationApi)();

/***/ }),

/***/ "./src/entities/auth/auth0/secret.js":
/*!*******************************************!*\
  !*** ./src/entities/auth/auth0/secret.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getKey": () => (/* binding */ getKey)
/* harmony export */ });
/* harmony import */ var jwks_rsa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jwks-rsa */ "jwks-rsa");
/* harmony import */ var jwks_rsa__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jwks_rsa__WEBPACK_IMPORTED_MODULE_0__);

var JWKS_URI = "https://termine.eu.auth0.com/.well-known/jwks.json";
var client = jwks_rsa__WEBPACK_IMPORTED_MODULE_0___default()({
  jwksUri: String(JWKS_URI)
});
var getKey = function getKey(header, callback) {
  client.getSigningKey(header.kid, function (err, key) {
    if (err) return callback(err);
    var signingKey = key.getPublicKey();
    callback(err, signingKey);
  });
};

/***/ }),

/***/ "./src/entities/auth/controller/index.js":
/*!***********************************************!*\
  !*** ./src/entities/auth/controller/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model */ "./src/entities/auth/model/index.js");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service */ "./src/entities/auth/service/index.js");


var Controller = {
  login: function login(token, isTeacher) {
    return (0,_service__WEBPACK_IMPORTED_MODULE_1__["default"])().signIn(token, isTeacher);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Controller);

/***/ }),

/***/ "./src/entities/auth/model/index.js":
/*!******************************************!*\
  !*** ./src/entities/auth/model/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schema */ "./src/entities/auth/model/schema.js");
/* harmony import */ var _Application_repository_generic_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Application/repository/generic-model */ "./src/application/repository/generic-model.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var Model = _objectSpread(_objectSpread({}, (0,_Application_repository_generic_model__WEBPACK_IMPORTED_MODULE_2__["default"])(_schema__WEBPACK_IMPORTED_MODULE_1__["default"])), {}, {
  isUserInClassroom: function isUserInClassroom(auth0Id, teacherId, cod, isStudent) {
    return _schema__WEBPACK_IMPORTED_MODULE_1__["default"].findOne({
      where: {
        auth0Id: auth0Id,
        teacherId: teacherId,
        cod: cod,
        student: isStudent
      }
    });
  }
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Model);

/***/ }),

/***/ "./src/entities/auth/model/schema.js":
/*!*******************************************!*\
  !*** ./src/entities/auth/model/schema.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Application_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Application/database */ "./src/application/database/index.js");


var _require = __webpack_require__(/*! sequelize */ "sequelize"),
    DataTypes = _require.DataTypes;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Application_database__WEBPACK_IMPORTED_MODULE_0__.db.define('user', {
  auth0Id: DataTypes.STRING,
  teacherId: DataTypes.STRING,
  cod: DataTypes.STRING,
  student: DataTypes.BOOLEAN
}));

/***/ }),

/***/ "./src/entities/auth/service/index.js":
/*!********************************************!*\
  !*** ./src/entities/auth/service/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _auth0__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth0 */ "./src/entities/auth/auth0/index.js");
/* harmony import */ var _student_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../student/model */ "./src/entities/student/model/index.js");
/* harmony import */ var _teacher_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../teacher/model */ "./src/entities/teacher/model/index.js");






var AuthService = function AuthService() {
  return {
    signIn: function signIn(providerToken, isTeacher) {
      return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
        var _yield$verifyAuthToke, id, email_verified, given_name, picture, email, rqr, Model, user;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('1111111111111111111111111111111');
                _context.next = 3;
                return (0,_auth0__WEBPACK_IMPORTED_MODULE_2__.verifyAuthToken)(providerToken);

              case 3:
                _yield$verifyAuthToke = _context.sent;
                id = _yield$verifyAuthToke.id;
                email_verified = _yield$verifyAuthToke.email_verified;
                given_name = _yield$verifyAuthToke.given_name;
                picture = _yield$verifyAuthToke.picture;
                email = _yield$verifyAuthToke.email;
                _context.next = 11;
                return (0,_auth0__WEBPACK_IMPORTED_MODULE_2__.verifyAuthToken)(providerToken);

              case 11:
                rqr = _context.sent;
                Model = isTeacher ? _teacher_model__WEBPACK_IMPORTED_MODULE_4__["default"] : _student_model__WEBPACK_IMPORTED_MODULE_3__["default"];
                _context.next = 15;
                return Model.findOrCreate({
                  email: email
                }, {
                  auth0Id: id,
                  name: given_name,
                  picture: picture
                });

              case 15:
                user = _context.sent;
                return _context.abrupt("return", {
                  user: user,
                  verified: email_verified
                });

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    deleteUser: function deleteUser(userProviderId) {
      return _auth0__WEBPACK_IMPORTED_MODULE_2__.ManagementClient.deleteUser({
        id: userProviderId
      });
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthService);

/***/ }),

/***/ "./src/entities/classroom-student/model/index.js":
/*!*******************************************************!*\
  !*** ./src/entities/classroom-student/model/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schema */ "./src/entities/classroom-student/model/schema.js");
/* harmony import */ var _Application_repository_generic_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Application/repository/generic-model */ "./src/application/repository/generic-model.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var Model = _objectSpread(_objectSpread({}, (0,_Application_repository_generic_model__WEBPACK_IMPORTED_MODULE_2__["default"])(_schema__WEBPACK_IMPORTED_MODULE_1__["default"])), {}, {
  updateHasTerminated: function updateHasTerminated(conditions, hasTerminated) {
    return _schema__WEBPACK_IMPORTED_MODULE_1__["default"].update({
      hasTerminated: hasTerminated
    }, {
      where: conditions
    });
  }
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Model);

/***/ }),

/***/ "./src/entities/classroom-student/model/schema.js":
/*!********************************************************!*\
  !*** ./src/entities/classroom-student/model/schema.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Application_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Application/database */ "./src/application/database/index.js");

var ClassroomStudent = _Application_database__WEBPACK_IMPORTED_MODULE_0__.db.define('classroomstudent', {
  id: {
    type: _Application_database__WEBPACK_IMPORTED_MODULE_0__.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  hasTerminated: {
    type: _Application_database__WEBPACK_IMPORTED_MODULE_0__.DataTypes.BOOLEAN,
    defaultValue: false
  },
  isInClassroom: {
    type: _Application_database__WEBPACK_IMPORTED_MODULE_0__.DataTypes.BOOLEAN,
    defaultValue: true
  },
  hasDoubts: {
    type: _Application_database__WEBPACK_IMPORTED_MODULE_0__.DataTypes.BOOLEAN,
    defaultValue: false
  },
  doIt: {
    type: _Application_database__WEBPACK_IMPORTED_MODULE_0__.DataTypes.BOOLEAN,
    defaultValue: false
  },
  doubtTime: _Application_database__WEBPACK_IMPORTED_MODULE_0__.DataTypes.TIME
});

ClassroomStudent.associate = function (_ref) {
  var classroom = _ref.classroom,
      student = _ref.student;
  ClassroomStudent.belongsTo(classroom, {
    foreignKey: {
      allowNull: false
    }
  });
  ClassroomStudent.belongsTo(student, {
    foreignKey: {
      allowNull: false
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClassroomStudent);

/***/ }),

/***/ "./src/entities/classroom/adapters/http/index.js":
/*!*******************************************************!*\
  !*** ./src/entities/classroom/adapters/http/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../controller */ "./src/entities/classroom/controller/index.js");
/* harmony import */ var _Middlwares_error_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Middlwares/error-handler */ "./src/application/middlewares/error-handler.js");
/* harmony import */ var _Middlwares_restricted_access__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Middlwares/restricted-access */ "./src/application/middlewares/restricted-access.js");




 // Para operaciones con acceso restringido, introduciremos un segundo parámetro que será la variable restrictedAccess


var router = express__WEBPACK_IMPORTED_MODULE_2___default().Router();
/*
// GET BY ID
router.get('/:id', asyncHandler(async (req, res) => {
    const {query: {id}} = req;
    const data = await Controller.getById(id);
    res.send(data);
}));

// GET BY CONDITIONS
router.get('/:teacherId/:cod', asyncHandler(async (req, res) => {
    const {params: {teacherId, cod}} = req;
    const data = await Controller.get({teacherId, cod});
    res.send(data);
}));
*/
// CREATE

router.post("/", (0,_Middlwares_error_handler__WEBPACK_IMPORTED_MODULE_4__.asyncHandler)( /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(req, res) {
    var _req$body, teacherId, cod, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, teacherId = _req$body.teacherId, cod = _req$body.cod;
            _context.next = 3;
            return _controller__WEBPACK_IMPORTED_MODULE_3__["default"].createIfNotExistsAndGetClassroom(teacherId, cod);

          case 3:
            data = _context.sent;
            res.send(data);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}()));
router.get("/getClassroom", (0,_Middlwares_error_handler__WEBPACK_IMPORTED_MODULE_4__.asyncHandler)( /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(req, res) {
    var _req$query, cod, teacherId, classroom;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$query = req.query, cod = _req$query.cod, teacherId = _req$query.teacherId;
            _context2.next = 3;
            return _controller__WEBPACK_IMPORTED_MODULE_3__["default"].getClassroomWithStudents(cod, teacherId);

          case 3:
            classroom = _context2.sent;
            res.send(classroom);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}()));
router.post("/updateTxt", (0,_Middlwares_error_handler__WEBPACK_IMPORTED_MODULE_4__.asyncHandler)( /*#__PURE__*/function () {
  var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3(req, res) {
    var _req$body2, cod, teacherId, txt, classroom;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body2 = req.body, cod = _req$body2.cod, teacherId = _req$body2.teacherId, txt = _req$body2.txt;
            _context3.next = 3;
            return _controller__WEBPACK_IMPORTED_MODULE_3__["default"].updateTxt(cod, teacherId, txt);

          case 3:
            classroom = _context3.sent;
            req.io.emit('classroomUpdated', classroom);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}()));
router.post("/newExercise", (0,_Middlwares_error_handler__WEBPACK_IMPORTED_MODULE_4__.asyncHandler)( /*#__PURE__*/function () {
  var _ref4 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee4(req, res) {
    var _req$body3, cod, teacherId, updatedClassroom;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body3 = req.body, cod = _req$body3.cod, teacherId = _req$body3.teacherId;
            _context4.next = 3;
            return _controller__WEBPACK_IMPORTED_MODULE_3__["default"].newExercise(cod, teacherId);

          case 3:
            updatedClassroom = _context4.sent;
            req.io.emit('classroomUpdated', updatedClassroom); // await Controller.
            //    const classroom = await Controller.newExercise(cod, teacherId);
            //   req.io.emit('newExercise', classroom);

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}()));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (app) {
  return app.use('/classroom', router);
});

/***/ }),

/***/ "./src/entities/classroom/adapters/socket/index.js":
/*!*********************************************************!*\
  !*** ./src/entities/classroom/adapters/socket/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Middlwares_error_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Middlwares/error-handler */ "./src/application/middlewares/error-handler.js");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../controller */ "./src/entities/classroom/controller/index.js");





var StartSocketServer = function StartSocketServer(io, socket) {
  socket.on('studentSuscribeOrLogInClassroom', (0,_Middlwares_error_handler__WEBPACK_IMPORTED_MODULE_2__.socketHandler)( /*#__PURE__*/function () {
    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(msg) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              io.emit('studentSuscribeOrLogInClassroom', msg);

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }()));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StartSocketServer);

/***/ }),

/***/ "./src/entities/classroom/controller/index.js":
/*!****************************************************!*\
  !*** ./src/entities/classroom/controller/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "@babel/runtime/helpers/slicedToArray");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model */ "./src/entities/classroom/model/index.js");
/* harmony import */ var _classroom_student_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../classroom-student/model */ "./src/entities/classroom-student/model/index.js");





var Controller = {
  get: function get(conditions) {
    return _model__WEBPACK_IMPORTED_MODULE_3__["default"].get(conditions);
  },
  getById: function getById(id) {
    return _model__WEBPACK_IMPORTED_MODULE_3__["default"].getById(id);
  },
  create: function create(data) {
    return _model__WEBPACK_IMPORTED_MODULE_3__["default"].create(data);
  },
  updateById: function updateById(id, data) {
    return _model__WEBPACK_IMPORTED_MODULE_3__["default"].updateById(id, data);
  },
  deleteById: function deleteById(id) {
    return _model__WEBPACK_IMPORTED_MODULE_3__["default"].deleteById(id);
  },
  getMostRecentCod: function getMostRecentCod(teacherId) {
    return _model__WEBPACK_IMPORTED_MODULE_3__["default"].getMostRecentCod(teacherId);
  },
  getClassroomWithStudents: function getClassroomWithStudents(cod, teacherId) {
    return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
      var classroom;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _model__WEBPACK_IMPORTED_MODULE_3__["default"].getClassroomWithStudents({
                cod: cod,
                teacherId: teacherId
              });

            case 2:
              classroom = _context.sent;
              return _context.abrupt("return", classroom);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  createIfNotExistsAndGetClassroom: function createIfNotExistsAndGetClassroom(teacherId, cod) {
    var _this = this;

    return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
      var data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _this.getClassroomWithStudents(teacherId, cod);

            case 2:
              data = _context2.sent;

              if (data) {
                _context2.next = 9;
                break;
              }

              _context2.next = 6;
              return _model__WEBPACK_IMPORTED_MODULE_3__["default"].create({
                teacherId: teacherId,
                cod: cod
              });

            case 6:
              _context2.next = 8;
              return _this.getClassroomWithStudents(teacherId, cod);

            case 8:
              return _context2.abrupt("return", _context2.sent);

            case 9:
              return _context2.abrupt("return", data);

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  updateTxt: function updateTxt(cod, teacherId, txt) {
    return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
      var _yield$Model$get, _yield$Model$get2, classroom;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _model__WEBPACK_IMPORTED_MODULE_3__["default"].get({
                cod: cod,
                teacherId: teacherId
              });

            case 2:
              _yield$Model$get = _context3.sent;
              _yield$Model$get2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_yield$Model$get, 1);
              classroom = _yield$Model$get2[0];
              _context3.next = 7;
              return _model__WEBPACK_IMPORTED_MODULE_3__["default"].updateById(classroom.id, {
                txt: txt
              });

            case 7:
              _context3.next = 9;
              return _model__WEBPACK_IMPORTED_MODULE_3__["default"].getClassroomWithStudents({
                cod: cod,
                teacherId: teacherId
              });

            case 9:
              return _context3.abrupt("return", _context3.sent);

            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  newExercise: function newExercise(cod, teacherId) {
    return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4() {
      var _yield$Model$get3, _yield$Model$get4, classroom;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _model__WEBPACK_IMPORTED_MODULE_3__["default"].get({
                cod: cod,
                teacherId: teacherId
              });

            case 2:
              _yield$Model$get3 = _context4.sent;
              _yield$Model$get4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_yield$Model$get3, 1);
              classroom = _yield$Model$get4[0];
              _context4.next = 7;
              return _classroom_student_model__WEBPACK_IMPORTED_MODULE_4__["default"].update({
                classroomId: classroom.dataValues.id
              }, {
                hasTerminated: false
              });

            case 7:
              _context4.next = 9;
              return _model__WEBPACK_IMPORTED_MODULE_3__["default"].getClassroomWithStudents({
                cod: cod,
                teacherId: teacherId
              });

            case 9:
              return _context4.abrupt("return", _context4.sent);

            case 10:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }))();
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Controller);

/***/ }),

/***/ "./src/entities/classroom/model/index.js":
/*!***********************************************!*\
  !*** ./src/entities/classroom/model/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schema */ "./src/entities/classroom/model/schema.js");
/* harmony import */ var _Application_repository_generic_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Application/repository/generic-model */ "./src/application/repository/generic-model.js");
/* harmony import */ var _student_model_schema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../student/model/schema */ "./src/entities/student/model/schema.js");
/* harmony import */ var _classroom_student_model_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../classroom-student/model/schema */ "./src/entities/classroom-student/model/schema.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var Model = _objectSpread(_objectSpread({}, (0,_Application_repository_generic_model__WEBPACK_IMPORTED_MODULE_2__["default"])(_schema__WEBPACK_IMPORTED_MODULE_1__["default"])), {}, {
  getClassroomWithStudents: function getClassroomWithStudents(conditions) {
    return _schema__WEBPACK_IMPORTED_MODULE_1__["default"].findOne({
      where: conditions,
      include: _student_model_schema__WEBPACK_IMPORTED_MODULE_3__["default"]
    });
  },
  getMostRecentCod: function getMostRecentCod(teacherId) {
    return _schema__WEBPACK_IMPORTED_MODULE_1__["default"].findOne({
      where: {
        teacherId: teacherId
      },
      order: [['createdAt', 'DESC']]
    });
  }
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Model);

/***/ }),

/***/ "./src/entities/classroom/model/schema.js":
/*!************************************************!*\
  !*** ./src/entities/classroom/model/schema.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Application_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Application/database */ "./src/application/database/index.js");
/* harmony import */ var _classroom_student_model_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../classroom-student/model/schema */ "./src/entities/classroom-student/model/schema.js");


var Classroom = _Application_database__WEBPACK_IMPORTED_MODULE_0__.db.define('classroom', {
  teacherId: _Application_database__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
  cod: _Application_database__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
  txt: {
    type: _Application_database__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
    defaultValue: ''
  }
});

Classroom.associate = function (_ref) {
  var student = _ref.student,
      classroomstudent = _ref.classroomstudent;
  Classroom.belongsToMany(student, {
    through: _classroom_student_model_schema__WEBPACK_IMPORTED_MODULE_1__["default"],
    onDelete: 'cascade'
  }); // Classroom.hasMany(classroomstudent, { onDelete: 'cascade'});
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Classroom);

/***/ }),

/***/ "./src/entities/index.js":
/*!*******************************!*\
  !*** ./src/entities/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Routes": () => (/* binding */ Routes),
/* harmony export */   "Sockets": () => (/* binding */ Sockets)
/* harmony export */ });
/* harmony import */ var _student_adapters_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./student/adapters/http */ "./src/entities/student/adapters/http/index.js");
/* harmony import */ var _student_adapters_socket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./student/adapters/socket */ "./src/entities/student/adapters/socket/index.js");
/* harmony import */ var _teacher_adapters_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./teacher/adapters/http */ "./src/entities/teacher/adapters/http/index.js");
/* harmony import */ var _classroom_adapters_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classroom/adapters/http */ "./src/entities/classroom/adapters/http/index.js");
/* harmony import */ var _classroom_adapters_socket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./classroom/adapters/socket */ "./src/entities/classroom/adapters/socket/index.js");
/* harmony import */ var _auth_adapters_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/adapters/http */ "./src/entities/auth/adapters/http/index.js");


 //import teacherSockets from './teacher/adapters/socket';




var Routes = function Routes(app, socketIO) {
  (0,_student_adapters_http__WEBPACK_IMPORTED_MODULE_0__["default"])(app, socketIO);
  (0,_teacher_adapters_http__WEBPACK_IMPORTED_MODULE_2__["default"])(app);
  (0,_classroom_adapters_http__WEBPACK_IMPORTED_MODULE_3__["default"])(app);
  (0,_auth_adapters_http__WEBPACK_IMPORTED_MODULE_5__["default"])(app);
};
var Sockets = function Sockets(io, socket) {
  (0,_student_adapters_socket__WEBPACK_IMPORTED_MODULE_1__["default"])(io, socket); //teacherSockets(io, socket);
  //  classRoomSockets(io, socket);
};

/***/ }),

/***/ "./src/entities/student/adapters/http/index.js":
/*!*****************************************************!*\
  !*** ./src/entities/student/adapters/http/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../controller */ "./src/entities/student/controller/index.js");
/* harmony import */ var _Middlwares_error_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Middlwares/error-handler */ "./src/application/middlewares/error-handler.js");
/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! multer */ "multer");
/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(multer__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _application_utils_cloudinary__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../application/utils/cloudinary */ "./src/application/utils/cloudinary/index.js");
/* harmony import */ var _Middlwares_restricted_access__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Middlwares/restricted-access */ "./src/application/middlewares/restricted-access.js");







 // Para operaciones con acceso restringido, introduciremos un segundo parámetro que será la variable restrictedAccess


var router = express__WEBPACK_IMPORTED_MODULE_2___default().Router();
router.post("/", (0,_Middlwares_error_handler__WEBPACK_IMPORTED_MODULE_4__.asyncHandler)( /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(req, res) {
    var _req$body, teacherId, mail, cod, picture, name, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, teacherId = _req$body.teacherId, mail = _req$body.mail, cod = _req$body.cod, picture = _req$body.picture, name = _req$body.name;
            _context.next = 3;
            return _controller__WEBPACK_IMPORTED_MODULE_3__["default"].getStudentClassroomAndSuscribeToItIfIsNotSuscribed({
              teacherId: teacherId,
              mail: mail,
              cod: cod,
              picture: picture,
              name: name
            });

          case 3:
            data = _context.sent;
            res.send(data);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}()));
router.post("/removeFromClassroom", (0,_Middlwares_error_handler__WEBPACK_IMPORTED_MODULE_4__.asyncHandler)( /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(req, res) {
    var _req$body2, studentId, classroomId, cod, teacherId, updatedClassroom;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body2 = req.body, studentId = _req$body2.studentId, classroomId = _req$body2.classroomId, cod = _req$body2.cod, teacherId = _req$body2.teacherId;
            _context2.next = 3;
            return _controller__WEBPACK_IMPORTED_MODULE_3__["default"].removeStudentFromClassroom(studentId, classroomId, cod, teacherId);

          case 3:
            _context2.next = 5;
            return _controller__WEBPACK_IMPORTED_MODULE_3__["default"].studentHasTerminated(req.body);

          case 5:
            updatedClassroom = _context2.sent;
            req.io.emit('classroomUpdated', updatedClassroom);

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}()));
router.post("/hasTerminated", (0,_Middlwares_error_handler__WEBPACK_IMPORTED_MODULE_4__.asyncHandler)( /*#__PURE__*/function () {
  var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3(req, res) {
    var updatedClassroom;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _controller__WEBPACK_IMPORTED_MODULE_3__["default"].studentHasTerminated(req.body);

          case 2:
            updatedClassroom = _context3.sent;
            req.io.emit('classroomUpdated', updatedClassroom);
            res.send(200);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}()));
router.post("/hasDoubts", (0,_Middlwares_error_handler__WEBPACK_IMPORTED_MODULE_4__.asyncHandler)( /*#__PURE__*/function () {
  var _ref4 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee4(req, res) {
    var updatedClassroom;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _controller__WEBPACK_IMPORTED_MODULE_3__["default"].studentHasDoubts(req.body);

          case 2:
            updatedClassroom = _context4.sent;
            req.io.emit('classroomUpdated', updatedClassroom);
            res.send(200);

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}()));
router.post("/isInClassroom", (0,_Middlwares_error_handler__WEBPACK_IMPORTED_MODULE_4__.asyncHandler)( /*#__PURE__*/function () {
  var _ref5 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee5(req, res) {
    var updatedClassroom;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _controller__WEBPACK_IMPORTED_MODULE_3__["default"].studentIsInClassroom(req.body);

          case 2:
            updatedClassroom = _context5.sent;
            req.io.emit('classroomUpdated', updatedClassroom);
            res.send(200);

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}()));
router.post("/doit", (0,_Middlwares_error_handler__WEBPACK_IMPORTED_MODULE_4__.asyncHandler)( /*#__PURE__*/function () {
  var _ref6 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee6(req, res) {
    var updatedClassroom;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return _controller__WEBPACK_IMPORTED_MODULE_3__["default"].doIt(req.body);

          case 2:
            updatedClassroom = _context6.sent;
            req.io.emit('classroomUpdated', updatedClassroom);
            res.send(200);

          case 5:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function (_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}())); // Multer debe usarse como middleware

var storage2 = multer__WEBPACK_IMPORTED_MODULE_5___default().diskStorage({
  destination: "./public/uploads/",
  filename: function filename(req, file, cb) {
    var imageName = "image-" + req.userId + path__WEBPACK_IMPORTED_MODULE_6___default().extname(file.originalname);
    cb(null, imageName);
  }
});
var storage = multer__WEBPACK_IMPORTED_MODULE_5___default().memoryStorage({
  destination: "./public/uploads/"
});
var upload = multer__WEBPACK_IMPORTED_MODULE_5___default()({
  storage: storage
});
router.post('/uploadavatar', upload.single('file'), (0,_Middlwares_error_handler__WEBPACK_IMPORTED_MODULE_4__.asyncHandler)( /*#__PURE__*/function () {
  var _ref7 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee7(req, res) {
    var auth0Id, result, updatedClassroom;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            auth0Id = req.body.auth0Id;

            if (!req.file) {
              _context7.next = 9;
              break;
            }

            _context7.next = 4;
            return (0,_application_utils_cloudinary__WEBPACK_IMPORTED_MODULE_7__.uploadStream)(req.file.buffer, {
              folder: 'termine'
            });

          case 4:
            result = _context7.sent;
            _context7.next = 7;
            return _controller__WEBPACK_IMPORTED_MODULE_3__["default"].insertImageIntoDatabase(auth0Id, result.secure_url);

          case 7:
            updatedClassroom = _context7.sent;
            req.io.emit('classroomUpdated', updatedClassroom);

          case 9:
            res.send(200);

          case 10:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function (_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}()));
router.post('/setAvatarType', (0,_Middlwares_error_handler__WEBPACK_IMPORTED_MODULE_4__.asyncHandler)( /*#__PURE__*/function () {
  var _ref8 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee8(req, res) {
    var _req$body3, avatarType, studentId, cod, teacherId, updatedClassroom;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _req$body3 = req.body, avatarType = _req$body3.avatarType, studentId = _req$body3.studentId, cod = _req$body3.cod, teacherId = _req$body3.teacherId;
            _context8.next = 3;
            return _controller__WEBPACK_IMPORTED_MODULE_3__["default"].setAvatarType({
              avatarType: avatarType,
              studentId: studentId,
              cod: cod,
              teacherId: teacherId
            });

          case 3:
            updatedClassroom = _context8.sent;
            req.io.emit('classroomUpdated', updatedClassroom);
            res.send(200);

          case 6:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function (_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}()));
router.post('/saveStudentName', (0,_Middlwares_error_handler__WEBPACK_IMPORTED_MODULE_4__.asyncHandler)( /*#__PURE__*/function () {
  var _ref9 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee9(req, res) {
    var _req$body4, id, studentName, cod, teacherId, updatedClassroom;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _req$body4 = req.body, id = _req$body4.id, studentName = _req$body4.studentName, cod = _req$body4.cod, teacherId = _req$body4.teacherId;
            _context9.next = 3;
            return _controller__WEBPACK_IMPORTED_MODULE_3__["default"].saveStudentName({
              id: id,
              studentName: studentName,
              cod: cod,
              teacherId: teacherId
            });

          case 3:
            updatedClassroom = _context9.sent;
            req.io.emit('classroomUpdated', updatedClassroom);
            res.send(200);

          case 6:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));

  return function (_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}()));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (app) {
  return app.use('/student', router);
});

/***/ }),

/***/ "./src/entities/student/adapters/socket/index.js":
/*!*******************************************************!*\
  !*** ./src/entities/student/adapters/socket/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Middlwares_error_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Middlwares/error-handler */ "./src/application/middlewares/error-handler.js");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../controller */ "./src/entities/student/controller/index.js");
/* harmony import */ var _classroom_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../classroom/controller */ "./src/entities/classroom/controller/index.js");






var StartSocketServer = function StartSocketServer(io, socket) {
  socket.on('studentSuscribeOrLogInClassroom', (0,_Middlwares_error_handler__WEBPACK_IMPORTED_MODULE_2__.socketHandler)( /*#__PURE__*/function () {
    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(msg) {
      var classroom;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _controller__WEBPACK_IMPORTED_MODULE_3__["default"].getStudentClassroomAndSuscribeToItIfIsNotSuscribed(msg);

            case 2:
              classroom = _context.sent;
              io.emit('classroomStudents', classroom);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }()));
  socket.on('studentHasDoubts', (0,_Middlwares_error_handler__WEBPACK_IMPORTED_MODULE_2__.socketHandler)( /*#__PURE__*/function () {
    var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(msg) {
      var updatedClassroom;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _controller__WEBPACK_IMPORTED_MODULE_3__["default"].studentHasDoubts(msg);

            case 2:
              updatedClassroom = _context2.sent;
              io.emit('studentHasTerminated', updatedClassroom);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }()));
  socket.on('studentsUpdated', (0,_Middlwares_error_handler__WEBPACK_IMPORTED_MODULE_2__.socketHandler)( /*#__PURE__*/function () {
    var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3(msg) {
      var updatedClassroom;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _classroom_controller__WEBPACK_IMPORTED_MODULE_4__["default"].getClassroomWithStudents(msg.cod, msg.teacherId);

            case 2:
              updatedClassroom = _context3.sent;
              io.emit('classroomUpdated', updatedClassroom);

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }()));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StartSocketServer);

/***/ }),

/***/ "./src/entities/student/controller/index.js":
/*!**************************************************!*\
  !*** ./src/entities/student/controller/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "@babel/runtime/helpers/slicedToArray");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model */ "./src/entities/student/model/index.js");
/* harmony import */ var _classroom_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../classroom/model */ "./src/entities/classroom/model/index.js");
/* harmony import */ var _classroom_student_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../classroom-student/model */ "./src/entities/classroom-student/model/index.js");
/* harmony import */ var _classroom_controller__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../classroom/controller */ "./src/entities/classroom/controller/index.js");







var Controller = {
  get: function get(conditions) {
    return _model__WEBPACK_IMPORTED_MODULE_3__["default"].get(conditions);
  },
  getById: function getById(id) {
    return _model__WEBPACK_IMPORTED_MODULE_3__["default"].getById(id);
  },
  create: function create(data) {
    return _model__WEBPACK_IMPORTED_MODULE_3__["default"].create(data);
  },
  updateById: function updateById(id, data) {
    return _model__WEBPACK_IMPORTED_MODULE_3__["default"].updateById(id, data);
  },
  deleteById: function deleteById(id) {
    return _model__WEBPACK_IMPORTED_MODULE_3__["default"].deleteById(id);
  },
  studentHasTerminated: function studentHasTerminated(msg) {
    return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
      var _yield$ClassroomModel, _yield$ClassroomModel2, classroom, conditions, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _classroom_model__WEBPACK_IMPORTED_MODULE_4__["default"].get({
                teacherId: msg.teacherId,
                cod: msg.cod
              });

            case 2:
              _yield$ClassroomModel = _context.sent;
              _yield$ClassroomModel2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_yield$ClassroomModel, 1);
              classroom = _yield$ClassroomModel2[0];
              conditions = {
                classroomId: classroom.dataValues.id,
                studentId: msg.studentId
              };
              data = {
                hasTerminated: msg.hasTerminated
              };
              _context.next = 9;
              return _classroom_student_model__WEBPACK_IMPORTED_MODULE_5__["default"].update(conditions, data);

            case 9:
              _context.next = 11;
              return _classroom_controller__WEBPACK_IMPORTED_MODULE_6__["default"].getClassroomWithStudents(msg.cod, msg.teacherId);

            case 11:
              return _context.abrupt("return", _context.sent);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  studentHasDoubts: function studentHasDoubts(msg) {
    return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
      var _yield$ClassroomModel3, _yield$ClassroomModel4, classroom, conditions, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _classroom_model__WEBPACK_IMPORTED_MODULE_4__["default"].get({
                teacherId: msg.teacherId,
                cod: msg.cod
              });

            case 2:
              _yield$ClassroomModel3 = _context2.sent;
              _yield$ClassroomModel4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_yield$ClassroomModel3, 1);
              classroom = _yield$ClassroomModel4[0];
              conditions = {
                classroomId: classroom.dataValues.id,
                studentId: msg.studentId
              };
              data = {
                hasDoubts: msg.hasDoubts
              };
              _context2.next = 9;
              return _classroom_student_model__WEBPACK_IMPORTED_MODULE_5__["default"].update(conditions, data);

            case 9:
              _context2.next = 11;
              return _classroom_controller__WEBPACK_IMPORTED_MODULE_6__["default"].getClassroomWithStudents(msg.cod, msg.teacherId);

            case 11:
              return _context2.abrupt("return", _context2.sent);

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  studentIsInClassroom: function studentIsInClassroom(msg) {
    return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
      var _yield$ClassroomModel5, _yield$ClassroomModel6, classroom, conditions, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _classroom_model__WEBPACK_IMPORTED_MODULE_4__["default"].get({
                teacherId: msg.teacherId,
                cod: msg.cod
              });

            case 2:
              _yield$ClassroomModel5 = _context3.sent;
              _yield$ClassroomModel6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_yield$ClassroomModel5, 1);
              classroom = _yield$ClassroomModel6[0];
              conditions = {
                classroomId: classroom.dataValues.id,
                studentId: msg.studentId
              };
              data = {
                isInClassroom: msg.isInClassroom
              };
              _context3.next = 9;
              return _classroom_student_model__WEBPACK_IMPORTED_MODULE_5__["default"].update(conditions, data);

            case 9:
              _context3.next = 11;
              return _classroom_controller__WEBPACK_IMPORTED_MODULE_6__["default"].getClassroomWithStudents(msg.cod, msg.teacherId);

            case 11:
              return _context3.abrupt("return", _context3.sent);

            case 12:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  removeStudentFromClassroom: function removeStudentFromClassroom(studentId, classroomId, cod, teacherId) {
    return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              console.log('lllllllllllllllllllllllll', studentId, classroomId, cod, teacherId);
              _context4.next = 3;
              return _classroom_student_model__WEBPACK_IMPORTED_MODULE_5__["default"].deleteByConditions({
                studentId: studentId,
                classroomId: classroomId
              });

            case 3:
              _context4.next = 5;
              return _classroom_controller__WEBPACK_IMPORTED_MODULE_6__["default"].getClassroomWithStudents(cod, teacherId);

            case 5:
              return _context4.abrupt("return", _context4.sent);

            case 6:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }))();
  },
  getStudentClassroomAndSuscribeToItIfIsNotSuscribed: function getStudentClassroomAndSuscribeToItIfIsNotSuscribed(msg) {
    return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee5() {
      var _yield$ClassroomModel7, _yield$ClassroomModel8, classroom, _yield$Model$findOrCr, _yield$Model$findOrCr2, student;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _classroom_model__WEBPACK_IMPORTED_MODULE_4__["default"].get({
                teacherId: msg.teacherId,
                cod: msg.cod
              });

            case 2:
              _yield$ClassroomModel7 = _context5.sent;
              _yield$ClassroomModel8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_yield$ClassroomModel7, 1);
              classroom = _yield$ClassroomModel8[0];

              if (!classroom) {
                _context5.next = 16;
                break;
              }

              _context5.next = 8;
              return _model__WEBPACK_IMPORTED_MODULE_3__["default"].findOrCreate({
                email: msg.mail
              }, {
                picture: msg.picture,
                name: msg.name
              });

            case 8:
              _yield$Model$findOrCr = _context5.sent;
              _yield$Model$findOrCr2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_yield$Model$findOrCr, 1);
              student = _yield$Model$findOrCr2[0];
              _context5.next = 13;
              return _classroom_student_model__WEBPACK_IMPORTED_MODULE_5__["default"].findOrCreate({
                studentId: student.id,
                classroomId: classroom.id
              }, {
                studentId: student.id,
                classroomId: classroom.id
              });

            case 13:
              return _context5.abrupt("return", classroom);

            case 16:
              return _context5.abrupt("return", null);

            case 17:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }))();
  },
  doIt: function doIt(data) {
    return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee6() {
      var _yield$ClassroomModel9, _yield$ClassroomModel10, classroom;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return _classroom_model__WEBPACK_IMPORTED_MODULE_4__["default"].get({
                cod: data.cod,
                teacherId: data.teacherId
              });

            case 2:
              _yield$ClassroomModel9 = _context6.sent;
              _yield$ClassroomModel10 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_yield$ClassroomModel9, 1);
              classroom = _yield$ClassroomModel10[0];
              _context6.next = 7;
              return _classroom_student_model__WEBPACK_IMPORTED_MODULE_5__["default"].update({
                classroomId: classroom.id
              }, {
                doIt: data.doIt
              });

            case 7:
              _context6.next = 9;
              return _classroom_controller__WEBPACK_IMPORTED_MODULE_6__["default"].getClassroomWithStudents(data.cod, data.teacherId);

            case 9:
              return _context6.abrupt("return", _context6.sent);

            case 10:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }))();
  },
  insertImageIntoDatabase: function insertImageIntoDatabase(id, imageName) {
    return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee7() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return _model__WEBPACK_IMPORTED_MODULE_3__["default"].update({
                auth0Id: id
              }, {
                uploadedPicture: imageName
              });

            case 2:
              _context7.next = 4;
              return _classroom_controller__WEBPACK_IMPORTED_MODULE_6__["default"].getClassroomWithStudents(data.cod, data.teacherId);

            case 4:
              return _context7.abrupt("return", _context7.sent);

            case 5:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }))();
  },
  setAvatarType: function setAvatarType(data) {
    return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee8() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return _model__WEBPACK_IMPORTED_MODULE_3__["default"].update({
                id: data.studentId
              }, {
                avatarType: data.avatarType
              });

            case 2:
              _context8.next = 4;
              return _classroom_controller__WEBPACK_IMPORTED_MODULE_6__["default"].getClassroomWithStudents(data.cod, data.teacherId);

            case 4:
              return _context8.abrupt("return", _context8.sent);

            case 5:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }))();
  },
  saveStudentName: function saveStudentName(data) {
    return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee9() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _context9.next = 2;
              return _model__WEBPACK_IMPORTED_MODULE_3__["default"].update({
                id: data.id
              }, {
                name: data.studentName
              });

            case 2:
              _context9.next = 4;
              return _classroom_controller__WEBPACK_IMPORTED_MODULE_6__["default"].getClassroomWithStudents(data.cod, data.teacherId);

            case 4:
              return _context9.abrupt("return", _context9.sent);

            case 5:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    }))();
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Controller);

/***/ }),

/***/ "./src/entities/student/model/index.js":
/*!*********************************************!*\
  !*** ./src/entities/student/model/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schema */ "./src/entities/student/model/schema.js");
/* harmony import */ var _Application_repository_generic_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Application/repository/generic-model */ "./src/application/repository/generic-model.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var Model = _objectSpread(_objectSpread({}, (0,_Application_repository_generic_model__WEBPACK_IMPORTED_MODULE_2__["default"])(_schema__WEBPACK_IMPORTED_MODULE_1__["default"])), {}, {
  isUserInClassroom: function isUserInClassroom(auth0Id, teacherId, cod) {
    return _schema__WEBPACK_IMPORTED_MODULE_1__["default"].findOne({
      where: {
        auth0Id: auth0Id,
        teacherId: teacherId,
        cod: cod
      }
    });
  }
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Model);

/***/ }),

/***/ "./src/entities/student/model/schema.js":
/*!**********************************************!*\
  !*** ./src/entities/student/model/schema.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Application_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Application/database */ "./src/application/database/index.js");
/* harmony import */ var _classroom_student_model_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../classroom-student/model/schema */ "./src/entities/classroom-student/model/schema.js");


var Student = _Application_database__WEBPACK_IMPORTED_MODULE_0__.db.define('student', {
  auth0Id: {
    type: _Application_database__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
    unique: true
  },
  picture: _Application_database__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
  uploadedPicture: {
    type: _Application_database__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
    defaultValue: 'https://pablomonteserin.com/termine/defaultAvatar.png'
  },
  avatarType: {
    type: _Application_database__WEBPACK_IMPORTED_MODULE_0__.DataTypes.SMALLINT,
    defaultValue: 1
  },
  name: {
    type: _Application_database__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
    defaultValue: ''
  },
  email: _Application_database__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING
});

Student.associate = function (_ref) {
  var classroom = _ref.classroom;
  Student.belongsToMany(classroom, {
    through: _classroom_student_model_schema__WEBPACK_IMPORTED_MODULE_1__["default"],
    onDelete: 'cascade'
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Student);

/***/ }),

/***/ "./src/entities/teacher/adapters/http/index.js":
/*!*****************************************************!*\
  !*** ./src/entities/teacher/adapters/http/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../controller */ "./src/entities/teacher/controller/index.js");
/* harmony import */ var _classroom_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../classroom/controller */ "./src/entities/classroom/controller/index.js");
/* harmony import */ var _Middlwares_error_handler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Middlwares/error-handler */ "./src/application/middlewares/error-handler.js");
/* harmony import */ var _Middlwares_restricted_access__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Middlwares/restricted-access */ "./src/application/middlewares/restricted-access.js");





 // Para operaciones con acceso restringido, introduciremos un segundo parámetro que será la variable restrictedAccess


var router = express__WEBPACK_IMPORTED_MODULE_2___default().Router();
router.post("/", (0,_Middlwares_error_handler__WEBPACK_IMPORTED_MODULE_5__.asyncHandler)( /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(req, res) {
    var _req$body, auth0Id, id, teacherId, teacherData;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, auth0Id = _req$body.auth0Id, id = _req$body.id, teacherId = _req$body.teacherId; // Compruebo si algún profe tiene ese teacherId

            _context.next = 3;
            return _controller__WEBPACK_IMPORTED_MODULE_3__["default"].get({
              teacherId: teacherId
            });

          case 3:
            teacherData = _context.sent;

            if (!(teacherData.length === 0)) {
              _context.next = 10;
              break;
            }

            _context.next = 7;
            return _controller__WEBPACK_IMPORTED_MODULE_3__["default"].updateById(id, {
              teacherId: teacherId
            });

          case 7:
            res.send({
              status: 'teacher created'
            });
            _context.next = 11;
            break;

          case 10:
            res.send({
              status: 'Another teacher has this teacherId'
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}()));
router.get("/getTeacherId", (0,_Middlwares_error_handler__WEBPACK_IMPORTED_MODULE_5__.asyncHandler)( /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(req, res) {
    var auth0Id, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            auth0Id = req.query.auth0Id;
            _context2.next = 3;
            return _controller__WEBPACK_IMPORTED_MODULE_3__["default"].get({
              auth0Id: auth0Id
            });

          case 3:
            data = _context2.sent;
            res.send(data);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}()));
router.get("/getLastTeacherCod", (0,_Middlwares_error_handler__WEBPACK_IMPORTED_MODULE_5__.asyncHandler)( /*#__PURE__*/function () {
  var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3(req, res) {
    var teacherId, lastCod;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            teacherId = req.query.teacherId;
            _context3.next = 3;
            return _classroom_controller__WEBPACK_IMPORTED_MODULE_4__["default"].getMostRecentCod(teacherId);

          case 3:
            lastCod = _context3.sent;
            res.send(lastCod);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}()));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (app) {
  return app.use('/teacher', router);
});

/***/ }),

/***/ "./src/entities/teacher/controller/index.js":
/*!**************************************************!*\
  !*** ./src/entities/teacher/controller/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model */ "./src/entities/teacher/model/index.js");

var Controller = {
  get: function get(conditions) {
    return _model__WEBPACK_IMPORTED_MODULE_0__["default"].get(conditions);
  },
  getById: function getById(id) {
    return _model__WEBPACK_IMPORTED_MODULE_0__["default"].getById(id);
  },
  create: function create(data) {
    return _model__WEBPACK_IMPORTED_MODULE_0__["default"].create(data);
  },
  updateById: function updateById(id, data) {
    return _model__WEBPACK_IMPORTED_MODULE_0__["default"].updateById(id, data);
  },
  deleteById: function deleteById(id) {
    return _model__WEBPACK_IMPORTED_MODULE_0__["default"].deleteById(id);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Controller);

/***/ }),

/***/ "./src/entities/teacher/model/index.js":
/*!*********************************************!*\
  !*** ./src/entities/teacher/model/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schema */ "./src/entities/teacher/model/schema.js");
/* harmony import */ var _Application_repository_generic_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Application/repository/generic-model */ "./src/application/repository/generic-model.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var Model = _objectSpread(_objectSpread({}, (0,_Application_repository_generic_model__WEBPACK_IMPORTED_MODULE_2__["default"])(_schema__WEBPACK_IMPORTED_MODULE_1__["default"])), {}, {
  isUserInClassroom: function isUserInClassroom(auth0Id, teacherId, cod, isStudent) {
    return _schema__WEBPACK_IMPORTED_MODULE_1__["default"].findOne({
      where: {
        auth0Id: auth0Id,
        teacherId: teacherId,
        cod: cod
      }
    });
  }
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Model);

/***/ }),

/***/ "./src/entities/teacher/model/schema.js":
/*!**********************************************!*\
  !*** ./src/entities/teacher/model/schema.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Application_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Application/database */ "./src/application/database/index.js");


var _require = __webpack_require__(/*! sequelize */ "sequelize"),
    DataTypes = _require.DataTypes;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Application_database__WEBPACK_IMPORTED_MODULE_0__.db.define('teacher', {
  auth0Id: DataTypes.STRING,
  teacherId: DataTypes.STRING,
  email: DataTypes.STRING
}));

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),

/***/ "@babel/runtime/helpers/slicedToArray":
/*!*******************************************************!*\
  !*** external "@babel/runtime/helpers/slicedToArray" ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/slicedToArray");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "auth0":
/*!************************!*\
  !*** external "auth0" ***!
  \************************/
/***/ ((module) => {

module.exports = require("auth0");

/***/ }),

/***/ "cloudinary":
/*!*****************************!*\
  !*** external "cloudinary" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("cloudinary");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "jwks-rsa":
/*!***************************!*\
  !*** external "jwks-rsa" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("jwks-rsa");

/***/ }),

/***/ "multer":
/*!*************************!*\
  !*** external "multer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("multer");

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("sequelize");

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("socket.io");

/***/ }),

/***/ "swagger-jsdoc":
/*!********************************!*\
  !*** external "swagger-jsdoc" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("swagger-jsdoc");

/***/ }),

/***/ "swagger-ui-express":
/*!*************************************!*\
  !*** external "swagger-ui-express" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("swagger-ui-express");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! http */ "http");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io */ "socket.io");
/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Application_config_sockets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Application/config/sockets */ "./src/application/config/sockets.js");
/* harmony import */ var _application_middlewares__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./application/middlewares */ "./src/application/middlewares/index.js");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./entities */ "./src/entities/index.js");
/* harmony import */ var _application_documentation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./application/documentation */ "./src/application/documentation/index.js");
/* harmony import */ var _application_database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./application/database */ "./src/application/database/index.js");








var app = express__WEBPACK_IMPORTED_MODULE_0___default()();
/*
Heroku utiliza la variable de entorno process.env.port para asignar el puerto donde se va ejecutar el servidor,
por eso la hemos definido en esta plantilla
*/

var port = "5002";
var server = http__WEBPACK_IMPORTED_MODULE_1___default().createServer(app);
var io = socket_io__WEBPACK_IMPORTED_MODULE_2___default()(server, _Application_config_sockets__WEBPACK_IMPORTED_MODULE_3__.config);
(0,_application_documentation__WEBPACK_IMPORTED_MODULE_6__["default"])(app);
(0,_application_middlewares__WEBPACK_IMPORTED_MODULE_4__["default"])(app, io);
(0,_entities__WEBPACK_IMPORTED_MODULE_5__.Routes)(app, (socket_io__WEBPACK_IMPORTED_MODULE_2___default()));
(0,_application_database__WEBPACK_IMPORTED_MODULE_7__["default"])(function () {
  server.listen(port, function () {
    return console.log("Server listening to http://localhost:".concat(port));
  });
});
io.on('connection', function (socket) {
  (0,_entities__WEBPACK_IMPORTED_MODULE_5__.Sockets)(io, socket);
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map
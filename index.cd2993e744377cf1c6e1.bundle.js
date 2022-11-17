"use strict";
(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["index"],{

/***/ 890:
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ 645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".hello {\n  color: red;\n}", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;EACE,UAAU;AACZ","sourcesContent":[".hello {\n  color: red;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 645:
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ 537:
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ 915:
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ 795);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ 569);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ 565);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ 216);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ 589);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ 890);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ 379:
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 569:
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ 216:
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ 565:
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 795:
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ 589:
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ 437:
/*!*****************************!*\
  !*** ./src/apis/timeapi.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimeApi": () => (/* binding */ TimeApi),
/* harmony export */   "TimeParser": () => (/* binding */ TimeParser)
/* harmony export */ });
const TimeApi = async (locationModel) => {
  const apikey = "4ARFZ53KTQ4R";
  const url = `https://api.timezonedb.com/v2.1/get-time-zone?key=${apikey}&format=json&by=position&lat=${locationModel.position.lat}&lng=${locationModel.position.lon}`;
  let response = await fetch(url, { mode: "cors" });
  let json = await response.json();
  return json.formatted;
};
const TimeParser = (timeData) => {
  let year = "";
  let month = "";
  let day = "";

  let hour = "";
  let min = "";
  let sec = "";
  if (timeData) {
    const dateSplit = timeData.split(" ")[0].split("-");
    year = dateSplit[0];
    month = dateSplit[1];
    day = dateSplit[2];

    const timeSplit = timeData.split(" ")[1].split(":");
    hour = timeSplit[0];
    min = timeSplit[1];
    sec = timeSplit[2];
  }
  return { year, month, day, hour, min, sec };
};


/***/ }),

/***/ 256:
/*!*******************************!*\
  !*** ./src/apis/tomtomapi.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TomTomAPI": () => (/* binding */ TomTomAPI),
/* harmony export */   "TomTomJsonParser": () => (/* binding */ TomTomJsonParser)
/* harmony export */ });
const TomTomAPI = (searchQuery) => {
  const API_KEY = "fcHahkaWpps5D8BvVWNrkXwb0ASMm9BT";
  const BASE_URL = "https://api.tomtom.com/search/2/search/";

  const makeUrl = () => {
    let URL = BASE_URL;
    URL += searchQuery.replaceAll(" ", "-");
    URL += ".json";
    URL += `?key=${API_KEY}`;
    return URL;
  };

  async function getData() {
    try {
      let response = await fetch(makeUrl(), { mode: "cors" });
      let json = await response.json();
      return json.results[0];
    } catch (error) {
      console.log("Error from getLocationData: ", error);
    }
  }

  async function getPositionData() {
    try {
      let response = await fetch(makeUrl(), { mode: "cors" });
      let json = await response.json();
      return json.results[0].position;
    } catch (error) {
      console.log("Error from getLocationData: ", error);
    }
  }

  async function getJsonData() {
    try {
      let response = await fetch(makeUrl(), { mode: "cors" });
      let json = await response.json();
      return json;
    } catch (error) {
      console.log("Error from getLocationData: ", error);
    }
  }

  return { getData, getPositionData, getJsonData };
};

const TomTomJsonParser = (jsonObject) => {
  const municipality = jsonObject.address.municipality;
  const country = jsonObject.address.countrySubdivisionName;
  const position = jsonObject.position;
  return { municipality, country, position };
};

/*
TO USE:

  TomTomAPI(searchQuery)
    .getJsonData()
    .then((r) => {
      console.log(r);
      console.log(JsonToLocationObject(r));
      let locationModel = LocationModel(JsonToLocationObject(r));
      console.log("location model: ", locationModel);
      WeatherAPI(locationModel)
        .getWeatherData()
        .then((r) => {
          console.log(WeatherModel(r));
        });
    });
    */


/***/ }),

/***/ 962:
/*!********************************!*\
  !*** ./src/apis/weatherapi.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeatherAPI": () => (/* binding */ WeatherAPI)
/* harmony export */ });
const WeatherAPI = (locationModel) => {
  const API_KEY = "f3c32091bf8f9865219ac12748616ead";
  let BASE_URL = " https://api.openweathermap.org/data/2.5/weather?";

  /*
  TO USE:
  Pass in WeatherAPI a LocationModel object 
  
  let locationData = await GeocodingAPI(locationInformation).getLocationData();
  let locationModel = LocationModel(locationData);
  let weatherData = await WeatherAPI(locationModel).getWeatherData();
  let weatherModel = WeatherModel(weatherData);

  */

  const makeUrl = () => {
    // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
    let URL = BASE_URL;
    URL += `lat=${locationModel.position.lat}&lon=${locationModel.position.lon}&appid=${API_KEY}`;
    //console.log(URL);
    return URL;
  };
  // Returns an object with the location data.
  async function getWeatherData() {
    try {
      let response = await fetch(makeUrl(), { mode: "cors" });
      let json = await response.json();
      return json;
    } catch (error) {
      console.log("Error from getLocationData: ", error);
    }
  }
  return { getWeatherData };
};


/***/ }),

/***/ 496:
/*!**************************************!*\
  !*** ./src/dom-models/dommanager.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DomEventManager": () => (/* binding */ DomEventManager),
/* harmony export */   "DomManager": () => (/* binding */ DomManager)
/* harmony export */ });
/* harmony import */ var _apis_tomtomapi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../apis/tomtomapi */ 256);
/* harmony import */ var _apis_weatherapi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../apis/weatherapi */ 962);
/* harmony import */ var _models_weathermodel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/weathermodel */ 179);
/* harmony import */ var _searchform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./searchform */ 953);
/* harmony import */ var _locationinformationelement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./locationinformationelement */ 878);
/* harmony import */ var _weatherinformationelement__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./weatherinformationelement */ 850);
/* harmony import */ var _apis_timeapi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../apis/timeapi */ 437);
/* harmony import */ var _timeinformationelement__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./timeinformationelement */ 997);









const DomManager = ((weatherModel, locationModel, timeModel) => {
  const initialLoad = () => {
    const rootDiv = document.createElement("div");
    const formDiv = document.createElement("div");
    formDiv.id = "form-container";
    rootDiv.id = "root";
    formDiv.appendChild((0,_searchform__WEBPACK_IMPORTED_MODULE_3__.SearchForm)());
    rootDiv.appendChild(formDiv);
    document.body.appendChild(rootDiv);
    DomEventManager();
  };

  const resetWeatherInformation = () => {
    const weatherInfoDiv = document.querySelector("#weather-info-container");
    const rootDiv = document.querySelector("#root");
    rootDiv.removeChild(weatherInfoDiv);
  };
  const resetLocationInformation = () => {
    const root = document.querySelector("#root");
    const locationInfoDiv = document.querySelector("#location-info-container");
    root.removeChild(locationInfoDiv);
  };
  const resetTimeInformation = () => {
    const root = document.querySelector("#root");
    const timeInfoDiv = document.querySelector("#time-info-container");
    root.removeChild(timeInfoDiv);
  };

  const updateInformation = (weatherModel, locationModel, timeModel) => {
    const root = document.querySelector("#root");
    if (document.querySelector("#weather-info-container")) {
      resetWeatherInformation();
      resetLocationInformation();
      resetTimeInformation();
    }
    root.appendChild((0,_locationinformationelement__WEBPACK_IMPORTED_MODULE_4__.LocationInformationElement)(locationModel));
    root.appendChild((0,_timeinformationelement__WEBPACK_IMPORTED_MODULE_7__.TimeInformationElement)(timeModel));
    root.appendChild((0,_weatherinformationelement__WEBPACK_IMPORTED_MODULE_5__.WeatherInformationElement)(weatherModel));
    // pass in the timeModel to update the background or pictures
  };

  return { initialLoad, updateInformation };
})();

const DomEventManager = () => {
  const HandleFormSubmit = async (e) => {
    e.preventDefault();
    let input = document.querySelector("input");
    let value = document.querySelector("input").value;

    let tomtomdata = await (0,_apis_tomtomapi__WEBPACK_IMPORTED_MODULE_0__.TomTomAPI)(value).getData();
    let locationModel = (0,_apis_tomtomapi__WEBPACK_IMPORTED_MODULE_0__.TomTomJsonParser)(tomtomdata);
    let weatherData = await (0,_apis_weatherapi__WEBPACK_IMPORTED_MODULE_1__.WeatherAPI)(locationModel).getWeatherData();
    let timeData = await (0,_apis_timeapi__WEBPACK_IMPORTED_MODULE_6__.TimeApi)(locationModel);
    let timeModel = (0,_apis_timeapi__WEBPACK_IMPORTED_MODULE_6__.TimeParser)(timeData);
    let weatherModel = (0,_models_weathermodel__WEBPACK_IMPORTED_MODULE_2__.WeatherModel)(weatherData);

    DomManager.updateInformation(weatherModel, locationModel, timeModel);
    input.value = "";
  };

  document.querySelector("form").onsubmit = HandleFormSubmit;
};


/***/ }),

/***/ 878:
/*!******************************************************!*\
  !*** ./src/dom-models/locationinformationelement.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationInformationElement": () => (/* binding */ LocationInformationElement)
/* harmony export */ });
const LocationInformationElement = (locationModel) => {
  const div = document.createElement("div");
  div.id = "location-info-container";

  const municipalityDiv = document.createElement("div");
  const countryDiv = document.createElement("div");
  municipalityDiv.textContent = locationModel.municipality;
  countryDiv.textContent = locationModel.country;

  div.appendChild(municipalityDiv);
  div.appendChild(countryDiv);
  return div;
};


/***/ }),

/***/ 953:
/*!**************************************!*\
  !*** ./src/dom-models/searchform.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchForm": () => (/* binding */ SearchForm)
/* harmony export */ });
const SearchForm = () => {
  const SearchFormRow = () => {
    const div = document.createElement("div");
    let label = document.createElement("label");
    let input = document.createElement("input");
    label.textContent = "Search";
    div.appendChild(label);
    div.appendChild(input);
    return div;
  };
  const FormSubmitButton = () => {
    const button = document.createElement("button");
    button.type = "submit";
    button.textContent = "Search";
    return button;
  };
  let form = document.createElement("form");
  form.appendChild(SearchFormRow());
  form.appendChild(FormSubmitButton());
  return form;
};


/***/ }),

/***/ 997:
/*!**************************************************!*\
  !*** ./src/dom-models/timeinformationelement.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimeInformationElement": () => (/* binding */ TimeInformationElement)
/* harmony export */ });
const TimeInformationElement = (timeModel) => {
  const timeDiv = document.createElement("div");
  timeDiv.id = "time-info-container";

  const dateDiv = document.createElement("div");
  dateDiv.textContent = `${timeModel.hour}:${timeModel.min}:${timeModel.sec}`;

  timeDiv.appendChild(dateDiv);
  return timeDiv;
};


/***/ }),

/***/ 850:
/*!*****************************************************!*\
  !*** ./src/dom-models/weatherinformationelement.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeatherInformationElement": () => (/* binding */ WeatherInformationElement)
/* harmony export */ });
const WeatherInformationElement = (weatherModel) => {
  const InfoPair = (label, value) => {
    const div = document.createElement("div");
    const labelP = document.createElement("p");
    const valueP = document.createElement("p");
    labelP.textContent = label;
    valueP.textContent = `${value}`;
    div.appendChild(labelP);
    div.appendChild(valueP);
    return div;
  };
  const div = document.createElement("div");
  div.appendChild(InfoPair("Feels Like", weatherModel.feelsLike));
  div.appendChild(InfoPair("Humidity", weatherModel.humidity));
  div.appendChild(InfoPair("Pressure", weatherModel.pressure));
  div.appendChild(InfoPair("Current Temperature", weatherModel.curTemp));
  div.appendChild(InfoPair("Minimum Temperature", weatherModel.minTemp));
  div.appendChild(InfoPair("Maximum Temperature", weatherModel.maxTemp));
  div.appendChild(InfoPair("Wind Speed", weatherModel.windSpeed));
  div.appendChild(InfoPair("Description", weatherModel.description));
  div.id = "weather-info-container";
  return div;
};


/***/ }),

/***/ 138:
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ 915);
/* harmony import */ var _dom_models_dommanager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-models/dommanager */ 496);
/* harmony import */ var _apis_tomtomapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apis/tomtomapi */ 256);
/* harmony import */ var _apis_timeapi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./apis/timeapi */ 437);








_dom_models_dommanager__WEBPACK_IMPORTED_MODULE_1__.DomManager.initialLoad();

async function timeTest() {
  let apikey = "4ARFZ53KTQ4R";
  let tomtomdata = await (0,_apis_tomtomapi__WEBPACK_IMPORTED_MODULE_2__.TomTomAPI)("chicago").getData();
  let locationModel = (0,_apis_tomtomapi__WEBPACK_IMPORTED_MODULE_2__.TomTomJsonParser)(tomtomdata);
  let timeData = await (0,_apis_timeapi__WEBPACK_IMPORTED_MODULE_3__.TimeApi)(locationModel);
  let timeModel = (0,_apis_timeapi__WEBPACK_IMPORTED_MODULE_3__.TimeParser)(timeData);
  console.log(timeModel);
  console.log(
    `current date: ${timeModel.year}-${timeModel.month}-${timeModel.day}`
  );
}

timeTest();


/***/ }),

/***/ 179:
/*!************************************!*\
  !*** ./src/models/weathermodel.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeatherModel": () => (/* binding */ WeatherModel)
/* harmony export */ });
const WeatherModel = (weatherJson, units = "f") => {
  const kelvinToFarenheight = (temp) => {
    return ((temp - 273.15) * 9) / 5 + 32;
  };

  const kelvinToCelcius = (temp) => {};

  console.log("units: ", units);

  let feelsLike = weatherJson ? weatherJson.main.feels_like : "";
  let humidity = weatherJson ? weatherJson.main.humidity : "";
  let pressure = weatherJson ? weatherJson.main.pressure : "";
  let curTemp = weatherJson ? weatherJson.main.temp : "";
  let minTemp = weatherJson ? weatherJson.main.temp_min : "";
  let maxTemp = weatherJson ? weatherJson.main.temp_max : "";
  let windSpeed = weatherJson ? weatherJson.wind.speed : "";
  let description = weatherJson ? weatherJson.weather[0].description : "";

  if (curTemp) {
    console.log("hello from if");
    if (units === "f") {
      feelsLike = kelvinToFarenheight(Number(feelsLike)).toFixed(2);
      curTemp = kelvinToFarenheight(Number(curTemp)).toFixed(2);
      minTemp = kelvinToFarenheight(Number(minTemp)).toFixed(2);
      maxTemp = kelvinToFarenheight(Number(maxTemp)).toFixed(2);
    }
    if (units === "c") {
    }
  }

  return {
    feelsLike, // this is in kelvin
    humidity,
    pressure,
    curTemp,
    minTemp,
    maxTemp,
    windSpeed,
    description,
    units,
  };
};


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(138));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVU7QUFDNUI7QUFDQTtBQUNBLHFCQUFxQixlQUFlLEdBQUcsZ0JBQWdCLEdBQUcsY0FBYztBQUN4RTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUN0Qk87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz9mZjk0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXBpcy90aW1lYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2FwaXMvdG9tdG9tYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2FwaXMvd2VhdGhlcmFwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9kb20tbW9kZWxzL2RvbW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZG9tLW1vZGVscy9sb2NhdGlvbmluZm9ybWF0aW9uZWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9kb20tbW9kZWxzL3NlYXJjaGZvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZG9tLW1vZGVscy90aW1laW5mb3JtYXRpb25lbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2RvbS1tb2RlbHMvd2VhdGhlcmluZm9ybWF0aW9uZWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2RlbHMvd2VhdGhlcm1vZGVsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmhlbGxvIHtcXG4gIGNvbG9yOiByZWQ7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsVUFBVTtBQUNaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5oZWxsbyB7XFxuICBjb2xvcjogcmVkO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBjb25zdCBUaW1lQXBpID0gYXN5bmMgKGxvY2F0aW9uTW9kZWwpID0+IHtcbiAgY29uc3QgYXBpa2V5ID0gXCI0QVJGWjUzS1RRNFJcIjtcbiAgY29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLnRpbWV6b25lZGIuY29tL3YyLjEvZ2V0LXRpbWUtem9uZT9rZXk9JHthcGlrZXl9JmZvcm1hdD1qc29uJmJ5PXBvc2l0aW9uJmxhdD0ke2xvY2F0aW9uTW9kZWwucG9zaXRpb24ubGF0fSZsbmc9JHtsb2NhdGlvbk1vZGVsLnBvc2l0aW9uLmxvbn1gO1xuICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHsgbW9kZTogXCJjb3JzXCIgfSk7XG4gIGxldCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4ganNvbi5mb3JtYXR0ZWQ7XG59O1xuZXhwb3J0IGNvbnN0IFRpbWVQYXJzZXIgPSAodGltZURhdGEpID0+IHtcbiAgbGV0IHllYXIgPSBcIlwiO1xuICBsZXQgbW9udGggPSBcIlwiO1xuICBsZXQgZGF5ID0gXCJcIjtcblxuICBsZXQgaG91ciA9IFwiXCI7XG4gIGxldCBtaW4gPSBcIlwiO1xuICBsZXQgc2VjID0gXCJcIjtcbiAgaWYgKHRpbWVEYXRhKSB7XG4gICAgY29uc3QgZGF0ZVNwbGl0ID0gdGltZURhdGEuc3BsaXQoXCIgXCIpWzBdLnNwbGl0KFwiLVwiKTtcbiAgICB5ZWFyID0gZGF0ZVNwbGl0WzBdO1xuICAgIG1vbnRoID0gZGF0ZVNwbGl0WzFdO1xuICAgIGRheSA9IGRhdGVTcGxpdFsyXTtcblxuICAgIGNvbnN0IHRpbWVTcGxpdCA9IHRpbWVEYXRhLnNwbGl0KFwiIFwiKVsxXS5zcGxpdChcIjpcIik7XG4gICAgaG91ciA9IHRpbWVTcGxpdFswXTtcbiAgICBtaW4gPSB0aW1lU3BsaXRbMV07XG4gICAgc2VjID0gdGltZVNwbGl0WzJdO1xuICB9XG4gIHJldHVybiB7IHllYXIsIG1vbnRoLCBkYXksIGhvdXIsIG1pbiwgc2VjIH07XG59O1xuIiwiZXhwb3J0IGNvbnN0IFRvbVRvbUFQSSA9IChzZWFyY2hRdWVyeSkgPT4ge1xuICBjb25zdCBBUElfS0VZID0gXCJmY0hhaGthV3BwczVEOEJ2VldOcmtYd2IwQVNNbTlCVFwiO1xuICBjb25zdCBCQVNFX1VSTCA9IFwiaHR0cHM6Ly9hcGkudG9tdG9tLmNvbS9zZWFyY2gvMi9zZWFyY2gvXCI7XG5cbiAgY29uc3QgbWFrZVVybCA9ICgpID0+IHtcbiAgICBsZXQgVVJMID0gQkFTRV9VUkw7XG4gICAgVVJMICs9IHNlYXJjaFF1ZXJ5LnJlcGxhY2VBbGwoXCIgXCIsIFwiLVwiKTtcbiAgICBVUkwgKz0gXCIuanNvblwiO1xuICAgIFVSTCArPSBgP2tleT0ke0FQSV9LRVl9YDtcbiAgICByZXR1cm4gVVJMO1xuICB9O1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGdldERhdGEoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKG1ha2VVcmwoKSwgeyBtb2RlOiBcImNvcnNcIiB9KTtcbiAgICAgIGxldCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgcmV0dXJuIGpzb24ucmVzdWx0c1swXTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coXCJFcnJvciBmcm9tIGdldExvY2F0aW9uRGF0YTogXCIsIGVycm9yKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBnZXRQb3NpdGlvbkRhdGEoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKG1ha2VVcmwoKSwgeyBtb2RlOiBcImNvcnNcIiB9KTtcbiAgICAgIGxldCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgcmV0dXJuIGpzb24ucmVzdWx0c1swXS5wb3NpdGlvbjtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coXCJFcnJvciBmcm9tIGdldExvY2F0aW9uRGF0YTogXCIsIGVycm9yKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBnZXRKc29uRGF0YSgpIHtcbiAgICB0cnkge1xuICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gobWFrZVVybCgpLCB7IG1vZGU6IFwiY29yc1wiIH0pO1xuICAgICAgbGV0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICByZXR1cm4ganNvbjtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coXCJFcnJvciBmcm9tIGdldExvY2F0aW9uRGF0YTogXCIsIGVycm9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4geyBnZXREYXRhLCBnZXRQb3NpdGlvbkRhdGEsIGdldEpzb25EYXRhIH07XG59O1xuXG5leHBvcnQgY29uc3QgVG9tVG9tSnNvblBhcnNlciA9IChqc29uT2JqZWN0KSA9PiB7XG4gIGNvbnN0IG11bmljaXBhbGl0eSA9IGpzb25PYmplY3QuYWRkcmVzcy5tdW5pY2lwYWxpdHk7XG4gIGNvbnN0IGNvdW50cnkgPSBqc29uT2JqZWN0LmFkZHJlc3MuY291bnRyeVN1YmRpdmlzaW9uTmFtZTtcbiAgY29uc3QgcG9zaXRpb24gPSBqc29uT2JqZWN0LnBvc2l0aW9uO1xuICByZXR1cm4geyBtdW5pY2lwYWxpdHksIGNvdW50cnksIHBvc2l0aW9uIH07XG59O1xuXG4vKlxuVE8gVVNFOlxuXG4gIFRvbVRvbUFQSShzZWFyY2hRdWVyeSlcbiAgICAuZ2V0SnNvbkRhdGEoKVxuICAgIC50aGVuKChyKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhyKTtcbiAgICAgIGNvbnNvbGUubG9nKEpzb25Ub0xvY2F0aW9uT2JqZWN0KHIpKTtcbiAgICAgIGxldCBsb2NhdGlvbk1vZGVsID0gTG9jYXRpb25Nb2RlbChKc29uVG9Mb2NhdGlvbk9iamVjdChyKSk7XG4gICAgICBjb25zb2xlLmxvZyhcImxvY2F0aW9uIG1vZGVsOiBcIiwgbG9jYXRpb25Nb2RlbCk7XG4gICAgICBXZWF0aGVyQVBJKGxvY2F0aW9uTW9kZWwpXG4gICAgICAgIC5nZXRXZWF0aGVyRGF0YSgpXG4gICAgICAgIC50aGVuKChyKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coV2VhdGhlck1vZGVsKHIpKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgKi9cbiIsImV4cG9ydCBjb25zdCBXZWF0aGVyQVBJID0gKGxvY2F0aW9uTW9kZWwpID0+IHtcbiAgY29uc3QgQVBJX0tFWSA9IFwiZjNjMzIwOTFiZjhmOTg2NTIxOWFjMTI3NDg2MTZlYWRcIjtcbiAgbGV0IEJBU0VfVVJMID0gXCIgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/XCI7XG5cbiAgLypcbiAgVE8gVVNFOlxuICBQYXNzIGluIFdlYXRoZXJBUEkgYSBMb2NhdGlvbk1vZGVsIG9iamVjdCBcbiAgXG4gIGxldCBsb2NhdGlvbkRhdGEgPSBhd2FpdCBHZW9jb2RpbmdBUEkobG9jYXRpb25JbmZvcm1hdGlvbikuZ2V0TG9jYXRpb25EYXRhKCk7XG4gIGxldCBsb2NhdGlvbk1vZGVsID0gTG9jYXRpb25Nb2RlbChsb2NhdGlvbkRhdGEpO1xuICBsZXQgd2VhdGhlckRhdGEgPSBhd2FpdCBXZWF0aGVyQVBJKGxvY2F0aW9uTW9kZWwpLmdldFdlYXRoZXJEYXRhKCk7XG4gIGxldCB3ZWF0aGVyTW9kZWwgPSBXZWF0aGVyTW9kZWwod2VhdGhlckRhdGEpO1xuXG4gICovXG5cbiAgY29uc3QgbWFrZVVybCA9ICgpID0+IHtcbiAgICAvLyBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9sYXQ9e2xhdH0mbG9uPXtsb259JmFwcGlkPXtBUEkga2V5fVxuICAgIGxldCBVUkwgPSBCQVNFX1VSTDtcbiAgICBVUkwgKz0gYGxhdD0ke2xvY2F0aW9uTW9kZWwucG9zaXRpb24ubGF0fSZsb249JHtsb2NhdGlvbk1vZGVsLnBvc2l0aW9uLmxvbn0mYXBwaWQ9JHtBUElfS0VZfWA7XG4gICAgLy9jb25zb2xlLmxvZyhVUkwpO1xuICAgIHJldHVybiBVUkw7XG4gIH07XG4gIC8vIFJldHVybnMgYW4gb2JqZWN0IHdpdGggdGhlIGxvY2F0aW9uIGRhdGEuXG4gIGFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhKCkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChtYWtlVXJsKCksIHsgbW9kZTogXCJjb3JzXCIgfSk7XG4gICAgICBsZXQganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIHJldHVybiBqc29uO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGZyb20gZ2V0TG9jYXRpb25EYXRhOiBcIiwgZXJyb3IpO1xuICAgIH1cbiAgfVxuICByZXR1cm4geyBnZXRXZWF0aGVyRGF0YSB9O1xufTtcbiIsImltcG9ydCB7IFRvbVRvbUFQSSwgVG9tVG9tSnNvblBhcnNlciB9IGZyb20gXCIuLi9hcGlzL3RvbXRvbWFwaVwiO1xuaW1wb3J0IHsgV2VhdGhlckFQSSB9IGZyb20gXCIuLi9hcGlzL3dlYXRoZXJhcGlcIjtcbmltcG9ydCB7IFdlYXRoZXJNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvd2VhdGhlcm1vZGVsXCI7XG5pbXBvcnQgeyBTZWFyY2hGb3JtIH0gZnJvbSBcIi4vc2VhcmNoZm9ybVwiO1xuaW1wb3J0IHsgTG9jYXRpb25JbmZvcm1hdGlvbkVsZW1lbnQgfSBmcm9tIFwiLi9sb2NhdGlvbmluZm9ybWF0aW9uZWxlbWVudFwiO1xuaW1wb3J0IHsgV2VhdGhlckluZm9ybWF0aW9uRWxlbWVudCB9IGZyb20gXCIuL3dlYXRoZXJpbmZvcm1hdGlvbmVsZW1lbnRcIjtcbmltcG9ydCB7IFRpbWVBcGksIFRpbWVQYXJzZXIgfSBmcm9tIFwiLi4vYXBpcy90aW1lYXBpXCI7XG5pbXBvcnQgeyBUaW1lSW5mb3JtYXRpb25FbGVtZW50IH0gZnJvbSBcIi4vdGltZWluZm9ybWF0aW9uZWxlbWVudFwiO1xuXG5leHBvcnQgY29uc3QgRG9tTWFuYWdlciA9ICgod2VhdGhlck1vZGVsLCBsb2NhdGlvbk1vZGVsLCB0aW1lTW9kZWwpID0+IHtcbiAgY29uc3QgaW5pdGlhbExvYWQgPSAoKSA9PiB7XG4gICAgY29uc3Qgcm9vdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgZm9ybURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9ybURpdi5pZCA9IFwiZm9ybS1jb250YWluZXJcIjtcbiAgICByb290RGl2LmlkID0gXCJyb290XCI7XG4gICAgZm9ybURpdi5hcHBlbmRDaGlsZChTZWFyY2hGb3JtKCkpO1xuICAgIHJvb3REaXYuYXBwZW5kQ2hpbGQoZm9ybURpdik7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyb290RGl2KTtcbiAgICBEb21FdmVudE1hbmFnZXIoKTtcbiAgfTtcblxuICBjb25zdCByZXNldFdlYXRoZXJJbmZvcm1hdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCB3ZWF0aGVySW5mb0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd2VhdGhlci1pbmZvLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCByb290RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyb290XCIpO1xuICAgIHJvb3REaXYucmVtb3ZlQ2hpbGQod2VhdGhlckluZm9EaXYpO1xuICB9O1xuICBjb25zdCByZXNldExvY2F0aW9uSW5mb3JtYXRpb24gPSAoKSA9PiB7XG4gICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcm9vdFwiKTtcbiAgICBjb25zdCBsb2NhdGlvbkluZm9EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xvY2F0aW9uLWluZm8tY29udGFpbmVyXCIpO1xuICAgIHJvb3QucmVtb3ZlQ2hpbGQobG9jYXRpb25JbmZvRGl2KTtcbiAgfTtcbiAgY29uc3QgcmVzZXRUaW1lSW5mb3JtYXRpb24gPSAoKSA9PiB7XG4gICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcm9vdFwiKTtcbiAgICBjb25zdCB0aW1lSW5mb0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGltZS1pbmZvLWNvbnRhaW5lclwiKTtcbiAgICByb290LnJlbW92ZUNoaWxkKHRpbWVJbmZvRGl2KTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVJbmZvcm1hdGlvbiA9ICh3ZWF0aGVyTW9kZWwsIGxvY2F0aW9uTW9kZWwsIHRpbWVNb2RlbCkgPT4ge1xuICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jvb3RcIik7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd2VhdGhlci1pbmZvLWNvbnRhaW5lclwiKSkge1xuICAgICAgcmVzZXRXZWF0aGVySW5mb3JtYXRpb24oKTtcbiAgICAgIHJlc2V0TG9jYXRpb25JbmZvcm1hdGlvbigpO1xuICAgICAgcmVzZXRUaW1lSW5mb3JtYXRpb24oKTtcbiAgICB9XG4gICAgcm9vdC5hcHBlbmRDaGlsZChMb2NhdGlvbkluZm9ybWF0aW9uRWxlbWVudChsb2NhdGlvbk1vZGVsKSk7XG4gICAgcm9vdC5hcHBlbmRDaGlsZChUaW1lSW5mb3JtYXRpb25FbGVtZW50KHRpbWVNb2RlbCkpO1xuICAgIHJvb3QuYXBwZW5kQ2hpbGQoV2VhdGhlckluZm9ybWF0aW9uRWxlbWVudCh3ZWF0aGVyTW9kZWwpKTtcbiAgICAvLyBwYXNzIGluIHRoZSB0aW1lTW9kZWwgdG8gdXBkYXRlIHRoZSBiYWNrZ3JvdW5kIG9yIHBpY3R1cmVzXG4gIH07XG5cbiAgcmV0dXJuIHsgaW5pdGlhbExvYWQsIHVwZGF0ZUluZm9ybWF0aW9uIH07XG59KSgpO1xuXG5leHBvcnQgY29uc3QgRG9tRXZlbnRNYW5hZ2VyID0gKCkgPT4ge1xuICBjb25zdCBIYW5kbGVGb3JtU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xuICAgIGxldCB2YWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKS52YWx1ZTtcblxuICAgIGxldCB0b210b21kYXRhID0gYXdhaXQgVG9tVG9tQVBJKHZhbHVlKS5nZXREYXRhKCk7XG4gICAgbGV0IGxvY2F0aW9uTW9kZWwgPSBUb21Ub21Kc29uUGFyc2VyKHRvbXRvbWRhdGEpO1xuICAgIGxldCB3ZWF0aGVyRGF0YSA9IGF3YWl0IFdlYXRoZXJBUEkobG9jYXRpb25Nb2RlbCkuZ2V0V2VhdGhlckRhdGEoKTtcbiAgICBsZXQgdGltZURhdGEgPSBhd2FpdCBUaW1lQXBpKGxvY2F0aW9uTW9kZWwpO1xuICAgIGxldCB0aW1lTW9kZWwgPSBUaW1lUGFyc2VyKHRpbWVEYXRhKTtcbiAgICBsZXQgd2VhdGhlck1vZGVsID0gV2VhdGhlck1vZGVsKHdlYXRoZXJEYXRhKTtcblxuICAgIERvbU1hbmFnZXIudXBkYXRlSW5mb3JtYXRpb24od2VhdGhlck1vZGVsLCBsb2NhdGlvbk1vZGVsLCB0aW1lTW9kZWwpO1xuICAgIGlucHV0LnZhbHVlID0gXCJcIjtcbiAgfTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKS5vbnN1Ym1pdCA9IEhhbmRsZUZvcm1TdWJtaXQ7XG59O1xuIiwiZXhwb3J0IGNvbnN0IExvY2F0aW9uSW5mb3JtYXRpb25FbGVtZW50ID0gKGxvY2F0aW9uTW9kZWwpID0+IHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2LmlkID0gXCJsb2NhdGlvbi1pbmZvLWNvbnRhaW5lclwiO1xuXG4gIGNvbnN0IG11bmljaXBhbGl0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNvdW50cnlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtdW5pY2lwYWxpdHlEaXYudGV4dENvbnRlbnQgPSBsb2NhdGlvbk1vZGVsLm11bmljaXBhbGl0eTtcbiAgY291bnRyeURpdi50ZXh0Q29udGVudCA9IGxvY2F0aW9uTW9kZWwuY291bnRyeTtcblxuICBkaXYuYXBwZW5kQ2hpbGQobXVuaWNpcGFsaXR5RGl2KTtcbiAgZGl2LmFwcGVuZENoaWxkKGNvdW50cnlEaXYpO1xuICByZXR1cm4gZGl2O1xufTtcbiIsImV4cG9ydCBjb25zdCBTZWFyY2hGb3JtID0gKCkgPT4ge1xuICBjb25zdCBTZWFyY2hGb3JtUm93ID0gKCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IFwiU2VhcmNoXCI7XG4gICAgZGl2LmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIHJldHVybiBkaXY7XG4gIH07XG4gIGNvbnN0IEZvcm1TdWJtaXRCdXR0b24gPSAoKSA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXR0b24udHlwZSA9IFwic3VibWl0XCI7XG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJTZWFyY2hcIjtcbiAgICByZXR1cm4gYnV0dG9uO1xuICB9O1xuICBsZXQgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBmb3JtLmFwcGVuZENoaWxkKFNlYXJjaEZvcm1Sb3coKSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoRm9ybVN1Ym1pdEJ1dHRvbigpKTtcbiAgcmV0dXJuIGZvcm07XG59O1xuIiwiZXhwb3J0IGNvbnN0IFRpbWVJbmZvcm1hdGlvbkVsZW1lbnQgPSAodGltZU1vZGVsKSA9PiB7XG4gIGNvbnN0IHRpbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aW1lRGl2LmlkID0gXCJ0aW1lLWluZm8tY29udGFpbmVyXCI7XG5cbiAgY29uc3QgZGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRhdGVEaXYudGV4dENvbnRlbnQgPSBgJHt0aW1lTW9kZWwuaG91cn06JHt0aW1lTW9kZWwubWlufToke3RpbWVNb2RlbC5zZWN9YDtcblxuICB0aW1lRGl2LmFwcGVuZENoaWxkKGRhdGVEaXYpO1xuICByZXR1cm4gdGltZURpdjtcbn07XG4iLCJleHBvcnQgY29uc3QgV2VhdGhlckluZm9ybWF0aW9uRWxlbWVudCA9ICh3ZWF0aGVyTW9kZWwpID0+IHtcbiAgY29uc3QgSW5mb1BhaXIgPSAobGFiZWwsIHZhbHVlKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBsYWJlbFAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb25zdCB2YWx1ZVAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBsYWJlbFAudGV4dENvbnRlbnQgPSBsYWJlbDtcbiAgICB2YWx1ZVAudGV4dENvbnRlbnQgPSBgJHt2YWx1ZX1gO1xuICAgIGRpdi5hcHBlbmRDaGlsZChsYWJlbFApO1xuICAgIGRpdi5hcHBlbmRDaGlsZCh2YWx1ZVApO1xuICAgIHJldHVybiBkaXY7XG4gIH07XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdi5hcHBlbmRDaGlsZChJbmZvUGFpcihcIkZlZWxzIExpa2VcIiwgd2VhdGhlck1vZGVsLmZlZWxzTGlrZSkpO1xuICBkaXYuYXBwZW5kQ2hpbGQoSW5mb1BhaXIoXCJIdW1pZGl0eVwiLCB3ZWF0aGVyTW9kZWwuaHVtaWRpdHkpKTtcbiAgZGl2LmFwcGVuZENoaWxkKEluZm9QYWlyKFwiUHJlc3N1cmVcIiwgd2VhdGhlck1vZGVsLnByZXNzdXJlKSk7XG4gIGRpdi5hcHBlbmRDaGlsZChJbmZvUGFpcihcIkN1cnJlbnQgVGVtcGVyYXR1cmVcIiwgd2VhdGhlck1vZGVsLmN1clRlbXApKTtcbiAgZGl2LmFwcGVuZENoaWxkKEluZm9QYWlyKFwiTWluaW11bSBUZW1wZXJhdHVyZVwiLCB3ZWF0aGVyTW9kZWwubWluVGVtcCkpO1xuICBkaXYuYXBwZW5kQ2hpbGQoSW5mb1BhaXIoXCJNYXhpbXVtIFRlbXBlcmF0dXJlXCIsIHdlYXRoZXJNb2RlbC5tYXhUZW1wKSk7XG4gIGRpdi5hcHBlbmRDaGlsZChJbmZvUGFpcihcIldpbmQgU3BlZWRcIiwgd2VhdGhlck1vZGVsLndpbmRTcGVlZCkpO1xuICBkaXYuYXBwZW5kQ2hpbGQoSW5mb1BhaXIoXCJEZXNjcmlwdGlvblwiLCB3ZWF0aGVyTW9kZWwuZGVzY3JpcHRpb24pKTtcbiAgZGl2LmlkID0gXCJ3ZWF0aGVyLWluZm8tY29udGFpbmVyXCI7XG4gIHJldHVybiBkaXY7XG59O1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMvc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBEb21NYW5hZ2VyIH0gZnJvbSBcIi4vZG9tLW1vZGVscy9kb21tYW5hZ2VyXCI7XG5cbmltcG9ydCB7IFRvbVRvbUFQSSB9IGZyb20gXCIuL2FwaXMvdG9tdG9tYXBpXCI7XG5pbXBvcnQgeyBUb21Ub21Kc29uUGFyc2VyIH0gZnJvbSBcIi4vYXBpcy90b210b21hcGlcIjtcblxuaW1wb3J0IHsgVGltZUFwaSwgVGltZVBhcnNlciB9IGZyb20gXCIuL2FwaXMvdGltZWFwaVwiO1xuXG5Eb21NYW5hZ2VyLmluaXRpYWxMb2FkKCk7XG5cbmFzeW5jIGZ1bmN0aW9uIHRpbWVUZXN0KCkge1xuICBsZXQgYXBpa2V5ID0gXCI0QVJGWjUzS1RRNFJcIjtcbiAgbGV0IHRvbXRvbWRhdGEgPSBhd2FpdCBUb21Ub21BUEkoXCJjaGljYWdvXCIpLmdldERhdGEoKTtcbiAgbGV0IGxvY2F0aW9uTW9kZWwgPSBUb21Ub21Kc29uUGFyc2VyKHRvbXRvbWRhdGEpO1xuICBsZXQgdGltZURhdGEgPSBhd2FpdCBUaW1lQXBpKGxvY2F0aW9uTW9kZWwpO1xuICBsZXQgdGltZU1vZGVsID0gVGltZVBhcnNlcih0aW1lRGF0YSk7XG4gIGNvbnNvbGUubG9nKHRpbWVNb2RlbCk7XG4gIGNvbnNvbGUubG9nKFxuICAgIGBjdXJyZW50IGRhdGU6ICR7dGltZU1vZGVsLnllYXJ9LSR7dGltZU1vZGVsLm1vbnRofS0ke3RpbWVNb2RlbC5kYXl9YFxuICApO1xufVxuXG50aW1lVGVzdCgpO1xuIiwiZXhwb3J0IGNvbnN0IFdlYXRoZXJNb2RlbCA9ICh3ZWF0aGVySnNvbiwgdW5pdHMgPSBcImZcIikgPT4ge1xuICBjb25zdCBrZWx2aW5Ub0ZhcmVuaGVpZ2h0ID0gKHRlbXApID0+IHtcbiAgICByZXR1cm4gKCh0ZW1wIC0gMjczLjE1KSAqIDkpIC8gNSArIDMyO1xuICB9O1xuXG4gIGNvbnN0IGtlbHZpblRvQ2VsY2l1cyA9ICh0ZW1wKSA9PiB7fTtcblxuICBjb25zb2xlLmxvZyhcInVuaXRzOiBcIiwgdW5pdHMpO1xuXG4gIGxldCBmZWVsc0xpa2UgPSB3ZWF0aGVySnNvbiA/IHdlYXRoZXJKc29uLm1haW4uZmVlbHNfbGlrZSA6IFwiXCI7XG4gIGxldCBodW1pZGl0eSA9IHdlYXRoZXJKc29uID8gd2VhdGhlckpzb24ubWFpbi5odW1pZGl0eSA6IFwiXCI7XG4gIGxldCBwcmVzc3VyZSA9IHdlYXRoZXJKc29uID8gd2VhdGhlckpzb24ubWFpbi5wcmVzc3VyZSA6IFwiXCI7XG4gIGxldCBjdXJUZW1wID0gd2VhdGhlckpzb24gPyB3ZWF0aGVySnNvbi5tYWluLnRlbXAgOiBcIlwiO1xuICBsZXQgbWluVGVtcCA9IHdlYXRoZXJKc29uID8gd2VhdGhlckpzb24ubWFpbi50ZW1wX21pbiA6IFwiXCI7XG4gIGxldCBtYXhUZW1wID0gd2VhdGhlckpzb24gPyB3ZWF0aGVySnNvbi5tYWluLnRlbXBfbWF4IDogXCJcIjtcbiAgbGV0IHdpbmRTcGVlZCA9IHdlYXRoZXJKc29uID8gd2VhdGhlckpzb24ud2luZC5zcGVlZCA6IFwiXCI7XG4gIGxldCBkZXNjcmlwdGlvbiA9IHdlYXRoZXJKc29uID8gd2VhdGhlckpzb24ud2VhdGhlclswXS5kZXNjcmlwdGlvbiA6IFwiXCI7XG5cbiAgaWYgKGN1clRlbXApIHtcbiAgICBjb25zb2xlLmxvZyhcImhlbGxvIGZyb20gaWZcIik7XG4gICAgaWYgKHVuaXRzID09PSBcImZcIikge1xuICAgICAgZmVlbHNMaWtlID0ga2VsdmluVG9GYXJlbmhlaWdodChOdW1iZXIoZmVlbHNMaWtlKSkudG9GaXhlZCgyKTtcbiAgICAgIGN1clRlbXAgPSBrZWx2aW5Ub0ZhcmVuaGVpZ2h0KE51bWJlcihjdXJUZW1wKSkudG9GaXhlZCgyKTtcbiAgICAgIG1pblRlbXAgPSBrZWx2aW5Ub0ZhcmVuaGVpZ2h0KE51bWJlcihtaW5UZW1wKSkudG9GaXhlZCgyKTtcbiAgICAgIG1heFRlbXAgPSBrZWx2aW5Ub0ZhcmVuaGVpZ2h0KE51bWJlcihtYXhUZW1wKSkudG9GaXhlZCgyKTtcbiAgICB9XG4gICAgaWYgKHVuaXRzID09PSBcImNcIikge1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZmVlbHNMaWtlLCAvLyB0aGlzIGlzIGluIGtlbHZpblxuICAgIGh1bWlkaXR5LFxuICAgIHByZXNzdXJlLFxuICAgIGN1clRlbXAsXG4gICAgbWluVGVtcCxcbiAgICBtYXhUZW1wLFxuICAgIHdpbmRTcGVlZCxcbiAgICBkZXNjcmlwdGlvbixcbiAgICB1bml0cyxcbiAgfTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
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
      const response = await fetch(makeUrl(), { mode: "cors" });
      const json = await response.json();
      return json.results[0];
    } catch (error) {
      console.log("Error from getLocationData: ", error);
    }
  }

  async function getPositionData() {
    try {
      const response = await fetch(makeUrl(), { mode: "cors" });
      const json = await response.json();
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
    const URL = BASE_URL;
    URL += `lat=${locationModel.position.lat}&lon=${locationModel.position.lon}&appid=${API_KEY}`;
    //console.log(URL);
    return URL;
  };
  // Returns an object with the location data.
  async function getWeatherData() {
    try {
      const response = await fetch(makeUrl(), { mode: "cors" });
      const json = await response.json();
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
      // should not use this for checking empty or not
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
  function modelCheck(weatherModel, locationModel, timeModel) {
    return (weatherModel && locationModel && timeModel)

  }
  const HandleFormSubmit = async (e) => {
    e.preventDefault();
    let input = document.querySelector("input");
    let value = document.querySelector("input").value;

    let tomtomdata = await (0,_apis_tomtomapi__WEBPACK_IMPORTED_MODULE_0__.TomTomAPI)(value).getData();
    if (!tomtomdata) {
      return
    }
    let locationModel = (0,_apis_tomtomapi__WEBPACK_IMPORTED_MODULE_0__.TomTomJsonParser)(tomtomdata);
    let weatherData = await (0,_apis_weatherapi__WEBPACK_IMPORTED_MODULE_1__.WeatherAPI)(locationModel).getWeatherData();
    console.log(weatherData);
    let timeData = await (0,_apis_timeapi__WEBPACK_IMPORTED_MODULE_6__.TimeApi)(locationModel);
    let timeModel = (0,_apis_timeapi__WEBPACK_IMPORTED_MODULE_6__.TimeParser)(timeData);
    let weatherModel = (0,_models_weathermodel__WEBPACK_IMPORTED_MODULE_2__.WeatherModel)(weatherData);

    if (!modelCheck(weatherModel, locationModel, timeModel)) {
      console.log('nope')
    }

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
  div.appendChild(InfoPair("Main", weatherModel.main));
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
  // move this to utility so its not being made with every WeatherModel
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
  let main = weatherJson ? weatherJson.weather[0].main : "";
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
    main,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguODg2Y2Y3OGNlMGU2NDc0MWIzZDQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBLGtEQUFrRCxlQUFlLEdBQUcsT0FBTyx1RkFBdUYsVUFBVSxpQ0FBaUMsZUFBZSxHQUFHLG1CQUFtQjtBQUNsUDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JHYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQXNHO0FBQ3RHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJZ0Q7QUFDeEUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNmTztBQUNQO0FBQ0EsbUVBQW1FLE9BQU8sK0JBQStCLDJCQUEyQixPQUFPLDJCQUEyQjtBQUN0SyxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQk87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFFBQVE7QUFDM0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0RBQWdELGNBQWM7QUFDOUQ7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdEQUFnRCxjQUFjO0FBQzlEO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7O0FDcEVPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsNERBQTRELElBQUksTUFBTSxJQUFJLFFBQVE7QUFDbEY7QUFDQSxrQkFBa0IsMkJBQTJCLE9BQU8sMkJBQTJCLFNBQVMsUUFBUTtBQUNoRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsY0FBYztBQUM5RDtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNnRTtBQUNoQjtBQUNNO0FBQ1o7QUFDZ0M7QUFDRjtBQUNsQjtBQUNZOztBQUUzRDtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdURBQVU7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsdUZBQTBCO0FBQy9DLHFCQUFxQiwrRUFBc0I7QUFDM0MscUJBQXFCLHFGQUF5QjtBQUM5QztBQUNBOztBQUVBLFdBQVc7QUFDWCxDQUFDOztBQUVNO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJCQUEyQiwwREFBUztBQUNwQztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUVBQWdCO0FBQ3hDLDRCQUE0Qiw0REFBVTtBQUN0QztBQUNBLHlCQUF5QixzREFBTztBQUNoQyxvQkFBb0IseURBQVU7QUFDOUIsdUJBQXVCLGtFQUFZOztBQUVuQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3BGTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1pPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDcEJPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQixlQUFlLEdBQUcsY0FBYyxHQUFHLGNBQWM7O0FBRTVFO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDVE87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLE1BQU07QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCNEI7QUFDeUI7O0FBRVI7QUFDTzs7QUFFQzs7QUFFckQsMEVBQXNCOzs7Ozs7Ozs7Ozs7Ozs7QUNSZjtBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hcGlzL3RpbWVhcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXBpcy90b210b21hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXBpcy93ZWF0aGVyYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2RvbS1tb2RlbHMvZG9tbWFuYWdlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9kb20tbW9kZWxzL2xvY2F0aW9uaW5mb3JtYXRpb25lbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2RvbS1tb2RlbHMvc2VhcmNoZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9kb20tbW9kZWxzL3RpbWVpbmZvcm1hdGlvbmVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZG9tLW1vZGVscy93ZWF0aGVyaW5mb3JtYXRpb25lbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZGVscy93ZWF0aGVybW9kZWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuaGVsbG8ge1xcbiAgY29sb3I6IHJlZDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxVQUFVO0FBQ1pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmhlbGxvIHtcXG4gIGNvbG9yOiByZWQ7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGNvbnN0IFRpbWVBcGkgPSBhc3luYyAobG9jYXRpb25Nb2RlbCkgPT4ge1xuICBjb25zdCBhcGlrZXkgPSBcIjRBUkZaNTNLVFE0UlwiO1xuICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkudGltZXpvbmVkYi5jb20vdjIuMS9nZXQtdGltZS16b25lP2tleT0ke2FwaWtleX0mZm9ybWF0PWpzb24mYnk9cG9zaXRpb24mbGF0PSR7bG9jYXRpb25Nb2RlbC5wb3NpdGlvbi5sYXR9JmxuZz0ke2xvY2F0aW9uTW9kZWwucG9zaXRpb24ubG9ufWA7XG4gIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgeyBtb2RlOiBcImNvcnNcIiB9KTtcbiAgbGV0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBqc29uLmZvcm1hdHRlZDtcbn07XG5leHBvcnQgY29uc3QgVGltZVBhcnNlciA9ICh0aW1lRGF0YSkgPT4ge1xuICBsZXQgeWVhciA9IFwiXCI7XG4gIGxldCBtb250aCA9IFwiXCI7XG4gIGxldCBkYXkgPSBcIlwiO1xuXG4gIGxldCBob3VyID0gXCJcIjtcbiAgbGV0IG1pbiA9IFwiXCI7XG4gIGxldCBzZWMgPSBcIlwiO1xuICBpZiAodGltZURhdGEpIHtcbiAgICBjb25zdCBkYXRlU3BsaXQgPSB0aW1lRGF0YS5zcGxpdChcIiBcIilbMF0uc3BsaXQoXCItXCIpO1xuICAgIHllYXIgPSBkYXRlU3BsaXRbMF07XG4gICAgbW9udGggPSBkYXRlU3BsaXRbMV07XG4gICAgZGF5ID0gZGF0ZVNwbGl0WzJdO1xuXG4gICAgY29uc3QgdGltZVNwbGl0ID0gdGltZURhdGEuc3BsaXQoXCIgXCIpWzFdLnNwbGl0KFwiOlwiKTtcbiAgICBob3VyID0gdGltZVNwbGl0WzBdO1xuICAgIG1pbiA9IHRpbWVTcGxpdFsxXTtcbiAgICBzZWMgPSB0aW1lU3BsaXRbMl07XG4gIH1cbiAgcmV0dXJuIHsgeWVhciwgbW9udGgsIGRheSwgaG91ciwgbWluLCBzZWMgfTtcbn07XG4iLCJleHBvcnQgY29uc3QgVG9tVG9tQVBJID0gKHNlYXJjaFF1ZXJ5KSA9PiB7XG4gIGNvbnN0IEFQSV9LRVkgPSBcImZjSGFoa2FXcHBzNUQ4QnZWV05ya1h3YjBBU01tOUJUXCI7XG4gIGNvbnN0IEJBU0VfVVJMID0gXCJodHRwczovL2FwaS50b210b20uY29tL3NlYXJjaC8yL3NlYXJjaC9cIjtcblxuICBjb25zdCBtYWtlVXJsID0gKCkgPT4ge1xuICAgIGxldCBVUkwgPSBCQVNFX1VSTDtcbiAgICBVUkwgKz0gc2VhcmNoUXVlcnkucmVwbGFjZUFsbChcIiBcIiwgXCItXCIpO1xuICAgIFVSTCArPSBcIi5qc29uXCI7XG4gICAgVVJMICs9IGA/a2V5PSR7QVBJX0tFWX1gO1xuICAgIHJldHVybiBVUkw7XG4gIH07XG5cbiAgYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YSgpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChtYWtlVXJsKCksIHsgbW9kZTogXCJjb3JzXCIgfSk7XG4gICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgcmV0dXJuIGpzb24ucmVzdWx0c1swXTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coXCJFcnJvciBmcm9tIGdldExvY2F0aW9uRGF0YTogXCIsIGVycm9yKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBnZXRQb3NpdGlvbkRhdGEoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gobWFrZVVybCgpLCB7IG1vZGU6IFwiY29yc1wiIH0pO1xuICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIHJldHVybiBqc29uLnJlc3VsdHNbMF0ucG9zaXRpb247XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgZnJvbSBnZXRMb2NhdGlvbkRhdGE6IFwiLCBlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gZ2V0SnNvbkRhdGEoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKG1ha2VVcmwoKSwgeyBtb2RlOiBcImNvcnNcIiB9KTtcbiAgICAgIGxldCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgcmV0dXJuIGpzb247XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgZnJvbSBnZXRMb2NhdGlvbkRhdGE6IFwiLCBlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHsgZ2V0RGF0YSwgZ2V0UG9zaXRpb25EYXRhLCBnZXRKc29uRGF0YSB9O1xufTtcblxuZXhwb3J0IGNvbnN0IFRvbVRvbUpzb25QYXJzZXIgPSAoanNvbk9iamVjdCkgPT4ge1xuICBjb25zdCBtdW5pY2lwYWxpdHkgPSBqc29uT2JqZWN0LmFkZHJlc3MubXVuaWNpcGFsaXR5O1xuICBjb25zdCBjb3VudHJ5ID0ganNvbk9iamVjdC5hZGRyZXNzLmNvdW50cnlTdWJkaXZpc2lvbk5hbWU7XG4gIGNvbnN0IHBvc2l0aW9uID0ganNvbk9iamVjdC5wb3NpdGlvbjtcbiAgcmV0dXJuIHsgbXVuaWNpcGFsaXR5LCBjb3VudHJ5LCBwb3NpdGlvbiB9O1xufTtcblxuLypcblRPIFVTRTpcblxuICBUb21Ub21BUEkoc2VhcmNoUXVlcnkpXG4gICAgLmdldEpzb25EYXRhKClcbiAgICAudGhlbigocikgPT4ge1xuICAgICAgY29uc29sZS5sb2cocik7XG4gICAgICBjb25zb2xlLmxvZyhKc29uVG9Mb2NhdGlvbk9iamVjdChyKSk7XG4gICAgICBsZXQgbG9jYXRpb25Nb2RlbCA9IExvY2F0aW9uTW9kZWwoSnNvblRvTG9jYXRpb25PYmplY3QocikpO1xuICAgICAgY29uc29sZS5sb2coXCJsb2NhdGlvbiBtb2RlbDogXCIsIGxvY2F0aW9uTW9kZWwpO1xuICAgICAgV2VhdGhlckFQSShsb2NhdGlvbk1vZGVsKVxuICAgICAgICAuZ2V0V2VhdGhlckRhdGEoKVxuICAgICAgICAudGhlbigocikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFdlYXRoZXJNb2RlbChyKSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgICovXG4iLCJleHBvcnQgY29uc3QgV2VhdGhlckFQSSA9IChsb2NhdGlvbk1vZGVsKSA9PiB7XG4gIGNvbnN0IEFQSV9LRVkgPSBcImYzYzMyMDkxYmY4Zjk4NjUyMTlhYzEyNzQ4NjE2ZWFkXCI7XG4gIGxldCBCQVNFX1VSTCA9IFwiIGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP1wiO1xuXG4gIC8qXG4gIFRPIFVTRTpcbiAgUGFzcyBpbiBXZWF0aGVyQVBJIGEgTG9jYXRpb25Nb2RlbCBvYmplY3QgXG4gIFxuICBsZXQgbG9jYXRpb25EYXRhID0gYXdhaXQgR2VvY29kaW5nQVBJKGxvY2F0aW9uSW5mb3JtYXRpb24pLmdldExvY2F0aW9uRGF0YSgpO1xuICBsZXQgbG9jYXRpb25Nb2RlbCA9IExvY2F0aW9uTW9kZWwobG9jYXRpb25EYXRhKTtcbiAgbGV0IHdlYXRoZXJEYXRhID0gYXdhaXQgV2VhdGhlckFQSShsb2NhdGlvbk1vZGVsKS5nZXRXZWF0aGVyRGF0YSgpO1xuICBsZXQgd2VhdGhlck1vZGVsID0gV2VhdGhlck1vZGVsKHdlYXRoZXJEYXRhKTtcblxuICAqL1xuXG4gIGNvbnN0IG1ha2VVcmwgPSAoKSA9PiB7XG4gICAgLy8gaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/bGF0PXtsYXR9Jmxvbj17bG9ufSZhcHBpZD17QVBJIGtleX1cbiAgICBjb25zdCBVUkwgPSBCQVNFX1VSTDtcbiAgICBVUkwgKz0gYGxhdD0ke2xvY2F0aW9uTW9kZWwucG9zaXRpb24ubGF0fSZsb249JHtsb2NhdGlvbk1vZGVsLnBvc2l0aW9uLmxvbn0mYXBwaWQ9JHtBUElfS0VZfWA7XG4gICAgLy9jb25zb2xlLmxvZyhVUkwpO1xuICAgIHJldHVybiBVUkw7XG4gIH07XG4gIC8vIFJldHVybnMgYW4gb2JqZWN0IHdpdGggdGhlIGxvY2F0aW9uIGRhdGEuXG4gIGFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKG1ha2VVcmwoKSwgeyBtb2RlOiBcImNvcnNcIiB9KTtcbiAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICByZXR1cm4ganNvbjtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coXCJFcnJvciBmcm9tIGdldExvY2F0aW9uRGF0YTogXCIsIGVycm9yKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHsgZ2V0V2VhdGhlckRhdGEgfTtcbn07XG4iLCJpbXBvcnQgeyBUb21Ub21BUEksIFRvbVRvbUpzb25QYXJzZXIgfSBmcm9tIFwiLi4vYXBpcy90b210b21hcGlcIjtcbmltcG9ydCB7IFdlYXRoZXJBUEkgfSBmcm9tIFwiLi4vYXBpcy93ZWF0aGVyYXBpXCI7XG5pbXBvcnQgeyBXZWF0aGVyTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3dlYXRoZXJtb2RlbFwiO1xuaW1wb3J0IHsgU2VhcmNoRm9ybSB9IGZyb20gXCIuL3NlYXJjaGZvcm1cIjtcbmltcG9ydCB7IExvY2F0aW9uSW5mb3JtYXRpb25FbGVtZW50IH0gZnJvbSBcIi4vbG9jYXRpb25pbmZvcm1hdGlvbmVsZW1lbnRcIjtcbmltcG9ydCB7IFdlYXRoZXJJbmZvcm1hdGlvbkVsZW1lbnQgfSBmcm9tIFwiLi93ZWF0aGVyaW5mb3JtYXRpb25lbGVtZW50XCI7XG5pbXBvcnQgeyBUaW1lQXBpLCBUaW1lUGFyc2VyIH0gZnJvbSBcIi4uL2FwaXMvdGltZWFwaVwiO1xuaW1wb3J0IHsgVGltZUluZm9ybWF0aW9uRWxlbWVudCB9IGZyb20gXCIuL3RpbWVpbmZvcm1hdGlvbmVsZW1lbnRcIjtcblxuZXhwb3J0IGNvbnN0IERvbU1hbmFnZXIgPSAoKHdlYXRoZXJNb2RlbCwgbG9jYXRpb25Nb2RlbCwgdGltZU1vZGVsKSA9PiB7XG4gIGNvbnN0IGluaXRpYWxMb2FkID0gKCkgPT4ge1xuICAgIGNvbnN0IHJvb3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGZvcm1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvcm1EaXYuaWQgPSBcImZvcm0tY29udGFpbmVyXCI7XG4gICAgcm9vdERpdi5pZCA9IFwicm9vdFwiO1xuICAgIGZvcm1EaXYuYXBwZW5kQ2hpbGQoU2VhcmNoRm9ybSgpKTtcbiAgICByb290RGl2LmFwcGVuZENoaWxkKGZvcm1EaXYpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocm9vdERpdik7XG4gICAgRG9tRXZlbnRNYW5hZ2VyKCk7XG4gIH07XG5cbiAgY29uc3QgcmVzZXRXZWF0aGVySW5mb3JtYXRpb24gPSAoKSA9PiB7XG4gICAgY29uc3Qgd2VhdGhlckluZm9EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dlYXRoZXItaW5mby1jb250YWluZXJcIik7XG4gICAgY29uc3Qgcm9vdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcm9vdFwiKTtcbiAgICByb290RGl2LnJlbW92ZUNoaWxkKHdlYXRoZXJJbmZvRGl2KTtcbiAgfTtcbiAgY29uc3QgcmVzZXRMb2NhdGlvbkluZm9ybWF0aW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jvb3RcIik7XG4gICAgY29uc3QgbG9jYXRpb25JbmZvRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsb2NhdGlvbi1pbmZvLWNvbnRhaW5lclwiKTtcbiAgICByb290LnJlbW92ZUNoaWxkKGxvY2F0aW9uSW5mb0Rpdik7XG4gIH07XG4gIGNvbnN0IHJlc2V0VGltZUluZm9ybWF0aW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jvb3RcIik7XG4gICAgY29uc3QgdGltZUluZm9EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpbWUtaW5mby1jb250YWluZXJcIik7XG4gICAgcm9vdC5yZW1vdmVDaGlsZCh0aW1lSW5mb0Rpdik7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlSW5mb3JtYXRpb24gPSAod2VhdGhlck1vZGVsLCBsb2NhdGlvbk1vZGVsLCB0aW1lTW9kZWwpID0+IHtcbiAgICBjb25zdCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyb290XCIpO1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dlYXRoZXItaW5mby1jb250YWluZXJcIikpIHtcbiAgICAgIC8vIHNob3VsZCBub3QgdXNlIHRoaXMgZm9yIGNoZWNraW5nIGVtcHR5IG9yIG5vdFxuICAgICAgcmVzZXRXZWF0aGVySW5mb3JtYXRpb24oKTtcbiAgICAgIHJlc2V0TG9jYXRpb25JbmZvcm1hdGlvbigpO1xuICAgICAgcmVzZXRUaW1lSW5mb3JtYXRpb24oKTtcbiAgICB9XG4gICAgcm9vdC5hcHBlbmRDaGlsZChMb2NhdGlvbkluZm9ybWF0aW9uRWxlbWVudChsb2NhdGlvbk1vZGVsKSk7XG4gICAgcm9vdC5hcHBlbmRDaGlsZChUaW1lSW5mb3JtYXRpb25FbGVtZW50KHRpbWVNb2RlbCkpO1xuICAgIHJvb3QuYXBwZW5kQ2hpbGQoV2VhdGhlckluZm9ybWF0aW9uRWxlbWVudCh3ZWF0aGVyTW9kZWwpKTtcbiAgICAvLyBwYXNzIGluIHRoZSB0aW1lTW9kZWwgdG8gdXBkYXRlIHRoZSBiYWNrZ3JvdW5kIG9yIHBpY3R1cmVzXG4gIH07XG5cbiAgcmV0dXJuIHsgaW5pdGlhbExvYWQsIHVwZGF0ZUluZm9ybWF0aW9uIH07XG59KSgpO1xuXG5leHBvcnQgY29uc3QgRG9tRXZlbnRNYW5hZ2VyID0gKCkgPT4ge1xuICBmdW5jdGlvbiBtb2RlbENoZWNrKHdlYXRoZXJNb2RlbCwgbG9jYXRpb25Nb2RlbCwgdGltZU1vZGVsKSB7XG4gICAgcmV0dXJuICh3ZWF0aGVyTW9kZWwgJiYgbG9jYXRpb25Nb2RlbCAmJiB0aW1lTW9kZWwpXG5cbiAgfVxuICBjb25zdCBIYW5kbGVGb3JtU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xuICAgIGxldCB2YWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKS52YWx1ZTtcblxuICAgIGxldCB0b210b21kYXRhID0gYXdhaXQgVG9tVG9tQVBJKHZhbHVlKS5nZXREYXRhKCk7XG4gICAgaWYgKCF0b210b21kYXRhKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgbGV0IGxvY2F0aW9uTW9kZWwgPSBUb21Ub21Kc29uUGFyc2VyKHRvbXRvbWRhdGEpO1xuICAgIGxldCB3ZWF0aGVyRGF0YSA9IGF3YWl0IFdlYXRoZXJBUEkobG9jYXRpb25Nb2RlbCkuZ2V0V2VhdGhlckRhdGEoKTtcbiAgICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XG4gICAgbGV0IHRpbWVEYXRhID0gYXdhaXQgVGltZUFwaShsb2NhdGlvbk1vZGVsKTtcbiAgICBsZXQgdGltZU1vZGVsID0gVGltZVBhcnNlcih0aW1lRGF0YSk7XG4gICAgbGV0IHdlYXRoZXJNb2RlbCA9IFdlYXRoZXJNb2RlbCh3ZWF0aGVyRGF0YSk7XG5cbiAgICBpZiAoIW1vZGVsQ2hlY2sod2VhdGhlck1vZGVsLCBsb2NhdGlvbk1vZGVsLCB0aW1lTW9kZWwpKSB7XG4gICAgICBjb25zb2xlLmxvZygnbm9wZScpXG4gICAgfVxuXG4gICAgRG9tTWFuYWdlci51cGRhdGVJbmZvcm1hdGlvbih3ZWF0aGVyTW9kZWwsIGxvY2F0aW9uTW9kZWwsIHRpbWVNb2RlbCk7XG4gICAgaW5wdXQudmFsdWUgPSBcIlwiO1xuICB9O1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpLm9uc3VibWl0ID0gSGFuZGxlRm9ybVN1Ym1pdDtcbn07XG4iLCJleHBvcnQgY29uc3QgTG9jYXRpb25JbmZvcm1hdGlvbkVsZW1lbnQgPSAobG9jYXRpb25Nb2RlbCkgPT4ge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXYuaWQgPSBcImxvY2F0aW9uLWluZm8tY29udGFpbmVyXCI7XG5cbiAgY29uc3QgbXVuaWNpcGFsaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY291bnRyeURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG11bmljaXBhbGl0eURpdi50ZXh0Q29udGVudCA9IGxvY2F0aW9uTW9kZWwubXVuaWNpcGFsaXR5O1xuICBjb3VudHJ5RGl2LnRleHRDb250ZW50ID0gbG9jYXRpb25Nb2RlbC5jb3VudHJ5O1xuXG4gIGRpdi5hcHBlbmRDaGlsZChtdW5pY2lwYWxpdHlEaXYpO1xuICBkaXYuYXBwZW5kQ2hpbGQoY291bnRyeURpdik7XG4gIHJldHVybiBkaXY7XG59O1xuIiwiZXhwb3J0IGNvbnN0IFNlYXJjaEZvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IFNlYXJjaEZvcm1Sb3cgPSAoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gXCJTZWFyY2hcIjtcbiAgICBkaXYuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgcmV0dXJuIGRpdjtcbiAgfTtcbiAgY29uc3QgRm9ybVN1Ym1pdEJ1dHRvbiA9ICgpID0+IHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dHRvbi50eXBlID0gXCJzdWJtaXRcIjtcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSBcIlNlYXJjaFwiO1xuICAgIHJldHVybiBidXR0b247XG4gIH07XG4gIGxldCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoU2VhcmNoRm9ybVJvdygpKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChGb3JtU3VibWl0QnV0dG9uKCkpO1xuICByZXR1cm4gZm9ybTtcbn07XG4iLCJleHBvcnQgY29uc3QgVGltZUluZm9ybWF0aW9uRWxlbWVudCA9ICh0aW1lTW9kZWwpID0+IHtcbiAgY29uc3QgdGltZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRpbWVEaXYuaWQgPSBcInRpbWUtaW5mby1jb250YWluZXJcIjtcblxuICBjb25zdCBkYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGF0ZURpdi50ZXh0Q29udGVudCA9IGAke3RpbWVNb2RlbC5ob3VyfToke3RpbWVNb2RlbC5taW59OiR7dGltZU1vZGVsLnNlY31gO1xuXG4gIHRpbWVEaXYuYXBwZW5kQ2hpbGQoZGF0ZURpdik7XG4gIHJldHVybiB0aW1lRGl2O1xufTtcbiIsImV4cG9ydCBjb25zdCBXZWF0aGVySW5mb3JtYXRpb25FbGVtZW50ID0gKHdlYXRoZXJNb2RlbCkgPT4ge1xuICBjb25zdCBJbmZvUGFpciA9IChsYWJlbCwgdmFsdWUpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGxhYmVsUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IHZhbHVlUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGxhYmVsUC50ZXh0Q29udGVudCA9IGxhYmVsO1xuICAgIHZhbHVlUC50ZXh0Q29udGVudCA9IGAke3ZhbHVlfWA7XG4gICAgZGl2LmFwcGVuZENoaWxkKGxhYmVsUCk7XG4gICAgZGl2LmFwcGVuZENoaWxkKHZhbHVlUCk7XG4gICAgcmV0dXJuIGRpdjtcbiAgfTtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2LmFwcGVuZENoaWxkKEluZm9QYWlyKFwiRmVlbHMgTGlrZVwiLCB3ZWF0aGVyTW9kZWwuZmVlbHNMaWtlKSk7XG4gIGRpdi5hcHBlbmRDaGlsZChJbmZvUGFpcihcIkh1bWlkaXR5XCIsIHdlYXRoZXJNb2RlbC5odW1pZGl0eSkpO1xuICBkaXYuYXBwZW5kQ2hpbGQoSW5mb1BhaXIoXCJQcmVzc3VyZVwiLCB3ZWF0aGVyTW9kZWwucHJlc3N1cmUpKTtcbiAgZGl2LmFwcGVuZENoaWxkKEluZm9QYWlyKFwiQ3VycmVudCBUZW1wZXJhdHVyZVwiLCB3ZWF0aGVyTW9kZWwuY3VyVGVtcCkpO1xuICBkaXYuYXBwZW5kQ2hpbGQoSW5mb1BhaXIoXCJNaW5pbXVtIFRlbXBlcmF0dXJlXCIsIHdlYXRoZXJNb2RlbC5taW5UZW1wKSk7XG4gIGRpdi5hcHBlbmRDaGlsZChJbmZvUGFpcihcIk1heGltdW0gVGVtcGVyYXR1cmVcIiwgd2VhdGhlck1vZGVsLm1heFRlbXApKTtcbiAgZGl2LmFwcGVuZENoaWxkKEluZm9QYWlyKFwiV2luZCBTcGVlZFwiLCB3ZWF0aGVyTW9kZWwud2luZFNwZWVkKSk7XG4gIGRpdi5hcHBlbmRDaGlsZChJbmZvUGFpcihcIk1haW5cIiwgd2VhdGhlck1vZGVsLm1haW4pKTtcbiAgZGl2LmFwcGVuZENoaWxkKEluZm9QYWlyKFwiRGVzY3JpcHRpb25cIiwgd2VhdGhlck1vZGVsLmRlc2NyaXB0aW9uKSk7XG4gIGRpdi5pZCA9IFwid2VhdGhlci1pbmZvLWNvbnRhaW5lclwiO1xuICByZXR1cm4gZGl2O1xufTtcbiIsImltcG9ydCBcIi4vc3R5bGVzL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgRG9tTWFuYWdlciB9IGZyb20gXCIuL2RvbS1tb2RlbHMvZG9tbWFuYWdlclwiO1xuXG5pbXBvcnQgeyBUb21Ub21BUEkgfSBmcm9tIFwiLi9hcGlzL3RvbXRvbWFwaVwiO1xuaW1wb3J0IHsgVG9tVG9tSnNvblBhcnNlciB9IGZyb20gXCIuL2FwaXMvdG9tdG9tYXBpXCI7XG5cbmltcG9ydCB7IFRpbWVBcGksIFRpbWVQYXJzZXIgfSBmcm9tIFwiLi9hcGlzL3RpbWVhcGlcIjtcblxuRG9tTWFuYWdlci5pbml0aWFsTG9hZCgpO1xuIiwiZXhwb3J0IGNvbnN0IFdlYXRoZXJNb2RlbCA9ICh3ZWF0aGVySnNvbiwgdW5pdHMgPSBcImZcIikgPT4ge1xuICAvLyBtb3ZlIHRoaXMgdG8gdXRpbGl0eSBzbyBpdHMgbm90IGJlaW5nIG1hZGUgd2l0aCBldmVyeSBXZWF0aGVyTW9kZWxcbiAgY29uc3Qga2VsdmluVG9GYXJlbmhlaWdodCA9ICh0ZW1wKSA9PiB7XG4gICAgcmV0dXJuICgodGVtcCAtIDI3My4xNSkgKiA5KSAvIDUgKyAzMjtcbiAgfTtcblxuICBjb25zdCBrZWx2aW5Ub0NlbGNpdXMgPSAodGVtcCkgPT4ge307XG5cbiAgY29uc29sZS5sb2coXCJ1bml0czogXCIsIHVuaXRzKTtcblxuICBsZXQgZmVlbHNMaWtlID0gd2VhdGhlckpzb24gPyB3ZWF0aGVySnNvbi5tYWluLmZlZWxzX2xpa2UgOiBcIlwiO1xuICBsZXQgaHVtaWRpdHkgPSB3ZWF0aGVySnNvbiA/IHdlYXRoZXJKc29uLm1haW4uaHVtaWRpdHkgOiBcIlwiO1xuICBsZXQgcHJlc3N1cmUgPSB3ZWF0aGVySnNvbiA/IHdlYXRoZXJKc29uLm1haW4ucHJlc3N1cmUgOiBcIlwiO1xuICBsZXQgY3VyVGVtcCA9IHdlYXRoZXJKc29uID8gd2VhdGhlckpzb24ubWFpbi50ZW1wIDogXCJcIjtcbiAgbGV0IG1pblRlbXAgPSB3ZWF0aGVySnNvbiA/IHdlYXRoZXJKc29uLm1haW4udGVtcF9taW4gOiBcIlwiO1xuICBsZXQgbWF4VGVtcCA9IHdlYXRoZXJKc29uID8gd2VhdGhlckpzb24ubWFpbi50ZW1wX21heCA6IFwiXCI7XG4gIGxldCB3aW5kU3BlZWQgPSB3ZWF0aGVySnNvbiA/IHdlYXRoZXJKc29uLndpbmQuc3BlZWQgOiBcIlwiO1xuICBsZXQgbWFpbiA9IHdlYXRoZXJKc29uID8gd2VhdGhlckpzb24ud2VhdGhlclswXS5tYWluIDogXCJcIjtcbiAgbGV0IGRlc2NyaXB0aW9uID0gd2VhdGhlckpzb24gPyB3ZWF0aGVySnNvbi53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uIDogXCJcIjtcblxuICBpZiAoY3VyVGVtcCkge1xuICAgIGNvbnNvbGUubG9nKFwiaGVsbG8gZnJvbSBpZlwiKTtcbiAgICBpZiAodW5pdHMgPT09IFwiZlwiKSB7XG4gICAgICBmZWVsc0xpa2UgPSBrZWx2aW5Ub0ZhcmVuaGVpZ2h0KE51bWJlcihmZWVsc0xpa2UpKS50b0ZpeGVkKDIpO1xuICAgICAgY3VyVGVtcCA9IGtlbHZpblRvRmFyZW5oZWlnaHQoTnVtYmVyKGN1clRlbXApKS50b0ZpeGVkKDIpO1xuICAgICAgbWluVGVtcCA9IGtlbHZpblRvRmFyZW5oZWlnaHQoTnVtYmVyKG1pblRlbXApKS50b0ZpeGVkKDIpO1xuICAgICAgbWF4VGVtcCA9IGtlbHZpblRvRmFyZW5oZWlnaHQoTnVtYmVyKG1heFRlbXApKS50b0ZpeGVkKDIpO1xuICAgIH1cbiAgICBpZiAodW5pdHMgPT09IFwiY1wiKSB7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBmZWVsc0xpa2UsIC8vIHRoaXMgaXMgaW4ga2VsdmluXG4gICAgaHVtaWRpdHksXG4gICAgcHJlc3N1cmUsXG4gICAgY3VyVGVtcCxcbiAgICBtaW5UZW1wLFxuICAgIG1heFRlbXAsXG4gICAgd2luZFNwZWVkLFxuICAgIG1haW4sXG4gICAgZGVzY3JpcHRpb24sXG4gICAgdW5pdHMsXG4gIH07XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
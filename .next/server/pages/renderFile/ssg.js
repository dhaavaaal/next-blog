"use strict";
(() => {
var exports = {};
exports.id = 240;
exports.ids = [240];
exports.modules = {

/***/ 391:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SSGPage),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./components/TimeSection.tsx


const TimeSection = ({ dateTime  })=>{
    let splittingTime, time;
    if (dateTime) {
        splittingTime = dateTime.split("T");
        time = splittingTime[1].substring(0, 8);
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: time && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            children: [
                "Time: ",
                time
            ]
        })
    });
};
/* harmony default export */ const components_TimeSection = (TimeSection);

;// CONCATENATED MODULE: ./pages/renderFile/ssg.tsx



function SSGPage({ dateTime  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("main", {
        children: /*#__PURE__*/ jsx_runtime_.jsx(components_TimeSection, {
            dateTime: dateTime
        })
    });
};
const getStaticProps = async ()=>{
    const res = await external_axios_default().get("https://worldtimeapi.org/api/ip");
    console.log("props");
    return {
        props: {
            dateTime: res.data.datetime
        },
        revalidate: 10
    };
};


/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(391));
module.exports = __webpack_exports__;

})();
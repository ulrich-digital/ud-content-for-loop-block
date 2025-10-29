/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./block.json":
/*!********************!*\
  !*** ./block.json ***!
  \********************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"apiVersion":2,"name":"ud/content-for-loop-block","title":"Inhalt für Loop","category":"layout","icon":"receipt","description":"Universeller Inhaltsblock für Schleifenanzeigen wie News, Veranstaltungen, Unterseiten etc.","editorStyle":"file:./build/editor-style.css","style":"file:./build/frontend-style.css","editorScript":"file:./build/editor-script.js","script":"file:./build/frontend-script.js","supports":{"html":false,"anchor":false,"customClassName":true},"postTypes":["ud_news","ud_veranstaltungen","ud_bildungsangebote","page"],"attributes":{"contentType":{"type":"string","default":""}}}');

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/receipt.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/receipt.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


const receipt = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    fillRule: "evenodd",
    d: "M16.83 6.342l.602.3.625-.25.443-.176v12.569l-.443-.178-.625-.25-.603.301-1.444.723-2.41-.804-.475-.158-.474.158-2.41.803-1.445-.722-.603-.3-.625.25-.443.177V6.215l.443.178.625.25.603-.301 1.444-.722 2.41.803.475.158.474-.158 2.41-.803 1.445.722zM20 4l-1.5.6-1 .4-2-1-3 1-3-1-2 1-1-.4L5 4v17l1.5-.6 1-.4 2 1 3-1 3 1 2-1 1 .4 1.5.6V4zm-3.5 6.25v-1.5h-8v1.5h8zm0 3v-1.5h-8v1.5h8zm-8 3v-1.5h8v1.5h-8z",
    clipRule: "evenodd"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (receipt);
//# sourceMappingURL=receipt.js.map

/***/ }),

/***/ "./src/js/edit.js":
/*!************************!*\
  !*** ./src/js/edit.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_gallery_image_size__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/gallery_image_size */ "./src/js/utils/gallery_image_size.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);


if (window.udContentLoopBlockSettings?.nonce) {
  _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default().use(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default().createNonceMiddleware(window.udContentLoopBlockSettings.nonce));
}








// Zuerst Vorlage einmal definieren

const TEMPLATE_AUSBILDUNG_COMMON = [["core/gallery"], ["core/group", {
  className: "content",
  lock: {
    move: true,
    remove: true
  }
}, [["core/group", {
  className: "text teaser-text-container",
  lock: {
    move: true,
    remove: true
  }
}, [["core/heading", {
  className: "berufsbezeichnung",
  placeholder: "Berufsbezeichnung",
  lock: {
    move: true,
    remove: true
  }
}], ["core/paragraph", {
  className: "ausbildungsdauer",
  placeholder: "Ausbildungsdauer (z. B. 4 Jahre)",
  lock: {
    move: true,
    remove: true
  }
}], ["core/paragraph", {
  className: "kurzbeschrieb",
  placeholder: "Kurzbeschrieb zur Ausbildung...",
  lock: {
    move: true,
    remove: true
  }
}]]]]]];

// Mapping: contentType → InnerBlocks-Template (je nach Typ)
const TEMPLATE_MAP = {
  childpage: [["core/gallery"], ["core/group", {
    className: "content",
    lock: {
      move: true,
      remove: true
    }
  }, [["core/group", {
    className: "text teaser-text-container",
    lock: {
      move: true,
      remove: true
    }
  }, [["core/paragraph", {
    placeholder: "Einleitungstext...",
    lock: {
      move: true,
      remove: true
    }
  }]]]]]],
  ud_news: [["core/gallery"], ["core/group", {
    className: "content",
    lock: {
      move: true,
      remove: true
    }
  }, [["core/post-date", {
    className: "meta",
    lock: {
      move: true,
      remove: true
    }
  }], ["core/group", {
    className: "title-wrapper",
    lock: {
      move: true,
      remove: true
    }
  }, [["core/heading", {
    className: "main-heading",
    level: 2,
    placeholder: "Titel der Meldung",
    lock: {
      move: true,
      remove: true
    }
  }]]], ["core/paragraph", {
    className: "text main-text",
    placeholder: "Text der Meldung",
    lock: {
      move: true,
      remove: true
    }
  }], ["ud/accordion-block", {
    className: "accordion"
  }, [["ud/link-block", {}]] // ✅ doppelte eckige Klammern!
  ], ["ud/link-block", {}]]]],
  ud_veranstaltungen: [["core/gallery"], ["core/group", {
    className: "content",
    lock: {
      move: true,
      remove: true
    }
  }, [["core/group", {
    className: "meta meta-row",
    lock: {
      move: true,
      remove: true
    }
  }, [["ud/datetime-block", {
    lock: {
      move: true,
      remove: true
    }
  }], ["core/paragraph", {
    className: "veranstaltung-ort",
    placeholder: "Ort der Veranstaltung",
    lock: {
      move: true,
      remove: true
    }
  }]]], ["core/group", {
    className: "title-wrapper",
    lock: {
      move: true,
      remove: true
    }
  }, [["core/heading", {
    className: "main-heading",
    level: 2,
    placeholder: "Titel der Veranstaltung",
    lock: {
      move: true,
      remove: true
    }
  }]]], ["ud/accordion-block", {
    className: "accordion"
  }, [["ud/link-block", {}]] // ✅ hier ebenfalls doppelte Klammern
  ], ["ud/link-block", {}]]]],
  ud_bildungsangebote: TEMPLATE_AUSBILDUNG_COMMON,
  datetime: [["core/group", {
    className: "content",
    lock: {
      move: true,
      remove: true
    }
  }, [["ud/datetime-block", {
    className: "meta",
    lock: {
      move: true,
      remove: true
    }
  }], ["core/paragraph", {
    className: "text",
    placeholder: "Hier Text eintragen",
    lock: {
      move: true,
      remove: true
    }
  }], ["ud/link-block", {
    className: "buttons"
  }]]]]
};
function Edit({
  attributes,
  setAttributes,
  clientId
}) {
  const [availablePostTypes, setAvailablePostTypes] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
  const {
    contentType
  } = attributes;
  const [currentUser, setCurrentUser] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(null);
  const [templateInitialized, setTemplateInitialized] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const [templateReady, setTemplateReady] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(false);

  // Hole verfügbare Post-Types aus der REST-API
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
      path: "/wp/v2/types"
    }).then(types => {
      const slugs = Object.keys(types);
      setAvailablePostTypes(slugs);
    });
  }, []);

  // Feste Auswahlmöglichkeiten – ergänzt durch dynamisch verfügbare CPTs
  const allOptions = [{
    value: "ud_news",
    label: "News"
  }, {
    value: "ud_veranstaltungen",
    label: "Veranstaltungen"
  }, {
    value: "ud_bildungsangebote",
    label: "Bildungsangebote"
  }, {
    value: "childpage",
    label: "Unterseiten"
  }];
  const filteredOptions = allOptions.filter(opt => opt.value === "childpage" || availablePostTypes.includes(opt.value));

  // Ermittle aktuellen Post-Typ
  const currentPostType = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(select => select("core/editor").getCurrentPostType(), []);

  // Block-Klassen setzen
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: contentType ? `is-content-type-${contentType}` : null
  });

  // 1. contentType automatisch setzen, wenn noch nicht definiert
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    if (!contentType && currentPostType) {
      let newType;
      if (currentPostType === "ud_veranstaltungen") {
        newType = "ud_veranstaltungen";
      } else if (currentPostType === "ud_bildungsangebote") {
        newType = "ud_bildungsangebote";
      } else if (currentPostType === "ud_news") {
        newType = "ud_news";
      } else {
        newType = "childpage";
      }
      setAttributes({
        contentType: newType
      });
    }
  }, [contentType, currentPostType, setAttributes]);

  // 2. Initialisiere Block-Template aus TEMPLATE_MAP (nur einmal)
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useLayoutEffect)(() => {
    if (!contentType || templateInitialized) return;
    const {
      getBlock
    } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.select)("core/block-editor");
    const {
      replaceInnerBlocks
    } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.dispatch)("core/block-editor");
    const currentBlock = getBlock(clientId);
    if (currentBlock && currentBlock.innerBlocks?.length === 0 && TEMPLATE_MAP[contentType]) {
      replaceInnerBlocks(clientId, (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_6__.createBlocksFromInnerBlocksTemplate)(TEMPLATE_MAP[contentType]), true);
      setTemplateInitialized(true); // Nur EINMAL initialisieren!
    }
  }, [contentType, clientId, templateInitialized]);

  // User-Daten laden
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
      path: "/wp/v2/users/me"
    }).then(res => setCurrentUser(res)).catch(() => setCurrentUser(null));
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
      children: currentUser?.roles?.includes("administrator") && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: "Inhaltstyp w\xE4hlen",
        initialOpen: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: "Inhaltstyp w\xE4hlen",
          value: attributes.contentType || "",
          options: filteredOptions,
          onChange: val => {
            setAttributes({
              contentType: val
            });
            // Template-Initialisierung per Typ-Änderung:
            const {
              replaceInnerBlocks
            } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.dispatch)("core/block-editor");
            replaceInnerBlocks(clientId, (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_6__.createBlocksFromInnerBlocksTemplate)(TEMPLATE_MAP[val]), false);
            setTemplateInitialized(true);
          },
          __next40pxDefaultSize: true,
          __nextHasNoMarginBottom: true
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      ...blockProps,
      children: !contentType ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
        style: {
          color: "red"
        },
        children: "Bitte Inhaltstyp im Inspector w\xE4hlen."
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks, {})
    })]
  });
}

/***/ }),

/***/ "./src/js/save.js":
/*!************************!*\
  !*** ./src/js/save.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Save)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function Save({
  attributes
}) {
  const {
    contentType
  } = attributes;
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save({
    className: contentType ? `is-content-type-${contentType}` : undefined
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    ...blockProps,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks.Content, {})
  });
}

/***/ }),

/***/ "./src/js/utils/gallery_image_size.js":
/*!********************************************!*\
  !*** ./src/js/utils/gallery_image_size.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);

let processedGalleryIds = new Set();
function setGalleryImagesToFull(block) {
  // Neue Gallery: Bilder als innerBlocks
  if (block.innerBlocks && block.innerBlocks.length) {
    block.innerBlocks.forEach(imgBlock => {
      if (imgBlock.name === 'core/image' && imgBlock.attributes.sizeSlug !== 'full') {
        (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)('core/block-editor').updateBlockAttributes(imgBlock.clientId, {
          sizeSlug: 'full'
        });
      }
    });
  }
  // Alte Gallery: images[]-Array
  if (block.attributes?.images && Array.isArray(block.attributes.images)) {
    const images = block.attributes.images;
    const hasWrongSizes = images.some(img => img.sizeSlug !== 'full');
    if (hasWrongSizes) {
      const updatedImages = images.map(img => ({
        ...img,
        sizeSlug: 'full'
      }));
      (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)('core/block-editor').updateBlockAttributes(block.clientId, {
        images: updatedImages
      });
    }
  }
}
function findGalleryBlocks(blocks) {
  let galleries = [];
  blocks.forEach(block => {
    if (block.name === 'core/gallery') {
      galleries.push(block);
    }
    if (block.innerBlocks?.length) {
      galleries = galleries.concat(findGalleryBlocks(block.innerBlocks));
    }
  });
  return galleries;
}
(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.subscribe)(() => {
  const blocks = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.select)('core/block-editor').getBlocks();
  const galleryBlocks = findGalleryBlocks(blocks);
  galleryBlocks.forEach(block => {
    if (processedGalleryIds.has(block.clientId)) return;
    setGalleryImagesToFull(block);
    processedGalleryIds.add(block.clientId);
  });
});

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["primitives"];

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/editor.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/receipt.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/js/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save */ "./src/js/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../block.json */ "./block.json");
/**
 * editor.js
 *
 * JavaScript für den Block-Editor (Gutenberg).
 * Wird ausschließlich im Backend geladen.
 *
 * Hinweis:
 * Diese Datei enthält editor-spezifische Interaktionen oder React-Komponenten.
 * Wird über webpack zu editor.js gebündelt und in block.json oder enqueue.php eingebunden.
 */





wp.blocks.registerBlockType(_block_json__WEBPACK_IMPORTED_MODULE_2__.name, {
  ..._block_json__WEBPACK_IMPORTED_MODULE_2__,
  icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__["default"],
  // ← hier explizit Gutenberg-Icon setzen
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_1__["default"]
});
})();

/******/ })()
;
//# sourceMappingURL=editor-script.js.map
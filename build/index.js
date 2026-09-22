/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _js_ControlAnimate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/ControlAnimate */ "./src/js/ControlAnimate.js");
/* harmony import */ var _js_ControlDelay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/ControlDelay */ "./src/js/ControlDelay.js");
/* harmony import */ var _js_ControlType__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/ControlType */ "./src/js/ControlType.js");
/* harmony import */ var _js_ControlAdvance__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./js/ControlAdvance */ "./src/js/ControlAdvance.js");
/* harmony import */ var _js_const__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./js/const */ "./src/js/const.js");
/* harmony import */ var _js_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./js/utils */ "./src/js/utils.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);












const withAnimate = BlockEdit => {
  return props => {
    const {
      attributes,
      setAttributes,
      name
    } = props;
    const [isAdvanceOpen, setIsAdvanceOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    if (!_js_const__WEBPACK_IMPORTED_MODULE_9__.allowedBlocks.includes(name)) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(BlockEdit, {
        ...props
      });
    }

    // Delay is time-based; it has no meaningful effect once the
    // animation is driven by scroll position instead of a duration.
    const isScrollDriven = (0,_js_utils__WEBPACK_IMPORTED_MODULE_10__.getCurrentFromClassName)(attributes.className, _js_const__WEBPACK_IMPORTED_MODULE_9__.ListAnimationType) === 'animate__scrollDriven';
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(BlockEdit, {
        ...props
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.BlockControls, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToolbarGroup, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_js_ControlAnimate__WEBPACK_IMPORTED_MODULE_5__.ControlAnimate, {
            attributes: attributes,
            setAttributes: setAttributes,
            onOpenAdvance: () => setIsAdvanceOpen(true)
          }), !isScrollDriven && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_js_ControlDelay__WEBPACK_IMPORTED_MODULE_6__.ControlDelay, {
            attributes: attributes,
            setAttributes: setAttributes
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_js_ControlType__WEBPACK_IMPORTED_MODULE_7__.ControlType, {
            attributes: attributes,
            setAttributes: setAttributes
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_js_ControlAdvance__WEBPACK_IMPORTED_MODULE_8__.ControlAdvance, {
        attributes: attributes,
        setAttributes: setAttributes,
        isOpen: isAdvanceOpen,
        onClose: () => setIsAdvanceOpen(false)
      })]
    });
  };
};
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__.addFilter)('editor.BlockEdit', 'jupa-blocknimations/animate-controls', withAnimate);

/***/ },

/***/ "./src/js/ControlAdvance.js"
/*!**********************************!*\
  !*** ./src/js/ControlAdvance.js ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ControlAdvance: () => (/* binding */ ControlAdvance)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./const */ "./src/js/const.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const ControlAdvance = ({
  attributes: {
    className
  },
  setAttributes,
  isOpen,
  onClose
}) => {
  const currentType = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getCurrentFromClassName)(className, _const__WEBPACK_IMPORTED_MODULE_2__.ListAnimationType) || 'none-default';
  const currentAnimation = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getCurrentFromClassName)(className, _const__WEBPACK_IMPORTED_MODULE_2__.flatAnimateAll) || 'none-default';
  const currentDelay = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getCurrentFromClassName)(className, _const__WEBPACK_IMPORTED_MODULE_2__.ListDelay) || 'none-default';
  const isScrollDriven = currentType === 'animate__scrollDriven';
  const onChangeType = type => {
    setAttributes({
      className: (0,_utils__WEBPACK_IMPORTED_MODULE_3__.updateCurrentClass)(className, type, currentType)
    });
  };
  const onChangeAnimation = animation => {
    setAttributes({
      className: (0,_utils__WEBPACK_IMPORTED_MODULE_3__.updateCurrentClass)(className, animation, currentAnimation)
    });
  };
  const onChangeDelay = delay => {
    setAttributes({
      className: (0,_utils__WEBPACK_IMPORTED_MODULE_3__.updateCurrentClass)(className, delay, currentDelay)
    });
  };
  if (!isOpen) {
    return null;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Modal, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Advance', 'jupa-blocknimations'),
    onRequestClose: onClose,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalVStack, {
      spacing: 4,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalToggleGroupControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Type', 'jupa-blocknimations'),
        value: currentType,
        onChange: onChangeType,
        isBlock: true,
        children: _const__WEBPACK_IMPORTED_MODULE_2__.ListAnimationType.map(({
          title,
          value
        }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalToggleGroupControlOption, {
          value: value,
          label: title
        }, value))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Animation', 'jupa-blocknimations'),
        value: currentAnimation,
        onChange: onChangeAnimation,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
          value: "none-default",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('None', 'jupa-blocknimations')
        }), _const__WEBPACK_IMPORTED_MODULE_2__.ListAnimateAll.map(group => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("optgroup", {
          label: group.label,
          children: group.options.map(option => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
            value: option.value,
            children: option.title
          }, option.value))
        }, group.label))]
      }), !isScrollDriven && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Delay', 'jupa-blocknimations'),
        value: currentDelay,
        onChange: onChangeDelay,
        children: _const__WEBPACK_IMPORTED_MODULE_2__.ListDelay.map(option => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
          value: option.value,
          children: option.title
        }, option.value))
      })]
    })
  });
};

/***/ },

/***/ "./src/js/ControlAnimate.js"
/*!**********************************!*\
  !*** ./src/js/ControlAnimate.js ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ControlAnimate: () => (/* binding */ ControlAnimate)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/video.mjs");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./const */ "./src/js/const.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* harmony import */ var _DropdownButtons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DropdownButtons */ "./src/js/DropdownButtons.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);







const animationList = [..._const__WEBPACK_IMPORTED_MODULE_3__.ListAnimate, ..._const__WEBPACK_IMPORTED_MODULE_3__.ListAnimateImages];
const ControlAnimate = ({
  attributes: {
    className
  },
  setAttributes,
  onOpenAdvance
}) => {
  // Detected against the full catalog (which also includes the Reveal
  // group), so an "exotic" animation picked from the Advance modal is
  // still correctly replaced when switching from the toolbar.
  const currentAnimation = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getCurrentFromClassName)(className, _const__WEBPACK_IMPORTED_MODULE_3__.flatAnimateAll);
  const handleClassNameChange = (selectedAnimation, onClose) => {
    onClose();
    return setAttributes({
      className: (0,_utils__WEBPACK_IMPORTED_MODULE_4__.updateCurrentClass)(className, currentAnimation === selectedAnimation.value ? '' : selectedAnimation.value, currentAnimation)
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToolbarDropdownMenu, {
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_2__["default"],
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Select animation', 'jupa-blocknimations'),
    toggleProps: {
      isPressed: !!currentAnimation
    },
    children: ({
      onClose
    }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.MenuGroup, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_DropdownButtons__WEBPACK_IMPORTED_MODULE_5__.DropdownButtons, {
          ListItem: animationList,
          currentValue: currentAnimation,
          onHandleClick: handleClassNameChange,
          onClose: onClose
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.MenuGroup, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
          onClick: () => {
            onClose();
            onOpenAdvance();
          },
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('More Animations…', 'jupa-blocknimations')
        })
      })]
    })
  });
};

/***/ },

/***/ "./src/js/ControlDelay.js"
/*!********************************!*\
  !*** ./src/js/ControlDelay.js ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ControlDelay: () => (/* binding */ ControlDelay)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/backup.mjs");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./const */ "./src/js/const.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* harmony import */ var _DropdownButtons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DropdownButtons */ "./src/js/DropdownButtons.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);







const ControlDelay = ({
  attributes: {
    className
  },
  setAttributes
}) => {
  const currentDelay = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getCurrentFromClassName)(className, _const__WEBPACK_IMPORTED_MODULE_3__.ListDelay);
  const onHandleClassName = (delay, onClose) => {
    onClose();
    return setAttributes({
      className: (0,_utils__WEBPACK_IMPORTED_MODULE_4__.updateCurrentClass)(className, currentDelay === delay.value ? '' : delay.value, currentDelay)
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToolbarDropdownMenu, {
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_2__["default"],
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Select delay', 'jupa-blocknimations'),
    toggleProps: {
      isPressed: !!currentDelay
    },
    children: ({
      onClose
    }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.MenuGroup, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_DropdownButtons__WEBPACK_IMPORTED_MODULE_5__.DropdownButtons, {
        ListItem: _const__WEBPACK_IMPORTED_MODULE_3__.ListDelay,
        currentValue: currentDelay,
        onHandleClick: onHandleClassName,
        onClose: onClose
      })
    })
  });
};

/***/ },

/***/ "./src/js/ControlType.js"
/*!*******************************!*\
  !*** ./src/js/ControlType.js ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ControlType: () => (/* binding */ ControlType)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./const */ "./src/js/const.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons */ "./src/js/icons.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const SCROLL_DRIVEN = 'animate__scrollDriven';
const ON_ENTER = 'none-default';
const ControlType = ({
  attributes: {
    className
  },
  setAttributes
}) => {
  const currentType = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getCurrentFromClassName)(className, _const__WEBPACK_IMPORTED_MODULE_2__.ListAnimationType) || ON_ENTER;
  const isScrollDriven = currentType === SCROLL_DRIVEN;
  const onToggle = () => {
    const nextType = isScrollDriven ? ON_ENTER : SCROLL_DRIVEN;
    setAttributes({
      className: (0,_utils__WEBPACK_IMPORTED_MODULE_3__.updateCurrentClass)(className, nextType, currentType)
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToolbarButton, {
    icon: isScrollDriven ? _icons__WEBPACK_IMPORTED_MODULE_4__.mouse : _icons__WEBPACK_IMPORTED_MODULE_4__.lightning,
    label: isScrollDriven ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Click to change to On Enter', 'jupa-blocknimations') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Click to change to Scroll driven', 'jupa-blocknimations'),
    onClick: onToggle
  });
};

/***/ },

/***/ "./src/js/DropdownButtons.js"
/*!***********************************!*\
  !*** ./src/js/DropdownButtons.js ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DropdownButtons: () => (/* binding */ DropdownButtons)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const DropdownButtons = ({
  onHandleClick,
  currentValue,
  ListItem,
  onClose
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: ListItem.map(value => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.MenuItem, {
        isPressed: currentValue === value.value,
        className: "jupa-blocknimations__button",
        onClick: () => onHandleClick(value, onClose),
        children: value.title
      }, value.value);
    })
  });
};

/***/ },

/***/ "./src/js/const.js"
/*!*************************!*\
  !*** ./src/js/const.js ***!
  \*************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ListAnimate: () => (/* binding */ ListAnimate),
/* harmony export */   ListAnimateAll: () => (/* binding */ ListAnimateAll),
/* harmony export */   ListAnimateImages: () => (/* binding */ ListAnimateImages),
/* harmony export */   ListAnimationType: () => (/* binding */ ListAnimationType),
/* harmony export */   ListDelay: () => (/* binding */ ListDelay),
/* harmony export */   allowedBlocks: () => (/* binding */ allowedBlocks),
/* harmony export */   flatAnimateAll: () => (/* binding */ flatAnimateAll)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

const ListAnimate = [{
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('None', 'jupa-blocknimations'),
  value: 'none-default'
}, {
  title: 'fadeIn',
  value: 'animate__fadeIn'
}, {
  title: 'fadeInUp',
  value: 'animate__fadeInUp'
}, {
  title: 'fadeInRight',
  value: 'animate__fadeInRight'
}, {
  title: 'fadeInDown',
  value: 'animate__fadeInDown'
}, {
  title: 'fadeInLeft',
  value: 'animate__fadeInLeft'
}];
const ListDelay = [{
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('None', 'jupa-blocknimations'),
  value: 'none-default'
}, {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Delay 200ms', 'jupa-blocknimations'),
  value: 'animate__delay-200'
}, {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Delay 400ms', 'jupa-blocknimations'),
  value: 'animate__delay-400'
}, {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Delay 600ms', 'jupa-blocknimations'),
  value: 'animate__delay-600'
}, {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Delay 800ms', 'jupa-blocknimations'),
  value: 'animate__delay-800'
}, {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Delay 1000ms', 'jupa-blocknimations'),
  value: 'animate__delay-1000'
}, {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Delay 1500ms', 'jupa-blocknimations'),
  value: 'animate__delay-1500'
}, {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Delay 2000ms', 'jupa-blocknimations'),
  value: 'animate__delay-2000'
}, {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Delay 2500ms', 'jupa-blocknimations'),
  value: 'animate__delay-2500'
}, {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Delay 3000ms', 'jupa-blocknimations'),
  value: 'animate__delay-3000'
}];
const ListAnimationType = [{
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('On Enter', 'jupa-blocknimations'),
  value: 'none-default'
}, {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Scroll driven', 'jupa-blocknimations'),
  value: 'animate__scrollDriven'
}];

// Full Animate.css catalog (97 animations), grouped the same way the
// library's own docs group them, plus our own custom "Reveal" group. Shown
// in the "Advance" modal; the toolbar keeps only the curated ListAnimate /
// ListAnimateImages subsets above.
const ListAnimateAll = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Attention seekers', 'jupa-blocknimations'),
  options: ['bounce', 'flash', 'pulse', 'rubberBand', 'shakeX', 'shakeY', 'headShake', 'swing', 'tada', 'wobble', 'jello', 'heartBeat']
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Back entrances', 'jupa-blocknimations'),
  options: ['backInDown', 'backInLeft', 'backInRight', 'backInUp']
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Back exits', 'jupa-blocknimations'),
  options: ['backOutDown', 'backOutLeft', 'backOutRight', 'backOutUp']
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Bouncing entrances', 'jupa-blocknimations'),
  options: ['bounceIn', 'bounceInDown', 'bounceInLeft', 'bounceInRight', 'bounceInUp']
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Bouncing exits', 'jupa-blocknimations'),
  options: ['bounceOut', 'bounceOutDown', 'bounceOutLeft', 'bounceOutRight', 'bounceOutUp']
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Fading entrances', 'jupa-blocknimations'),
  options: ['fadeIn', 'fadeInDown', 'fadeInDownBig', 'fadeInLeft', 'fadeInLeftBig', 'fadeInRight', 'fadeInRightBig', 'fadeInUp', 'fadeInUpBig', 'fadeInTopLeft', 'fadeInTopRight', 'fadeInBottomLeft', 'fadeInBottomRight']
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Fading exits', 'jupa-blocknimations'),
  options: ['fadeOut', 'fadeOutDown', 'fadeOutDownBig', 'fadeOutLeft', 'fadeOutLeftBig', 'fadeOutRight', 'fadeOutRightBig', 'fadeOutUp', 'fadeOutUpBig', 'fadeOutTopLeft', 'fadeOutTopRight', 'fadeOutBottomRight', 'fadeOutBottomLeft']
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Flippers', 'jupa-blocknimations'),
  options: ['flip', 'flipInX', 'flipInY', 'flipOutX', 'flipOutY']
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Lightspeed', 'jupa-blocknimations'),
  options: ['lightSpeedInRight', 'lightSpeedInLeft', 'lightSpeedOutRight', 'lightSpeedOutLeft']
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Rotating entrances', 'jupa-blocknimations'),
  options: ['rotateIn', 'rotateInDownLeft', 'rotateInDownRight', 'rotateInUpLeft', 'rotateInUpRight']
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Rotating exits', 'jupa-blocknimations'),
  options: ['rotateOut', 'rotateOutDownLeft', 'rotateOutDownRight', 'rotateOutUpLeft', 'rotateOutUpRight']
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Specials', 'jupa-blocknimations'),
  options: ['hinge', 'jackInTheBox', 'rollIn', 'rollOut']
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Zooming entrances', 'jupa-blocknimations'),
  options: ['zoomIn', 'zoomInDown', 'zoomInLeft', 'zoomInRight', 'zoomInUp']
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Zooming exits', 'jupa-blocknimations'),
  options: ['zoomOut', 'zoomOutDown', 'zoomOutLeft', 'zoomOutRight', 'zoomOutUp']
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Sliding entrances', 'jupa-blocknimations'),
  options: ['slideInDown', 'slideInLeft', 'slideInRight', 'slideInUp']
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Sliding exits', 'jupa-blocknimations'),
  options: ['slideOutDown', 'slideOutLeft', 'slideOutRight', 'slideOutUp']
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Reveal', 'jupa-blocknimations'),
  options: ['revealUp', 'revealRight', 'revealDown', 'revealLeft']
}].map(({
  label,
  options
}) => ({
  label,
  options: options.map(name => ({
    title: name,
    value: `animate__${name}`
  }))
}));

// Every real Animate.css animation, flattened, plus "None" — used to detect
// the currently active animation regardless of whether it was picked from
// the toolbar's curated list or the full "Advance" catalog.
const flatAnimateAll = [{
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('None', 'jupa-blocknimations'),
  value: 'none-default'
}, ...ListAnimateAll.flatMap(group => group.options)];
const allowedBlocks = ['core/button', 'core/column', 'core/columns', 'core/cover', 'core/details', 'core/embed', 'core/gallery', 'core/group', 'core/heading', 'core/html', 'core/image', 'core/list', 'core/paragraph', 'core/post-title', 'core/post-featured-image', 'core/separator', 'core/social-links', 'core/video'];
const ListAnimateImages = [{
  title: 'revealUp',
  value: 'animate__revealUp'
}, {
  title: 'revealRight',
  value: 'animate__revealRight'
}, {
  title: 'revealDown',
  value: 'animate__revealDown'
}, {
  title: 'revealLeft',
  value: 'animate__revealLeft'
}];

/***/ },

/***/ "./src/js/icons.js"
/*!*************************!*\
  !*** ./src/js/icons.js ***!
  \*************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lightning: () => (/* binding */ lightning),
/* harmony export */   mouse: () => (/* binding */ mouse)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const mouse = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
    x: "6.75",
    y: "3",
    width: "10.5",
    height: "18",
    rx: "5.25",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
    x: "11.25",
    y: "7",
    width: "1.5",
    height: "4",
    rx: "0.375",
    fill: "currentColor"
  })]
});
const lightning = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    d: "M13 2 3 14h9l-1 8 10-12h-9l1-8z",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })
});

/***/ },

/***/ "./src/js/utils.js"
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCurrentFromClassName: () => (/* binding */ getCurrentFromClassName),
/* harmony export */   updateCurrentClass: () => (/* binding */ updateCurrentClass)
/* harmony export */ });
/* harmony import */ var _wordpress_token_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/token-list */ "@wordpress/token-list");
/* harmony import */ var _wordpress_token_list__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_token_list__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./const */ "./src/js/const.js");



// Controls whose values toggle independently of the main "animate__animated"
// pair (i.e. they don't represent an animation choice themselves). Adding a
// new secondary control just means listing it here — no string parsing to
// keep in sync.
const secondaryLists = [_const__WEBPACK_IMPORTED_MODULE_1__.ListDelay, _const__WEBPACK_IMPORTED_MODULE_1__.ListAnimationType];
const isSecondaryValue = value => secondaryLists.some(list => list.some(option => option.value === value));
const getCurrentFromClassName = (className, ListClass) => {
  const list = new (_wordpress_token_list__WEBPACK_IMPORTED_MODULE_0___default())(className);
  const style = ListClass.find(option => list.contains(`${option.value}`));
  const response = style !== undefined ? style.value : '';
  return response;
};
const updateCurrentClass = (className, newClass = '', oldClass = '') => {
  const list = new (_wordpress_token_list__WEBPACK_IMPORTED_MODULE_0___default())(className);
  if (oldClass) {
    if (oldClass === 'none-default') {
      // Nothing to remove; 'none-default' is never added to the class list.
    } else if (isSecondaryValue(oldClass)) {
      list.remove(`${oldClass}`);
    } else {
      list.remove(`animate__animated`);
      list.remove(`${oldClass}`);
    }
  }
  if (newClass) {
    if (newClass === 'none-default') {
      // Nothing to add; selecting "None" only clears the previous class.
    } else if (isSecondaryValue(newClass)) {
      list.add(`${newClass}`);
    } else {
      list.add(`animate__animated`);
      list.add(`${newClass}`);
    }
  }
  return list.value;
};

/***/ },

/***/ "./src/style.scss"
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "react/jsx-runtime"
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
(module) {

module.exports = window["ReactJSXRuntime"];

/***/ },

/***/ "@wordpress/block-editor"
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
(module) {

module.exports = window["wp"]["blockEditor"];

/***/ },

/***/ "@wordpress/components"
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
(module) {

module.exports = window["wp"]["components"];

/***/ },

/***/ "@wordpress/element"
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
(module) {

module.exports = window["wp"]["element"];

/***/ },

/***/ "@wordpress/hooks"
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
(module) {

module.exports = window["wp"]["hooks"];

/***/ },

/***/ "@wordpress/i18n"
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
(module) {

module.exports = window["wp"]["i18n"];

/***/ },

/***/ "@wordpress/primitives"
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
(module) {

module.exports = window["wp"]["primitives"];

/***/ },

/***/ "@wordpress/token-list"
/*!***********************************!*\
  !*** external ["wp","tokenList"] ***!
  \***********************************/
(module) {

module.exports = window["wp"]["tokenList"];

/***/ },

/***/ "./node_modules/@wordpress/icons/build-module/library/backup.mjs"
/*!***********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/backup.mjs ***!
  \***********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ backup_default)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
// packages/icons/src/library/backup.tsx


var backup_default = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, { d: "M13.75 4.194a8 8 0 0 0-4.812.415l-.301.132a8 8 0 0 0-3.203 2.692L4 6.001v4h4L6.517 8.516q.333-.526.758-.977l.011-.012q.341-.359.733-.662l.025-.02a6.5 6.5 0 0 1 2.469-1.172l.034-.008q.117-.027.236-.05l.015-.002q.32-.06.65-.088.08-.008.16-.013a7 7 0 0 1 .323-.01L12 5.5h.05l.203.005.101.003q.146.008.293.023l.12.014.158.02q.103.015.205.033l.058.011q.107.02.212.043l.068.016a6.5 6.5 0 0 1 1.447.521l.02.01a7 7 0 0 1 .452.25l.02.014a7 7 0 0 1 .468.317l.07.054a7 7 0 0 1 .403.334l.034.03q.091.084.18.172l.047.045q.293.294.548.627l.03.038.07.097.096.135q.037.053.072.107a6 6 0 0 1 .167.265l.042.073q.236.411.413.857l.027.07a6.5 6.5 0 0 1 .418 2.014 6.6 6.6 0 0 1-.034 1.04 6 6 0 0 1-.063.424q-.109.597-.32 1.152-.016.034-.028.07a6.5 6.5 0 0 1-.413.856l-.042.073a6 6 0 0 1-.327.497l-.087.118-.02.028a7 7 0 0 1-.526.604l-.035.035-.035.032q-.089.088-.18.172l-.034.03a7 7 0 0 1-.38.317l-.093.071q-.09.067-.183.13l-.076.053q-.112.076-.227.146-.218.133-.446.247l-.028.015-.192.093-.081.036a6.5 6.5 0 0 1-1.184.396l-.058.012a7 7 0 0 1-.475.087q-.08.012-.157.02l-.122.014q-.145.015-.292.023l-.136.005-.139.003L12 18.5q-.053-.002-.104-.003l-.127-.004-.162-.007q-.08-.005-.159-.013a7 7 0 0 1-.65-.088q-.008 0-.015-.002a7 7 0 0 1-.236-.05l-.034-.008a6.5 6.5 0 0 1-4.14-3.077l-1.3.75a8 8 0 0 0 3.564 3.26l.301.131a8 8 0 0 0 11.055-7.061l.007-.33c0-1.76-.581-3.473-1.653-4.87l-.206-.256a8 8 0 0 0-4.07-2.6zM12 7.75a.75.75 0 0 0-.75.75V12a.75.75 0 0 0 .218.529l1.282-.839-1.28.84 2.5 2.5a.75.75 0 1 0 1.06-1.06l-2.28-2.28V8.5a.75.75 0 0 0-.75-.75" }) });

//# sourceMappingURL=backup.mjs.map


/***/ },

/***/ "./node_modules/@wordpress/icons/build-module/library/video.mjs"
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/video.mjs ***!
  \**********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ video_default)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
// packages/icons/src/library/video.tsx


var video_default = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, { d: "M18.7 3H5.3C4 3 3 4 3 5.3v13.4C3 20 4 21 5.3 21h13.4c1.3 0 2.3-1 2.3-2.3V5.3C21 4 20 3 18.7 3zm.8 15.7c0 .4-.4.8-.8.8H5.3c-.4 0-.8-.4-.8-.8V5.3c0-.4.4-.8.8-.8h13.4c.4 0 .8.4.8.8v13.4zM10 15l5-3-5-3v6z" }) });

//# sourceMappingURL=video.mjs.map


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		const deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority ||= 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			let notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				let [chunkIds, fn, priority] = deferred[i];
/******/ 				let fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if (((priority & 1) === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					const r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		const getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.hasOwn(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		const installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		const webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			let [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		const chunkLoadingGlobal = globalThis["webpackChunkjupa_blocknimations"] ||= [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	let __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map
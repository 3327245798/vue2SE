"use strict";(self["webpackChunkvue2"]=self["webpackChunkvue2"]||[]).push([[563],{59563:function(e,t,i){i.r(t),i.d(t,{se_accessibility_toggle:function(){return s}});var n=i(26274),o='<?xml version="1.0" encoding="UTF-8"?>\n<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <title>accessibility</title>\n    <g id="Accessibility-Toggle" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g transform="translate(-181.000000, -352.000000)" id="Inactive">\n            <g transform="translate(169.000000, 340.000000)">\n                <g id="accessibility" transform="translate(12.000000, 12.000000)">\n                    <polygon id="Path" points="0 0 20 0 20 20 0 20"></polygon>\n                    <path d="M17.3647192,4.81948126 C18.4532216,4.45181144 19.4485827,6.12566556 18.3142436,6.97271376 L12.3080347,8.71472308 L12.3080347,12.2274859 L14.7062597,18.4387032 C15.1730604,20.0193395 13.008514,20.5498068 12.437165,19.19697 L12.4270018,19.1692449 C12.3287573,18.9012359 11.5182407,16.6901616 9.995452,12.5360221 L7.37531386,19.4284989 C6.42917944,20.6177445 4.91104407,19.7865335 5.23358745,18.4387032 L7.59559387,12.2274859 L7.59559387,8.71472308 L1.79598942,7.09457754 C0.503498067,6.53039233 1.41167475,4.24418453 2.84665333,4.92873042 L8.09701019,6.42601804 L11.7821212,6.42601804 L17.3647192,4.81948126 Z M9.967088,0 C11.2902407,0 12.3627115,1.07282399 12.3627115,2.39610892 C12.3627115,3.71930558 11.2902847,4.79177643 9.967088,4.79177643 C8.64380317,4.79177643 7.57062603,3.71930558 7.57062603,2.39606478 C7.57062603,1.07282399 8.64380317,0 9.967088,0 Z" id="Shape" fill="#FFFFFF" fill-rule="nonzero"></path>\n                </g>\n            </g>\n        </g>\n    </g>\n</svg>',l='button{-moz-align-items:center;-ms-flex-align:center;align-items:center;border-color:var(--se-alternative, #ffffff) !important;background-color:var(--se-alternative-contrast, #333333);border:2px solid;border-radius:22px;bottom:20px;display:-ms-inline-flexbox;display:inline-flex;font-family:inherit;margin:4px;padding:4px;position:absolute;-webkit-transition-property:outline-width;transition-property:outline-width;-webkit-transition-duration:0.2s;transition-duration:0.2s}:host(:not([dir="rtl"])) button{left:20px}:host([dir="rtl"]) button{right:20px}button:hover,button:focus{--se-a11y-switch:inline-block;--se-a11y-label:inline-block}:host(:not([dir="rtl"])) button:hover,:host(:not([dir="rtl"])) button:focus{padding:4px 12px 4px 4px}:host([dir="rtl"]) button:hover,:host([dir="rtl"]) button:focus{padding:4px 4px 4px 12px}.toggle{display:var(--se-a11y-switch, none);padding:0 12px}label{color:var(--se-alternative, #ffffff);display:var(--se-a11y-label, none);font-weight:600}',s=function(){function e(e){(0,n.r)(this,e),this.didChange=(0,n.c)(this,"didChange",7),this.selected=!1,this.labelModeOn="Accessibility mode on",this.labelModeOff="Accessibility mode off"}return e.prototype.selectedDidChange=function(){this.didChange.emit({selected:this.selected})},e.prototype.setLabel=function(e){this.label=e?this.labelModeOn:this.labelModeOff},e.prototype.onClickHandler=function(){this.selected=!this.selected,this.setLabel(this.selected)},e.prototype.componentWillLoad=function(){this.setLabel(this.selected)},e.prototype.render=function(){var e=this;return(0,n.h)("button",{onClick:function(){return e.onClickHandler()},role:"switch","aria-label":this.label,"aria-checked":"".concat(this.selected)},(0,n.h)("se-icon",{size:"medium",color:"alternative",innerHTML:o}),(0,n.h)("se-checkbox",{noInteractive:!0,option:"toggle",selected:this.selected,class:"toggle"}),(0,n.h)("label",null,this.label))},Object.defineProperty(e.prototype,"el",{get:function(){return(0,n.g)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"watchers",{get:function(){return{selected:["selectedDidChange"]}},enumerable:!1,configurable:!0}),e}();s.style=l}}]);
//# sourceMappingURL=563.973751d4.js.map
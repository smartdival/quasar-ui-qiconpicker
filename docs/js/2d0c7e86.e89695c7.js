(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d0c7e86"],{"532d":function(a,e,t){"use strict";t.r(e);var n=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",[t("div",{staticClass:"row justify-center q-ma-md"},[t("q-select",{staticClass:"q-ma-sm col-4",attrs:{options:a.options,label:"Items Per Page"},model:{value:a.pagination.itemsPerPage,callback:function(e){a.$set(a.pagination,"itemsPerPage",e)},expression:"pagination.itemsPerPage"}})],1),t("q-separator"),t("q-icon-picker",{staticStyle:{height:"220px"},attrs:{"icon-set":"material-icons",pagination:a.pagination},on:{"update:pagination":function(e){a.pagination=e}},model:{value:a.value,callback:function(e){a.value=e},expression:"value"}})],1)},i=[],o={data:function(){return{value:"",pagination:{itemsPerPage:75,page:0},options:[25,50,75,100]}}},s=o,l=t("2877"),c=Object(l["a"])(s,n,i,!1,null,null,null);e["default"]=c.exports}}]);
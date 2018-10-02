(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{237:function(e,t,a){"use strict";a.r(t);var i=a(0),n=Object(i.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[e._m(0),e._v(" "),a("p",[e._v("The Directus permissions system is quite granular so it is important to understand the available options. Below are the actual values that can be saved into "),a("code",[e._v("directus_permissions")]),e._v(". If you're looking for more information on how the permissions work you can "),a("router-link",{attrs:{to:"./../../app/admin-guide/permissions.html"}},[e._v("learn more on our App's permissions page")]),e._v(".")],1),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),e._m(13)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"permissions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#permissions","aria-hidden":"true"}},[this._v("#")]),this._v(" Permissions")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"create"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create","aria-hidden":"true"}},[this._v("#")]),this._v(" Create")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("code",[this._v("none")]),this._v(" (or "),t("code",[this._v("NULL")]),this._v(", default) Can not create any items")]),this._v(" "),t("li",[t("code",[this._v("full")]),this._v(" Can create items")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"read"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#read","aria-hidden":"true"}},[this._v("#")]),this._v(" Read")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("code",[e._v("none")]),e._v(" (or "),a("code",[e._v("NULL")]),e._v(", default) Can not view any items")]),e._v(" "),a("li",[a("code",[e._v("mine")]),e._v(" Can only view "),a("em",[e._v("their")]),e._v(" items")]),e._v(" "),a("li",[a("code",[e._v("role")]),e._v(" Can only view items created by members of this role")]),e._v(" "),a("li",[a("code",[e._v("full")]),e._v(" Can view all items")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"update"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#update","aria-hidden":"true"}},[this._v("#")]),this._v(" Update")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("code",[e._v("none")]),e._v(" (or "),a("code",[e._v("NULL")]),e._v(", default) Can not update any items")]),e._v(" "),a("li",[a("code",[e._v("mine")]),e._v(" Can only update "),a("em",[e._v("their")]),e._v(" items")]),e._v(" "),a("li",[a("code",[e._v("role")]),e._v(" Can only update items created by members of this role")]),e._v(" "),a("li",[a("code",[e._v("full")]),e._v(" Can update all items")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"delete"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#delete","aria-hidden":"true"}},[this._v("#")]),this._v(" Delete")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("code",[e._v("none")]),e._v(" (or "),a("code",[e._v("NULL")]),e._v(", default) Can not delete any items")]),e._v(" "),a("li",[a("code",[e._v("mine")]),e._v(" Can only delete "),a("em",[e._v("their")]),e._v(" items")]),e._v(" "),a("li",[a("code",[e._v("role")]),e._v(" Can only delete items created by members of this role")]),e._v(" "),a("li",[a("code",[e._v("full")]),e._v(" Can delete all items")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"comment"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#comment","aria-hidden":"true"}},[this._v("#")]),this._v(" Comment")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("code",[e._v("none")]),e._v(" Can not comment")]),e._v(" "),a("li",[a("code",[e._v("read")]),e._v(" Can only see comments")]),e._v(" "),a("li",[a("code",[e._v("create")]),e._v(" Can add comments")]),e._v(" "),a("li",[a("code",[e._v("update")]),e._v(" (or "),a("code",[e._v("NULL")]),e._v(", default) Can add, edit and delete their comments")]),e._v(" "),a("li",[a("code",[e._v("full")]),e._v(" Can add, edit and delete any comments (including other users)")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"explain-force"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#explain-force","aria-hidden":"true"}},[this._v("#")]),this._v(" Explain (Force)")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("code",[e._v("none")]),e._v(" (or "),a("code",[e._v("NULL")]),e._v(', default) Never requires "commit" comment')]),e._v(" "),a("li",[a("code",[e._v("on_create")]),e._v(' Requires a "commit" comment on Create')]),e._v(" "),a("li",[a("code",[e._v("on_update")]),e._v(' Requires a "commit" comment on Update')]),e._v(" "),a("li",[a("code",[e._v("always")]),e._v(' Requires a "commit" comment on Create and Update')])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("mine")]),e._v(" and "),a("code",[e._v("role")]),e._v(" permission options are only available when the parent collection contains "),a("code",[e._v("created_on")]),e._v(" and "),a("code",[e._v("created_by")]),e._v(" interface fields.")])])}],!1,null,null,null);n.options.__file="permissions.md";t.default=n.exports}}]);
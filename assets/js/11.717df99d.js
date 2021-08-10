(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{519:function(s,e,a){"use strict";a.r(e);var t=a(6),n=Object(t.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("一般來說使用者是不需要去管這些 cache 何時會被清除的，\n所以 Linux 也沒有專門的指令來做這件事，\n不過依然有提供一個 proc file system 介面 "),a("code",[s._v("/proc/sys/vm/drop_caches")]),s._v(" 可以強制 kernel 清理快取。\n若有這樣的需求，\n我們只需要對這個file寫入 1~3 這三種控制碼其中一種，\n對應的記憶體快取種類便會被強制清理。")]),s._v(" "),a("p",[s._v("若寫入 1 會清除pagecache：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# echo 1 > /proc/sys/vm/drop_caches")]),s._v("\n")])])]),a("p",[s._v("若寫入 2 會清除dentries與inodes：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# echo 2 > /proc/sys/vm/drop_caches")]),s._v("\n")])])]),a("p",[s._v("若寫入 3 則有等同於 1+2 的效果，會清除pagecache、dentries及inodes：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# echo 3 > /proc/sys/vm/drop_caches")]),s._v("\n")])])]),a("p",[s._v("要寫入這個file必須有root權限，所以非root帳號需要使用"),a("code",[s._v("sudo")]),s._v("來執行：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" -c "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'echo 1 > /proc/sys/vm/drop_caches'")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" -c "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'echo 2 > /proc/sys/vm/drop_caches'")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" -c "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'echo 3 > /proc/sys/vm/drop_caches'")]),s._v("\n")])])]),a("h1",{attrs:{id:"參考資料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#參考資料"}},[s._v("#")]),s._v(" 參考資料")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://medium.com/hungys-blog/clear-linux-memory-cache-manually-90bec95ea003",target:"_blank",rel:"noopener noreferrer"}},[s._v("手動清除 Linux 記憶體快取"),a("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=n.exports}}]);
/*!
 * @quasar/quasar-ui-qiconpicker v1.4.3
 * (c) 2022 Jeff Galbraith <jeff@quasar.dev>
 * Released under the MIT License.
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue'), require('quasar')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue', 'quasar'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.QIconPicker = {}, global.Vue, global.Quasar));
})(this, (function (exports, Vue, quasar) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var Vue__default = /*#__PURE__*/_interopDefaultLegacy(Vue);

  var version$1 = "1.4.3";

  /*!
   * q-colorize-mixin v1.0.10
   * (c) 2020 Jeff Galbraith <jeff@quasar.dev>
   * Released under the MIT License.
   */
  var version="1.0.10",CSS_COLOR_NAMES=["transparent","aliceblue","antiquewhite","aqua","aquamarine","azure","beige","bisque","black","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgrey","darkgreen","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkslategrey","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dimgrey","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","gray","grey","green","greenyellow","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgrey","lightgreen","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightslategrey","lightsteelblue","lightyellow","lime","limegreen","linen","magenta","maroon","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","navy","oldlace","olive","olivedrab","orange","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","purple","red","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","slategrey","snow","springgreen","steelblue","tan","teal","thistle","tomato","turquoise","violet","wheat","white","whitesmoke","yellow","yellowgreen"],QColorizeMixin={name:"QColorizeMixin",props:{color:String},methods:{isNamedCssColor:function(e){return !!e&&CSS_COLOR_NAMES.includes(e.toLowerCase())},isCssColor:function(e){return !!e&&(!!e.match(/^(#|(rgb|hsl)a?\()/)||this.isNamedCssColor(e))},isCssVar:function(e){return !!e&&e.startsWith("--")},calculateColor:function(e,r){return void 0===r&&(r="black"),void 0===e&&void 0!==r?this.calculateColor(r):this.isCssColor(e)?e:this.makeQuasarColorVar(e,r)},makeQuasarColorVar:function(e,r){return "var("+(this.isCssVar(e)?e:"--q-color-"+e)+", '"+r+"')"},isValidCssColor:function(e){return this.isCssColor(e)||this.isCssVar(e)},setBothColors:function(e,r,o){return void 0===o&&(o={}),this.setTextColor(e,this.setBackgroundColor(r,o))},setBackgroundColor:function(e,r){var o;if(void 0===r&&(r={}),this.isValidCssColor(e)){var i=this.calculateColor(e);void 0===r.style&&(r.style={}),r.style=Object.assign({},r.style,{"background-color":""+i});}else if(e){var l=e.toString().trim();void 0===r.class&&(r.class={}),r.class=Object.assign({},r.class,((o={})["bg-"+l]=!0,o));}return r},setTextColor:function(e,r){var o;if(void 0===r&&(r={}),this.isValidCssColor(e)){var i=this.calculateColor(e);void 0===r.style&&(r.style={}),r.style=Object.assign({},r.style,{color:""+i,"caret-color":""+i});}else if(e){var l=e.toString().trim();void 0===r.class&&(r.class={}),r.class=Object.assign({},r.class,((o={})["text-"+l]=!0,o));}return r},setBorderColor:function(e,r){var o;if(void 0===r&&(r={}),this.isValidCssColor(e)){var i=this.calculateColor(e);void 0===r.style&&(r.style={}),r.style=Object.assign({},r.style,{"border-color":""+i});}else if(e){var l=e.toString().trim();void 0===r.class&&(r.class={}),r.class=Object.assign({},r.class,((o={})["border-color-"+l]=!0,o));}return r}}};QColorizeMixin.version=version;

  var props = {
    base: {
      value: String,
      iconSet: {
        type: String,
        validator: function (v) { return [
          'material-icons',
          'material-icons-outlined',
          'material-icons-round',
          'material-icons-sharp',
          'ionicons-v4',
          'mdi-v4',
          'mdi-v5',
          'mdi-v6',
          'fontawesome-v5',
          'eva-icons',
          'themify',
          'line-awesome',
          'bootstrap-icons',
          ''].includes(v); },
        default: ''
      },
      icons: Array,
      filter: String,
      tags: Array,
      dense: Boolean,
      tooltips: Boolean,
      noFooter: Boolean,
      fontSize: {
        type: String,
        default: 'inherit'
      },
      selectedColor: {
        type: String,
        default: 'grey-1'
      },
      selectedBackgroundColor: {
        type: String,
        default: 'primary'
      },
      paginationProps: {
        type: Object,
        default: function () { return ({
          maxPages: 5,
          input: true
        }); }
      },
      pagination: Object,
      animated: Boolean,
      transitionPrev: {
        type: String,
        default: 'slide-right'
      },
      transitionNext: {
        type: String,
        default: 'slide-left'
      }
    }
  };

  // Mixins

  var Component = {
    name: 'QIconPicker',

    mixins: [QColorizeMixin],

    props: Object.assign({}, props.base),

    data: function data () {
      return {
        iconsList: [],
        innerPagination: {
          page: 1,
          itemsPerPage: 0,
          totalPages: 0
        },
        categories: [],
        width: '100%',
        height: '100%'
      }
    },

    beforeMount: function beforeMount () {
      if (this.pagination) {
        this.$emit('update:pagination', Object.assign({}, this.__computedPagination));
      }
    },

    mounted: function mounted () {
      if (this.iconSet) {
        this.__loadIconSet(this.iconSet);
      }
      else if (this.icons !== void 0 && this.icons.length > 0) {
        this.iconsList = this.icons;
      }
      this.__updatePagination();
    },

    computed: {
      __filteredIcons: function __filteredIcons () {
        var this$1$1 = this;

        var icons = this.iconsList;
        if (icons) {
          if (this.tags !== void 0 && this.tags !== '' && this.tags !== null && this.tags.length > 0) {
            icons = icons.filter(function (icon) {
              return icon.tags.filter(function (tag) { return this$1$1.tags.includes(tag); }).length > 0
            });
          }
          if (this.filter !== void 0 && this.filter !== '' && this.filter !== null) {
            icons = icons.filter(function (icon) { return icon.name.includes(this$1$1.filter); });
          }
        }
        return icons
      },

      // the icons to display after filtering and then pagination
      __displayedIcons: function __displayedIcons () {
        var icons = [];
        if (this.iconsList) {
          icons = this.__filteredIcons;

          // should the icons be paged?
          if (this.pagination && this.pagination.itemsPerPage !== 0) {
            icons = icons.slice(this.__firstItemIndex, this.__lastItemIndex);
          }
        }
        return icons
      },

      __computedPagination: function __computedPagination () {
        return this.__fixPagination(Object.assign({}, this.innerPagination,
          this.pagination))
      },

      // index of first item on a page
      __firstItemIndex: function __firstItemIndex () {
        var ref = this.__computedPagination;
        var page = ref.page;
        var itemsPerPage = ref.itemsPerPage;
        return (page - 1) * itemsPerPage
      },

      // index of last item on a page
      __lastItemIndex: function __lastItemIndex () {
        var ref = this.__computedPagination;
        var page = ref.page;
        var itemsPerPage = ref.itemsPerPage;
        return page * itemsPerPage
      },

      // returns true if on first page
      __isFirstPage: function __isFirstPage () {
        return this.__computedPagination.page === 1
      },

      // the number of pages available based on itemsPerPage
      __pagesNumber: function __pagesNumber () {
        return this.__computedPagination.itemsPerPage === 0
          ? 1
          : Math.max(
            1,
            Math.ceil(this.__filteredIcons.length / this.__computedPagination.itemsPerPage)
          )
      },

      // returns true if on last page
      __isLastPage: function __isLastPage () {
        return this.__lastItemIndex === 0
          ? true
          : this.__computedPagination.page >= this.__pagesNumber
      }
    },

    watch: {
      iconSet: function iconSet (val) {
        var this$1$1 = this;

        if (val) {
          this.__loadIconSet(val);
          this.__updatePagination();
          this.$nextTick(function () {
            // whenever the icon set changes, it resets pagination page to page 1
            this$1$1.__setPagination({ page: 1 });
          });
          // scroll to top of QScrollArea, if applicable
          this.$refs.scrollArea.setScrollPosition(0);
        }
      },

      icons: function icons (val) {
        var this$1$1 = this;

        if (this.icons !== void 0 && this.icons.length > 0) {
          this.iconsList = this.icons;
        }
        this.__updatePagination();
        this.$nextTick(function () {
          // whenever the icon set changes, it resets pagination page to page 1
          this$1$1.__setPagination({ page: 1 });
        });
        // scroll to top of QScrollArea, if applicable
        this.$refs.scrollArea.setScrollPosition(0);
      },

      pagination: function pagination (newVal, oldVal) {
        if (!this.__samePagination(oldVal, newVal)) {
          this.__updatePagination();
        }
      },

      'pagination.itemsPerPage': function pagination_itemsPerPage () {
        this.__updatePagination();
      },

      'pagination.page': function pagination_page () {
        this.__updatePagination();
      },

      filter: function filter () {
        // whenever the filter changes, it resets pagination page to page 1
        this.__setPagination({ page: 1, totalPages: this.__pagesNumber });
        this.__updatePagination();
      },

      tags: function tags (val) {
        // whenever the tags change, it resets pagination page to page 1
        this.__setPagination({ page: 1, totalPages: this.__pagesNumber });
        this.__updatePagination();
      }
    },

    methods: {
      __loadIconSet: function __loadIconSet (iconSet) {
        this.iconsList = [];
        if (iconSet) {
          // detect if UMD version is installed
          if (window.QIconPicker) {
            var name = iconSet.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
            if (window.QIconPicker.iconSet && window.QIconPicker.iconSet[name]) {
              var iconsSet = window.QIconPicker.iconSet[name];
              this.iconsList = iconsSet.icons;
            }
            else {
              /* eslint-disable */
              console.error('QIconPicker: no icon set loaded called ' + iconSet +'\'');
              console.error('Be sure to load the UMD version of the icon set in a script tag before using QIconPicker UMD version');
              /* eslint-enable */
            }
          }
          else {
            try {
              var iconsSet$1 = require('@quasar/quasar-ui-qiconpicker/src/components/icon-set/' + iconSet + '.js').default;
              this.iconsList = iconsSet$1.icons;
            }
            catch (e) {
              // eslint-disable-next-line no-console
              console.error('QIconPicker: cannot find icon set found called ' + iconSet + '\'');
            }
          }
        }
      },

      __fixPagination: function __fixPagination (p) {
        if (p.page < 1) {
          p.page = 1;
        }
        if (p.itemsPerPage === void 0 || p.itemsPerPage < 1) {
          p.itemsPerPage = 0; // all
        }
        return p
      },

      // returns true if the pagination is the same,
      // otherwise returns false if it has changed
      __samePagination: function __samePagination (oldPag, newPag) {
        // eslint-disable-next-line no-unused-vars
        for (var prop in newPag) {
          if (newPag[prop] !== oldPag[prop]) {
            return false
          }
        }
        return true
      },

      __setPagination: function __setPagination (val) {
        var newPagination = this.__fixPagination(Object.assign({}, this.__computedPagination,
          val));

        if (this.pagination) {
          this.$emit('update:pagination', newPagination);
        }
        else {
          this.innerPagination = newPagination;
        }
      },

      __updatePagination: function __updatePagination () {
        if (this.pagination !== void 0) {
          this.__setPagination({ total: this.__filteredIcons.length, totalPages: this.__pagesNumber });
        }
      },

      // public function - goes to previous page
      prevPage: function prevPage () {
        var ref = this.__computedPagination;
        var page = ref.page;
        if (page > 1) {
          this.__setPagination({ page: page - 1 });
        }
      },

      // public function - goes to next page
      nextPage: function nextPage () {
        var ref = this.__computedPagination;
        var page = ref.page;
        var itemsPerPage = ref.itemsPerPage;
        if (this.__lastItemIndex > 0 && page * itemsPerPage < this.__filteredIcons.length) {
          this.__setPagination({ page: page + 1 });
        }
      },

      __getCategories: function __getCategories () {
        var t = [];
        this.iconsList.forEach(function (icon) {
          var tags = icon.tags;
          if (tags && tags.length > 0) {
            tags.forEach(function (tag) {
              if (t.includes(tag) !== true) {
                t.push(tag);
              }
            });
          }
        });
        t.sort();
        this.categories = t;
        return true
      },

      __onResize: function __onResize (size) {
        this.width = size.width;
        this.height = size.height;
      },

      __renderBody: function __renderBody (h) {
        return h('div', {
          staticClass: 'q-icon-picker__body col column'
        }, [
          this.__renderScrollArea(h),
          h(quasar.QResizeObserver, {
            on: {
              resize: this.__onResize
            }
          })
        ])
      },

      __renderFooter: function __renderFooter (h) {
        var slot = this.$scopedSlots.footer;

        return h('div', {
          staticClass: 'q-icon-picker__footer flex flex-center'
        }, [
          slot ? slot(this.__computedPagination) : this.__renderPagination(h)
        ])
      },

      __renderPagination: function __renderPagination (h) {
        var this$1$1 = this;

        if (this.pagination && this.pagination.itemsPerPage === 0) { return '' }

        var slot = this.$scopedSlots.pagination;
        var ref = this.__computedPagination;
        var page = ref.page;
        var totalPages = ref.totalPages;

        return slot || h(quasar.QPagination, this.setBothColors(this.color, this.backgroundColor, {
          staticClass: 'q-icon-picker__pagination',
          props: Object.assign({}, this.paginationProps,
            {value: page,
            max: totalPages}),
          on: {
            input: function (v) {
              this$1$1.__setPagination({ page: v });
            }
          }
        }))
      },

      __renderScrollArea: function __renderScrollArea (h) {
        return h(quasar.QScrollArea, {
          ref: 'scrollArea',
          style: {
            width: this.width + 'px',
            height: this.height + 'px'
          }
          // staticClass: 'q-icon-picker__scroll-area col column'
        }, [
          this.__renderContainer(h)
        ])
      },

      __renderContainer: function __renderContainer (h) {
        var container = h('div', {
          key: this.__computedPagination.page,
          staticClass: 'q-icon-picker__container col'
        }, [].concat( this.__renderIcons(h) ));

        if (this.animated === true) {
          var transition = 'q-transition--' + (this.direction === 'prev' ? this.transitionPrev : this.transitionNext);
          return h('transition', {
            props: {
              name: transition,
              appear: true
            }
          }, [
            container
          ])
        }

        return container
      },

      __renderTooltip: function __renderTooltip (h, name) {
        return h(quasar.QTooltip, {
        }, name)
      },

      __renderIcons: function __renderIcons (h) {
        var this$1$1 = this;

        return this.__displayedIcons.map(function (icon) { return this$1$1.__renderIcon(h, icon); })
      },

      __renderIcon: function __renderIcon (h, icon) {
        var this$1$1 = this;

        var slot = this.$scopedSlots.icon;

        var name = (icon.prefix !== void 0 ? icon.prefix + ' ' + icon.name : icon.name);

        if (slot) {
          return slot(name)
        }

        var isSelected = name === this.value;
        var color = isSelected ? this.selectedColor : '';
        var backgroundColor = isSelected ? this.selectedBackgroundColor : '';

        return h(quasar.QBtn, this.setBothColors(color, backgroundColor, {
          staticClass: 'q-icon-picker__icon' + (isSelected ? ' q-icon-picker__active' : ''),
          style: {
            'font-size': this.fontSize
          },
          domProps: {
            id: name
          },
          props: {
            unelevated: true,
            dense: this.dense,
            noWrap: true,
            icon: name
          },
          on: {
            click: function () {
              this$1$1.$emit('input', name);
            }
          }
        }), [
          this.tooltips === true && this.__renderTooltip(h, name)
        ])
      }
    },

    render: function render (h) {
      var this$1$1 = this;

      var picker = h('div', this.setBothColors(this.color, this.backgroundColor, {
        ref: 'picker',
        staticClass: 'q-icon-picker column'
      }), [
        this.__renderBody(h),
        this.noFooter !== true && this.pagination !== void 0 && this.__renderFooter(h)
      ]);

      this.$nextTick(function () {
        this$1$1.__getCategories();
        this$1$1.$emit('tags', this$1$1.categories);
      });

      return picker
    }
  };

  var Plugin = {
    version: version$1,
    Component: Component,

    install: function install (Vue) {
      Vue.component(Component.name, Component);
    }
  };

  Vue__default["default"].use(Plugin);

  exports.Component = Component;
  exports.version = version$1;

  Object.defineProperty(exports, '__esModule', { value: true });

}));

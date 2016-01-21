!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in p||(p[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==v.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=p[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(v.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=p[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return x[e]||(x[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},r.name);t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=p[s],v=x[s];v?l=v.exports:c&&!c.declarative?l=c.esModule:c?(d(c),v=c.module,l=v.exports):l=f(s),v&&v.importers?(v.importers.push(t),t.dependencies.push(v)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=p[e];if(t)t.declarative?c(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=f(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=p[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){if(r===e)return r;var t={};if("object"==typeof r||"function"==typeof r)if(g){var n;for(var o in r)(n=Object.getOwnPropertyDescriptor(r,o))&&h(t,o,n)}else{var a=r&&r.hasOwnProperty;for(var o in r)(!a||r.hasOwnProperty(o))&&(t[o]=r[o])}return t["default"]=r,h(t,"__useDefault",{value:!0}),t}function c(r,t){var n=p[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==v.call(t,u)&&(p[u]?c(u,t):f(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function f(e){if(D[e])return D[e];if("@node/"==e.substr(0,6))return y(e.substr(6));var r=p[e];if(!r)throw"Module "+e+" not present.";return a(e),c(e,[]),p[e]=void 0,r.declarative&&h(r.module.exports,"__esModule",{value:!0}),D[e]=r.declarative?r.module.exports:r.esModule}var p={},v=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},g=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(m){g=!1}var h;!function(){try{Object.defineProperty({},"a",{})&&(h=Object.defineProperty)}catch(e){h=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var x={},y="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,D={"@empty":{}};return function(e,n,o){return function(a){a(function(a){for(var u={_nodeRequire:y,register:r,registerDynamic:t,get:f,set:function(e,r){D[e]=r},newModule:function(e){return e}},d=0;d<n.length;d++)(function(e,r){r&&r.__esModule?D[e]=r:D[e]=s(r)})(n[d],arguments[d]);o(u);var i=f(e[0]);if(e.length>1)for(var d=1;d<e.length;d++)f(e[d]);return i.__useDefault?i["default"]:i})}}}("undefined"!=typeof self?self:global)

(["1"], [], function($__System) {

!function(){var t=$__System;if("undefined"!=typeof window&&"undefined"!=typeof document&&window.location)var s=location.protocol+"//"+location.hostname+(location.port?":"+location.port:"");t.set("@@cjs-helpers",t.newModule({getPathVars:function(t){var n,o=t.lastIndexOf("!");n=-1!=o?t.substr(0,o):t;var e=n.split("/");return e.pop(),e=e.join("/"),"file:///"==n.substr(0,8)?(n=n.substr(7),e=e.substr(7),isWindows&&(n=n.substr(1),e=e.substr(1))):s&&n.substr(0,s.length)===s&&(n=n.substr(s.length),e=e.substr(s.length)),{filename:n,dirname:e}}}))}();
$__System.register('2', ['3'], function (_export) {
    /**
     * Martian - Core JavaScript API for MindTouch
     *
     * Copyright (c) 2015 MindTouch Inc.
     * www.mindtouch.com  oss@mindtouch.com
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *     http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    'use strict';

    var modelHelper, pageRatingModel;
    return {
        setters: [function (_) {
            modelHelper = _['default'];
        }],
        execute: function () {
            pageRatingModel = {
                parse: function parse(data) {
                    var obj = modelHelper.fromJson(data);
                    var parsed = {
                        count: modelHelper.getInt(obj['@count']),
                        date: modelHelper.getDate(obj['@date']),
                        seatedCount: modelHelper.getInt(obj['@seated.count']),
                        unseatedCount: modelHelper.getInt(obj['@unseated.count'])
                    };
                    if ('@score' in obj && obj['@score'] !== '') {
                        parsed.score = modelHelper.getInt(obj['@score']);
                    }
                    if ('@seated.score' in obj && obj['@seated.score'] !== '') {
                        parsed.seatedScore = modelHelper.getInt(obj['@seated.score']);
                    }
                    if ('@unseated.score' in obj && obj['@unseated.score'] !== '') {
                        parsed.unseatedScore = modelHelper.getInt(obj['@unseated.score']);
                    }
                    if ('@score.trend' in obj) {
                        parsed.scoreTrend = modelHelper.getInt(obj['@score.trend']);
                    }
                    if ('@seated.score.trend' in obj) {
                        parsed.seatedScoreTrend = modelHelper.getInt(obj['@seated.score.trend']);
                    }
                    if ('@unseated.score.trend' in obj) {
                        parsed.unseatedScoreTrend = modelHelper.getInt(obj['@unseated.score.trend']);
                    }
                    if ('user.ratedby' in obj) {
                        var ratedBy = obj['user.ratedby'];
                        parsed.userRatedBy = {
                            id: modelHelper.getInt(ratedBy['@id']),
                            score: modelHelper.getInt(ratedBy['@score']),
                            date: modelHelper.getDate(ratedBy['@date']),
                            href: ratedBy['@href'],
                            seated: modelHelper.getBool(ratedBy['@seated'])
                        };
                    }
                    return parsed;
                }
            };

            _export('default', pageRatingModel);
        }
    };
});
$__System.register('4', ['2', '3', '5'], function (_export) {
    /**
     * Martian - Core JavaScript API for MindTouch
     *
     * Copyright (c) 2015 MindTouch Inc.
     * www.mindtouch.com  oss@mindtouch.com
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *     http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    'use strict';

    var pageRatingModel, modelHelper, userModel, pageModel;
    return {
        setters: [function (_2) {
            pageRatingModel = _2['default'];
        }, function (_) {
            modelHelper = _['default'];
        }, function (_3) {
            userModel = _3['default'];
        }],
        execute: function () {
            pageModel = {
                parse: function parse(data) {
                    var obj = modelHelper.fromJson(data);
                    var parsed = {
                        id: modelHelper.getInt(obj['@id']),
                        deleted: modelHelper.getBool(obj['@deleted']),
                        dateCreated: modelHelper.getDate(obj['date.created']),
                        language: obj.language,
                        namespace: obj.namespace,
                        path: modelHelper.getString(obj.path),
                        title: obj.title,
                        uriUi: obj['uri.ui']
                    };
                    modelHelper.addIfDefined(obj['@href'], 'href', parsed);
                    modelHelper.addIfDefined(obj['@revision'], 'revision', parsed);
                    modelHelper.addIfDefined(obj['@draft.state'], 'draftState', parsed);
                    modelHelper.addIfDefined(obj.article, 'article', parsed);
                    modelHelper.addIfDefined(obj['language.effective'], 'languageEffective', parsed);
                    modelHelper.addIfDefined(obj.timeuuid, 'timeuuid', parsed);
                    if ('@unpublish' in obj) {
                        parsed.unpublish = modelHelper.getBool(obj['@unpublish']);
                    }
                    if ('@virtual' in obj) {
                        parsed.virtual = modelHelper.getBool(obj['@virtual']);
                    }
                    if ('date.modified' in obj) {
                        parsed.dateModified = modelHelper.getDate(obj['date.modified']);
                    }
                    if ('date.edited' in obj) {
                        parsed.dateEdited = modelHelper.getDate(obj['date.edited']);
                    }
                    if ('page.parent' in obj) {
                        parsed.pageParent = pageModel._getParents(obj['page.parent']);
                    }
                    if ('rating' in obj) {
                        parsed.rating = pageRatingModel.parse(obj.rating);
                    }
                    if ('user.author' in obj) {
                        parsed.userAuthor = userModel.parse(obj['user.author']);
                    }

                    // Only parse subpages if the property exists, and it has a 'page'
                    //  sub-property.
                    if ('subpages' in obj && typeof obj.subpages !== 'string' && 'page' in obj.subpages) {
                        parsed.subpages = pageModel._getSubpages(obj.subpages);
                    }
                    return parsed;
                },
                _getParents: function _getParents(parent) {
                    return pageModel.parse(parent);
                },
                _getSubpages: function _getSubpages(subpages) {
                    var pageDef = subpages.page;
                    var parsed = [];
                    pageDef = Array.isArray(pageDef) ? pageDef : [pageDef];
                    pageDef.forEach(function (sp) {
                        parsed.push(pageModel.parse(sp));
                    });
                    return parsed;
                }
            };

            _export('default', pageModel);
        }
    };
});
$__System.register('5', ['3', '4'], function (_export) {
    /**
     * Martian - Core JavaScript API for MindTouch
     *
     * Copyright (c) 2015 MindTouch Inc.
     * www.mindtouch.com  oss@mindtouch.com
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *     http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    'use strict';

    var modelHelper, pageModel, userModel;
    return {
        setters: [function (_) {
            modelHelper = _['default'];
        }, function (_2) {
            pageModel = _2['default'];
        }],
        execute: function () {
            userModel = {
                parse: function parse(data) {
                    var obj = modelHelper.fromJson(data);
                    var parsed = {
                        id: modelHelper.getInt(obj['@id']),
                        wikiId: obj['@wikiid'],
                        href: obj['@href'],
                        dateCreated: modelHelper.getDate(obj['date.created']),
                        dateLastLogin: modelHelper.getDate(obj['date.lastlogin']),
                        email: obj.email,
                        fullname: obj.fullname,
                        username: obj.username,
                        nick: obj.nick,
                        status: obj.status,
                        licenseSeat: modelHelper.getBool(obj['license.seat'])
                    };
                    if ('page.home' in obj) {
                        parsed.pageHome = pageModel.parse(obj['page.home']);
                    }
                    return parsed;
                }
            };

            _export('default', userModel);
        }
    };
});
$__System.register('6', ['3', '5'], function (_export) {
    'use strict';

    var modelHelper, userModel, userListModel;
    return {
        setters: [function (_) {
            modelHelper = _['default'];
        }, function (_2) {
            userModel = _2['default'];
        }],
        execute: function () {
            userListModel = {
                parse: function parse(data) {
                    var obj = modelHelper.fromJson(data);
                    var parsed = {
                        count: obj['@count'],
                        users: []
                    };
                    modelHelper.addIfDefined(obj['@querycount'], 'querycount', parsed);
                    modelHelper.addIfDefined(obj['@totalcount'], 'totalcount', parsed);
                    modelHelper.addIfDefined(obj['@href'], 'href', parsed);
                    if ('user' in obj) {
                        var users = Array.isArray(obj.user) ? obj.user : [obj.user];
                        users.forEach(function (user) {
                            parsed.users.push(userModel.parse(user));
                        });
                    }
                    return parsed;
                }
            };

            _export('default', userListModel);
        }
    };
});
$__System.register('7', ['5', '6', '8', '9', 'a', 'b'], function (_export) {
    var userModel, userListModel, Plug, utility, _createClass, _classCallCheck, User;

    return {
        setters: [function (_3) {
            userModel = _3['default'];
        }, function (_4) {
            userListModel = _4['default'];
        }, function (_) {
            Plug = _['default'];
        }, function (_2) {
            utility = _2['default'];
        }, function (_a) {
            _createClass = _a['default'];
        }, function (_b) {
            _classCallCheck = _b['default'];
        }],
        execute: function () {
            /**
             * Martian - Core JavaScript API for MindTouch
             *
             * Copyright (c) 2015 MindTouch Inc.
             * www.mindtouch.com  oss@mindtouch.com
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *     http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
            'use strict';

            User = (function () {
                _createClass(User, null, [{
                    key: '_getPlug',
                    value: function _getPlug() {
                        if (!this.userPlug) {
                            this.userPlug = new Plug().at('@api', 'deki', 'users');
                        }
                        return this.userPlug;
                    }
                }, {
                    key: 'getCurrentUser',
                    value: function getCurrentUser() {
                        return User._getPlug().at('current').get().then(userModel.parse);
                    }
                }, {
                    key: 'getUsers',
                    value: function getUsers() {
                        return User._getPlug().get().then(userListModel.parse);
                    }
                }, {
                    key: 'searchUsers',
                    value: function searchUsers(constraints) {
                        return User._getPlug().at('search').withParams(constraints).get().then(userListModel.parse);
                    }
                }]);

                function User() {
                    var id = arguments.length <= 0 || arguments[0] === undefined ? 'current' : arguments[0];

                    _classCallCheck(this, User);

                    this._id = utility.getResourceId(id, 'current');
                    this._plug = User._getPlug().at(this._id);
                }

                _createClass(User, [{
                    key: 'getInfo',
                    value: function getInfo() {
                        return this._plug.get().then(userModel.parse);
                    }
                }]);

                return User;
            })();

            _export('default', User);
        }
    };
});
$__System.register('c', ['7', 'a', 'b', 'd'], function (_export) {
  var MartianUser, _createClass, _classCallCheck, settings, User;

  return {
    setters: [function (_) {
      MartianUser = _['default'];
    }, function (_a) {
      _createClass = _a['default'];
    }, function (_b) {
      _classCallCheck = _b['default'];
    }, function (_d) {
      settings = _d['default'];
    }],
    execute: function () {
      /**
       * MindTouch GeniusLink SDK
       * Copyright (C) 2006-2015 MindTouch, Inc.
       * www.mindtouch.com  oss@mindtouch.com
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *     http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      'use strict';

      User = (function () {
        function User() {
          _classCallCheck(this, User);
        }

        _createClass(User, null, [{
          key: 'getCurrentUser',

          /**
           * The current MindTouch host user, or an anonymous user is unauthenticated
           *
           * @returns {Object}
           */
          value: function getCurrentUser() {
            return MartianUser.getCurrentUser();
          }

          /**
           * A url that allows an anonymous user to authenticate with the MindTouch host
           *
           * @returns {String}
           */
        }, {
          key: 'getLoginUrl',
          value: function getLoginUrl() {
            return settings.get('host') + '/@app/login/redirect';
          }
        }]);

        return User;
      })();

      _export('default', User);
    }
  };
});
$__System.register('9', [], function (_export) {
    /**
     * Martian - Core JavaScript API for MindTouch
     *
     * Copyright (c) 2015 MindTouch Inc.
     * www.mindtouch.com  oss@mindtouch.com
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *     http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    'use strict';

    var utility;
    return {
        setters: [],
        execute: function () {
            utility = {
                xmlRequestType: 'application/xml; charset=utf-8',
                textRequestType: 'text/plain; charset=utf-8',
                jsonRequestType: 'application/json; charset=utf-8',
                searchEscape: function searchEscape(query) {
                    var result = query.toString();
                    var charArr = ['\\', '+', '-', '&', '|', '!', '(', ')', '{', '}', '[', ']', '^', '"', '~', '*', '?', ':'];
                    charArr.forEach(function (c) {
                        var regex = new RegExp('\\' + c, 'g');
                        result = result.replace(regex, '\\' + c);
                    });
                    return result;
                },
                getResourceId: function getResourceId(id) {
                    var defaultId = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

                    var resourceId = null;
                    if (typeof id === 'string' && id !== defaultId) {
                        resourceId = '=' + encodeURIComponent(encodeURIComponent(id));
                    } else {
                        resourceId = id;
                    }
                    return resourceId;
                }
            };

            _export('default', utility);
        }
    };
});
$__System.registerDynamic("e", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  "format cjs";
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("f", ["10", "11"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var toInteger = $__require('10'),
      defined = $__require('11');
  module.exports = function(TO_STRING) {
    return function(that, pos) {
      var s = String(defined(that)),
          i = toInteger(pos),
          l = s.length,
          a,
          b;
      if (i < 0 || i >= l)
        return TO_STRING ? '' : undefined;
      a = s.charCodeAt(i);
      return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
    };
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("12", ["f", "13"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $at = $__require('f')(true);
  $__require('13')(String, 'String', function(iterated) {
    this._t = String(iterated);
    this._i = 0;
  }, function() {
    var O = this._t,
        index = this._i,
        point;
    if (index >= O.length)
      return {
        value: undefined,
        done: true
      };
    point = $at(O, index);
    this._i += point.length;
    return {
      value: point,
      done: false
    };
  });
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("14", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function() {};
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("15", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(done, value) {
    return {
      value: value,
      done: !!done
    };
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("16", ["17", "18", "19", "1a", "1b"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = $__require('17'),
      descriptor = $__require('18'),
      setToStringTag = $__require('19'),
      IteratorPrototype = {};
  $__require('1a')(IteratorPrototype, $__require('1b')('iterator'), function() {
    return this;
  });
  module.exports = function(Constructor, NAME, next) {
    Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
    setToStringTag(Constructor, NAME + ' Iterator');
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("13", ["1c", "1d", "1e", "1a", "1f", "20", "16", "19", "17", "1b"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var LIBRARY = $__require('1c'),
      $export = $__require('1d'),
      redefine = $__require('1e'),
      hide = $__require('1a'),
      has = $__require('1f'),
      Iterators = $__require('20'),
      $iterCreate = $__require('16'),
      setToStringTag = $__require('19'),
      getProto = $__require('17').getProto,
      ITERATOR = $__require('1b')('iterator'),
      BUGGY = !([].keys && 'next' in [].keys()),
      FF_ITERATOR = '@@iterator',
      KEYS = 'keys',
      VALUES = 'values';
  var returnThis = function() {
    return this;
  };
  module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
    $iterCreate(Constructor, NAME, next);
    var getMethod = function(kind) {
      if (!BUGGY && kind in proto)
        return proto[kind];
      switch (kind) {
        case KEYS:
          return function keys() {
            return new Constructor(this, kind);
          };
        case VALUES:
          return function values() {
            return new Constructor(this, kind);
          };
      }
      return function entries() {
        return new Constructor(this, kind);
      };
    };
    var TAG = NAME + ' Iterator',
        DEF_VALUES = DEFAULT == VALUES,
        VALUES_BUG = false,
        proto = Base.prototype,
        $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT],
        $default = $native || getMethod(DEFAULT),
        methods,
        key;
    if ($native) {
      var IteratorPrototype = getProto($default.call(new Base));
      setToStringTag(IteratorPrototype, TAG, true);
      if (!LIBRARY && has(proto, FF_ITERATOR))
        hide(IteratorPrototype, ITERATOR, returnThis);
      if (DEF_VALUES && $native.name !== VALUES) {
        VALUES_BUG = true;
        $default = function values() {
          return $native.call(this);
        };
      }
    }
    if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
      hide(proto, ITERATOR, $default);
    }
    Iterators[NAME] = $default;
    Iterators[TAG] = returnThis;
    if (DEFAULT) {
      methods = {
        values: DEF_VALUES ? $default : getMethod(VALUES),
        keys: IS_SET ? $default : getMethod(KEYS),
        entries: !DEF_VALUES ? $default : getMethod('entries')
      };
      if (FORCED)
        for (key in methods) {
          if (!(key in proto))
            redefine(proto, key, methods[key]);
        }
      else
        $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
    }
    return methods;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("21", ["14", "15", "20", "22", "13"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var addToUnscopables = $__require('14'),
      step = $__require('15'),
      Iterators = $__require('20'),
      toIObject = $__require('22');
  module.exports = $__require('13')(Array, 'Array', function(iterated, kind) {
    this._t = toIObject(iterated);
    this._i = 0;
    this._k = kind;
  }, function() {
    var O = this._t,
        kind = this._k,
        index = this._i++;
    if (!O || index >= O.length) {
      this._t = undefined;
      return step(1);
    }
    if (kind == 'keys')
      return step(0, index);
    if (kind == 'values')
      return step(0, O[index]);
    return step(0, [index, O[index]]);
  }, 'values');
  Iterators.Arguments = Iterators.Array;
  addToUnscopables('keys');
  addToUnscopables('values');
  addToUnscopables('entries');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("23", ["21", "20"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  $__require('21');
  var Iterators = $__require('20');
  Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("1c", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = true;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("24", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(it, Constructor, name) {
    if (!(it instanceof Constructor))
      throw TypeError(name + ": use the 'new' operator!");
    return it;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("25", ["26"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var anObject = $__require('26');
  module.exports = function(iterator, fn, value, entries) {
    try {
      return entries ? fn(anObject(value)[0], value[1]) : fn(value);
    } catch (e) {
      var ret = iterator['return'];
      if (ret !== undefined)
        anObject(ret.call(iterator));
      throw e;
    }
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("27", ["20", "1b"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Iterators = $__require('20'),
      ITERATOR = $__require('1b')('iterator'),
      ArrayProto = Array.prototype;
  module.exports = function(it) {
    return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("10", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var ceil = Math.ceil,
      floor = Math.floor;
  module.exports = function(it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("28", ["10"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var toInteger = $__require('10'),
      min = Math.min;
  module.exports = function(it) {
    return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("29", ["2a", "1b"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var cof = $__require('2a'),
      TAG = $__require('1b')('toStringTag'),
      ARG = cof(function() {
        return arguments;
      }()) == 'Arguments';
  module.exports = function(it) {
    var O,
        T,
        B;
    return it === undefined ? 'Undefined' : it === null ? 'Null' : typeof(T = (O = Object(it))[TAG]) == 'string' ? T : ARG ? cof(O) : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("20", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {};
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("2b", ["29", "1b", "20", "2c"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var classof = $__require('29'),
      ITERATOR = $__require('1b')('iterator'),
      Iterators = $__require('20');
  module.exports = $__require('2c').getIteratorMethod = function(it) {
    if (it != undefined)
      return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("2d", ["2e", "25", "27", "26", "28", "2b"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var ctx = $__require('2e'),
      call = $__require('25'),
      isArrayIter = $__require('27'),
      anObject = $__require('26'),
      toLength = $__require('28'),
      getIterFn = $__require('2b');
  module.exports = function(iterable, entries, fn, that) {
    var iterFn = getIterFn(iterable),
        f = ctx(fn, that, entries ? 2 : 1),
        index = 0,
        length,
        step,
        iterator;
    if (typeof iterFn != 'function')
      throw TypeError(iterable + ' is not iterable!');
    if (isArrayIter(iterFn))
      for (length = toLength(iterable.length); length > index; index++) {
        entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
      }
    else
      for (iterator = iterFn.call(iterable); !(step = iterator.next()).done; ) {
        call(iterator, f, step.value, entries);
      }
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("2f", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = Object.is || function is(x, y) {
    return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("30", ["26", "31", "1b"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var anObject = $__require('26'),
      aFunction = $__require('31'),
      SPECIES = $__require('1b')('species');
  module.exports = function(O, D) {
    var C = anObject(O).constructor,
        S;
    return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("32", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(fn, args, that) {
    var un = that === undefined;
    switch (args.length) {
      case 0:
        return un ? fn() : fn.call(that);
      case 1:
        return un ? fn(args[0]) : fn.call(that, args[0]);
      case 2:
        return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
      case 3:
        return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
      case 4:
        return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
    }
    return fn.apply(that, args);
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("33", ["34"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('34').document && document.documentElement;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("35", ["36", "34"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var isObject = $__require('36'),
      document = $__require('34').document,
      is = isObject(document) && isObject(document.createElement);
  module.exports = function(it) {
    return is ? document.createElement(it) : {};
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("37", ["2e", "32", "33", "35", "34", "2a", "38"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    var ctx = $__require('2e'),
        invoke = $__require('32'),
        html = $__require('33'),
        cel = $__require('35'),
        global = $__require('34'),
        process = global.process,
        setTask = global.setImmediate,
        clearTask = global.clearImmediate,
        MessageChannel = global.MessageChannel,
        counter = 0,
        queue = {},
        ONREADYSTATECHANGE = 'onreadystatechange',
        defer,
        channel,
        port;
    var run = function() {
      var id = +this;
      if (queue.hasOwnProperty(id)) {
        var fn = queue[id];
        delete queue[id];
        fn();
      }
    };
    var listner = function(event) {
      run.call(event.data);
    };
    if (!setTask || !clearTask) {
      setTask = function setImmediate(fn) {
        var args = [],
            i = 1;
        while (arguments.length > i)
          args.push(arguments[i++]);
        queue[++counter] = function() {
          invoke(typeof fn == 'function' ? fn : Function(fn), args);
        };
        defer(counter);
        return counter;
      };
      clearTask = function clearImmediate(id) {
        delete queue[id];
      };
      if ($__require('2a')(process) == 'process') {
        defer = function(id) {
          process.nextTick(ctx(run, id, 1));
        };
      } else if (MessageChannel) {
        channel = new MessageChannel;
        port = channel.port2;
        channel.port1.onmessage = listner;
        defer = ctx(port.postMessage, port, 1);
      } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
        defer = function(id) {
          global.postMessage(id + '', '*');
        };
        global.addEventListener('message', listner, false);
      } else if (ONREADYSTATECHANGE in cel('script')) {
        defer = function(id) {
          html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function() {
            html.removeChild(this);
            run.call(id);
          };
        };
      } else {
        defer = function(id) {
          setTimeout(ctx(run, id, 1), 0);
        };
      }
    }
    module.exports = {
      set: setTask,
      clear: clearTask
    };
  })($__require('38'));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("39", ["34", "37", "2a", "38"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    var global = $__require('34'),
        macrotask = $__require('37').set,
        Observer = global.MutationObserver || global.WebKitMutationObserver,
        process = global.process,
        Promise = global.Promise,
        isNode = $__require('2a')(process) == 'process',
        head,
        last,
        notify;
    var flush = function() {
      var parent,
          domain,
          fn;
      if (isNode && (parent = process.domain)) {
        process.domain = null;
        parent.exit();
      }
      while (head) {
        domain = head.domain;
        fn = head.fn;
        if (domain)
          domain.enter();
        fn();
        if (domain)
          domain.exit();
        head = head.next;
      }
      last = undefined;
      if (parent)
        parent.enter();
    };
    if (isNode) {
      notify = function() {
        process.nextTick(flush);
      };
    } else if (Observer) {
      var toggle = 1,
          node = document.createTextNode('');
      new Observer(flush).observe(node, {characterData: true});
      notify = function() {
        node.data = toggle = -toggle;
      };
    } else if (Promise && Promise.resolve) {
      notify = function() {
        Promise.resolve().then(flush);
      };
    } else {
      notify = function() {
        macrotask.call(global, flush);
      };
    }
    module.exports = function asap(fn) {
      var task = {
        fn: fn,
        next: undefined,
        domain: isNode && process.domain
      };
      if (last)
        last.next = task;
      if (!head) {
        head = task;
        notify();
      }
      last = task;
    };
  })($__require('38'));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("18", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("1a", ["17", "18", "3a"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = $__require('17'),
      createDesc = $__require('18');
  module.exports = $__require('3a') ? function(object, key, value) {
    return $.setDesc(object, key, createDesc(1, value));
  } : function(object, key, value) {
    object[key] = value;
    return object;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("1e", ["1a"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('1a');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("3b", ["1e"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var redefine = $__require('1e');
  module.exports = function(target, src) {
    for (var key in src)
      redefine(target, key, src[key]);
    return target;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("1f", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var hasOwnProperty = {}.hasOwnProperty;
  module.exports = function(it, key) {
    return hasOwnProperty.call(it, key);
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("19", ["17", "1f", "1b"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var def = $__require('17').setDesc,
      has = $__require('1f'),
      TAG = $__require('1b')('toStringTag');
  module.exports = function(it, tag, stat) {
    if (it && !has(it = stat ? it : it.prototype, TAG))
      def(it, TAG, {
        configurable: true,
        value: tag
      });
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("3a", ["3c"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = !$__require('3c')(function() {
    return Object.defineProperty({}, 'a', {get: function() {
        return 7;
      }}).a != 7;
  });
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("3d", ["2c", "17", "3a", "1b"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var core = $__require('2c'),
      $ = $__require('17'),
      DESCRIPTORS = $__require('3a'),
      SPECIES = $__require('1b')('species');
  module.exports = function(KEY) {
    var C = core[KEY];
    if (DESCRIPTORS && C && !C[SPECIES])
      $.setDesc(C, SPECIES, {
        configurable: true,
        get: function() {
          return this;
        }
      });
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("3e", ["34"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var global = $__require('34'),
      SHARED = '__core-js_shared__',
      store = global[SHARED] || (global[SHARED] = {});
  module.exports = function(key) {
    return store[key] || (store[key] = {});
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("3f", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var id = 0,
      px = Math.random();
  module.exports = function(key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("1b", ["3e", "3f", "34"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var store = $__require('3e')('wks'),
      uid = $__require('3f'),
      Symbol = $__require('34').Symbol;
  module.exports = function(name) {
    return store[name] || (store[name] = Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("40", ["1b"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var ITERATOR = $__require('1b')('iterator'),
      SAFE_CLOSING = false;
  try {
    var riter = [7][ITERATOR]();
    riter['return'] = function() {
      SAFE_CLOSING = true;
    };
    Array.from(riter, function() {
      throw 2;
    });
  } catch (e) {}
  module.exports = function(exec, skipClosing) {
    if (!skipClosing && !SAFE_CLOSING)
      return false;
    var safe = false;
    try {
      var arr = [7],
          iter = arr[ITERATOR]();
      iter.next = function() {
        safe = true;
      };
      arr[ITERATOR] = function() {
        return iter;
      };
      exec(arr);
    } catch (e) {}
    return safe;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("41", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var process = module.exports = {};
  var queue = [];
  var draining = false;
  var currentQueue;
  var queueIndex = -1;
  function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
      queue = currentQueue.concat(queue);
    } else {
      queueIndex = -1;
    }
    if (queue.length) {
      drainQueue();
    }
  }
  function drainQueue() {
    if (draining) {
      return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while (len) {
      currentQueue = queue;
      queue = [];
      while (++queueIndex < len) {
        if (currentQueue) {
          currentQueue[queueIndex].run();
        }
      }
      queueIndex = -1;
      len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
  }
  process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
      for (var i = 1; i < arguments.length; i++) {
        args[i - 1] = arguments[i];
      }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
      setTimeout(drainQueue, 0);
    }
  };
  function Item(fun, array) {
    this.fun = fun;
    this.array = array;
  }
  Item.prototype.run = function() {
    this.fun.apply(null, this.array);
  };
  process.title = 'browser';
  process.browser = true;
  process.env = {};
  process.argv = [];
  process.version = '';
  process.versions = {};
  function noop() {}
  process.on = noop;
  process.addListener = noop;
  process.once = noop;
  process.off = noop;
  process.removeListener = noop;
  process.removeAllListeners = noop;
  process.emit = noop;
  process.binding = function(name) {
    throw new Error('process.binding is not supported');
  };
  process.cwd = function() {
    return '/';
  };
  process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
  };
  process.umask = function() {
    return 0;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("42", ["41"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('41');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("43", ["42"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__System._nodeRequire ? process : $__require('42');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("38", ["43"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('43');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("44", ["17", "1c", "34", "2e", "29", "1d", "36", "26", "31", "24", "2d", "45", "2f", "1b", "30", "39", "3a", "3b", "19", "3d", "2c", "40", "38"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var $ = $__require('17'),
        LIBRARY = $__require('1c'),
        global = $__require('34'),
        ctx = $__require('2e'),
        classof = $__require('29'),
        $export = $__require('1d'),
        isObject = $__require('36'),
        anObject = $__require('26'),
        aFunction = $__require('31'),
        strictNew = $__require('24'),
        forOf = $__require('2d'),
        setProto = $__require('45').set,
        same = $__require('2f'),
        SPECIES = $__require('1b')('species'),
        speciesConstructor = $__require('30'),
        asap = $__require('39'),
        PROMISE = 'Promise',
        process = global.process,
        isNode = classof(process) == 'process',
        P = global[PROMISE],
        Wrapper;
    var testResolve = function(sub) {
      var test = new P(function() {});
      if (sub)
        test.constructor = Object;
      return P.resolve(test) === test;
    };
    var USE_NATIVE = function() {
      var works = false;
      function P2(x) {
        var self = new P(x);
        setProto(self, P2.prototype);
        return self;
      }
      try {
        works = P && P.resolve && testResolve();
        setProto(P2, P);
        P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
        if (!(P2.resolve(5).then(function() {}) instanceof P2)) {
          works = false;
        }
        if (works && $__require('3a')) {
          var thenableThenGotten = false;
          P.resolve($.setDesc({}, 'then', {get: function() {
              thenableThenGotten = true;
            }}));
          works = thenableThenGotten;
        }
      } catch (e) {
        works = false;
      }
      return works;
    }();
    var sameConstructor = function(a, b) {
      if (LIBRARY && a === P && b === Wrapper)
        return true;
      return same(a, b);
    };
    var getConstructor = function(C) {
      var S = anObject(C)[SPECIES];
      return S != undefined ? S : C;
    };
    var isThenable = function(it) {
      var then;
      return isObject(it) && typeof(then = it.then) == 'function' ? then : false;
    };
    var PromiseCapability = function(C) {
      var resolve,
          reject;
      this.promise = new C(function($$resolve, $$reject) {
        if (resolve !== undefined || reject !== undefined)
          throw TypeError('Bad Promise constructor');
        resolve = $$resolve;
        reject = $$reject;
      });
      this.resolve = aFunction(resolve), this.reject = aFunction(reject);
    };
    var perform = function(exec) {
      try {
        exec();
      } catch (e) {
        return {error: e};
      }
    };
    var notify = function(record, isReject) {
      if (record.n)
        return;
      record.n = true;
      var chain = record.c;
      asap(function() {
        var value = record.v,
            ok = record.s == 1,
            i = 0;
        var run = function(reaction) {
          var handler = ok ? reaction.ok : reaction.fail,
              resolve = reaction.resolve,
              reject = reaction.reject,
              result,
              then;
          try {
            if (handler) {
              if (!ok)
                record.h = true;
              result = handler === true ? value : handler(value);
              if (result === reaction.promise) {
                reject(TypeError('Promise-chain cycle'));
              } else if (then = isThenable(result)) {
                then.call(result, resolve, reject);
              } else
                resolve(result);
            } else
              reject(value);
          } catch (e) {
            reject(e);
          }
        };
        while (chain.length > i)
          run(chain[i++]);
        chain.length = 0;
        record.n = false;
        if (isReject)
          setTimeout(function() {
            var promise = record.p,
                handler,
                console;
            if (isUnhandled(promise)) {
              if (isNode) {
                process.emit('unhandledRejection', value, promise);
              } else if (handler = global.onunhandledrejection) {
                handler({
                  promise: promise,
                  reason: value
                });
              } else if ((console = global.console) && console.error) {
                console.error('Unhandled promise rejection', value);
              }
            }
            record.a = undefined;
          }, 1);
      });
    };
    var isUnhandled = function(promise) {
      var record = promise._d,
          chain = record.a || record.c,
          i = 0,
          reaction;
      if (record.h)
        return false;
      while (chain.length > i) {
        reaction = chain[i++];
        if (reaction.fail || !isUnhandled(reaction.promise))
          return false;
      }
      return true;
    };
    var $reject = function(value) {
      var record = this;
      if (record.d)
        return;
      record.d = true;
      record = record.r || record;
      record.v = value;
      record.s = 2;
      record.a = record.c.slice();
      notify(record, true);
    };
    var $resolve = function(value) {
      var record = this,
          then;
      if (record.d)
        return;
      record.d = true;
      record = record.r || record;
      try {
        if (record.p === value)
          throw TypeError("Promise can't be resolved itself");
        if (then = isThenable(value)) {
          asap(function() {
            var wrapper = {
              r: record,
              d: false
            };
            try {
              then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
            } catch (e) {
              $reject.call(wrapper, e);
            }
          });
        } else {
          record.v = value;
          record.s = 1;
          notify(record, false);
        }
      } catch (e) {
        $reject.call({
          r: record,
          d: false
        }, e);
      }
    };
    if (!USE_NATIVE) {
      P = function Promise(executor) {
        aFunction(executor);
        var record = this._d = {
          p: strictNew(this, P, PROMISE),
          c: [],
          a: undefined,
          s: 0,
          d: false,
          v: undefined,
          h: false,
          n: false
        };
        try {
          executor(ctx($resolve, record, 1), ctx($reject, record, 1));
        } catch (err) {
          $reject.call(record, err);
        }
      };
      $__require('3b')(P.prototype, {
        then: function then(onFulfilled, onRejected) {
          var reaction = new PromiseCapability(speciesConstructor(this, P)),
              promise = reaction.promise,
              record = this._d;
          reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
          reaction.fail = typeof onRejected == 'function' && onRejected;
          record.c.push(reaction);
          if (record.a)
            record.a.push(reaction);
          if (record.s)
            notify(record, false);
          return promise;
        },
        'catch': function(onRejected) {
          return this.then(undefined, onRejected);
        }
      });
    }
    $export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: P});
    $__require('19')(P, PROMISE);
    $__require('3d')(PROMISE);
    Wrapper = $__require('2c')[PROMISE];
    $export($export.S + $export.F * !USE_NATIVE, PROMISE, {reject: function reject(r) {
        var capability = new PromiseCapability(this),
            $$reject = capability.reject;
        $$reject(r);
        return capability.promise;
      }});
    $export($export.S + $export.F * (!USE_NATIVE || testResolve(true)), PROMISE, {resolve: function resolve(x) {
        if (x instanceof P && sameConstructor(x.constructor, this))
          return x;
        var capability = new PromiseCapability(this),
            $$resolve = capability.resolve;
        $$resolve(x);
        return capability.promise;
      }});
    $export($export.S + $export.F * !(USE_NATIVE && $__require('40')(function(iter) {
      P.all(iter)['catch'](function() {});
    })), PROMISE, {
      all: function all(iterable) {
        var C = getConstructor(this),
            capability = new PromiseCapability(C),
            resolve = capability.resolve,
            reject = capability.reject,
            values = [];
        var abrupt = perform(function() {
          forOf(iterable, false, values.push, values);
          var remaining = values.length,
              results = Array(remaining);
          if (remaining)
            $.each.call(values, function(promise, index) {
              var alreadyCalled = false;
              C.resolve(promise).then(function(value) {
                if (alreadyCalled)
                  return;
                alreadyCalled = true;
                results[index] = value;
                --remaining || resolve(results);
              }, reject);
            });
          else
            resolve(results);
        });
        if (abrupt)
          reject(abrupt.error);
        return capability.promise;
      },
      race: function race(iterable) {
        var C = getConstructor(this),
            capability = new PromiseCapability(C),
            reject = capability.reject;
        var abrupt = perform(function() {
          forOf(iterable, false, function(promise) {
            C.resolve(promise).then(capability.resolve, reject);
          });
        });
        if (abrupt)
          reject(abrupt.error);
        return capability.promise;
      }
    });
  })($__require('38'));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("46", ["e", "12", "23", "44", "2c"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  $__require('e');
  $__require('12');
  $__require('23');
  $__require('44');
  module.exports = $__require('2c').Promise;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("47", ["46"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {
    "default": $__require('46'),
    __esModule: true
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("48", ["11"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var defined = $__require('11');
  module.exports = function(it) {
    return Object(defined(it));
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("49", ["48", "4a"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var toObject = $__require('48');
  $__require('4a')('keys', function($keys) {
    return function keys(it) {
      return $keys(toObject(it));
    };
  });
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("4b", ["49", "2c"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  $__require('49');
  module.exports = $__require('2c').Object.keys;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("4c", ["4b"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {
    "default": $__require('4b'),
    __esModule: true
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("4d", ["17"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = $__require('17');
  module.exports = function defineProperty(it, key, desc) {
    return $.setDesc(it, key, desc);
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("4e", ["4d"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {
    "default": $__require('4d'),
    __esModule: true
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("a", ["4e"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var _Object$defineProperty = $__require('4e')["default"];
  exports["default"] = (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        _Object$defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps)
        defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        defineProperties(Constructor, staticProps);
      return Constructor;
    };
  })();
  exports.__esModule = true;
  global.define = __define;
  return module.exports;
});

$__System.register('4f', ['a', 'b'], function (_export) {
    var _createClass, _classCallCheck, uriParser, UriSearchParams, UriParser;

    function _parseUri(str) {
        var parserKeys = ['href', 'protocol', 'username', 'password', 'hostname', 'port', 'pathname', 'search', 'hash'];
        var m = uriParser.exec(str);
        var parts = {};
        parserKeys.forEach(function (key, i) {
            parts[key] = m[i];
        });
        return parts;
    }
    function _searchStringToParams(search) {
        var params = [];
        var queryEntries = search.split('&');
        queryEntries.forEach(function (entry) {
            var kvp = entry.split('=');
            params.push([kvp[0], kvp[1]]);
        });
        return params;
    }
    return {
        setters: [function (_a) {
            _createClass = _a['default'];
        }, function (_b) {
            _classCallCheck = _b['default'];
        }],
        execute: function () {
            'use strict';

            uriParser = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+:))?(?:\/\/)?(?:([^:@\/]*)(?::([^:@\/]*))?@)?(\[[0-9a-fA-F.]+\]|[^:\/?#]*)(?::(\d+|(?=:)))?((?:[^?#](?![^?#\/]*\.(?:[?#]|$)))*\/?)?[^?#\/]*(?:(\?[^#]*))?(?:(#.*))?/;

            UriSearchParams = (function () {
                function UriSearchParams(searchString) {
                    _classCallCheck(this, UriSearchParams);

                    this.params = [];
                    if (searchString && searchString !== '') {
                        if (searchString[0] === '?') {
                            searchString = searchString.slice(1);
                        }
                        this.params = _searchStringToParams(searchString);
                    }
                }

                _createClass(UriSearchParams, [{
                    key: 'append',
                    value: function append(name, value) {
                        this.params.push([name, value]);
                    }
                }, {
                    key: 'delete',
                    value: function _delete(name) {
                        var newParams = [];
                        this.params.forEach(function (pair) {
                            if (pair[0] !== name) {
                                newParams.push(pair);
                            }
                        });
                        this.params = newParams;
                    }
                }, {
                    key: 'get',
                    value: function get(name) {
                        var found = null;
                        for (var i = 0; i < this.params.length; i++) {
                            if (this.params[i][0] === name) {
                                found = this.params[i][1];
                                break;
                            }
                        }
                        return found;
                    }
                }, {
                    key: 'getAll',
                    value: function getAll(name) {
                        var found = [];
                        this.params.forEach(function (param) {
                            if (param[0] === name) {
                                found.push(param[1]);
                            }
                        });
                        return found;
                    }
                }, {
                    key: 'has',
                    value: function has(name) {
                        var found = false;
                        for (var i = 0; i < this.params.length; i++) {
                            if (this.params[i][0] === name) {
                                found = true;
                                break;
                            }
                        }
                        return found;
                    }
                }, {
                    key: 'set',
                    value: function set(name, value) {
                        var found = false;
                        var result = [];
                        this.params.forEach(function (pair) {
                            if (pair[0] === name && !found) {
                                pair[1] = value;
                                result.push(pair);
                                found = true;
                            } else if (pair[0] !== name) {
                                result.push(pair);
                            }
                        });
                        this.params = result;
                    }
                }, {
                    key: 'toString',
                    value: function toString() {
                        return this.params.reduce(function (previous, current, index) {
                            return '' + previous + (index === 0 ? '' : '&') + current[0] + '=' + current[1];
                        }, '');
                    }
                }, {
                    key: 'entries',
                    get: function get() {
                        return this.params;
                    }
                }]);

                return UriSearchParams;
            })();

            UriParser = (function () {
                function UriParser() {
                    var urlString = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

                    _classCallCheck(this, UriParser);

                    if (typeof urlString !== 'string') {
                        throw new TypeError('Failed to construct \'URL\': The supplied URL must be a string');
                    }
                    var parts = _parseUri(urlString);
                    var protocolExists = typeof parts.protocol !== 'undefined' && parts.protocol !== '';
                    var hostExists = typeof parts.hostname !== 'undefined' && parts.hostname !== '';
                    if (protocolExists && !hostExists || !protocolExists && hostExists) {
                        throw new TypeError('Failed to construct \'URL\': Protocol and hostname must be supplied together');
                    }
                    if (!protocolExists && !hostExists) {
                        this.hostless = true;
                    }
                    this.parts = parts;
                    this.params = new UriSearchParams(this.parts.search);
                }

                // Properties that come directly from the regex

                _createClass(UriParser, [{
                    key: 'toString',
                    value: function toString() {
                        var hrefString = '';
                        if (!this.hostless) {
                            hrefString = this.protocol + '//';
                            if (this.username && this.username !== '') {
                                hrefString = '' + hrefString + this.username;
                                if (this.password && this.password !== '') {
                                    hrefString = hrefString + ':' + this.password;
                                }
                                hrefString = hrefString + '@';
                            }
                        }
                        hrefString = '' + hrefString + this.host + this.pathname;
                        if (this.search && this.search !== '') {
                            hrefString = '' + hrefString + this.search;
                        }
                        if (this.hash && this.hash !== '') {
                            hrefString = '' + hrefString + this.hash;
                        }
                        return hrefString;
                    }
                }, {
                    key: 'protocol',
                    get: function get() {
                        return this.parts.protocol;
                    },
                    set: function set(val) {
                        this.parts.protocol = val;
                    }
                }, {
                    key: 'hostname',
                    get: function get() {
                        return this.parts.hostname;
                    },
                    set: function set(val) {
                        this.parts.hostname = val;
                    }
                }, {
                    key: 'port',
                    get: function get() {
                        return this.parts.port || '';
                    },
                    set: function set(val) {
                        this.parts.port = val;
                    }
                }, {
                    key: 'pathname',
                    get: function get() {
                        return this.parts.pathname || '/';
                    },
                    set: function set(val) {
                        this.parts.pathname = val;
                    }
                }, {
                    key: 'search',
                    get: function get() {
                        return this.params.entries.length === 0 ? '' : '?' + this.params.toString();
                    },
                    set: function set(val) {
                        this.parts.search = val;
                        this.params = new UriSearchParams(val);
                    }
                }, {
                    key: 'hash',
                    get: function get() {
                        return this.parts.hash || '';
                    },
                    set: function set(val) {
                        this.parts.hash = val;
                    }
                }, {
                    key: 'username',
                    get: function get() {
                        return this.parts.username || '';
                    },
                    set: function set(val) {
                        this.parts.username = val;
                    }
                }, {
                    key: 'password',
                    get: function get() {
                        return this.parts.password || '';
                    },
                    set: function set(val) {
                        this.parts.password = val;
                    }

                    // Properties computed from various regex parts
                }, {
                    key: 'href',
                    get: function get() {
                        return this.toString();
                    },
                    set: function set(val) {
                        this.parts = _parseUri(val);
                        this.search = this.parts.search;
                    }
                }, {
                    key: 'host',
                    get: function get() {
                        var host = this.hostname;
                        if (this.port) {
                            host = host + ':' + this.port;
                        }
                        return host;
                    },
                    set: function set(val) {
                        var hostParts = val.split(':');
                        this.hostname = hostParts[0];
                        if (hostParts.length > 1) {
                            this.port = hostParts[1];
                        } else {
                            this.port = '';
                        }
                    }
                }, {
                    key: 'origin',
                    get: function get() {
                        return this.protocol + '//' + this.host;
                    }
                }, {
                    key: 'searchParams',
                    get: function get() {
                        return this.params;
                    },
                    set: function set(val) {
                        this.params = val;
                        this.parts.search = '?' + val.toString();
                    }
                }]);

                return UriParser;
            })();

            _export('UriParser', UriParser);

            _export('UriSearchParams', UriSearchParams);
        }
    };
});
$__System.register('50', [], function (_export) {
    /**
     * Martian - Core JavaScript API for MindTouch
     *
     * Copyright (c) 2015 MindTouch Inc.
     * www.mindtouch.com  oss@mindtouch.com
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *     http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    'use strict';

    var stringUtility;
    return {
        setters: [],
        execute: function () {
            stringUtility = {
                isBlank: function isBlank() {
                    var str = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

                    return (/^\s*$/.test(this.makeString(str))
                    );
                },
                makeString: function makeString() {
                    var str = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

                    if (typeof str !== 'string') {
                        return String(str);
                    }
                    return str;
                },
                leftTrim: function leftTrim(str) {
                    var char = arguments.length <= 1 || arguments[1] === undefined ? '\\s' : arguments[1];

                    str = this.makeString(str);
                    return str.replace(new RegExp('^' + char + '+'), '');
                },
                startsWith: function startsWith(str, starts) {
                    str = this.makeString(str);
                    return str.lastIndexOf(starts, 0) === 0;
                },
                stringLeft: function stringLeft(str, sep) {
                    if (!sep) {
                        return str;
                    }
                    str = this.makeString(str);
                    sep = this.makeString(sep);
                    var pos = str.indexOf(sep);
                    return pos >= 0 ? str.slice(0, pos) : str;
                },
                stringRight: function stringRight(str, sep) {
                    if (!sep) {
                        return str;
                    }
                    str = this.makeString(str);
                    sep = this.makeString(sep);
                    var pos = str.indexOf(sep);
                    return pos >= 0 ? str.slice(pos + sep.length, str.length) : str;
                },
                words: function words(str) {
                    var delimiter = arguments.length <= 1 || arguments[1] === undefined ? /\s+/ : arguments[1];

                    str = this.makeString(str);
                    return str.split(delimiter);
                }
            };

            _export('default', stringUtility);
        }
    };
});
$__System.register('51', ['50', 'a', 'b', '4c', '4f'], function (_export) {
    var stringUtility, _createClass, _classCallCheck, _Object$keys, UriParser, Uri;

    return {
        setters: [function (_) {
            stringUtility = _['default'];
        }, function (_a) {
            _createClass = _a['default'];
        }, function (_b) {
            _classCallCheck = _b['default'];
        }, function (_c) {
            _Object$keys = _c['default'];
        }, function (_f) {
            UriParser = _f.UriParser;
        }],
        execute: function () {
            /**
             * Martian - Core JavaScript API for MindTouch
             *
             * Copyright (c) 2015 MindTouch Inc.
             * www.mindtouch.com  oss@mindtouch.com
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *     http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
            'use strict';

            Uri = (function () {
                function Uri() {
                    var url = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

                    _classCallCheck(this, Uri);

                    this.parsedUrl = new UriParser(url);
                }

                _createClass(Uri, [{
                    key: 'removeQueryParam',
                    value: function removeQueryParam(key) {
                        this.parsedUrl.searchParams['delete'](key);
                        return this;
                    }
                }, {
                    key: 'addQueryParam',
                    value: function addQueryParam(key, value) {
                        this.parsedUrl.searchParams.append(key, value);
                        return this;
                    }
                }, {
                    key: 'addQueryParams',
                    value: function addQueryParams(queryMap) {
                        var _this = this;

                        _Object$keys(queryMap).forEach(function (key) {
                            _this.addQueryParam(key, queryMap[key]);
                        });
                        return this;
                    }
                }, {
                    key: 'addSegments',
                    value: function addSegments() {
                        var path = '';

                        for (var _len = arguments.length, segments = Array(_len), _key = 0; _key < _len; _key++) {
                            segments[_key] = arguments[_key];
                        }

                        segments.forEach(function (segment) {
                            if (Array.isArray(segment)) {
                                segment.forEach(function (arraySegment) {
                                    arraySegment = stringUtility.leftTrim(arraySegment, '/');
                                    path = path + '/' + arraySegment;
                                });
                            } else {
                                segment = stringUtility.leftTrim(segment, '/');
                                path = path + '/' + segment;
                            }
                        });
                        var pathName = this.parsedUrl.pathname;
                        if (pathName === '/') {
                            pathName = '';
                        }
                        this.parsedUrl.pathname = '' + pathName + path;
                        return this;
                    }
                }, {
                    key: 'toString',
                    value: function toString() {
                        return this.parsedUrl.toString();
                    }
                }, {
                    key: 'protocol',
                    get: function get() {
                        return this.parsedUrl.protocol;
                    }
                }]);

                return Uri;
            })();

            _export('default', Uri);
        }
    };
});
$__System.registerDynamic("2a", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var toString = {}.toString;
  module.exports = function(it) {
    return toString.call(it).slice(8, -1);
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("52", ["2a"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var cof = $__require('2a');
  module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it) {
    return cof(it) == 'String' ? it.split('') : Object(it);
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("11", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(it) {
    if (it == undefined)
      throw TypeError("Can't call method on  " + it);
    return it;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("22", ["52", "11"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var IObject = $__require('52'),
      defined = $__require('11');
  module.exports = function(it) {
    return IObject(defined(it));
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("3c", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("4a", ["1d", "2c", "3c"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $export = $__require('1d'),
      core = $__require('2c'),
      fails = $__require('3c');
  module.exports = function(KEY, exec) {
    var fn = (core.Object || {})[KEY] || Object[KEY],
        exp = {};
    exp[KEY] = exec(fn);
    $export($export.S + $export.F * fails(function() {
      fn(1);
    }), 'Object', exp);
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("53", ["22", "4a"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var toIObject = $__require('22');
  $__require('4a')('getOwnPropertyDescriptor', function($getOwnPropertyDescriptor) {
    return function getOwnPropertyDescriptor(it, key) {
      return $getOwnPropertyDescriptor(toIObject(it), key);
    };
  });
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("54", ["17", "53"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = $__require('17');
  $__require('53');
  module.exports = function getOwnPropertyDescriptor(it, key) {
    return $.getDesc(it, key);
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("55", ["54"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {
    "default": $__require('54'),
    __esModule: true
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("56", ["55"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var _Object$getOwnPropertyDescriptor = $__require('55')["default"];
  exports["default"] = function get(_x, _x2, _x3) {
    var _again = true;
    _function: while (_again) {
      var object = _x,
          property = _x2,
          receiver = _x3;
      _again = false;
      if (object === null)
        object = Function.prototype;
      var desc = _Object$getOwnPropertyDescriptor(object, property);
      if (desc === undefined) {
        var parent = Object.getPrototypeOf(object);
        if (parent === null) {
          return undefined;
        } else {
          _x = parent;
          _x2 = property;
          _x3 = receiver;
          _again = true;
          desc = parent = undefined;
          continue _function;
        }
      } else if ("value" in desc) {
        return desc.value;
      } else {
        var getter = desc.get;
        if (getter === undefined) {
          return undefined;
        }
        return getter.call(receiver);
      }
    }
  };
  exports.__esModule = true;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("57", ["17"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = $__require('17');
  module.exports = function create(P, D) {
    return $.create(P, D);
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("58", ["57"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {
    "default": $__require('57'),
    __esModule: true
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("34", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
  if (typeof __g == 'number')
    __g = global;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("1d", ["34", "2c", "2e"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var global = $__require('34'),
      core = $__require('2c'),
      ctx = $__require('2e'),
      PROTOTYPE = 'prototype';
  var $export = function(type, name, source) {
    var IS_FORCED = type & $export.F,
        IS_GLOBAL = type & $export.G,
        IS_STATIC = type & $export.S,
        IS_PROTO = type & $export.P,
        IS_BIND = type & $export.B,
        IS_WRAP = type & $export.W,
        exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
        target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE],
        key,
        own,
        out;
    if (IS_GLOBAL)
      source = name;
    for (key in source) {
      own = !IS_FORCED && target && key in target;
      if (own && key in exports)
        continue;
      out = own ? target[key] : source[key];
      exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key] : IS_BIND && own ? ctx(out, global) : IS_WRAP && target[key] == out ? (function(C) {
        var F = function(param) {
          return this instanceof C ? new C(param) : C(param);
        };
        F[PROTOTYPE] = C[PROTOTYPE];
        return F;
      })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
      if (IS_PROTO)
        (exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
    }
  };
  $export.F = 1;
  $export.G = 2;
  $export.S = 4;
  $export.P = 8;
  $export.B = 16;
  $export.W = 32;
  module.exports = $export;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("17", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $Object = Object;
  module.exports = {
    create: $Object.create,
    getProto: $Object.getPrototypeOf,
    isEnum: {}.propertyIsEnumerable,
    getDesc: $Object.getOwnPropertyDescriptor,
    setDesc: $Object.defineProperty,
    setDescs: $Object.defineProperties,
    getKeys: $Object.keys,
    getNames: $Object.getOwnPropertyNames,
    getSymbols: $Object.getOwnPropertySymbols,
    each: [].forEach
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("36", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("26", ["36"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var isObject = $__require('36');
  module.exports = function(it) {
    if (!isObject(it))
      throw TypeError(it + ' is not an object!');
    return it;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("31", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(it) {
    if (typeof it != 'function')
      throw TypeError(it + ' is not a function!');
    return it;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("2e", ["31"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var aFunction = $__require('31');
  module.exports = function(fn, that, length) {
    aFunction(fn);
    if (that === undefined)
      return fn;
    switch (length) {
      case 1:
        return function(a) {
          return fn.call(that, a);
        };
      case 2:
        return function(a, b) {
          return fn.call(that, a, b);
        };
      case 3:
        return function(a, b, c) {
          return fn.call(that, a, b, c);
        };
    }
    return function() {
      return fn.apply(that, arguments);
    };
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("45", ["17", "36", "26", "2e"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var getDesc = $__require('17').getDesc,
      isObject = $__require('36'),
      anObject = $__require('26');
  var check = function(O, proto) {
    anObject(O);
    if (!isObject(proto) && proto !== null)
      throw TypeError(proto + ": can't set as prototype!");
  };
  module.exports = {
    set: Object.setPrototypeOf || ('__proto__' in {} ? function(test, buggy, set) {
      try {
        set = $__require('2e')(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) {
        buggy = true;
      }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy)
          O.__proto__ = proto;
        else
          set(O, proto);
        return O;
      };
    }({}, false) : undefined),
    check: check
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("59", ["1d", "45"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $export = $__require('1d');
  $export($export.S, 'Object', {setPrototypeOf: $__require('45').set});
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("2c", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var core = module.exports = {version: '1.2.6'};
  if (typeof __e == 'number')
    __e = core;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("5a", ["59", "2c"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  $__require('59');
  module.exports = $__require('2c').Object.setPrototypeOf;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("5b", ["5a"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {
    "default": $__require('5a'),
    __esModule: true
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("5c", ["58", "5b"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var _Object$create = $__require('58')["default"];
  var _Object$setPrototypeOf = $__require('5b')["default"];
  exports["default"] = function(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = _Object$create(superClass && superClass.prototype, {constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }});
    if (superClass)
      _Object$setPrototypeOf ? _Object$setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };
  exports.__esModule = true;
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("b", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  exports["default"] = function(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };
  exports.__esModule = true;
  global.define = __define;
  return module.exports;
});

$__System.register("5d", ["56", "5c", "b"], function (_export) {
  var _get, _inherits, _classCallCheck, MTError;

  return {
    setters: [function (_) {
      _get = _["default"];
    }, function (_c) {
      _inherits = _c["default"];
    }, function (_b) {
      _classCallCheck = _b["default"];
    }],
    execute: function () {
      /**
       * Martian - Core JavaScript API for MindTouch
       *
       * Copyright (c) 2015 MindTouch Inc.
       * www.mindtouch.com  oss@mindtouch.com
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *     http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      "use strict";

      MTError = (function (_Error) {
        _inherits(MTError, _Error);

        /**
         * Placeholder class to contain the workaround for Babel not being able
         * to subclass built-in objects due to ES5 limitations.
         */

        function MTError(message) {
          _classCallCheck(this, MTError);

          _get(Object.getPrototypeOf(MTError.prototype), "constructor", this).call(this);
          this.message = message;
          this.stack = new Error().stack;
          this.name = this.constructor.name;
        }

        return MTError;
      })(Error);

      _export("default", MTError);
    }
  };
});
$__System.register('5e', ['56', '5c', 'b', '5d'], function (_export) {
    var _get, _inherits, _classCallCheck, MTError, XhrError;

    return {
        setters: [function (_) {
            _get = _['default'];
        }, function (_c) {
            _inherits = _c['default'];
        }, function (_b) {
            _classCallCheck = _b['default'];
        }, function (_d) {
            MTError = _d['default'];
        }],
        execute: function () {
            /**
             * Martian - Core JavaScript API for MindTouch
             *
             * Copyright (c) 2015 MindTouch Inc.
             * www.mindtouch.com  oss@mindtouch.com
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *     http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
            'use strict';

            XhrError = (function (_MTError) {
                _inherits(XhrError, _MTError);

                function XhrError(xhr) {
                    var customMessage = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

                    _classCallCheck(this, XhrError);

                    var response = undefined;
                    var message = undefined;
                    if ('responseText' in xhr) {
                        try {
                            response = JSON.parse(xhr.responseText);
                            message = response.message;
                        } catch (e) {
                            message = xhr.responseText || customMessage;
                        }
                    }
                    message = message || 'Status ' + xhr.status + ' from request';
                    _get(Object.getPrototypeOf(XhrError.prototype), 'constructor', this).call(this, message);
                    this.errorCode = xhr.status;
                    this.response = response || null;
                }

                return XhrError;
            })(MTError);

            _export('default', XhrError);
        }
    };
});
$__System.register('8', ['47', '51', 'a', 'b', '4c', 'd', '5e'], function (_export) {
    var _Promise, Uri, _createClass, _classCallCheck, _Object$keys, settings, XhrError, Plug;

    function _handleHttpError(xhr) {
        return new _Promise(function (resolve, reject) {

            // Throw for all non-2xx status codes, except for 304
            if ((xhr.status < 200 || xhr.status >= 300) && xhr.status !== 304) {
                reject(new XhrError(xhr));
            } else {
                resolve(xhr);
            }
        });
    }
    function _getText(xhr) {
        return _Promise.resolve(xhr.responseText || '');
    }
    function _doRequest(params) {
        var _this = this;

        return new _Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            var requestParams = {
                _: Date.now(),
                origin: 'mt-web' // TODO: F1 req from settings module after 20150820
            };
            if (_this.parseJson) {
                requestParams['dream.out.format'] = 'json';
            }
            var url = _this.withParams(requestParams).getUrl();
            xhr.open(params.verb, url);
            xhr.setRequestHeader('X-Deki-Client', 'mindtouch-martian');
            _Object$keys(_this.headers).forEach(function (key) {
                xhr.setRequestHeader(key, _this.headers[key]);
            });
            if ('mime' in params) {
                xhr.setRequestHeader('Content-Type', params.mime);
            }
            var protocol = _this.url.protocol;
            if (protocol === 'https:') {
                xhr.setRequestHeader('Front-End-Https', 'On');
            }
            if (_this._timeout) {
                xhr.timeout = _this._timeout;
            }
            xhr.onload = function () {
                resolve(xhr);
            };
            xhr.onerror = function () {
                reject(xhr);
            };
            if ('value' in params && params.value !== null) {
                xhr.send(params.value);
            } else {
                xhr.send();
            }
        });
    }
    return {
        setters: [function (_) {
            _Promise = _['default'];
        }, function (_2) {
            Uri = _2['default'];
        }, function (_a) {
            _createClass = _a['default'];
        }, function (_b) {
            _classCallCheck = _b['default'];
        }, function (_c) {
            _Object$keys = _c['default'];
        }, function (_d) {
            settings = _d['default'];
        }, function (_e) {
            XhrError = _e['default'];
        }],
        execute: function () {
            /**
             * Martian - Core JavaScript API for MindTouch
             *
             * Copyright (c) 2015 MindTouch Inc.
             * www.mindtouch.com  oss@mindtouch.com
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *     http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
            'use strict';

            Plug = (function () {
                function Plug() {
                    var url = arguments.length <= 0 || arguments[0] === undefined ? settings.get('host') : arguments[0];
                    var params = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

                    _classCallCheck(this, Plug);

                    // initailize the url for this instance
                    var _url = new Uri(url);
                    if ('constructionParams' in params) {
                        if ('segments' in params.constructionParams) {
                            _url.addSegments(params.constructionParams.segments);
                        }
                        if ('query' in params.constructionParams) {
                            _url.addQueryParams(params.constructionParams.query);
                        }
                        if ('excludeQuery' in params.constructionParams) {
                            _url.removeQueryParam(params.constructionParams.excludeQuery);
                        }
                        if ('timeout' in params.constructionParams) {
                            this._timeout = params.constructionParams.timeout;
                        }
                    } else {
                        params.constructionParams = {};
                    }
                    this.url = _url;
                    this.headers = params.headers || {};
                    this.parseJson = params.raw !== true;
                }

                _createClass(Plug, [{
                    key: 'getUrl',
                    value: function getUrl() {
                        return this.url.toString();
                    }
                }, {
                    key: 'getHeaders',
                    value: function getHeaders() {
                        return this.headers;
                    }
                }, {
                    key: 'at',
                    value: function at() {
                        for (var _len = arguments.length, segments = Array(_len), _key = 0; _key < _len; _key++) {
                            segments[_key] = arguments[_key];
                        }

                        var values = [];
                        segments.forEach(function (segment) {
                            values.push(segment.toString());
                        });
                        return new Plug(this.url.toString(), {
                            headers: this.headers,
                            constructionParams: { segments: segments }
                        });
                    }
                }, {
                    key: 'withParam',
                    value: function withParam(key, value) {
                        var params = {};
                        params[key] = value;
                        return new Plug(this.url.toString(), {
                            headers: this.headers,
                            constructionParams: { query: params }
                        });
                    }
                }, {
                    key: 'withParams',
                    value: function withParams(values) {
                        if (!values) {
                            values = {};
                        }
                        return new Plug(this.url.toString(), {
                            headers: this.headers,
                            constructionParams: { query: values }
                        });
                    }
                }, {
                    key: 'withoutParam',
                    value: function withoutParam(key) {
                        return new Plug(this.url.toString(), {
                            headers: this.headers,
                            constructionParams: { excludeQuery: key }
                        });
                    }
                }, {
                    key: '_copyHeaders',
                    value: function _copyHeaders() {
                        var _this2 = this;

                        var newHeaders = {};
                        _Object$keys(this.headers).forEach(function (key) {
                            newHeaders[key] = _this2.headers[key];
                        });
                        return newHeaders;
                    }
                }, {
                    key: 'withHeader',
                    value: function withHeader(key, value) {
                        var newHeaders = this._copyHeaders();
                        newHeaders[key] = value;
                        return new Plug(this.url.toString(), { headers: newHeaders });
                    }
                }, {
                    key: 'withHeaders',
                    value: function withHeaders(values) {
                        var newHeaders = this._copyHeaders();
                        _Object$keys(values).forEach(function (key) {
                            newHeaders[key] = values[key];
                        });
                        return new Plug(this.url.toString(), { headers: newHeaders });
                    }
                }, {
                    key: 'withoutHeader',
                    value: function withoutHeader(key) {
                        var newHeaders = this._copyHeaders();
                        delete newHeaders[key];
                        return new Plug(this.url.toString(), { headers: newHeaders });
                    }
                }, {
                    key: 'get',
                    value: function get() {
                        var verb = arguments.length <= 0 || arguments[0] === undefined ? 'GET' : arguments[0];

                        return this.getRaw(verb).then(_handleHttpError).then(_getText);
                    }
                }, {
                    key: 'getRaw',
                    value: function getRaw() {
                        var verb = arguments.length <= 0 || arguments[0] === undefined ? 'GET' : arguments[0];

                        return _doRequest.call(this, { verb: verb });
                    }
                }, {
                    key: 'post',
                    value: function post(value, mime) {
                        return this.postRaw(value, mime).then(_handleHttpError).then(_getText);
                    }
                }, {
                    key: 'postRaw',
                    value: function postRaw(value, mime) {
                        return _doRequest.call(this, { verb: 'POST', value: value, mime: mime });
                    }
                }, {
                    key: 'put',
                    value: function put(value, mime) {
                        return this.withHeader('X-HTTP-Method-Override', 'PUT').post(value, mime);
                    }
                }, {
                    key: 'putRaw',
                    value: function putRaw(value, mime) {
                        return this.withHeader('X-HTTP-Method-Override', 'PUT').postRaw(value, mime);
                    }
                }, {
                    key: 'head',
                    value: function head() {
                        return this.get('HEAD');
                    }
                }, {
                    key: 'headRaw',
                    value: function headRaw() {
                        return this.getRaw('HEAD');
                    }
                }, {
                    key: 'options',
                    value: function options() {
                        return this.get('OPTIONS');
                    }
                }, {
                    key: 'optionsRaw',
                    value: function optionsRaw() {
                        return this.getRaw('OPTIONS');
                    }
                }, {
                    key: 'del',
                    value: function del() {
                        return this.withHeader('X-HTTP-Method-Override', 'DELETE').post(null, null);
                    }
                }, {
                    key: 'delRaw',
                    value: function delRaw() {
                        return this.withHeader('X-HTTP-Method-Override', 'DELETE').postRaw(null, null);
                    }
                }, {
                    key: 'delete',
                    value: function _delete() {
                        return this.del();
                    }
                }]);

                return Plug;
            })();

            _export('default', Plug);
        }
    };
});
$__System.register('3', [], function (_export) {
    /**
     * Martian - Core JavaScript API for MindTouch
     *
     * Copyright (c) 2015 MindTouch Inc.
     * www.mindtouch.com  oss@mindtouch.com
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *     http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    'use strict';

    var modelHelper;
    return {
        setters: [],
        execute: function () {
            modelHelper = {
                fromJson: function fromJson(data) {
                    if (typeof data === 'string') {
                        data = JSON.parse(data);
                    }
                    return data;
                },
                getInt: function getInt(field) {
                    return parseInt(field, 10);
                },
                getString: function getString(field) {
                    return typeof field === 'string' ? field : field['#text'];
                },
                getBool: function getBool(field) {
                    return field === 'true';
                },
                getDate: function getDate(field) {
                    return new Date(field);
                },
                addIfDefined: function addIfDefined(field, name, obj) {
                    var parser = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

                    if (typeof field !== 'undefined') {
                        if (parser !== null) {
                            field = parser.parse.call(parser, field);
                        }
                        obj[name] = field;
                    }
                }
            };

            _export('default', modelHelper);
        }
    };
});
$__System.register('5f', ['3'], function (_export) {
    /**
     * Martian - Core JavaScript API for MindTouch
     *
     * Copyright (c) 2015 MindTouch Inc.
     * www.mindtouch.com  oss@mindtouch.com
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *     http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    'use strict';

    var modelHelper, searchModel;
    return {
        setters: [function (_) {
            modelHelper = _['default'];
        }],
        execute: function () {
            searchModel = {
                parse: function parse(data) {
                    var obj = modelHelper.fromJson(data);
                    var search = {
                        ranking: obj['@ranking'],
                        queryId: obj['@queryid'],
                        queryCount: obj['@querycount'],
                        recommendationCount: obj['@count.recommendations'],
                        count: obj['@count'],
                        result: []
                    };
                    if ('result' in obj) {
                        var results = Array.isArray(obj.result) ? obj.result : [obj.result];
                        results.forEach(function (result) {
                            search.result.push({
                                author: result.author,
                                content: result.content,
                                dateModified: modelHelper.getDate(result['date.modified']),
                                id: result.id,
                                mime: result.mime,
                                rank: result.rank,
                                title: result.title,
                                uri: result.uri,
                                uriTrack: result['uri.track'],
                                page: {
                                    path: result.page.path,
                                    rating: result.page.rating,
                                    title: result.page.title,
                                    uriUi: result.page['uri.ui']
                                }
                            });
                        });
                    }
                    return search;
                }
            };

            _export('default', searchModel);
        }
    };
});
$__System.register('60', ['8', '9', '47', '50', 'a', 'b', '5f'], function (_export) {
    var Plug, utility, _Promise, stringUtility, _createClass, _classCallCheck, SearchModel, Site;

    function _buildSearchConstraints(params) {
        var constraints = [];
        params.namespace = 'main';
        constraints.push('+namespace:' + utility.searchEscape(params.namespace));
        if ('path' in params) {
            var path = params.path;
            if (stringUtility.startsWith(path, '/')) {
                path = stringUtility.leftTrim(path, '/');
            }
            constraints.push('+path.ancestor:' + utility.searchEscape(path));
        }
        if ('tags' in params) {
            var tags = params.tags;
            if (typeof tags === 'string' && tags) {
                tags = tags.split(',');
            }
            tags.forEach(function (tag) {
                constraints.push('+tag:"' + utility.searchEscape(tag) + '"');
            });
        }
        return '+(' + constraints.join(' ') + ')';
    }
    return {
        setters: [function (_4) {
            Plug = _4['default'];
        }, function (_2) {
            utility = _2['default'];
        }, function (_) {
            _Promise = _['default'];
        }, function (_3) {
            stringUtility = _3['default'];
        }, function (_a) {
            _createClass = _a['default'];
        }, function (_b) {
            _classCallCheck = _b['default'];
        }, function (_f) {
            SearchModel = _f['default'];
        }],
        execute: function () {
            /**
             * Martian - Core JavaScript API for MindTouch
             *
             * Copyright (c) 2015 MindTouch Inc.
             * www.mindtouch.com  oss@mindtouch.com
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *     http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
            'use strict';

            Site = (function () {
                function Site() {
                    _classCallCheck(this, Site);
                }

                _createClass(Site, null, [{
                    key: '_getPlug',
                    value: function _getPlug() {
                        if (!this.sitePlug) {
                            this.sitePlug = new Plug().at('@api', 'deki', 'site');
                        }
                        return this.sitePlug;
                    }
                }, {
                    key: 'getResourceString',
                    value: function getResourceString() {
                        var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

                        if (!('key' in options)) {
                            return _Promise.reject('No resource key was supplied');
                        }
                        var locPlug = Site._getPlug().at('localization', options.key);
                        if ('lang' in options) {
                            locPlug = locPlug.withParam('lang', options.lang);
                        }
                        return locPlug.get();
                    }
                }, {
                    key: 'search',
                    value: function search() {
                        var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

                        var _ref$page = _ref.page;
                        var page = _ref$page === undefined ? 1 : _ref$page;
                        var _ref$limit = _ref.limit;
                        var limit = _ref$limit === undefined ? 10 : _ref$limit;
                        var _ref$tags = _ref.tags;
                        var tags = _ref$tags === undefined ? '' : _ref$tags;
                        var _ref$q = _ref.q;
                        var q = _ref$q === undefined ? '' : _ref$q;
                        var _ref$path = _ref.path;
                        var path = _ref$path === undefined ? '' : _ref$path;

                        var constraint = {};
                        if (path !== '') {
                            constraint.path = path;
                        }
                        if (tags !== '') {
                            constraint.tags = tags;
                        }
                        var searchParams = {
                            limit: limit,
                            page: page,
                            offset: parseInt(limit, 10) * (parseInt(page, 10) - 1),
                            sortBy: '-date,-rank',
                            q: q,
                            summarypath: encodeURI(path),
                            constraint: _buildSearchConstraints(constraint)
                        };
                        return Site._getPlug().at('query').withParams(searchParams).get().then(function (res) {
                            return SearchModel.parse(res);
                        });
                    }
                }]);

                return Site;
            })();

            _export('default', Site);
        }
    };
});
$__System.register('61', ['60'], function (_export) {
  /**
   * MindTouch GeniusLink SDK
   * Copyright (C) 2006-2015 MindTouch, Inc.
   * www.mindtouch.com  oss@mindtouch.com
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * @param {String} q - keywords or advanced search syntax
   * @param {Object} options - {
   *  page: paginated {page}
   *  limit: limit search results to {limit} items per paginated page
   *  tags: constrain search results to items tagged with {tag}
   *  path: constraint search results to items located in the {path} page hierarchy
   * }
   * @returns {Object}
   */
  'use strict';

  var Site;
  return {
    setters: [function (_) {
      Site = _['default'];
    }],
    execute: function () {
      _export('default', function (q) {
        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

        if (!q || q === '') {
          throw new Error('Search requires keywords or advanced search syntax.');
        }
        options.q = q;
        return Site.search(options);
      });
    }
  };
});
$__System.register('d', [], function (_export) {
    /**
     * Martian - Core JavaScript API for MindTouch
     *
     * Copyright (c) 2015 MindTouch Inc.
     * www.mindtouch.com  oss@mindtouch.com
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *     http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    'use strict';

    var properties, settings;
    return {
        setters: [],
        execute: function () {
            properties = {
                host: ''
            };
            settings = {
                get: function get(propertyName) {
                    return properties[propertyName];
                },
                set: function set(propertyName, value) {
                    properties[propertyName] = value;
                },
                getSettings: function getSettings() {
                    return properties;
                }
            };

            _export('default', settings);
        }
    };
});
$__System.register('62', ['61', 'c', 'd'], function (_export) {
    /**
     * MindTouch GeniusLink SDK
     * Copyright (C) 2006-2015 MindTouch, Inc.
     * www.mindtouch.com  oss@mindtouch.com
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *     http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    'use strict';

    var search, User, settings;
    return {
        setters: [function (_) {
            search = _['default'];
        }, function (_c) {
            User = _c['default'];
        }, function (_d) {
            settings = _d['default'];
        }],
        execute: function () {
            _export('default', {

                /**
                 * Initialize GeniusLink connection
                 *
                 * @param {String} host - MindTouch host (e.g. https://example.mindtouch.us)
                 */
                init: function init(host) {
                    if (!host) {
                        throw new Error('A MindTouch host (e.g. https://example.mindtouch.us) is required to initialize the GeniusLink connection.');
                    }
                    var protocolArr = host.match(/^http(s?):/);
                    var protocol = protocolArr && Array.isArray(protocolArr) ? protocolArr[0] : window.location.protocol;
                    if (!protocolArr) {
                        host = protocol + '//' + host;
                    }
                    if (protocol === 'https:' && window.location.protocol === 'http:') {
                        throw new Error('A secure HTTPS connection cannot be made from an insecure web page.');
                    }
                    settings.set('host', host);
                },
                search: search,
                User: User
            });
        }
    };
});
$__System.register('1', ['62'], function (_export) {
  /**
   * MindTouch GeniusLink SDK
   * Copyright (C) 2006-2015 MindTouch, Inc.
   * www.mindtouch.com  oss@mindtouch.com
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  'use strict';

  var GeniusLink;
  return {
    setters: [function (_) {
      GeniusLink = _['default'];
    }],
    execute: function () {
      window.GeniusLink = GeniusLink || {};
    }
  };
});
})
(function(factory) {
  factory();
});
//# sourceMappingURL=geniuslink.js.map
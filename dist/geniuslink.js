!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in g||(g[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==m.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=g[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(m.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=g[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return D[e]||(D[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},r.name);t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=g[s],f=D[s];f?l=f.exports:c&&!c.declarative?l=c.esModule:c?(d(c),f=c.module,l=f.exports):l=v(s),f&&f.importers?(f.importers.push(t),t.dependencies.push(f)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=g[e];if(t)t.declarative?p(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=v(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=g[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(e){var r={};if("object"==typeof e||"function"==typeof e){var t=e&&e.hasOwnProperty;if(h)for(var n in e)f(r,e,n)||c(r,e,n,t);else for(var n in e)c(r,e,n,t)}return r["default"]=e,y(r,"__useDefault",{value:!0}),r}function c(e,r,t,n){(!n||r.hasOwnProperty(t))&&(e[t]=r[t])}function f(e,r,t){try{var n;return(n=Object.getOwnPropertyDescriptor(r,t))&&y(e,t,n),!0}catch(o){return!1}}function p(r,t){var n=g[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==m.call(t,u)&&(g[u]?p(u,t):v(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function v(e){if(I[e])return I[e];if("@node/"==e.substr(0,6))return _(e.substr(6));var r=g[e];if(!r)throw"Module "+e+" not present.";return a(e),p(e,[]),g[e]=void 0,r.declarative&&y(r.module.exports,"__esModule",{value:!0}),I[e]=r.declarative?r.module.exports:r.esModule}var g={},m=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},h=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(x){h=!1}var y;!function(){try{Object.defineProperty({},"a",{})&&(y=Object.defineProperty)}catch(e){y=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var D={},_="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,I={"@empty":{}};return function(e,n,o){return function(a){a(function(a){for(var u={_nodeRequire:_,register:r,registerDynamic:t,get:v,set:function(e,r){I[e]=r},newModule:function(e){return e}},d=0;d<n.length;d++)(function(e,r){r&&r.__esModule?I[e]=r:I[e]=s(r)})(n[d],arguments[d]);o(u);var i=v(e[0]);if(e.length>1)for(var d=1;d<e.length;d++)v(e[d]);return i.__useDefault?i["default"]:i})}}}("undefined"!=typeof self?self:global)

(["1"], [], function($__System) {
var require = this.require, exports = this.exports, module = this.module;
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

    var userModel, userListModel;
    return {
        setters: [function (_) {
            userModel = _.userModel;
        }],
        execute: function () {
            userListModel = [{
                field: '@count',
                name: 'count',
                transform: 'number'
            }, {
                field: '@querycount',
                name: 'queryCount',
                transform: 'number'
            }, {
                field: '@totalcount',
                name: 'totalCount',
                transform: 'number'
            }, {
                field: '@href',
                name: 'href'
            }, {
                field: 'users',
                isArray: true,
                transform: userModel
            }];

            _export('userListModel', userListModel);
        }
    };
});
$__System.register('4', ['2', '3', '5', '6', '7', '8', '9'], function (_export) {
  var userListModel, userModel, Plug, utility, modelParser, _createClass, _classCallCheck, User, UserManager;

  return {
    setters: [function (_7) {
      userListModel = _7.userListModel;
    }, function (_6) {
      userModel = _6.userModel;
    }, function (_3) {
      Plug = _3.Plug;
    }, function (_4) {
      utility = _4.utility;
    }, function (_5) {
      modelParser = _5.modelParser;
    }, function (_) {
      _createClass = _['default'];
    }, function (_2) {
      _classCallCheck = _2['default'];
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

      /**
       * A class for managing a MindTouch user.
       */
      'use strict';

      User = (function () {

        /**
         * Construct a new User object.
         * @param {Number|String} [id='current'] - The user's numeric ID or username.
         * @param {Settings} [settings] - The {@link Settings} information to use in construction. If not supplied, the default settings are used.
         */

        function User(id, settings) {
          if (id === undefined) id = 'current';

          _classCallCheck(this, User);

          this._id = utility.getResourceId(id, 'current');
          this._plug = new Plug(settings).at('@api', 'deki', 'users', this._id);
        }

        /**
         * A class for managing the users on a MindTouch site.
         */

        /**
         * Get the user information.
         * @returns {Promise.<userModel>} - A Promise that, when resolved, returns a {@link userModel} containing the user information.
         */

        _createClass(User, [{
          key: 'getInfo',
          value: function getInfo() {
            var userModelParser = modelParser.createParser(userModel);
            return this._plug.get().then(userModelParser);
          }
        }]);

        return User;
      })();

      _export('User', User);

      UserManager = (function () {

        /**
         * Construct a new UserManager object.
         * @param {Settings} [settings] - The {@link Settings} information to use in construction. If not supplied, the default settings are used.
         */

        function UserManager(settings) {
          _classCallCheck(this, UserManager);

          this.settings = settings;
          this.plug = new Plug(settings).at('@api', 'deki', 'users');
        }

        /**
         * Get the currently signed-in user.
         * @returns {Promise.<userModel>} - A Promise that, when resolved, returns a {@link userModel} containing the current user's information.
         */

        _createClass(UserManager, [{
          key: 'getCurrentUser',
          value: function getCurrentUser() {
            var userModelParser = modelParser.createParser(userModel);
            return this.plug.at('current').get().then(userModelParser);
          }

          /**
           * Get all of the users.
           * @returns {Promise.<userListModel>} - A Promise that, when resolved, returns a {@link userListModel} containing the list of users.
           */
        }, {
          key: 'getUsers',
          value: function getUsers() {
            var userListModelParser = modelParser.createParser(userListModel);
            return this.plug.get().then(userListModelParser);
          }

          /**
           * Get a listing of users filtered by the supplied constraints
           * @param {Object} constraints - The various constraints that can be used to filter the user listing.
           * @param {Number} constraints.groupid - Search for users in a specific group
           * @param {String} constraints.fullname - Search for users full name starting with supplied text.
           * @param {Boolean} constraints.active - Search for users by their active status
           * @param {Number} constraints.authprovider - Return users belonging to given authentication service id
           * @param {String} constraints.email - Search for users by name and email or part of a name and email
           * @param {Boolean} constraints.seated - Search for users with or without seats
           * @param {String} constraints.username - Search for users name starting with supplied text
           * @param {Number} constraints.roleid - Search for users of a specific role ID.
           * @param {Number} constraints.limit - Maximum number of items to retrieve. Actual maximum is capped by site setting
           * @returns {Promise.<userListModel>} - A Promise that, when resolved, returns a {@link userListModel} containing the list of found users.
           */
        }, {
          key: 'searchUsers',
          value: function searchUsers(constraints) {
            var userListModelParser = modelParser.createParser(userListModel);
            return this.plug.at('search').withParams(constraints).get().then(userListModelParser);
          }

          /**
           * Get a {@see User} object by ID.
           * @param {Number|String} [id='current'] - The user's numeric ID or username.
           * @returns {User} - The User object corresponding to the supplied ID.
           */
        }, {
          key: 'getUser',
          value: function getUser() {
            var id = arguments.length <= 0 || arguments[0] === undefined ? 'current' : arguments[0];

            return new User(id, this.settings);
          }
        }]);

        return UserManager;
      })();

      _export('UserManager', UserManager);
    }
  };
});
$__System.register('a', ['b'], function (_export) {
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

    var eventModel, userActivityModel;
    return {
        setters: [function (_b) {
            eventModel = _b.eventModel;
        }],
        execute: function () {
            userActivityModel = [{
                field: '@count',
                name: 'count',
                transform: 'number'
            }, {
                field: '@upto',
                name: 'upto'
            }, {
                field: '@since',
                name: 'since'
            }, {
                field: 'event',
                name: 'events',
                isArray: true,
                transform: eventModel
            }];

            _export('userActivityModel', userActivityModel);
        }
    };
});
$__System.register('c', ['b'], function (_export) {
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

    var eventModel, eventListModel;
    return {
        setters: [function (_b) {
            eventModel = _b.eventModel;
        }],
        execute: function () {
            eventListModel = [{
                field: '@count',
                name: 'count',
                transform: 'number'
            }, {
                field: '@upto',
                name: 'upto'
            }, {
                field: '@since',
                name: 'since'
            }, {
                field: 'summary',
                isArray: true,
                transform: [{
                    field: '@id',
                    name: 'id'
                }, {
                    field: '@datetime',
                    name: 'datetime',
                    transform: 'date'
                }, {
                    field: '@count',
                    name: 'count',
                    transform: 'number'
                }, {
                    field: '@detailid',
                    name: 'detailId'
                }, {
                    field: '@uri.detail',
                    name: 'uriDetail'
                }, {
                    field: 'event',
                    transform: eventModel
                }]
            }];

            _export('eventListModel', eventListModel);
        }
    };
});
$__System.register('b', ['d'], function (_export) {
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

    var pageModel, eventModel;
    return {
        setters: [function (_d) {
            pageModel = _d.pageModel;
        }],
        execute: function () {
            eventModel = [{
                field: '@id',
                name: 'id'
            }, {
                field: '@datetime',
                name: 'datetime',
                transform: 'date'
            }, {
                field: '@type',
                name: 'type'
            }, {
                field: '@journaled',
                name: 'journaled',
                transform: 'boolean'
            }, {
                field: '@version',
                name: 'version',
                transform: 'number'
            }, {
                field: ['request', '@id'],
                name: 'requestId'
            }, {
                field: '@language',
                name: 'language'
            }, {
                field: 'page',
                transform: pageModel
            }, {
                field: 'user',
                transform: [{
                    field: '@id',
                    name: 'id',
                    transform: 'number'
                }, {
                    field: 'name'
                }]
            }, {
                field: 'data',
                transform: [{
                    field: 'constraint'
                }, {
                    field: 'path'
                }, {
                    field: 'query'
                }, {
                    field: 'limit',
                    transform: 'number'
                }, {
                    field: 'qid',
                    transform: 'number'
                }, {
                    field: 'totalrecommended',
                    name: 'totalRecommended',
                    transform: 'number'
                }, {
                    field: 'totalresults',
                    name: 'totalResults',
                    transform: 'number'
                }, {
                    field: '_uri.host',
                    name: 'host'
                }, {
                    field: '_uri.query',
                    name: 'uriQuery'
                }, {
                    field: '_uri.scheme',
                    name: 'scheme'
                }]
            }];

            _export('eventModel', eventModel);
        }
    };
});
$__System.register('e', ['b'], function (_export) {
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

    var eventModel, eventDetailModel;
    return {
        setters: [function (_b) {
            eventModel = _b.eventModel;
        }],
        execute: function () {
            eventDetailModel = [{
                field: '@count',
                name: 'count',
                transform: 'number'
            }, {
                field: 'summary',
                transform: [{
                    field: '@id',
                    name: 'id'
                }, {
                    field: '@datetime',
                    name: 'datetime',
                    transform: 'date'
                }, {
                    field: '@count',
                    name: 'count',
                    transform: 'number'
                }, {
                    field: '@journaled',
                    name: 'journaled',
                    transform: 'boolean'
                }, {
                    field: '@diffable',
                    name: 'diffable',
                    transform: 'boolean'
                }, {
                    field: 'event',
                    transform: eventModel
                }]
            }];

            _export('eventDetailModel', eventDetailModel);
        }
    };
});
$__System.register('f', ['5', '6', '7', '8', '9', 'a', 'c', 'e'], function (_export) {
  var Plug, utility, modelParser, _createClass, _classCallCheck, userActivityModel, eventListModel, eventDetailModel, UserEvents;

  return {
    setters: [function (_3) {
      Plug = _3.Plug;
    }, function (_4) {
      utility = _4.utility;
    }, function (_5) {
      modelParser = _5.modelParser;
    }, function (_) {
      _createClass = _['default'];
    }, function (_2) {
      _classCallCheck = _2['default'];
    }, function (_a) {
      userActivityModel = _a.userActivityModel;
    }, function (_c) {
      eventListModel = _c.eventListModel;
    }, function (_e) {
      eventDetailModel = _e.eventDetailModel;
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

      /**
       * A class for fetching and managing events triggered by users.
       */
      'use strict';

      UserEvents = (function () {

        /**
         * Construct a new UserEvents object.
         * @param {Settings} [settings] - The {@link Settings} information to use in construction. If not supplied, the default settings are used.
         */

        function UserEvents(settings) {
          _classCallCheck(this, UserEvents);

          this.settings = settings;
          this.plug = new Plug(settings).at('@api', 'deki', 'events');
        }

        /**
         * Get the user activity.
         * @param {Number|String} userToken - A token that identifies the user from an event perspective.  It can be the user's numeric ID, username, or another system-defined token.
         * @returns {Promise.<userActivityModel>} - A Promise that, when resolved, yields a {@link userActivityModel} containing the user's activity events.
         */

        _createClass(UserEvents, [{
          key: 'getActivity',
          value: function getActivity(userToken, params) {
            var userActivityModelParser = modelParser.createParser(userActivityModel);
            return this.plug.at('support-agent', userToken).withParams(params).get().then(userActivityModelParser);
          }

          /**
           * Get the user's history events.
           * @param {Number|String} [userId='current'] - The user's numeric ID or username.
           * @returns {Promise.<eventListModel>} - A Promise that, when resolved, yields a {@link eventListModel} that contains the listing of the user's events.
           */
        }, {
          key: 'getHistory',
          value: function getHistory(userId) {
            var eventListModelParser = modelParser.createParser(eventListModel);
            return this.plug.at('user-page', utility.getResourceId(userId, 'current')).get().then(eventListModelParser);
          }

          /**
           * Get the details of a specific user event.
           * @param {Number|String} [userId='current'] - The user's numeric ID or username.
           * @param {String} detailId - The detail ID of the event.
           * @returns {Promise.<eventDetailModel>} - A Promise that, when resolved, yields a {@link eventDetailModel} that contains the event information.
           */
        }, {
          key: 'getHistoryDetail',
          value: function getHistoryDetail(userId, detailId) {
            var eventDetailModelParser = modelParser.createParser(eventDetailModel);
            return this.plug.at('user-page', utility.getResourceId(userId, 'current'), detailId).get().then(eventDetailModelParser);
          }

          /**
           * Log a search event that is performed by a specific user.
           * @param {Number|String} [userId='current'] - The user's numeric ID or username.
           * @param {Object} eventData - Specific data about the search that was performed.
           * @returns {Promise} - A Promise that, when resolved, indicates a successful posting of the search event.
           */
        }, {
          key: 'logSearch',
          value: function logSearch(userId, eventData) {
            return this.plug.at('search', utility.getResourceId(userId, 'current')).post(JSON.stringify(eventData), utility.jsonRequestType);
          }
        }]);

        return UserEvents;
      })();

      _export('UserEvents', UserEvents);
    }
  };
});
$__System.register('10', ['4', '8', '9', 'f'], function (_export) {
  var UserManager, _createClass, _classCallCheck, UserEvents, User;

  return {
    setters: [function (_3) {
      UserManager = _3.UserManager;
    }, function (_) {
      _createClass = _['default'];
    }, function (_2) {
      _classCallCheck = _2['default'];
    }, function (_f) {
      UserEvents = _f.UserEvents;
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

      /**
       * User management
       */
      'use strict';

      User = (function () {
        function User(settings) {
          _classCallCheck(this, User);

          this.settings = settings;
          this.martianUser = new UserManager(settings);
        }

        /**
         * The current MindTouch host user, or an anonymous user is unauthenticated
         * @returns {Promise.<Object>} - A Promise that, when resolved, yields an object with information about the current user.
         */

        _createClass(User, [{
          key: 'getCurrentUser',
          value: function getCurrentUser() {
            return this.martianUser.getCurrentUser();
          }

          /**
           * A url that allows an anonymous user to authenticate with the MindTouch host
           * @returns {String} - The URL on the MindTouch site that will present a user with a login form.
           */
        }, {
          key: 'getLoginUrl',
          value: function getLoginUrl() {
            return this.settings.get('host') + '/@app/login/redirect';
          }

          /**
           * Gets the activity of a user based on a system-defined token. Currently,
           * page views and search attempts are returned in the listing of the user activity.
           * @param  {String} userToken - A system-defined token that identifies a particular user.
           * @return {Promise.<Object>} - A Promise that, when resolved, yields the user activity event list.
           */
        }, {
          key: 'getInsights',
          value: function getInsights(userToken) {
            var ue = new UserEvents(this.settings);
            return ue.getActivity(userToken, { include: 'page' });
          }
        }]);

        return User;
      })();

      _export('User', User);
    }
  };
});
$__System.register('11', ['d'], function (_export) {
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

    var pageModel, searchModel;
    return {
        setters: [function (_d) {
            pageModel = _d.pageModel;
        }],
        execute: function () {
            searchModel = [{
                field: '@ranking',
                name: 'ranking'
            }, {
                field: '@queryid',
                name: 'queryId'
            }, {
                field: '@querycount',
                name: 'queryCount',
                transform: 'number'
            }, {
                field: '@count.recommendations',
                name: 'recommendationCount',
                transform: 'number'
            }, {
                field: '@count',
                name: 'count',
                transform: 'number'
            }, {
                field: 'result',
                name: 'results',
                isArray: true,
                transform: [{
                    field: 'author'
                }, {
                    field: 'content'
                }, {
                    field: 'date.modified',
                    name: 'dateModified',
                    transform: 'date'
                }, {
                    field: 'id',
                    transform: 'number'
                }, {
                    field: 'mime'
                }, {
                    field: 'rank',
                    transform: 'number'
                }, {
                    field: 'title'
                }, {
                    field: 'type'
                }, {
                    field: 'uri'
                }, {
                    field: 'uri.track',
                    name: 'uriTrack'
                }, {
                    field: 'page',
                    transform: pageModel
                }]
            }, {
                field: 'summary',
                transform: [{
                    field: '@path',
                    name: 'path'
                }, {
                    field: 'results',
                    isArray: true,
                    transform: [{
                        field: '@path',
                        name: 'path'
                    }, {
                        field: '@count',
                        name: 'count',
                        transform: 'number'
                    }, {
                        field: '@title',
                        name: 'title'
                    }]
                }]
            }];

            _export('searchModel', searchModel);
        }
    };
});
$__System.register('12', ['5', '6', '7', '8', '9', '11', '13', '14'], function (_export) {
    var Plug, utility, modelParser, _createClass, _classCallCheck, searchModel, stringUtility, _Promise, Site;

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
        if ('type' in params) {
            var types = params.type;
            if (typeof types === 'string' && types) {
                types = types.split(',');
            }
            types.forEach(function (type) {
                constraints.push('+type:' + utility.searchEscape(type));
            });
        }
        return '+(' + constraints.join(' ') + ')';
    }

    /**
     * A class for administering aspects of a MindTouch site.
     */
    return {
        setters: [function (_6) {
            Plug = _6.Plug;
        }, function (_4) {
            utility = _4.utility;
        }, function (_7) {
            modelParser = _7.modelParser;
        }, function (_) {
            _createClass = _['default'];
        }, function (_2) {
            _classCallCheck = _2['default'];
        }, function (_8) {
            searchModel = _8.searchModel;
        }, function (_5) {
            stringUtility = _5.stringUtility;
        }, function (_3) {
            _Promise = _3['default'];
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

                /**
                 * Construct a Site object.
                 * @param {Settings} [settings] - The {@link Settings} information to use in construction. If not supplied, the default settings are used.
                 */

                function Site(settings) {
                    _classCallCheck(this, Site);

                    this.plug = new Plug(settings).at('@api', 'deki', 'site');
                }

                /**
                 * Get the localized string corresponding to the supplied resource key.
                 * @param {Object} options - Options to direct the fetching of the localized string.
                 * @param {String} options.key - The key that identifies the string to fetch.
                 * @param {String} [options.lang] - A language code used to fetch the string in a specific language.  If not supplied, the current system language will be used.
                 * @returns {Promise.<String>} - A Promise that, when resolved, yields the fetched string.
                 */

                _createClass(Site, [{
                    key: 'getResourceString',
                    value: function getResourceString() {
                        var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

                        if (!('key' in options)) {
                            return _Promise.reject('No resource key was supplied');
                        }
                        var locPlug = this.plug.at('localization', options.key);
                        if ('lang' in options) {
                            locPlug = locPlug.withParam('lang', options.lang);
                        }
                        return locPlug.get();
                    }

                    /**
                     * Perform a search across the site.
                     * This function takes a single parameter with the following options.
                     * @param {Number} [page=1] The paginated page number offset to return.
                     * @param {Number} [limit=10] - Limit search results to the specified number of items per paginated page.
                     * @param {String} [tags=''] - A comma-separated list of tags to constrain search results to items containing one of the tags.
                     * @param {String} [type=''] - Type or types to filter the results in a comma delimited list.  Valid types: `wiki`, `document`, `image`, `binary`
                     * @param {String} [q=''] - Search keywords or advanced search syntax.
                     * @param {String} [path=''] - A page path to constrain the search results to items located under the specified path.
                     * @param {Boolean} [recommendations=true] - `true` to include recommended search results based off site configuration. `false` to suppress them.
                     * @returns {Promise.<searchModel>} - A Promise that, when resolved, yields the results from the search in a {@link searchModel}.
                     */
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
                        var _ref$type = _ref.type;
                        var type = _ref$type === undefined ? '' : _ref$type;
                        var _ref$q = _ref.q;
                        var q = _ref$q === undefined ? '' : _ref$q;
                        var _ref$path = _ref.path;
                        var path = _ref$path === undefined ? '' : _ref$path;
                        var _ref$recommendations = _ref.recommendations;
                        var recommendations = _ref$recommendations === undefined ? true : _ref$recommendations;

                        var constraint = {};
                        if (path !== '' && path !== '/') {
                            constraint.path = path;
                        }
                        if (tags !== '') {
                            constraint.tags = tags;
                        }
                        if (type !== '') {
                            constraint.type = type;
                        }
                        var searchParams = {
                            limit: limit,
                            page: page,
                            offset: parseInt(limit, 10) * (parseInt(page, 10) - 1),
                            sortBy: '-date,-rank',
                            q: q,
                            summarypath: encodeURI(path),
                            constraint: _buildSearchConstraints(constraint),
                            recommendations: recommendations
                        };
                        var searchModelParser = modelParser.createParser(searchModel);
                        return this.plug.at('query').withParams(searchParams).get().then(searchModelParser);
                    }
                }]);

                return Site;
            })();

            _export('Site', Site);
        }
    };
});
$__System.register('15', ['8', '9', '12'], function (_export) {
    var _createClass, _classCallCheck, Site, Search;

    return {
        setters: [function (_) {
            _createClass = _['default'];
        }, function (_2) {
            _classCallCheck = _2['default'];
        }, function (_3) {
            Site = _3.Site;
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

            Search = (function () {
                function Search(settings) {
                    _classCallCheck(this, Search);

                    this.site = new Site(settings);
                }

                /**
                 * @param {String} q - keywords or advanced search syntax
                 * @param {Object} options - Options that customize the set of search results.
                 * @param {Number} [options.page=1] The paginated page number offset to return.
                 * @param {Number} [options.limit=10] - Limit search results to the specified number of items per paginated page.
                 * @param {String} [options.tags=''] - A comma-separated list of tags to constrain search results to items containing one of the tags.
                 * @param {String} [options.type=''] - Type or types to filter the results in a comma delimited list.  Valid types: `wiki`, `document`, `image`, `binary`
                 * @param {String} [options.path=''] - A page path to constrain the search results to items located under the specified path.
                 * @param {Boolean} [options.recommendations=true] - `true` to include recommended search results based off site configuration. `false` to suppress them.
                 * @returns {Promise} - A Promise that, when resolved, yields the results from the search.
                 */

                _createClass(Search, [{
                    key: 'search',
                    value: function search(q) {
                        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

                        if (!q || q === '') {
                            throw new Error('Search requires keywords or advanced search syntax.');
                        }
                        options.q = q;
                        return this.site.search(options);
                    }
                }]);

                return Search;
            })();

            _export('Search', Search);
        }
    };
});
$__System.register('16', ['5', '6', '7', '8', '9', '17', '18', '19', 'd'], function (_export) {
  var Plug, utility, modelParser, _createClass, _classCallCheck, PageBase, _get, _inherits, pageModel, Draft, DraftManager;

  return {
    setters: [function (_5) {
      Plug = _5.Plug;
    }, function (_6) {
      utility = _6.utility;
    }, function (_7) {
      modelParser = _7.modelParser;
    }, function (_3) {
      _createClass = _3['default'];
    }, function (_4) {
      _classCallCheck = _4['default'];
    }, function (_8) {
      PageBase = _8.PageBase;
    }, function (_) {
      _get = _['default'];
    }, function (_2) {
      _inherits = _2['default'];
    }, function (_d) {
      pageModel = _d.pageModel;
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

      /**
       * A class for managing a single unpublished draft page.
       */
      'use strict';

      Draft = (function (_PageBase) {
        _inherits(Draft, _PageBase);

        /**
         * Construct a Draft object.
         * @param {Number|String} [id=home] - The id of the draft to construct.
         * @param {Settings} [settings] - The {@link Settings} information to use in construction. If not supplied, the default settings are used.
         */

        function Draft(id, settings) {
          if (id === undefined) id = 'home';

          _classCallCheck(this, Draft);

          _get(Object.getPrototypeOf(Draft.prototype), 'constructor', this).call(this, id);
          this._plug = new Plug(settings).at('@api', 'deki', 'drafts', this._id);
        }

        /**
         * A class for managing unpublished draft pages.
         */

        /**
         * Deactivate the current draft and revert to the published page.
         * @returns {Promise.<pageModel>} - A Promise that, when resolved, yields a {@link pageModel} for the deactivated page.
         */

        _createClass(Draft, [{
          key: 'deactivate',
          value: function deactivate() {
            var pageModelParser = modelParser.createParser(pageModel);
            return this._plug.at('deactivate').post().then(pageModelParser);
          }

          /**
           * Publish the draft.
           * @returns {Promise} - A Promise that, when resolved, indicates a successful publish operation.
           */
        }, {
          key: 'publish',
          value: function publish() {
            return this._plug.at('publish').post();
          }
        }]);

        return Draft;
      })(PageBase);

      _export('Draft', Draft);

      DraftManager = (function () {

        /**
         * Create a new DraftManager.
         * @param {Settings} [settings] - The {@link Settings} information to use in construction. If not supplied, the default settings are used.
         */

        function DraftManager(settings) {
          _classCallCheck(this, DraftManager);

          this._settings = settings;
        }

        /**
         * Create a new draft on the site where a page does not already exist.
         * @param {String} newPath - The path of the new draft.
         * @returns {Promise.<pageModel>} - A Promise that, when resolved, yields a {@link pageModel} for the newly-created draft.
         */

        _createClass(DraftManager, [{
          key: 'createDraft',
          value: function createDraft(newPath) {
            var plug = new Plug(this._settings).at('@api', 'deki', 'drafts', utility.getResourceId(newPath), 'create');
            var pageModelParser = modelParser.createParser(pageModel);
            return plug.post().then(pageModelParser);
          }

          /**
           * Fetch a new Draft object by ID.
           * @param {Number|String} [id=home] - The id of the draft to return.
           * @returns {Draft} - A new {@link Draft} object.
           */
        }, {
          key: 'getDraft',
          value: function getDraft(id) {
            return new Draft(id, this._settings);
          }
        }]);

        return DraftManager;
      })();

      _export('DraftManager', DraftManager);
    }
  };
});
$__System.registerDynamic("1a", ["1b", "1c", "1d", "1e", "1f", "20", "21", "22"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var ctx = $__require('1b'),
      $export = $__require('1c'),
      toObject = $__require('1d'),
      call = $__require('1e'),
      isArrayIter = $__require('1f'),
      toLength = $__require('20'),
      getIterFn = $__require('21');
  $export($export.S + $export.F * !$__require('22')(function(iter) {
    Array.from(iter);
  }), 'Array', {from: function from(arrayLike) {
      var O = toObject(arrayLike),
          C = typeof this == 'function' ? this : Array,
          $$ = arguments,
          $$len = $$.length,
          mapfn = $$len > 1 ? $$[1] : undefined,
          mapping = mapfn !== undefined,
          index = 0,
          iterFn = getIterFn(O),
          length,
          result,
          step,
          iterator;
      if (mapping)
        mapfn = ctx(mapfn, $$len > 2 ? $$[2] : undefined, 2);
      if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
        for (iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++) {
          result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;
        }
      } else {
        length = toLength(O.length);
        for (result = new C(length); length > index; index++) {
          result[index] = mapping ? mapfn(O[index], index) : O[index];
        }
      }
      result.length = index;
      return result;
    }});
  return module.exports;
});

$__System.registerDynamic("23", ["24", "1a", "25"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  $__require('24');
  $__require('1a');
  module.exports = $__require('25').Array.from;
  return module.exports;
});

$__System.registerDynamic("26", ["23"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "default": $__require('23'),
    __esModule: true
  };
  return module.exports;
});

$__System.registerDynamic("27", ["26"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var _Array$from = $__require('26')["default"];
  exports["default"] = function(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0,
          arr2 = Array(arr.length); i < arr.length; i++)
        arr2[i] = arr[i];
      return arr2;
    } else {
      return _Array$from(arr);
    }
  };
  exports.__esModule = true;
  return module.exports;
});

$__System.register('7', ['27'], function (_export) {
    var _toConsumableArray, modelParser;

    return {
        setters: [function (_) {
            _toConsumableArray = _['default'];
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

            modelParser = {
                to: {
                    boolean: function boolean(value) {
                        return value === 'true';
                    },
                    date: function date(value) {
                        var dateValue = new Date(value);
                        if (isNaN(dateValue.getTime())) {
                            throw new Error('Failed converting to date');
                        }
                        return dateValue;
                    },
                    number: function number(value) {
                        var intValue = Number(value);
                        if (String(intValue) !== value) {
                            throw new Error('Failed converting to integer');
                        }
                        return intValue;
                    },
                    json: function json(data) {
                        if (typeof data === 'string') {
                            data = JSON.parse(data);
                        }
                        return data;
                    }
                },
                isValid: function isValid(value) {
                    return value === 0 || value === false || Boolean(value);
                },
                forceArray: function forceArray(value) {
                    if (!modelParser.isValid(value)) {
                        return [];
                    }
                    return Array.isArray(value) ? value : [value];
                },
                getValue: function getValue(obj) {
                    if (!obj || typeof obj !== 'object') {
                        return;
                    }

                    for (var _len = arguments.length, fields = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                        fields[_key - 1] = arguments[_key];
                    }

                    var currentField = fields.shift();
                    if (currentField in obj) {

                        // Special '#text' logic to return parent field if it's a string
                        var textParentIsString = fields.length === 1 && fields[0] === '#text' && typeof obj[currentField] === 'string';
                        if (fields.length === 0 || textParentIsString) {
                            return obj[currentField];
                        }
                        return modelParser.getValue.apply(modelParser, [obj[currentField]].concat(fields));
                    }
                },
                transformValue: function transformValue(value, transform) {
                    var result = value;
                    if (typeof transform === 'string') {
                        result = modelParser.to[transform](value);
                    } else if (Array.isArray(transform)) {
                        var parser = modelParser.createParser(transform);
                        result = parser(value);
                    } else if (typeof transform === 'function') {
                        result = transform(value);
                    } else {
                        throw new Error('Invalid value used for the transform parameter while trying to convert ' + value);
                    }
                    return result;
                },
                parseProperty: function parseProperty(data, parsedObj, _ref) {
                    var field = _ref.field;
                    var name = _ref.name;
                    var isArray = _ref.isArray;
                    var transform = _ref.transform;

                    if (!data || typeof data !== 'object') {
                        throw new TypeError('Cannot parse a non-object');
                    }
                    var fields = modelParser.forceArray(field);
                    var value = modelParser.getValue.apply(modelParser, [data].concat(_toConsumableArray(fields)));
                    if (isArray) {
                        value = modelParser.forceArray(value);
                    }
                    if (transform && modelParser.isValid(value) || typeof transform === 'function') {
                        if (isArray) {
                            value = value.map(function (val) {
                                return modelParser.transformValue(val, transform);
                            });
                        } else {
                            value = modelParser.transformValue(value, transform);
                        }
                    }
                    name = name || fields[0];
                    if (name in parsedObj) {
                        throw new Error('Duplicate "' + name + '" in parsing model');
                    }
                    if (modelParser.isValid(value)) {
                        parsedObj[name] = value;
                    }
                },
                createParser: function createParser(model) {
                    return function (data) {
                        data = modelParser.to.json(data);
                        var parsedObj = {};
                        model.forEach(function (propertyModel) {
                            return modelParser.parseProperty(data, parsedObj, propertyModel);
                        });
                        return parsedObj;
                    };
                }
            };

            _export('modelParser', modelParser);
        }
    };
});
$__System.register('28', [], function (_export) {
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

    var pageTagsModel;
    return {
        setters: [],
        execute: function () {
            pageTagsModel = [{
                field: '@count',
                name: 'count',
                transform: 'number'
            }, {
                field: '@href',
                name: 'href'
            }, {
                field: 'tag',
                name: 'tags',
                isArray: true,
                transform: [{
                    field: '@id',
                    name: 'id',
                    transformer: 'number'
                }, {
                    field: '@value',
                    name: 'value'
                }, {
                    field: '@href',
                    name: 'href'
                }, {
                    field: 'title'
                }, {
                    field: 'type'
                }, {
                    field: 'uri'
                }]
            }];

            _export('pageTagsModel', pageTagsModel);
        }
    };
});
$__System.register('29', ['3', 'd'], function (_export) {
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

    var userModel, pageModel, fileModel;
    return {
        setters: [function (_) {
            userModel = _.userModel;
        }, function (_d) {
            pageModel = _d.pageModel;
        }],
        execute: function () {
            fileModel = [{
                field: '@id',
                name: 'id',
                transform: 'number'
            }, {
                field: '@revision',
                name: 'revision',
                transform: 'number'
            }, {
                field: '@res-id',
                name: 'resId',
                transform: 'number'
            }, {
                field: '@href',
                name: 'href'
            }, {
                field: '@res-is-head',
                name: 'resIsHead',
                transform: 'boolean'
            }, {
                field: '@res-is-deleted',
                name: 'resIsDeleted',
                transform: 'boolean'
            }, {
                field: '@res-rev-is-head',
                name: 'resRevIsHead',
                transform: 'boolean'
            }, {
                field: '@res-contents-id',
                name: 'resContentsId',
                transform: 'number'
            }, {
                field: 'date.created',
                name: 'dateCreated',
                transform: 'date'
            }, {
                field: 'description'
            }, {
                field: 'filename'
            }, {
                field: 'contents',
                transform: [{
                    field: '@type',
                    name: 'type'
                }, {
                    field: '@size',
                    name: 'size',
                    transform: 'number'
                }, {
                    field: '@href',
                    name: 'href'
                }]
            }, {
                field: 'user.createdby',
                name: 'userCreatedBy',
                transform: userModel
            }, {
                field: 'page.parent',
                name: 'pageParent',
                transform: pageModel
            }];

            _export('fileModel', fileModel);
        }
    };
});
$__System.register('2a', ['29'], function (_export) {
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

    var fileModel, pageFilesModel;
    return {
        setters: [function (_) {
            fileModel = _.fileModel;
        }],
        execute: function () {
            pageFilesModel = [{
                field: '@count',
                name: 'count',
                transform: 'number'
            }, {
                field: '@offset',
                name: 'offset',
                transform: 'number'
            }, {
                field: '@totalcount',
                name: 'totalCount',
                transform: 'number'
            }, {
                field: '@href',
                name: 'href'
            }, {
                field: 'file',
                name: 'files',
                isArray: true,
                transform: fileModel
            }];

            _export('pageFilesModel', pageFilesModel);
        }
    };
});
$__System.register('2b', ['d'], function (_export) {
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

    var pageModel, pageEditModel;
    return {
        setters: [function (_d) {
            pageModel = _d.pageModel;
        }],
        execute: function () {
            pageEditModel = [{
                field: '@status',
                name: 'status'
            }, {
                field: 'page',
                transform: pageModel
            }, {
                field: 'draft',
                transform: pageModel
            }, {
                field: 'page.base',
                name: 'pageBase',
                transform: pageModel
            }, {
                field: 'page.overwritten',
                name: 'pageOverwritten',
                transform: pageModel
            }];

            _export('pageEditModel', pageEditModel);
        }
    };
});
$__System.register('2c', ['d'], function (_export) {
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

    var pageModel, relatedPagesModel;
    return {
        setters: [function (_d) {
            pageModel = _d.pageModel;
        }],
        execute: function () {
            relatedPagesModel = [{
                field: '@count',
                name: 'count',
                transform: 'number'
            }, {
                field: '@href',
                name: 'href'
            }, {
                field: 'page',
                name: 'pages',
                isArray: true,
                transform: pageModel
            }];

            _export('relatedPagesModel', relatedPagesModel);
        }
    };
});
$__System.register('17', ['6', '7', '8', '9', '14', '28', '2e', 'd', '2d', '2a', '2b', '2c'], function (_export) {
    var utility, modelParser, _createClass, _classCallCheck, _Promise, pageTagsModel, _Object$keys, pageModel, pageContentsModel, pageFilesModel, pageEditModel, relatedPagesModel, PageBase;

    function _handleVirtualPage(error) {
        if (error.errorCode === 404 && error.response && error.response['@virtual']) {
            var pageModelParser = modelParser.createParser(pageModel);
            return _Promise.resolve(pageModelParser(error.response));
        }
        throw error;
    }
    return {
        setters: [function (_4) {
            utility = _4.utility;
        }, function (_5) {
            modelParser = _5.modelParser;
        }, function (_) {
            _createClass = _['default'];
        }, function (_2) {
            _classCallCheck = _2['default'];
        }, function (_3) {
            _Promise = _3['default'];
        }, function (_6) {
            pageTagsModel = _6.pageTagsModel;
        }, function (_e) {
            _Object$keys = _e['default'];
        }, function (_d) {
            pageModel = _d.pageModel;
        }, function (_d2) {
            pageContentsModel = _d2.pageContentsModel;
        }, function (_a) {
            pageFilesModel = _a.pageFilesModel;
        }, function (_b) {
            pageEditModel = _b.pageEditModel;
        }, function (_c) {
            relatedPagesModel = _c.relatedPagesModel;
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

            PageBase = (function () {
                function PageBase(id) {
                    _classCallCheck(this, PageBase);

                    if (this.constructor.name === 'PageBase') {
                        throw new TypeError('PageBase must not be constructed directly.  Use one of Page() or Draft()');
                    }
                    this._id = utility.getResourceId(id, 'home');
                }

                _createClass(PageBase, [{
                    key: 'getFullInfo',
                    value: function getFullInfo() {
                        var pageModelParser = modelParser.createParser(pageModel);
                        return this._plug.get().then(pageModelParser)['catch'](_handleVirtualPage);
                    }
                }, {
                    key: 'getContents',
                    value: function getContents(params) {
                        var pageContentsModelParser = modelParser.createParser(pageContentsModel);
                        return this._plug.at('contents').withParams(params).get().then(pageContentsModelParser);
                    }
                }, {
                    key: 'setContents',
                    value: function setContents(contents) {
                        var params = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

                        if (typeof contents !== 'string') {
                            return _Promise.reject(new Error('Contents should be string.'));
                        }
                        var contentsParams = {
                            edittime: 'now'
                        };
                        _Object$keys(params).forEach(function (key) {
                            contentsParams[key] = params[key];
                        });
                        var pageEditModelParser = modelParser.createParser(pageEditModel);
                        return this._plug.at('contents').withParams(contentsParams).post(contents, 'text/plain; charset=utf-8').then(pageEditModelParser);
                    }
                }, {
                    key: 'getFiles',
                    value: function getFiles() {
                        var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

                        var pageFilesModelParser = modelParser.createParser(pageFilesModel);
                        return this._plug.at('files').withParams(params).get().then(pageFilesModelParser);
                    }
                }, {
                    key: 'getOverview',
                    value: function getOverview() {
                        return this._plug.at('overview').get().then(JSON.parse).then(function (overview) {
                            return _Promise.resolve({ overview: overview });
                        })['catch'](function () {
                            return _Promise.reject('Unable to parse the page overview response');
                        });
                    }
                }, {
                    key: 'setOverview',
                    value: function setOverview() {
                        var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

                        if (!('body' in options)) {
                            return _Promise.reject(new Error('No overview body was supplied'));
                        }
                        var request = '<overview>' + options.body + '</overview>';
                        return this._plug.at('overview').put(request);
                    }
                }, {
                    key: 'getTags',
                    value: function getTags() {
                        var pageTagsModelParser = modelParser.createParser(pageTagsModel);
                        return this._plug.at('tags').get().then(pageTagsModelParser);
                    }
                }, {
                    key: 'getDiff',
                    value: function getDiff() {
                        throw new Error('Page.getDiff() is not implemented');
                    }
                }, {
                    key: 'getRelated',
                    value: function getRelated() {
                        var relatedPagesModelParser = modelParser.createParser(relatedPagesModel);
                        return this._plug.at('related').get().then(relatedPagesModelParser);
                    }
                }]);

                return PageBase;
            })();

            _export('PageBase', PageBase);
        }
    };
});
$__System.register('2f', [], function (_export) {
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

    var subpagesModel;
    return {
        setters: [],
        execute: function () {
            subpagesModel = [{
                field: '@totalcount',
                name: 'totalCount',
                transform: 'number'
            }, {
                field: '@count',
                name: 'count',
                transform: 'number'
            }, {
                field: '@href',
                name: 'href'
            }, {
                field: 'page.subpage',
                name: 'subpages',
                isArray: true,
                transform: [{
                    field: '@id',
                    name: 'id',
                    transform: 'number'
                }, {
                    field: '@href',
                    name: 'href'
                }, {
                    field: '@deleted',
                    name: 'deleted',
                    transform: 'boolean'
                }, {
                    field: '@subpages',
                    name: 'hasSubpages',
                    transform: 'boolean'
                }, {
                    field: 'date.created',
                    name: 'dateCreated',
                    transform: 'date'
                }, {
                    field: 'language'
                }, {
                    field: 'namespace'
                }, {
                    field: ['path', '#text']
                }, {
                    field: 'title'
                }, {
                    field: 'uri.ui',
                    name: 'uri'
                }]
            }];

            _export('subpagesModel', subpagesModel);
        }
    };
});
$__System.registerDynamic("30", ["31"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var _Object$defineProperty = $__require('31')["default"];
  exports["default"] = function(obj, key, value) {
    if (key in obj) {
      _Object$defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  };
  exports.__esModule = true;
  return module.exports;
});

$__System.register('2d', ['30'], function (_export) {
    var _defineProperty, pageContentsModel;

    return {
        setters: [function (_) {
            _defineProperty = _['default'];
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

            pageContentsModel = [{
                field: '@type',
                name: 'type'
            }, {
                field: '@title',
                name: 'title'
            }, {
                field: '@unsafe',
                name: 'unsafe',
                transform: 'boolean'
            }, {
                field: '@draft',
                name: 'draft',
                transform: 'boolean'
            }, {
                field: 'head'
            }, {
                field: 'tail'
            }, {
                field: 'body',
                transform: function transform(body) {
                    return Array.isArray(body) ? body[0] : body;
                }
            }, {
                field: 'body',
                name: 'targets',
                transform: function transform(body) {
                    var targets = [];
                    if (Array.isArray(body)) {
                        for (var i = 1; i < body.length; i++) {
                            targets.push(_defineProperty({}, body[i]['@target'], body[i]['#text']));
                        }
                    }
                    return targets;
                }
            }];

            _export('pageContentsModel', pageContentsModel);
        }
    };
});
$__System.register('32', ['d'], function (_export) {
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

    var pageModel, pageTreeModel;
    return {
        setters: [function (_d) {
            pageModel = _d.pageModel;
        }],
        execute: function () {
            pageTreeModel = [{
                field: 'page',
                transform: pageModel
            }];

            _export('pageTreeModel', pageTreeModel);
        }
    };
});
$__System.register('33', ['d'], function (_export) {
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

    var pageModel, pageMoveModel;
    return {
        setters: [function (_d) {
            pageModel = _d.pageModel;
        }],
        execute: function () {
            pageMoveModel = [{
                field: '@count',
                name: 'count',
                transform: 'number'
            }, {
                field: 'page',
                name: 'pages',
                isArray: true,
                transform: pageModel
            }];

            _export('pageMoveModel', pageMoveModel);
        }
    };
});
$__System.register('34', [], function (_export) {
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

    var pageRatingModel;
    return {
        setters: [],
        execute: function () {
            pageRatingModel = [{
                field: '@count',
                name: 'count',
                transform: 'number'
            }, {
                field: '@date',
                name: 'date',
                transform: 'date'
            }, {
                field: '@seated.count',
                name: 'seatedCount',
                transform: 'number'
            }, {
                field: '@unseated.count',
                name: 'unseatedCount',
                transform: 'number'
            }, {
                field: '@score',
                name: 'score',
                transform: 'number'
            }, {
                field: '@seated.score',
                name: 'seatedScore',
                transform: 'number'
            }, {
                field: '@unseated.score',
                name: 'unseatedScore',
                transform: 'number'
            }, {
                field: '@score.trend',
                name: 'scoreTrend',
                transform: 'number'
            }, {
                field: '@seated.score.trend',
                name: 'seatedScoreTrend',
                transform: 'number'
            }, {
                field: '@unseated.score.trend',
                name: 'unseatedScoreTrend',
                transform: 'number'
            }, {
                field: 'user.ratedby',
                name: 'userRatedBy',
                transform: [{
                    field: '@id',
                    name: 'id',
                    transform: 'number'
                }, {
                    field: '@score',
                    name: 'score',
                    transform: 'number'
                }, {
                    field: '@date',
                    name: 'date',
                    transform: 'date'
                }, {
                    field: '@href',
                    name: 'href'
                }, {
                    field: '@seated',
                    name: 'seated',
                    transform: 'boolean'
                }]
            }];

            _export('pageRatingModel', pageRatingModel);
        }
    };
});
$__System.register('35', [], function (_export) {
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

    var permissionsModel;
    return {
        setters: [],
        execute: function () {
            permissionsModel = [{
                field: ['operations', '#text'],
                transform: function transform(value) {
                    var result = [];
                    if (typeof value === 'string') {
                        result = value.split(',');
                    }
                    return result;
                }
            }, {
                field: 'role',
                transform: function transform(value) {
                    var roleObj = {};
                    if (typeof value === 'string') {
                        roleObj.name = value;
                    } else if (value && typeof value === 'object') {
                        if ('#text' in value) {
                            roleObj.name = value['#text'];
                        }
                        if ('@id' in value) {
                            roleObj.id = parseInt(value['@id'], 10);
                        }
                        if ('@href' in value) {
                            roleObj.href = value['@href'];
                        }
                    }
                    return roleObj;
                }
            }];

            _export('permissionsModel', permissionsModel);
        }
    };
});
$__System.register('3', ['35', 'd'], function (_export) {
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

    var permissionsModel, pageModel, userModel;
    return {
        setters: [function (_) {
            permissionsModel = _.permissionsModel;
        }, function (_d) {
            pageModel = _d.pageModel;
        }],
        execute: function () {
            userModel = [{
                field: '@id',
                name: 'id',
                transform: 'number'
            }, {
                field: '@wikiid',
                name: 'wikiId'
            }, {
                field: '@href',
                name: 'href'
            }, {
                field: 'date.created',
                name: 'dateCreated'
            }, {
                field: 'email'
            }, {
                field: 'fullname'
            }, {
                field: 'username'
            }, {
                field: 'nick'
            }, {
                field: 'status'
            }, {
                field: ['license.seat', '#text'],
                name: 'seated',
                transform: 'boolean'
            }, {
                field: ['license.seat', '@owner'],
                name: 'siteOwner',
                transform: 'boolean'
            }, {
                field: 'date.lastlogin',
                name: 'dateLastLogin',
                transform: 'date'
            }, {
                field: 'page.home',
                name: 'pageHome',
                transform: pageModel
            }, {
                field: 'permissions.user',
                name: 'userPermissions',
                transform: permissionsModel
            }];

            _export('userModel', userModel);
        }
    };
});
$__System.register('d', ['3', '34'], function (_export) {
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

    var userModel, pageRatingModel, pageModel;
    return {
        setters: [function (_2) {
            userModel = _2.userModel;
        }, function (_) {
            pageRatingModel = _.pageRatingModel;
        }],
        execute: function () {
            pageModel = [{
                field: '@id',
                name: 'id',
                transform: 'number'
            }, {
                field: 'title'
            }, {
                field: 'uri.ui',
                name: 'uri'
            }, {
                field: '@href',
                name: 'href'
            }, {
                field: '@state',
                name: 'state'
            }, {
                field: '@draft.state',
                name: 'draftState'
            }, {
                field: 'article'
            }, {
                field: 'language'
            }, {
                field: 'namespace'
            }, {
                field: 'language.effective',
                name: 'languageEffective'
            }, {
                field: 'timeuuid'
            }, {
                field: ['path', '#text']
            }, {
                field: '@revision',
                name: 'revision',
                transform: 'number'
            }, {
                field: 'date.created',
                name: 'dateCreated',
                transform: 'date'
            }, {
                field: '@deleted',
                name: 'deleted',
                transform: 'boolean'
            }, {
                field: '@publish',
                name: 'publish',
                transform: 'boolean'
            }, {
                field: '@unpublish',
                name: 'unpublish',
                transform: 'boolean'
            }, {
                field: '@deactivate',
                name: 'deactivate',
                transform: 'boolean'
            }, {
                field: '@virtual',
                name: 'virtual',
                transform: 'boolean'
            }, {
                field: 'date.modified',
                name: 'dateModified',
                transform: 'date'
            }, {
                field: 'date.edited',
                name: 'dateEdited',
                transform: 'date'
            }, {
                field: 'rating',
                transform: pageRatingModel
            }, {
                field: 'user.author',
                name: 'userAuthor',
                transform: userModel
            }];

            _export('pageModel', pageModel);

            pageModel.push({
                field: 'page.parent',
                name: 'pageParent',
                transform: pageModel
            }, {
                field: ['subpages', 'page'],
                isArray: true,
                transform: pageModel
            });

            // TODO: Handle files
            // TODO: Handle content
            // TODO: Handle properties
            // TODO: Handle 'user.createdby'
        }
    };
});
$__System.register('36', ['d'], function (_export) {
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

    var pageModel, pageRatingsModel;
    return {
        setters: [function (_d) {
            pageModel = _d.pageModel;
        }],
        execute: function () {
            pageRatingsModel = [{
                field: '@count',
                name: 'count',
                transform: 'number'
            }, {
                field: '@href',
                name: 'href'
            }, {
                field: 'page',
                name: 'pages',
                isArray: true,
                transform: pageModel
            }];

            _export('pageRatingsModel', pageRatingsModel);
        }
    };
});
$__System.register('37', ['5', '6', '7', '8', '9', '14', '17', '18', '19', '32', '33', '34', '36', '2e', 'd', '2f', '2d'], function (_export) {
    var Plug, utility, modelParser, _createClass, _classCallCheck, _Promise, PageBase, _get, _inherits, pageTreeModel, pageMoveModel, pageRatingModel, pageRatingsModel, _Object$keys, pageModel, subpagesModel, pageContentsModel, Page, PageManager;

    return {
        setters: [function (_6) {
            Plug = _6.Plug;
        }, function (_7) {
            utility = _7.utility;
        }, function (_8) {
            modelParser = _8.modelParser;
        }, function (_3) {
            _createClass = _3['default'];
        }, function (_4) {
            _classCallCheck = _4['default'];
        }, function (_5) {
            _Promise = _5['default'];
        }, function (_9) {
            PageBase = _9.PageBase;
        }, function (_) {
            _get = _['default'];
        }, function (_2) {
            _inherits = _2['default'];
        }, function (_10) {
            pageTreeModel = _10.pageTreeModel;
        }, function (_12) {
            pageMoveModel = _12.pageMoveModel;
        }, function (_11) {
            pageRatingModel = _11.pageRatingModel;
        }, function (_13) {
            pageRatingsModel = _13.pageRatingsModel;
        }, function (_e) {
            _Object$keys = _e['default'];
        }, function (_d) {
            pageModel = _d.pageModel;
        }, function (_f) {
            subpagesModel = _f.subpagesModel;
        }, function (_d2) {
            pageContentsModel = _d2.pageContentsModel;
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

            /**
             * A class for managing a published page.
             */
            'use strict';

            Page = (function (_PageBase) {
                _inherits(Page, _PageBase);

                /**
                 * Construct a new Page.
                 * @param {Number|String} [id='home'] The numeric page ID or the page path.
                 * @param {Settings} [settings] - The {@link Settings} information to use in construction. If not supplied, the default settings are used.
                 */

                function Page(id, settings) {
                    if (id === undefined) id = 'home';

                    _classCallCheck(this, Page);

                    _get(Object.getPrototypeOf(Page.prototype), 'constructor', this).call(this, id);
                    this._plug = new Plug(settings).at('@api', 'deki', 'pages', this._id);
                }

                /**
                 * A class for managing all of the published pages on a site.
                 */

                /**
                 * Gets the basic page information.
                 * @param {Object} [params] - Additional parameters to direct the API request.
                 * @returns {Promise.<pageModel>} - A Promise that, when resolved, yields a {@link pageModel} containing the basic page information.
                 */

                _createClass(Page, [{
                    key: 'getInfo',
                    value: function getInfo() {
                        var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

                        var infoParams = { exclude: 'revision' };
                        _Object$keys(params).forEach(function (key) {
                            infoParams[key] = params[key];
                        });
                        var pageModelParser = modelParser.createParser(pageModel);
                        return this._plug.at('info').withParams(infoParams).get().then(pageModelParser);
                    }

                    /**
                     * Get the subpages of the page.
                     * @param {Object} [params] - Additional parameters to direct the API request.
                     * @returns {Promise.<subpagesModel>} - A Promise that, when resolved, yields a {@link subpagesModel} containing the basic page information.
                     */
                }, {
                    key: 'getSubpages',
                    value: function getSubpages(params) {
                        var subpagesModelParser = modelParser.createParser(subpagesModel);
                        return this._plug.at('subpages').withParams(params).get().then(subpagesModelParser);
                    }

                    /**
                     * Get a hierarchy tree based on the current page.
                     * @param {Object} [params] - Additional parameters to direct the API request.
                     * @returns {Promise.<pageTreeModel>} - A Promise that, when resolved, yields a {@link pageTreeModel} containing the basic page information.
                     */
                }, {
                    key: 'getTree',
                    value: function getTree(params) {
                        var pageTreeModelParser = modelParser.createParser(pageTreeModel);
                        return this._plug.at('tree').withParams(params).get().then(pageTreeModelParser);
                    }

                    /**
                     * Get the hierarchical list of pages IDs from the current page to the home page.
                     * @returns {Promise.<Array>} - The array of hierarchical page IDs.
                     */
                }, {
                    key: 'getTreeIds',
                    value: function getTreeIds() {
                        return this._plug.at('tree').withParam('format', 'ids').get().then(function (idString) {
                            return idString.split(',').map(function (id) {
                                var numId = parseInt(id, 10);
                                if (isNaN(numId)) {
                                    throw new Error('Unable to parse the tree IDs.');
                                }
                                return numId;
                            });
                        })['catch'](function (e) {
                            return _Promise.reject({ message: e.message });
                        });
                    }

                    /**
                     * Gets the rating information for the page.
                     * @returns {Promise.<pageRatingModel>} - A Promise that, when resolved, yields a {@link pageRatingModel} containing the rating information.
                     */
                }, {
                    key: 'getRating',
                    value: function getRating() {
                        var pageRatingModelParser = modelParser.createParser(pageRatingModel);
                        return this._plug.at('ratings').get().then(pageRatingModelParser);
                    }

                    /**
                     * Set the rating for the page.
                     * @param {String} [rating=''] - The new rating for the page.
                     * @param {String} [oldRating=''] - The old rating for the page that is being replaced by {@see rating}.
                     * @returns {Promise.<pageRatingModel>} - A Promise that, when resolved, yields a {@link pageRatingModel} containing the new rating information.
                     */
                }, {
                    key: 'rate',
                    value: function rate() {
                        var rating = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
                        var oldRating = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

                        rating = rating.toString();
                        oldRating = oldRating.toString();
                        if (rating !== '1' && rating !== '0' && rating !== '') {
                            throw new Error('Invalid rating supplied');
                        }
                        if (oldRating !== '1' && oldRating !== '0' && oldRating !== '') {
                            throw new Error('Invalid rating supplied for the old rating');
                        }
                        var pageRatingModelParser = modelParser.createParser(pageRatingModel);
                        return this._plug.at('ratings').withParams({ score: rating, previousScore: oldRating }).post(null, utility.textRequestType).then(pageRatingModelParser);
                    }

                    /**
                     * Gets a MindTouch template rendered in the context of the current page, as HTML.
                     * @param {String} path - The template path.
                     * @param {Object} [params] - Additional parameters to direct the API request.
                     * @returns {Promise.<pageContentsModel>} - A Promise that, when resolved, yields the rendered HTML within a {@link pageContentsModel}.
                     */
                }, {
                    key: 'getHtmlTemplate',
                    value: function getHtmlTemplate(path) {
                        var params = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

                        params.pageid = this._id;

                        // Double-URL-encode the path and add '=' to the beginning.  This makes
                        //  it a proper page ID to be used in a URI segment.
                        var templatePath = '=' + encodeURIComponent(encodeURIComponent(path));
                        var contentsPlug = new Plug().at('@api', 'deki', 'pages', templatePath, 'contents').withParams(params);
                        var pageContentsModelParser = modelParser.createParser(pageContentsModel);
                        return contentsPlug.get().then(pageContentsModelParser);
                    }

                    /**
                     * Move a page to a new location in the hierarchy.
                     * @param {Object} [params] - Additional parameters to direct the API request.
                     * @returns {Promise.<pageMoveModel>} - A Promise that, when resolved, yields a {@link pageMoveModel} containing information regarding the move operation.
                     */
                }, {
                    key: 'move',
                    value: function move() {
                        var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

                        var pageMoveModelParser = modelParser.createParser(pageMoveModel);
                        return this._plug.at('move').withParams(params).post(null, 'text/plain; charset=utf-8').then(pageMoveModelParser);
                    }

                    /**
                     * Using the current page, activates a draft; copying tghe page's content and attachments.
                     * @returns {Promise.<pageModel>} - A Promise that, when resolved, yields a {@link pageModel} containing the page information following the activation.
                     */
                }, {
                    key: 'activateDraft',
                    value: function activateDraft() {
                        var pageModelParser = modelParser.createParser(pageModel);
                        return this._plug.at('activate-draft').post().then(pageModelParser);
                    }
                }]);

                return Page;
            })(PageBase);

            _export('Page', Page);

            PageManager = (function () {
                function PageManager(settings) {
                    _classCallCheck(this, PageManager);

                    this._plug = new Plug(settings).at('@api', 'deki', 'pages');
                }

                /**
                 * Get the ratings that have been set for a series of pages.
                 * @param {Array} pageIds - The list of pages for which ratings data is fetched.
                 * @returns {Promise.<pageRatingsModel>} - A Promise that, when resolved, yields a {@link pageRatingsModel} object with the ratings information.
                 */

                _createClass(PageManager, [{
                    key: 'getRatings',
                    value: function getRatings(pageIds) {
                        var ratingsPlug = this._plug.at('pages', 'ratings').withParams({ pageids: pageIds.join(',') });
                        var pageRatingsModelParser = modelParser.createParser(pageRatingsModel);
                        return ratingsPlug.get().then(pageRatingsModelParser);
                    }
                }]);

                return PageManager;
            })();

            _export('PageManager', PageManager);
        }
    };
});
$__System.register('38', ['8', '9', '14', '16', '27', '37'], function (_export) {
    var _createClass, _classCallCheck, _Promise, DraftManager, _toConsumableArray, Page, Article;

    function _getTagsMarkup(tags) {
        var tagsMarkup = '';
        tags.forEach(function (tag) {
            tagsMarkup = tagsMarkup + '<a>' + tag + '</a>';
        });
        tagsMarkup = '<p class="template:tag-insert">' + tagsMarkup + '</p>';
        return tagsMarkup;
    }

    /**
     * Article management
     */
    return {
        setters: [function (_) {
            _createClass = _['default'];
        }, function (_2) {
            _classCallCheck = _2['default'];
        }, function (_4) {
            _Promise = _4['default'];
        }, function (_5) {
            DraftManager = _5.DraftManager;
        }, function (_3) {
            _toConsumableArray = _3['default'];
        }, function (_6) {
            Page = _6.Page;
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

            Article = (function () {
                function Article(settings) {
                    _classCallCheck(this, Article);

                    this._settings = settings;
                }

                /**
                 * Create an unpublished article on the MindTouch site.
                 *
                 * This function takes a single Object parameter that controls the Article creation. The following parameters are valid:
                 * @param {String} path - The path of the new article
                 * @param {String} [content=''] - The initial contents of the new article.  Defaults to ''
                 * @param {String} [title=null] - The display title of the new page.  If not supplied, it is inferred from the path parameter.
                 * @param {String} [type='article:topic'] - Article type of the new article. Valid types are: `article:topic-category`, `article:topic-guide`, `article:topic`, `article:howto`, `article:reference`.  Defaults to `article:topic`
                 * @param {Array} [tags=[]] - Initial tags to be set on the new article.  Defaults to an empty array.
                 * @return {Promise} A Promise yielding an object that contains information about the newly created article.
                 */

                _createClass(Article, [{
                    key: 'createUnpublished',
                    value: function createUnpublished(_ref) {
                        var _this = this;

                        var path = _ref.path;
                        var _ref$content = _ref.content;
                        var content = _ref$content === undefined ? '' : _ref$content;
                        var _ref$title = _ref.title;
                        var title = _ref$title === undefined ? null : _ref$title;
                        var _ref$type = _ref.type;
                        var type = _ref$type === undefined ? 'article:topic' : _ref$type;
                        var _ref$tags = _ref.tags;
                        var tags = _ref$tags === undefined ? [] : _ref$tags;

                        return new _Promise(function (resolve, reject) {
                            var draftManager = new DraftManager(_this._settings);
                            var tagsWithArticleType = [].concat(_toConsumableArray(tags));

                            // First, create a new, empty draft at the path supplied.
                            draftManager.createDraft(path).then(function (resp) {
                                if (tagsWithArticleType.indexOf(type) < 0) {
                                    tagsWithArticleType.push(type);
                                }
                                var tagsMarkup = _getTagsMarkup(tagsWithArticleType);
                                var newContent = '' + content + tagsMarkup;

                                // Now that the draft is created, set the contents and title;
                                var contentsParams = {};
                                if (title !== null) {
                                    contentsParams.title = title;
                                }
                                var newDraft = draftManager.getDraft(resp.id);
                                newDraft.setContents(newContent, contentsParams).then(function (contentsResp) {
                                    resolve(contentsResp);
                                })['catch'](function () {
                                    reject('An error occurred while setting the unpublished article content');
                                });
                            })['catch'](function () {
                                reject('An error occurred while creating the unpublished article');
                            });
                        });
                    }

                    /**
                     * Create a published article on the MindTouch site.
                     *
                     * This function takes a single Object parameter that controls the Article creation. The following parameters are valid:
                     * @param {String} path - The path of the new article
                     * @param {String} [content=''] - The initial contents of the new article.  Defaults to ''
                     * @param {String} [title=null] - The display title of the new page.  If not supplied, it is inferred from the path parameter.
                     * @param {String} [type='article:topic'] - Article type of the new article. Valid types are: `article:topic-category`, `article:topic-guide`, `article:topic`, `article:howto`, `article:reference`.  Defaults to `article:topic`
                     * @param {Array} [tags=[]] - Initial tags to be set on the new article.  Defaults to an empty array.
                     * @return {Promise} A Promise yielding an object that contains information about the newly created article.
                     */
                }, {
                    key: 'createPublished',
                    value: function createPublished(_ref2) {
                        var _this2 = this;

                        var path = _ref2.path;
                        var _ref2$title = _ref2.title;
                        var title = _ref2$title === undefined ? null : _ref2$title;
                        var _ref2$content = _ref2.content;
                        var content = _ref2$content === undefined ? '' : _ref2$content;
                        var _ref2$type = _ref2.type;
                        var type = _ref2$type === undefined ? 'article:topic' : _ref2$type;
                        var _ref2$tags = _ref2.tags;
                        var tags = _ref2$tags === undefined ? [] : _ref2$tags;

                        return new _Promise(function (resolve, reject) {
                            var pageApi = new Page(path, _this2._settings);
                            if (tags.indexOf(type) < 0) {
                                tags.push(type);
                            }
                            var newContent = content + '\n            ' + _getTagsMarkup(tags);
                            var contentsParams = {};
                            if (title !== null) {
                                contentsParams.title = title;
                            }
                            pageApi.setContents(newContent, contentsParams).then(function (resp) {
                                resolve(resp);
                            })['catch'](function () {
                                reject('An error occurred while creating the published article');
                            });
                        });
                    }
                }]);

                return Article;
            })();

            _export('Article', Article);
        }
    };
});
$__System.registerDynamic("39", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  "format cjs";
  return module.exports;
});

$__System.registerDynamic("3a", ["3b", "3c"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var toInteger = $__require('3b'),
      defined = $__require('3c');
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
  return module.exports;
});

$__System.registerDynamic("24", ["3a", "3d"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $at = $__require('3a')(true);
  $__require('3d')(String, 'String', function(iterated) {
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
  return module.exports;
});

$__System.registerDynamic("3e", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function() {};
  return module.exports;
});

$__System.registerDynamic("3f", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(done, value) {
    return {
      value: value,
      done: !!done
    };
  };
  return module.exports;
});

$__System.registerDynamic("40", ["41", "42", "43", "44", "45"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $ = $__require('41'),
      descriptor = $__require('42'),
      setToStringTag = $__require('43'),
      IteratorPrototype = {};
  $__require('44')(IteratorPrototype, $__require('45')('iterator'), function() {
    return this;
  });
  module.exports = function(Constructor, NAME, next) {
    Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
    setToStringTag(Constructor, NAME + ' Iterator');
  };
  return module.exports;
});

$__System.registerDynamic("3d", ["46", "1c", "47", "44", "48", "49", "40", "43", "41", "45"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var LIBRARY = $__require('46'),
      $export = $__require('1c'),
      redefine = $__require('47'),
      hide = $__require('44'),
      has = $__require('48'),
      Iterators = $__require('49'),
      $iterCreate = $__require('40'),
      setToStringTag = $__require('43'),
      getProto = $__require('41').getProto,
      ITERATOR = $__require('45')('iterator'),
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
  return module.exports;
});

$__System.registerDynamic("4a", ["3e", "3f", "49", "4b", "3d"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var addToUnscopables = $__require('3e'),
      step = $__require('3f'),
      Iterators = $__require('49'),
      toIObject = $__require('4b');
  module.exports = $__require('3d')(Array, 'Array', function(iterated, kind) {
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
  return module.exports;
});

$__System.registerDynamic("4c", ["4a", "49"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  $__require('4a');
  var Iterators = $__require('49');
  Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;
  return module.exports;
});

$__System.registerDynamic("46", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = true;
  return module.exports;
});

$__System.registerDynamic("4d", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(it, Constructor, name) {
    if (!(it instanceof Constructor))
      throw TypeError(name + ": use the 'new' operator!");
    return it;
  };
  return module.exports;
});

$__System.registerDynamic("1e", ["4e"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var anObject = $__require('4e');
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
  return module.exports;
});

$__System.registerDynamic("1f", ["49", "45"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Iterators = $__require('49'),
      ITERATOR = $__require('45')('iterator'),
      ArrayProto = Array.prototype;
  module.exports = function(it) {
    return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
  };
  return module.exports;
});

$__System.registerDynamic("3b", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var ceil = Math.ceil,
      floor = Math.floor;
  module.exports = function(it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
  };
  return module.exports;
});

$__System.registerDynamic("20", ["3b"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var toInteger = $__require('3b'),
      min = Math.min;
  module.exports = function(it) {
    return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0;
  };
  return module.exports;
});

$__System.registerDynamic("4f", ["50", "45"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var cof = $__require('50'),
      TAG = $__require('45')('toStringTag'),
      ARG = cof(function() {
        return arguments;
      }()) == 'Arguments';
  module.exports = function(it) {
    var O,
        T,
        B;
    return it === undefined ? 'Undefined' : it === null ? 'Null' : typeof(T = (O = Object(it))[TAG]) == 'string' ? T : ARG ? cof(O) : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
  };
  return module.exports;
});

$__System.registerDynamic("49", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {};
  return module.exports;
});

$__System.registerDynamic("21", ["4f", "45", "49", "25"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var classof = $__require('4f'),
      ITERATOR = $__require('45')('iterator'),
      Iterators = $__require('49');
  module.exports = $__require('25').getIteratorMethod = function(it) {
    if (it != undefined)
      return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
  };
  return module.exports;
});

$__System.registerDynamic("51", ["1b", "1e", "1f", "4e", "20", "21"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var ctx = $__require('1b'),
      call = $__require('1e'),
      isArrayIter = $__require('1f'),
      anObject = $__require('4e'),
      toLength = $__require('20'),
      getIterFn = $__require('21');
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
  return module.exports;
});

$__System.registerDynamic("52", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = Object.is || function is(x, y) {
    return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
  };
  return module.exports;
});

$__System.registerDynamic("53", ["4e", "54", "45"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var anObject = $__require('4e'),
      aFunction = $__require('54'),
      SPECIES = $__require('45')('species');
  module.exports = function(O, D) {
    var C = anObject(O).constructor,
        S;
    return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
  };
  return module.exports;
});

$__System.registerDynamic("55", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
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
  return module.exports;
});

$__System.registerDynamic("56", ["57"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('57').document && document.documentElement;
  return module.exports;
});

$__System.registerDynamic("58", ["59", "57"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var isObject = $__require('59'),
      document = $__require('57').document,
      is = isObject(document) && isObject(document.createElement);
  module.exports = function(it) {
    return is ? document.createElement(it) : {};
  };
  return module.exports;
});

$__System.registerDynamic("5a", ["1b", "55", "56", "58", "57", "50", "5b"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    var ctx = $__require('1b'),
        invoke = $__require('55'),
        html = $__require('56'),
        cel = $__require('58'),
        global = $__require('57'),
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
      if ($__require('50')(process) == 'process') {
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
  })($__require('5b'));
  return module.exports;
});

$__System.registerDynamic("5c", ["57", "5a", "50", "5b"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    var global = $__require('57'),
        macrotask = $__require('5a').set,
        Observer = global.MutationObserver || global.WebKitMutationObserver,
        process = global.process,
        Promise = global.Promise,
        isNode = $__require('50')(process) == 'process',
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
  })($__require('5b'));
  return module.exports;
});

$__System.registerDynamic("42", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };
  return module.exports;
});

$__System.registerDynamic("44", ["41", "42", "5d"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $ = $__require('41'),
      createDesc = $__require('42');
  module.exports = $__require('5d') ? function(object, key, value) {
    return $.setDesc(object, key, createDesc(1, value));
  } : function(object, key, value) {
    object[key] = value;
    return object;
  };
  return module.exports;
});

$__System.registerDynamic("47", ["44"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('44');
  return module.exports;
});

$__System.registerDynamic("5e", ["47"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var redefine = $__require('47');
  module.exports = function(target, src) {
    for (var key in src)
      redefine(target, key, src[key]);
    return target;
  };
  return module.exports;
});

$__System.registerDynamic("48", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var hasOwnProperty = {}.hasOwnProperty;
  module.exports = function(it, key) {
    return hasOwnProperty.call(it, key);
  };
  return module.exports;
});

$__System.registerDynamic("43", ["41", "48", "45"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var def = $__require('41').setDesc,
      has = $__require('48'),
      TAG = $__require('45')('toStringTag');
  module.exports = function(it, tag, stat) {
    if (it && !has(it = stat ? it : it.prototype, TAG))
      def(it, TAG, {
        configurable: true,
        value: tag
      });
  };
  return module.exports;
});

$__System.registerDynamic("5d", ["5f"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = !$__require('5f')(function() {
    return Object.defineProperty({}, 'a', {get: function() {
        return 7;
      }}).a != 7;
  });
  return module.exports;
});

$__System.registerDynamic("60", ["25", "41", "5d", "45"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core = $__require('25'),
      $ = $__require('41'),
      DESCRIPTORS = $__require('5d'),
      SPECIES = $__require('45')('species');
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
  return module.exports;
});

$__System.registerDynamic("61", ["57"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var global = $__require('57'),
      SHARED = '__core-js_shared__',
      store = global[SHARED] || (global[SHARED] = {});
  module.exports = function(key) {
    return store[key] || (store[key] = {});
  };
  return module.exports;
});

$__System.registerDynamic("62", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var id = 0,
      px = Math.random();
  module.exports = function(key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
  };
  return module.exports;
});

$__System.registerDynamic("45", ["61", "62", "57"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var store = $__require('61')('wks'),
      uid = $__require('62'),
      Symbol = $__require('57').Symbol;
  module.exports = function(name) {
    return store[name] || (store[name] = Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
  };
  return module.exports;
});

$__System.registerDynamic("22", ["45"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var ITERATOR = $__require('45')('iterator'),
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
  return module.exports;
});

$__System.registerDynamic("63", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var process = module.exports = {};
  var queue = [];
  var draining = false;
  var currentQueue;
  var queueIndex = -1;
  function cleanUpNextTick() {
    if (!draining || !currentQueue) {
      return;
    }
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
  return module.exports;
});

$__System.registerDynamic("64", ["63"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('63');
  return module.exports;
});

$__System.registerDynamic("65", ["64"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__System._nodeRequire ? process : $__require('64');
  return module.exports;
});

$__System.registerDynamic("5b", ["65"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('65');
  return module.exports;
});

$__System.registerDynamic("66", ["41", "46", "57", "1b", "4f", "1c", "59", "4e", "54", "4d", "51", "67", "52", "45", "53", "5c", "5d", "5e", "43", "60", "25", "22", "5b"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var $ = $__require('41'),
        LIBRARY = $__require('46'),
        global = $__require('57'),
        ctx = $__require('1b'),
        classof = $__require('4f'),
        $export = $__require('1c'),
        isObject = $__require('59'),
        anObject = $__require('4e'),
        aFunction = $__require('54'),
        strictNew = $__require('4d'),
        forOf = $__require('51'),
        setProto = $__require('67').set,
        same = $__require('52'),
        SPECIES = $__require('45')('species'),
        speciesConstructor = $__require('53'),
        asap = $__require('5c'),
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
        if (works && $__require('5d')) {
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
      $__require('5e')(P.prototype, {
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
    $__require('43')(P, PROMISE);
    $__require('60')(PROMISE);
    Wrapper = $__require('25')[PROMISE];
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
    $export($export.S + $export.F * !(USE_NATIVE && $__require('22')(function(iter) {
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
  })($__require('5b'));
  return module.exports;
});

$__System.registerDynamic("68", ["39", "24", "4c", "66", "25"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  $__require('39');
  $__require('24');
  $__require('4c');
  $__require('66');
  module.exports = $__require('25').Promise;
  return module.exports;
});

$__System.registerDynamic("14", ["68"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "default": $__require('68'),
    __esModule: true
  };
  return module.exports;
});

$__System.register('69', ['8', '9'], function (_export) {
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
        setters: [function (_) {
            _createClass = _['default'];
        }, function (_2) {
            _classCallCheck = _2['default'];
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

            _export('UriSearchParams', UriSearchParams);

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
                        return this.parts.protocol.toLowerCase();
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
                        var host = this.hostname.toLowerCase();
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
        }
    };
});
$__System.register('6a', ['8', '9', '13', '69', '2e'], function (_export) {
    var _createClass, _classCallCheck, stringUtility, UriParser, _Object$keys, Uri;

    return {
        setters: [function (_) {
            _createClass = _['default'];
        }, function (_2) {
            _classCallCheck = _2['default'];
        }, function (_4) {
            stringUtility = _4.stringUtility;
        }, function (_3) {
            UriParser = _3.UriParser;
        }, function (_e) {
            _Object$keys = _e['default'];
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
                        this.parsedUrl.searchParams.append(key, encodeURIComponent(value));
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
                    key: 'withProtocol',
                    value: function withProtocol(protocol) {
                        this.parsedUrl.protocol = protocol;
                        return this;
                    }
                }, {
                    key: 'withHostname',
                    value: function withHostname(hostname) {
                        this.parsedUrl.hostname = hostname;
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
                }, {
                    key: 'hostname',
                    get: function get() {
                        return this.parsedUrl.hostname;
                    }
                }, {
                    key: 'origin',
                    get: function get() {
                        return this.parsedUrl.origin;
                    }
                }]);

                return Uri;
            })();

            _export('Uri', Uri);
        }
    };
});
$__System.registerDynamic("50", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var toString = {}.toString;
  module.exports = function(it) {
    return toString.call(it).slice(8, -1);
  };
  return module.exports;
});

$__System.registerDynamic("6b", ["50"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var cof = $__require('50');
  module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it) {
    return cof(it) == 'String' ? it.split('') : Object(it);
  };
  return module.exports;
});

$__System.registerDynamic("4b", ["6b", "3c"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var IObject = $__require('6b'),
      defined = $__require('3c');
  module.exports = function(it) {
    return IObject(defined(it));
  };
  return module.exports;
});

$__System.registerDynamic("6c", ["4b", "6d"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var toIObject = $__require('4b');
  $__require('6d')('getOwnPropertyDescriptor', function($getOwnPropertyDescriptor) {
    return function getOwnPropertyDescriptor(it, key) {
      return $getOwnPropertyDescriptor(toIObject(it), key);
    };
  });
  return module.exports;
});

$__System.registerDynamic("6e", ["41", "6c"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $ = $__require('41');
  $__require('6c');
  module.exports = function getOwnPropertyDescriptor(it, key) {
    return $.getDesc(it, key);
  };
  return module.exports;
});

$__System.registerDynamic("6f", ["6e"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "default": $__require('6e'),
    __esModule: true
  };
  return module.exports;
});

$__System.registerDynamic("18", ["6f"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var _Object$getOwnPropertyDescriptor = $__require('6f')["default"];
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
  return module.exports;
});

$__System.registerDynamic("70", ["41"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $ = $__require('41');
  module.exports = function create(P, D) {
    return $.create(P, D);
  };
  return module.exports;
});

$__System.registerDynamic("71", ["70"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "default": $__require('70'),
    __esModule: true
  };
  return module.exports;
});

$__System.registerDynamic("59", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };
  return module.exports;
});

$__System.registerDynamic("4e", ["59"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var isObject = $__require('59');
  module.exports = function(it) {
    if (!isObject(it))
      throw TypeError(it + ' is not an object!');
    return it;
  };
  return module.exports;
});

$__System.registerDynamic("67", ["41", "59", "4e", "1b"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var getDesc = $__require('41').getDesc,
      isObject = $__require('59'),
      anObject = $__require('4e');
  var check = function(O, proto) {
    anObject(O);
    if (!isObject(proto) && proto !== null)
      throw TypeError(proto + ": can't set as prototype!");
  };
  module.exports = {
    set: Object.setPrototypeOf || ('__proto__' in {} ? function(test, buggy, set) {
      try {
        set = $__require('1b')(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
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
  return module.exports;
});

$__System.registerDynamic("72", ["1c", "67"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $export = $__require('1c');
  $export($export.S, 'Object', {setPrototypeOf: $__require('67').set});
  return module.exports;
});

$__System.registerDynamic("73", ["72", "25"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  $__require('72');
  module.exports = $__require('25').Object.setPrototypeOf;
  return module.exports;
});

$__System.registerDynamic("74", ["73"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "default": $__require('73'),
    __esModule: true
  };
  return module.exports;
});

$__System.registerDynamic("19", ["71", "74"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var _Object$create = $__require('71')["default"];
  var _Object$setPrototypeOf = $__require('74')["default"];
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
  return module.exports;
});

$__System.register("75", ["9", "18", "19"], function (_export) {
  var _classCallCheck, _get, _inherits, MTError;

  return {
    setters: [function (_3) {
      _classCallCheck = _3["default"];
    }, function (_) {
      _get = _["default"];
    }, function (_2) {
      _inherits = _2["default"];
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

      _export("MTError", MTError);
    }
  };
});
$__System.register('76', ['9', '18', '19', '75'], function (_export) {
    var _classCallCheck, _get, _inherits, MTError, XhrError;

    return {
        setters: [function (_3) {
            _classCallCheck = _3['default'];
        }, function (_) {
            _get = _['default'];
        }, function (_2) {
            _inherits = _2['default'];
        }, function (_4) {
            MTError = _4.MTError;
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

            _export('XhrError', XhrError);
        }
    };
});
$__System.register('5', ['8', '9', '14', '76', '77', '2e', '6a'], function (_export) {
    var _createClass, _classCallCheck, _Promise, XhrError, Settings, _Object$keys, Uri, Plug;

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

            // server will only respond with Access-Control-Allow-Credentials if valid developer token is provided
            xhr.withCredentials = true;
            var requestParams = {
                _: Date.now()
            };
            if (_this.parseJson) {
                requestParams['dream.out.format'] = 'json';
            }
            var url = new Uri(_this.withParams(requestParams).getUrl());
            xhr.open(params.verb, url.toString());
            xhr.setRequestHeader('X-Deki-Client', 'mindtouch-martian');

            // X-Deki-Requested-With (required for web widgets same-origin xhr)
            var originUrlString = _this.settings.get('origin');
            if (originUrlString && originUrlString !== '') {
                var originUri = new Uri(originUrlString);
                if (url.origin === originUri.origin) {
                    xhr.setRequestHeader('X-Deki-Requested-With', 'XMLHttpRequest');
                }
            }
            _Object$keys(_this.headers).forEach(function (key) {
                xhr.setRequestHeader(key, _this.headers[key]);
            });
            if ('mime' in params) {
                xhr.setRequestHeader('Content-Type', params.mime);
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
            xhr.ontimeout = function () {
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
            _createClass = _['default'];
        }, function (_2) {
            _classCallCheck = _2['default'];
        }, function (_3) {
            _Promise = _3['default'];
        }, function (_5) {
            XhrError = _5.XhrError;
        }, function (_4) {
            Settings = _4.Settings;
        }, function (_e) {
            _Object$keys = _e['default'];
        }, function (_a) {
            Uri = _a.Uri;
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
                    var settings = arguments.length <= 0 || arguments[0] === undefined ? new Settings() : arguments[0];
                    var params = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

                    _classCallCheck(this, Plug);

                    // Initialize the settings
                    this.settings = settings;
                    var url = this.settings.get('host');
                    var token = this.settings.get('token');

                    // Initialize the url for this instance
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
                    if (token && token !== '') {
                        this.headers['X-Deki-Token'] = token;
                    }
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
                        var newSettings = this.settings.clone({ host: this.url.toString() });
                        return new Plug(newSettings, {
                            headers: this.headers,
                            constructionParams: { segments: segments }
                        });
                    }
                }, {
                    key: 'withParam',
                    value: function withParam(key, value) {
                        var params = {};
                        params[key] = value;
                        var newSettings = this.settings.clone({ host: this.url.toString() });
                        return new Plug(newSettings, {
                            headers: this.headers,
                            constructionParams: { query: params }
                        });
                    }
                }, {
                    key: 'withParams',
                    value: function withParams() {
                        var values = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

                        var newSettings = this.settings.clone({ host: this.url.toString() });
                        return new Plug(newSettings, {
                            headers: this.headers,
                            constructionParams: { query: values }
                        });
                    }
                }, {
                    key: 'withoutParam',
                    value: function withoutParam(key) {
                        var newSettings = this.settings.clone({ host: this.url.toString() });
                        return new Plug(newSettings, {
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
                        var newSettings = this.settings.clone({ host: this.url.toString() });
                        return new Plug(newSettings, { headers: newHeaders });
                    }
                }, {
                    key: 'withHeaders',
                    value: function withHeaders(values) {
                        var newHeaders = this._copyHeaders();
                        _Object$keys(values).forEach(function (key) {
                            newHeaders[key] = values[key];
                        });
                        var newSettings = this.settings.clone({ host: this.url.toString() });
                        return new Plug(newSettings, { headers: newHeaders });
                    }
                }, {
                    key: 'withoutHeader',
                    value: function withoutHeader(key) {
                        var newHeaders = this._copyHeaders();
                        delete newHeaders[key];
                        var newSettings = this.settings.clone({ host: this.url.toString() });
                        return new Plug(newSettings, { headers: newHeaders });
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

            _export('Plug', Plug);
        }
    };
});
$__System.register('13', [], function (_export) {
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

            _export('stringUtility', stringUtility);
        }
    };
});
$__System.register('6', [], function (_export) {
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
                },
                getFilenameId: function getFilenameId(filename) {
                    if (typeof filename !== 'string') {
                        throw new Error('The filename must be a string');
                    }
                    var encodedName = encodeURIComponent(encodeURIComponent(filename));
                    if (filename.indexOf('.') <= 0) {

                        // File name has no dot (or the dot is at the first position).
                        // Assume that means it doesn't have an extension.
                        encodedName = '=' + encodedName;
                    }
                    return encodedName;
                }
            };

            _export('utility', utility);
        }
    };
});
$__System.register('78', ['5', '6', '8', '9', '13'], function (_export) {
  var Plug, utility, _createClass, _classCallCheck, stringUtility, WorkflowManager;

  return {
    setters: [function (_3) {
      Plug = _3.Plug;
    }, function (_5) {
      utility = _5.utility;
    }, function (_) {
      _createClass = _['default'];
    }, function (_2) {
      _classCallCheck = _2['default'];
    }, function (_4) {
      stringUtility = _4.stringUtility;
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

      /**
       * A class for working with site workflows.
       */
      'use strict';

      WorkflowManager = (function () {

        /**
         * Construct a new FeedbackManager.
         * @param {Settings} [settings] - The {@link Settings} information to use in construction. If not supplied, the default settings are used.
         */

        function WorkflowManager(settings) {
          _classCallCheck(this, WorkflowManager);

          this._plug = new Plug(settings).at('@api', 'deki', 'workflow');
        }

        /**
         * Submit feedback for a page.
         * @param {Object} options - Parameters to send along with the feedback.
         * @param {String} options.userEmail - The email of the user sending feedback.
         * @param {String} options.pageTitle - The display title of the page the feedback is in reference to.
         * @param {String} options.siteUrl - The URL of the MindTouch site.
         * @param {String} options.content - The body text ofd the feedback message input by the user.
         * @param {Boolean} options.contactAllowed - Notifies the API whether or not the user grants permission to contact them.
         * @returns {Promise} - A Promise that, when resolved, indicates a successful feedback submission.
         */

        _createClass(WorkflowManager, [{
          key: 'submitFeedback',
          value: function submitFeedback(options) {
            var path = options.path || stringUtility.leftTrim(window.location.pathname, '/');
            var request = JSON.stringify({
              _path: encodeURIComponent(path),
              userEmail: options.userEmail,
              pageTitle: options.pageTitle,
              siteUrl: options.siteUrl,
              content: options.content,
              contactAllowed: options.contactAllowed
            });
            return this._plug.at('submit-feedback').post(request, utility.jsonRequestType);
          }

          /**
           * Send a message requesting an article be created on the site.
           * @param {Object} options - Parameters to send along with the request. These parameters are specific to the corresponding integration configuration on the MindTouch site.
           */
        }, {
          key: 'requestArticle',
          value: function requestArticle(options) {
            var request = JSON.stringify(options);
            return this._plug.at('submit-article-request').post(request, utility.jsonRequestType);
          }

          /**
           * Send a message that submits a support issue.
           * @param {Object} options - Parameters to send along with the request. These parameters are specific to the corresponding integration configuration on the MindTouch site.
           */
        }, {
          key: 'submitIssue',
          value: function submitIssue(options) {
            var request = JSON.stringify(options);
            return this._plug.at('submit-issue').post(request, utility.jsonRequestType);
          }

          /**
           * Send a message to site support.
           * @param {Object} options - Parameters to send along with the request. These parameters are specific to the corresponding integration configuration on the MindTouch site.
           */
        }, {
          key: 'contactSupport',
          value: function contactSupport(options) {
            var request = JSON.stringify(options);
            return this._plug.at('contact-support').post(request, utility.jsonRequestType);
          }
        }]);

        return WorkflowManager;
      })();

      _export('WorkflowManager', WorkflowManager);
    }
  };
});
$__System.register('79', ['8', '9', '78'], function (_export) {
    var _createClass, _classCallCheck, WorkflowManager, Workflows;

    return {
        setters: [function (_) {
            _createClass = _['default'];
        }, function (_2) {
            _classCallCheck = _2['default'];
        }, function (_3) {
            WorkflowManager = _3.WorkflowManager;
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

            /**
             * Workflow management
             */
            'use strict';

            Workflows = (function () {
                function Workflows(settings) {
                    _classCallCheck(this, Workflows);

                    this._manager = new WorkflowManager(settings);
                }

                /**
                 * Use the submit issue workflow.
                 * @param {Object} options - The options used to control the issue submission.
                 * Other parameters may be included in the options, and are dependent on the MindTouch site’s workflow configuration.
                 * @param {String} [options.email] - If supplied, notifies the workflow logic of the email address of the user submitting the issue.
                 * @param {String} [options.path] - If supplied, notifies the workflow logic of the site path the user was on before submitting the issue.
                 * @param {String} [options.search] - If supplied, notifies the workflow logic of the last search term the user tried before submitting the issue.
                 */

                _createClass(Workflows, [{
                    key: 'submitIssue',
                    value: function submitIssue() {
                        var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

                        if ('email' in options) {
                            options._email = options.email;
                            delete options.email;
                        }
                        if ('path' in options) {
                            options._path = options.path;
                            delete options.path;
                        }
                        if ('search' in options) {
                            options._search = options.search;
                            delete options.search;
                        }
                        return this._manager.submitIssue(options);
                    }

                    /**
                     * Use the workflow that requests an article be written.
                     * @param {Object} options - The options used to control the article request.
                     * Other parameters may be included in the options, and are dependent on the MindTouch site’s workflow configuration.
                     * @param {String} [options.email] - If supplied, notifies the workflow logic of the email address of the user making the request.
                     */
                }, {
                    key: 'requestArticle',
                    value: function requestArticle() {
                        var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

                        if ('email' in options) {
                            options._email = options.email;
                            delete options.email;
                        }
                        return this._manager.requestArticle(options);
                    }

                    /**
                     * Use the contact support workflow.
                     * @param {Object} options - The options used to control the support contact request.
                     * Other parameters may be included in the options, and are dependent on the MindTouch site’s workflow configuration.
                     * @param {String} [options.email] - If supplied, notifies the workflow logic of the email address of the user contacting support.
                     * @param {String} [options.path] - If supplied, notifies the workflow logic of the site path the user was on before contacting support.
                     * @param {String} [options.search] - If supplied, notifies the workflow logic of the last search term the user tried before contacting support.
                     */
                }, {
                    key: 'contactSupport',
                    value: function contactSupport() {
                        var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

                        if ('email' in options) {
                            options._email = options.email;
                            delete options.email;
                        }
                        if ('path' in options) {
                            options._path = options.path;
                            delete options.path;
                        }
                        if ('search' in options) {
                            options._search = options.search;
                            delete options.search;
                        }
                        return this._manager.contactSupport(options);
                    }
                }]);

                return Workflows;
            })();

            _export('Workflows', Workflows);
        }
    };
});
$__System.registerDynamic("41", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
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
  return module.exports;
});

$__System.registerDynamic("7a", ["41"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $ = $__require('41');
  module.exports = function defineProperty(it, key, desc) {
    return $.setDesc(it, key, desc);
  };
  return module.exports;
});

$__System.registerDynamic("31", ["7a"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "default": $__require('7a'),
    __esModule: true
  };
  return module.exports;
});

$__System.registerDynamic("8", ["31"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var _Object$defineProperty = $__require('31')["default"];
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
  return module.exports;
});

$__System.registerDynamic("9", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  exports["default"] = function(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };
  exports.__esModule = true;
  return module.exports;
});

$__System.registerDynamic("3c", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(it) {
    if (it == undefined)
      throw TypeError("Can't call method on  " + it);
    return it;
  };
  return module.exports;
});

$__System.registerDynamic("1d", ["3c"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var defined = $__require('3c');
  module.exports = function(it) {
    return Object(defined(it));
  };
  return module.exports;
});

$__System.registerDynamic("57", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
  if (typeof __g == 'number')
    __g = global;
  return module.exports;
});

$__System.registerDynamic("54", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(it) {
    if (typeof it != 'function')
      throw TypeError(it + ' is not a function!');
    return it;
  };
  return module.exports;
});

$__System.registerDynamic("1b", ["54"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var aFunction = $__require('54');
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
  return module.exports;
});

$__System.registerDynamic("1c", ["57", "25", "1b"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var global = $__require('57'),
      core = $__require('25'),
      ctx = $__require('1b'),
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
  return module.exports;
});

$__System.registerDynamic("5f", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };
  return module.exports;
});

$__System.registerDynamic("6d", ["1c", "25", "5f"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $export = $__require('1c'),
      core = $__require('25'),
      fails = $__require('5f');
  module.exports = function(KEY, exec) {
    var fn = (core.Object || {})[KEY] || Object[KEY],
        exp = {};
    exp[KEY] = exec(fn);
    $export($export.S + $export.F * fails(function() {
      fn(1);
    }), 'Object', exp);
  };
  return module.exports;
});

$__System.registerDynamic("7b", ["1d", "6d"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var toObject = $__require('1d');
  $__require('6d')('keys', function($keys) {
    return function keys(it) {
      return $keys(toObject(it));
    };
  });
  return module.exports;
});

$__System.registerDynamic("25", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core = module.exports = {version: '1.2.6'};
  if (typeof __e == 'number')
    __e = core;
  return module.exports;
});

$__System.registerDynamic("7c", ["7b", "25"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  $__require('7b');
  module.exports = $__require('25').Object.keys;
  return module.exports;
});

$__System.registerDynamic("2e", ["7c"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "default": $__require('7c'),
    __esModule: true
  };
  return module.exports;
});

$__System.register("77", ["8", "9", "2e"], function (_export) {
    var _createClass, _classCallCheck, _Object$keys, _defaultProperties, Settings;

    return {
        setters: [function (_) {
            _createClass = _["default"];
        }, function (_2) {
            _classCallCheck = _2["default"];
        }, function (_e) {
            _Object$keys = _e["default"];
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

            _defaultProperties = {};

            Settings = (function () {
                _createClass(Settings, null, [{
                    key: "defaults",
                    set: function set(properties) {
                        _defaultProperties = properties;
                    }
                }]);

                function Settings() {
                    var properties = arguments.length <= 0 || arguments[0] === undefined ? _defaultProperties : arguments[0];

                    _classCallCheck(this, Settings);

                    this.properties = properties;
                }

                _createClass(Settings, [{
                    key: "clone",
                    value: function clone() {
                        var _this = this;

                        var overrides = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

                        var newProps = overrides;
                        _Object$keys(this.properties).forEach(function (key) {
                            if (!(key in overrides)) {
                                newProps[key] = _this.properties[key];
                            }
                        });
                        return new Settings(newProps);
                    }
                }, {
                    key: "get",
                    value: function get(propertyName) {
                        return this.properties[propertyName];
                    }
                }, {
                    key: "set",
                    value: function set(propertyName, value) {
                        this.properties[propertyName] = value;
                    }
                }, {
                    key: "getProperties",
                    value: function getProperties() {
                        return this.properties;
                    }
                }]);

                return Settings;
            })();

            _export("Settings", Settings);
        }
    };
});
$__System.register('7d', ['8', '9', '10', '15', '38', '77', '79'], function (_export) {
    var _createClass, _classCallCheck, User, Search, Article, Settings, Workflows, GeniusLink;

    return {
        setters: [function (_) {
            _createClass = _['default'];
        }, function (_2) {
            _classCallCheck = _2['default'];
        }, function (_3) {
            User = _3.User;
        }, function (_4) {
            Search = _4.Search;
        }, function (_5) {
            Article = _5.Article;
        }, function (_7) {
            Settings = _7.Settings;
        }, function (_6) {
            Workflows = _6.Workflows;
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

            /**
             * The main GeniusLink SDK entry point.
             */
            'use strict';

            GeniusLink = (function () {

                /**
                 * Construct and configure the GeniusLink connection
                 * @param {Object} configuration - An object containing other initialization values.
                 */

                function GeniusLink() {
                    var configuration = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

                    _classCallCheck(this, GeniusLink);

                    if (!('host' in configuration)) {
                        throw new Error('A MindTouch host (e.g. https://example.mindtouch.us) is required to initialize the GeniusLink SDK connection.');
                    }
                    if (!('token' in configuration)) {
                        throw new Error('A browser developer token must be supplied to initialize the GeniusLink SDK connection.');
                    } else if (typeof configuration.token !== 'string') {
                        throw new Error('An invalid browser developer token was used to initialize the GeniusLink SDK connection.');
                    }
                    var host = configuration.host;
                    var protocolArr = host.match(/^http(s?):/);
                    var protocol = protocolArr && Array.isArray(protocolArr) ? protocolArr[0] : window.location.protocol;
                    if (!protocolArr) {
                        host = protocol + '//' + host;
                    }
                    if (protocol === 'http:' && window.location.protocol === 'https:') {
                        throw new Error('An insecure GeniusLink SDK connection (http) cannot be made from a secure web page (https).');
                    }
                    var token = configuration.token.trim();
                    if (token === '') {
                        throw new Error('An invalid browser developer token was used to initialize the GeniusLink SDK connection.');
                    }
                    this.settings = new Settings({ host: host, token: token });
                    this.userLib = new User(this.settings);
                    this.searchLib = new Search(this.settings);
                    this.articleLib = new Article(this.settings);
                    this.workflows = new Workflows(this.settings);
                }

                /**
                 * Get the configuration settings used for construction of the GeniusLink instance
                 *
                 * @return {Object} A settings object with the configuration parameters
                 */

                _createClass(GeniusLink, [{
                    key: 'configuration',
                    get: function get() {
                        return this.settings.getProperties();
                    }

                    /**
                     * Get the GeniusLink search interface.
                     *
                     * @return {Function} The GeniusLink search function.
                     */
                }, {
                    key: 'search',
                    get: function get() {
                        return this.searchLib.search.bind(this.searchLib);
                    }

                    /**
                     * Get current user management instance.
                     *
                     * @return {User} A User object that can be used to work with the user management functionality.
                     */
                }, {
                    key: 'User',
                    get: function get() {
                        return this.userLib;
                    }

                    /**
                     * Get current article management instance.
                     *
                     * @return {Article} An Article object that can be used to work with the article management functionality.
                     */
                }, {
                    key: 'Article',
                    get: function get() {
                        return this.articleLib;
                    }

                    /**
                     * Get the current management interface for site workflows.
                     */
                }, {
                    key: 'Workflows',
                    get: function get() {
                        return this.workflows;
                    }
                }]);

                return GeniusLink;
            })();

            _export('GeniusLink', GeniusLink);
        }
    };
});
$__System.register('1', ['7d'], function (_export) {
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
    setters: [function (_d) {
      GeniusLink = _d.GeniusLink;
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
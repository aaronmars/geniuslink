!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in p||(p[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==v.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=p[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(v.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=p[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return x[e]||(x[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},r.name);t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=p[s],v=x[s];v?l=v.exports:c&&!c.declarative?l=c.esModule:c?(d(c),v=c.module,l=v.exports):l=f(s),v&&v.importers?(v.importers.push(t),t.dependencies.push(v)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=p[e];if(t)t.declarative?c(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=f(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=p[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){if(r===e)return r;var t={};if("object"==typeof r||"function"==typeof r)if(g){var n;for(var o in r)(n=Object.getOwnPropertyDescriptor(r,o))&&h(t,o,n)}else{var a=r&&r.hasOwnProperty;for(var o in r)(!a||r.hasOwnProperty(o))&&(t[o]=r[o])}return t["default"]=r,h(t,"__useDefault",{value:!0}),t}function c(r,t){var n=p[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==v.call(t,u)&&(p[u]?c(u,t):f(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function f(e){if(D[e])return D[e];if("@node/"==e.substr(0,6))return y(e.substr(6));var r=p[e];if(!r)throw"Module "+e+" not present.";return a(e),c(e,[]),p[e]=void 0,r.declarative&&h(r.module.exports,"__esModule",{value:!0}),D[e]=r.declarative?r.module.exports:r.esModule}var p={},v=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},g=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(m){g=!1}var h;!function(){try{Object.defineProperty({},"a",{})&&(h=Object.defineProperty)}catch(e){h=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var x={},y="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,D={"@empty":{}};return function(e,n,o){return function(a){a(function(a){for(var u={_nodeRequire:y,register:r,registerDynamic:t,get:f,set:function(e,r){D[e]=r},newModule:function(e){return e}},d=0;d<n.length;d++)(function(e,r){r&&r.__esModule?D[e]=r:D[e]=s(r)})(n[d],arguments[d]);o(u);var i=f(e[0]);if(e.length>1)for(var d=1;d<e.length;d++)f(e[d]);return i.__useDefault?i["default"]:i})}}}("undefined"!=typeof self?self:global)

(["1","1"], [], function($__System) {

$__System.register('2', ['3', '4'], function (_export) {
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

    var modelHelper, userModel, userListModel;
    return {
        setters: [function (_) {
            modelHelper = _.modelHelper;
        }, function (_2) {
            userModel = _2.userModel;
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
                        var users = modelHelper.getArray(obj.user);
                        users.forEach(function (user) {
                            parsed.users.push(userModel.parse(user));
                        });
                    }
                    return parsed;
                }
            };

            _export('userListModel', userListModel);
        }
    };
});
$__System.register('5', ['2', '4', '6', '7', '8', '9'], function (_export) {
    var userListModel, userModel, Plug, utility, _createClass, _classCallCheck, User, UserManager;

    return {
        setters: [function (_6) {
            userListModel = _6.userListModel;
        }, function (_5) {
            userModel = _5.userModel;
        }, function (_3) {
            Plug = _3.Plug;
        }, function (_4) {
            utility = _4.utility;
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
            'use strict';

            User = (function () {
                function User(id, settings) {
                    if (id === undefined) id = 'current';

                    _classCallCheck(this, User);

                    this._id = utility.getResourceId(id, 'current');
                    this._plug = new Plug(settings).at('@api', 'deki', 'users', this._id);
                }

                _createClass(User, [{
                    key: 'getInfo',
                    value: function getInfo() {
                        return this._plug.get().then(userModel.parse);
                    }
                }]);

                return User;
            })();

            _export('User', User);

            UserManager = (function () {
                function UserManager(settings) {
                    _classCallCheck(this, UserManager);

                    this.settings = settings;
                    this.plug = new Plug(settings).at('@api', 'deki', 'users');
                }

                _createClass(UserManager, [{
                    key: 'getCurrentUser',
                    value: function getCurrentUser() {
                        return this.plug.at('current').get().then(userModel.parse);
                    }
                }, {
                    key: 'getUsers',
                    value: function getUsers() {
                        return this.plug.get().then(userListModel.parse);
                    }
                }, {
                    key: 'searchUsers',
                    value: function searchUsers(constraints) {
                        return this.plug.at('search').withParams(constraints).get().then(userListModel.parse);
                    }
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
$__System.register('a', ['3', 'b'], function (_export) {
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

    var modelHelper, eventModel, userActivityModel;
    return {
        setters: [function (_) {
            modelHelper = _.modelHelper;
        }, function (_b) {
            eventModel = _b.eventModel;
        }],
        execute: function () {
            userActivityModel = {
                parse: function parse(data) {
                    var obj = modelHelper.fromJson(data);
                    var parsed = {
                        count: modelHelper.getInt(obj['@count']),
                        upto: obj['@upto'],
                        since: obj['@since'],
                        events: []
                    };
                    var events = modelHelper.getArray(obj.event);
                    events.forEach(function (e) {
                        parsed.events.push(eventModel.parse(e));
                    });
                    return parsed;
                }
            };

            _export('userActivityModel', userActivityModel);
        }
    };
});
$__System.register('c', ['3', 'b'], function (_export) {
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

    var modelHelper, eventModel, eventListModel;
    return {
        setters: [function (_) {
            modelHelper = _.modelHelper;
        }, function (_b) {
            eventModel = _b.eventModel;
        }],
        execute: function () {
            eventListModel = {
                parse: function parse(data) {
                    var obj = modelHelper.fromJson(data);
                    var parsed = {
                        count: modelHelper.getInt(obj['@count']),
                        upto: obj['@upto'],
                        since: obj['@since'],
                        summary: []
                    };
                    var events = modelHelper.getArray(obj.summary);
                    events.forEach(function (e) {
                        var parsedEvent = {
                            id: e['@id'],
                            datetime: modelHelper.getDate(e['@datetime']),
                            count: modelHelper.getInt(e['@count']),
                            detailid: e['@detailid'],
                            uriDetail: e['@uri.detail'],
                            event: eventModel.parse(e.event)
                        };
                        parsed.summary.push(parsedEvent);
                    });
                    return parsed;
                }
            };

            _export('eventListModel', eventListModel);
        }
    };
});
$__System.register('b', ['3'], function (_export) {
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

    var modelHelper, eventModel;
    return {
        setters: [function (_) {
            modelHelper = _.modelHelper;
        }],
        execute: function () {
            eventModel = {
                parse: function parse(data) {
                    var obj = modelHelper.fromJson(data);
                    var parsed = {
                        id: obj['@id'],
                        datetime: modelHelper.getDate(obj['@datetime']),
                        type: obj['@type'],
                        journaled: modelHelper.getBool(obj['@journaled']),
                        version: modelHelper.getInt(obj['@version']),
                        requestId: obj.request['@id']
                    };
                    if ('@language' in obj) {
                        parsed.language = obj['@language'];
                    }
                    if ('page' in obj) {
                        parsed.page = {
                            id: obj.page['@id'],
                            path: obj.page.path
                        };
                        if ('@revision' in obj.page) {
                            parsed.page.revision = modelHelper.getInt(obj.page['@revision']);
                        }
                    }
                    if ('user' in obj) {
                        parsed.user = { id: obj.user['@id'] };
                        if ('name' in obj.user) {
                            parsed.user.name = obj.user.name;
                        }
                    }
                    if ('data' in obj) {
                        if (parsed.type === 'user:search') {
                            parsed.data = {
                                constraint: obj.data.constraint,
                                path: obj.data.path,
                                query: obj.data.query,
                                limit: modelHelper.getInt(obj.data.limit),
                                qid: modelHelper.getInt(obj.data.qid),
                                totalrecommended: modelHelper.getInt(obj.data.totalrecommended),
                                totalresults: modelHelper.getInt(obj.data.totalresults)
                            };
                        } else {

                            // The only other type possible here is 'page:view'
                            parsed.data = {
                                host: obj.data['_uri.host'],
                                query: obj.data['_uri.query'],
                                scheme: obj.data['_uri.scheme']
                            };
                        }
                    }
                    return parsed;
                }
            };

            _export('eventModel', eventModel);
        }
    };
});
$__System.register('d', ['3', 'b'], function (_export) {
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

    var modelHelper, eventModel, eventDetailModel;
    return {
        setters: [function (_) {
            modelHelper = _.modelHelper;
        }, function (_b) {
            eventModel = _b.eventModel;
        }],
        execute: function () {
            eventDetailModel = {
                parse: function parse(data) {
                    var obj = modelHelper.fromJson(data);
                    var parsed = {
                        count: modelHelper.getInt(obj['@count']),
                        summary: {
                            id: obj.summary['@id'],
                            datetime: modelHelper.getDate(obj.summary['@datetime']),
                            count: modelHelper.getInt(obj.summary['@count']),
                            journaled: modelHelper.getBool(obj.summary['@journaled']),
                            diffable: modelHelper.getBool(obj.summary['@diffable']),
                            event: eventModel.parse(obj.summary.event)
                        }
                    };
                    return parsed;
                }
            };

            _export('eventDetailModel', eventDetailModel);
        }
    };
});
$__System.register('e', ['6', '7', '8', '9', 'a', 'c', 'd'], function (_export) {
    var Plug, utility, _createClass, _classCallCheck, userActivityModel, eventListModel, eventDetailModel, UserEvents;

    return {
        setters: [function (_3) {
            Plug = _3.Plug;
        }, function (_4) {
            utility = _4.utility;
        }, function (_) {
            _createClass = _['default'];
        }, function (_2) {
            _classCallCheck = _2['default'];
        }, function (_a) {
            userActivityModel = _a.userActivityModel;
        }, function (_c) {
            eventListModel = _c.eventListModel;
        }, function (_d) {
            eventDetailModel = _d.eventDetailModel;
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

            UserEvents = (function () {
                function UserEvents(settings) {
                    _classCallCheck(this, UserEvents);

                    this.settings = settings;
                    this.plug = new Plug(settings).at('@api', 'deki', 'events');
                }

                _createClass(UserEvents, [{
                    key: 'getActivity',
                    value: function getActivity(userToken) {
                        return this.plug.at('support-agent', userToken).get().then(userActivityModel.parse);
                    }
                }, {
                    key: 'getHistory',
                    value: function getHistory(userId) {
                        return this.plug.at('user-page', utility.getResourceId(userId, 'current')).get().then(eventListModel.parse);
                    }
                }, {
                    key: 'getHistoryDetail',
                    value: function getHistoryDetail(userId, detailId) {
                        return this.plug.at('user-page', utility.getResourceId(userId, 'current'), detailId).get().then(eventDetailModel.parse);
                    }
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
$__System.register('f', ['5', '8', '9', 'e'], function (_export) {
    var UserManager, _createClass, _classCallCheck, UserEvents, User;

    return {
        setters: [function (_3) {
            UserManager = _3.UserManager;
        }, function (_) {
            _createClass = _['default'];
        }, function (_2) {
            _classCallCheck = _2['default'];
        }, function (_e) {
            UserEvents = _e.UserEvents;
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
                function User(settings) {
                    _classCallCheck(this, User);

                    this.settings = settings;
                    this.martianUser = new UserManager(settings);
                }

                /**
                 * The current MindTouch host user, or an anonymous user is unauthenticated
                 *
                 * @returns {Object}
                 */

                _createClass(User, [{
                    key: 'getCurrentUser',
                    value: function getCurrentUser() {
                        return this.martianUser.getCurrentUser();
                    }

                    /**
                     * A url that allows an anonymous user to authenticate with the MindTouch host
                     *
                     * @returns {String}
                     */
                }, {
                    key: 'getLoginUrl',
                    value: function getLoginUrl() {
                        return this.settings.get('host') + '/@app/login/redirect';
                    }

                    /**
                     * Gets the activity of a user based on a system-defined token. Currently,
                     * page views and search attempts are returned in the listing of the user activity.
                     */
                }, {
                    key: 'getInsights',
                    value: function getInsights(userToken) {
                        var ue = new UserEvents(this.settings);
                        return ue.getActivity(userToken);
                    }
                }]);

                return User;
            })();

            _export('User', User);
        }
    };
});
$__System.register('10', ['3'], function (_export) {
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
            modelHelper = _.modelHelper;
        }],
        execute: function () {
            searchModel = {
                parse: function parse(data) {
                    var obj = modelHelper.fromJson(data);
                    var search = {
                        ranking: obj['@ranking'],
                        queryId: obj['@queryid'],
                        queryCount: modelHelper.getInt(obj['@querycount']),
                        recommendationCount: modelHelper.getInt(obj['@count.recommendations']),
                        count: modelHelper.getInt(obj['@count']),
                        result: []
                    };
                    if ('result' in obj) {
                        var results = modelHelper.getArray(obj.result);
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
                    if ('summary' in obj) {
                        search.summary = {
                            path: obj.summary['@path'],
                            results: []
                        };
                        if ('results' in obj.summary) {
                            var results = modelHelper.getArray(obj.summary.results);
                            results.forEach(function (result) {
                                search.summary.results.push({
                                    path: result['@path'],
                                    count: modelHelper.getInt(result['@count']),
                                    title: result['@title']
                                });
                            });
                        }
                    }
                    return search;
                }
            };

            _export('searchModel', searchModel);
        }
    };
});
$__System.register('11', ['6', '7', '8', '9', '10', '12', '13'], function (_export) {
    var Plug, utility, _createClass, _classCallCheck, searchModel, stringUtility, _Promise, Site;

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
    return {
        setters: [function (_6) {
            Plug = _6.Plug;
        }, function (_4) {
            utility = _4.utility;
        }, function (_) {
            _createClass = _['default'];
        }, function (_2) {
            _classCallCheck = _2['default'];
        }, function (_7) {
            searchModel = _7.searchModel;
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
                function Site(settings) {
                    _classCallCheck(this, Site);

                    this.plug = new Plug(settings).at('@api', 'deki', 'site');
                }

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
                        if (path !== '') {
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
                        return this.plug.at('query').withParams(searchParams).get().then(searchModel.parse);
                    }
                }]);

                return Site;
            })();

            _export('Site', Site);
        }
    };
});
$__System.register('14', ['8', '9', '11'], function (_export) {
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
                 * @param {Object} options - {
                 *  page: paginated {page}
                 *  limit: limit search results to {limit} items per paginated page
                 *  tags: constrain search results to items tagged with {tag}
                 *  path: constraint search results to items located in the {path} page hierarchy
                 * }
                 * @returns {Object}
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
$__System.register('15', ['6', '7', '8', '9', '16', '17', '18', '19'], function (_export) {
    var Plug, utility, _createClass, _classCallCheck, PageBase, pageModel, _get, _inherits, Draft, DraftManager;

    return {
        setters: [function (_5) {
            Plug = _5.Plug;
        }, function (_6) {
            utility = _6.utility;
        }, function (_3) {
            _createClass = _3['default'];
        }, function (_4) {
            _classCallCheck = _4['default'];
        }, function (_7) {
            PageBase = _7.PageBase;
        }, function (_8) {
            pageModel = _8.pageModel;
        }, function (_) {
            _get = _['default'];
        }, function (_2) {
            _inherits = _2['default'];
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

            Draft = (function (_PageBase) {
                _inherits(Draft, _PageBase);

                function Draft(id, settings) {
                    if (id === undefined) id = 'home';

                    _classCallCheck(this, Draft);

                    _get(Object.getPrototypeOf(Draft.prototype), 'constructor', this).call(this, id);
                    this._plug = new Plug(settings).at('@api', 'deki', 'drafts', this._id);
                }

                _createClass(Draft, [{
                    key: 'deactivate',
                    value: function deactivate() {
                        return this._plug.at('deactivate').post().then(pageModel.parse);
                    }
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
                function DraftManager(settings) {
                    _classCallCheck(this, DraftManager);

                    this._settings = settings;
                }

                _createClass(DraftManager, [{
                    key: 'createDraft',
                    value: function createDraft(newPath) {
                        var plug = new Plug(this._settings).at('@api', 'deki', 'drafts', utility.getResourceId(newPath), 'create');
                        return plug.post().then(pageModel.parse);
                    }
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
$__System.register('1a', ['8', '9'], function (_export) {
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
$__System.register('12', [], function (_export) {
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
$__System.register('1b', ['8', '9', '12', '1c', '1a'], function (_export) {
    var _createClass, _classCallCheck, stringUtility, _Object$keys, UriParser, Uri;

    return {
        setters: [function (_) {
            _createClass = _['default'];
        }, function (_2) {
            _classCallCheck = _2['default'];
        }, function (_3) {
            stringUtility = _3.stringUtility;
        }, function (_c) {
            _Object$keys = _c['default'];
        }, function (_a) {
            UriParser = _a.UriParser;
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
$__System.registerDynamic("1d", ["1e", "1f"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var toIObject = $__require('1e');
  $__require('1f')('getOwnPropertyDescriptor', function($getOwnPropertyDescriptor) {
    return function getOwnPropertyDescriptor(it, key) {
      return $getOwnPropertyDescriptor(toIObject(it), key);
    };
  });
  return module.exports;
});

$__System.registerDynamic("20", ["21", "1d"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $ = $__require('21');
  $__require('1d');
  module.exports = function getOwnPropertyDescriptor(it, key) {
    return $.getDesc(it, key);
  };
  return module.exports;
});

$__System.registerDynamic("22", ["20"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "default": $__require('20'),
    __esModule: true
  };
  return module.exports;
});

$__System.registerDynamic("18", ["22"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var _Object$getOwnPropertyDescriptor = $__require('22')["default"];
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

$__System.registerDynamic("23", ["21"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $ = $__require('21');
  module.exports = function create(P, D) {
    return $.create(P, D);
  };
  return module.exports;
});

$__System.registerDynamic("24", ["23"], true, function($__require, exports, module) {
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

$__System.registerDynamic("25", ["26", "27"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $export = $__require('26');
  $export($export.S, 'Object', {setPrototypeOf: $__require('27').set});
  return module.exports;
});

$__System.registerDynamic("28", ["25", "29"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  $__require('25');
  module.exports = $__require('29').Object.setPrototypeOf;
  return module.exports;
});

$__System.registerDynamic("2a", ["28"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "default": $__require('28'),
    __esModule: true
  };
  return module.exports;
});

$__System.registerDynamic("19", ["24", "2a"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var _Object$create = $__require('24')["default"];
  var _Object$setPrototypeOf = $__require('2a')["default"];
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

$__System.register("2b", ["9", "18", "19"], function (_export) {
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
$__System.register('2c', ['9', '18', '19', '2b'], function (_export) {
    var _classCallCheck, _get, _inherits, MTError, XhrError;

    return {
        setters: [function (_3) {
            _classCallCheck = _3['default'];
        }, function (_) {
            _get = _['default'];
        }, function (_2) {
            _inherits = _2['default'];
        }, function (_b) {
            MTError = _b.MTError;
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
$__System.register('6', ['8', '9', '13', '1c', '2d', '1b', '2c'], function (_export) {
    var _createClass, _classCallCheck, _Promise, _Object$keys, Settings, Uri, XhrError, Plug;

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
                _: Date.now(),
                origin: 'mt-web' // TODO: F1 req from settings module after 20150820
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
        }, function (_c) {
            _Object$keys = _c['default'];
        }, function (_d) {
            Settings = _d.Settings;
        }, function (_b) {
            Uri = _b.Uri;
        }, function (_c2) {
            XhrError = _c2.XhrError;
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

                    var url = '';
                    var token = null;

                    // Initialize the settings
                    this.settings = settings;
                    url = this.settings.get('host');
                    token = this.settings.get('token');

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
$__System.registerDynamic("2e", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  "format cjs";
  return module.exports;
});

$__System.registerDynamic("2f", ["30", "31"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var toInteger = $__require('30'),
      defined = $__require('31');
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

$__System.registerDynamic("32", ["2f", "33"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $at = $__require('2f')(true);
  $__require('33')(String, 'String', function(iterated) {
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

$__System.registerDynamic("34", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function() {};
  return module.exports;
});

$__System.registerDynamic("35", [], true, function($__require, exports, module) {
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

$__System.registerDynamic("36", ["37"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var cof = $__require('37');
  module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it) {
    return cof(it) == 'String' ? it.split('') : Object(it);
  };
  return module.exports;
});

$__System.registerDynamic("1e", ["36", "31"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var IObject = $__require('36'),
      defined = $__require('31');
  module.exports = function(it) {
    return IObject(defined(it));
  };
  return module.exports;
});

$__System.registerDynamic("38", ["21", "39", "3a", "3b", "3c"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $ = $__require('21'),
      descriptor = $__require('39'),
      setToStringTag = $__require('3a'),
      IteratorPrototype = {};
  $__require('3b')(IteratorPrototype, $__require('3c')('iterator'), function() {
    return this;
  });
  module.exports = function(Constructor, NAME, next) {
    Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
    setToStringTag(Constructor, NAME + ' Iterator');
  };
  return module.exports;
});

$__System.registerDynamic("33", ["3d", "26", "3e", "3b", "3f", "40", "38", "3a", "21", "3c"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var LIBRARY = $__require('3d'),
      $export = $__require('26'),
      redefine = $__require('3e'),
      hide = $__require('3b'),
      has = $__require('3f'),
      Iterators = $__require('40'),
      $iterCreate = $__require('38'),
      setToStringTag = $__require('3a'),
      getProto = $__require('21').getProto,
      ITERATOR = $__require('3c')('iterator'),
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

$__System.registerDynamic("41", ["34", "35", "40", "1e", "33"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var addToUnscopables = $__require('34'),
      step = $__require('35'),
      Iterators = $__require('40'),
      toIObject = $__require('1e');
  module.exports = $__require('33')(Array, 'Array', function(iterated, kind) {
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

$__System.registerDynamic("42", ["41", "40"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  $__require('41');
  var Iterators = $__require('40');
  Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;
  return module.exports;
});

$__System.registerDynamic("3d", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = true;
  return module.exports;
});

$__System.registerDynamic("43", [], true, function($__require, exports, module) {
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

$__System.registerDynamic("44", ["45"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var anObject = $__require('45');
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

$__System.registerDynamic("46", ["40", "3c"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Iterators = $__require('40'),
      ITERATOR = $__require('3c')('iterator'),
      ArrayProto = Array.prototype;
  module.exports = function(it) {
    return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
  };
  return module.exports;
});

$__System.registerDynamic("30", [], true, function($__require, exports, module) {
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

$__System.registerDynamic("47", ["30"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var toInteger = $__require('30'),
      min = Math.min;
  module.exports = function(it) {
    return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0;
  };
  return module.exports;
});

$__System.registerDynamic("48", ["37", "3c"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var cof = $__require('37'),
      TAG = $__require('3c')('toStringTag'),
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

$__System.registerDynamic("40", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {};
  return module.exports;
});

$__System.registerDynamic("49", ["48", "3c", "40", "29"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var classof = $__require('48'),
      ITERATOR = $__require('3c')('iterator'),
      Iterators = $__require('40');
  module.exports = $__require('29').getIteratorMethod = function(it) {
    if (it != undefined)
      return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
  };
  return module.exports;
});

$__System.registerDynamic("4a", ["4b", "44", "46", "45", "47", "49"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var ctx = $__require('4b'),
      call = $__require('44'),
      isArrayIter = $__require('46'),
      anObject = $__require('45'),
      toLength = $__require('47'),
      getIterFn = $__require('49');
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

$__System.registerDynamic("27", ["21", "4c", "45", "4b"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var getDesc = $__require('21').getDesc,
      isObject = $__require('4c'),
      anObject = $__require('45');
  var check = function(O, proto) {
    anObject(O);
    if (!isObject(proto) && proto !== null)
      throw TypeError(proto + ": can't set as prototype!");
  };
  module.exports = {
    set: Object.setPrototypeOf || ('__proto__' in {} ? function(test, buggy, set) {
      try {
        set = $__require('4b')(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
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

$__System.registerDynamic("4d", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = Object.is || function is(x, y) {
    return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
  };
  return module.exports;
});

$__System.registerDynamic("45", ["4c"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var isObject = $__require('4c');
  module.exports = function(it) {
    if (!isObject(it))
      throw TypeError(it + ' is not an object!');
    return it;
  };
  return module.exports;
});

$__System.registerDynamic("4e", ["45", "4f", "3c"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var anObject = $__require('45'),
      aFunction = $__require('4f'),
      SPECIES = $__require('3c')('species');
  module.exports = function(O, D) {
    var C = anObject(O).constructor,
        S;
    return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
  };
  return module.exports;
});

$__System.registerDynamic("50", [], true, function($__require, exports, module) {
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

$__System.registerDynamic("51", ["52"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('52').document && document.documentElement;
  return module.exports;
});

$__System.registerDynamic("4c", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };
  return module.exports;
});

$__System.registerDynamic("53", ["4c", "52"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var isObject = $__require('4c'),
      document = $__require('52').document,
      is = isObject(document) && isObject(document.createElement);
  module.exports = function(it) {
    return is ? document.createElement(it) : {};
  };
  return module.exports;
});

$__System.registerDynamic("54", ["4b", "50", "51", "53", "52", "37", "55"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    var ctx = $__require('4b'),
        invoke = $__require('50'),
        html = $__require('51'),
        cel = $__require('53'),
        global = $__require('52'),
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
      if ($__require('37')(process) == 'process') {
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
  })($__require('55'));
  return module.exports;
});

$__System.registerDynamic("37", [], true, function($__require, exports, module) {
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

$__System.registerDynamic("56", ["52", "54", "37", "55"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    var global = $__require('52'),
        macrotask = $__require('54').set,
        Observer = global.MutationObserver || global.WebKitMutationObserver,
        process = global.process,
        Promise = global.Promise,
        isNode = $__require('37')(process) == 'process',
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
  })($__require('55'));
  return module.exports;
});

$__System.registerDynamic("39", [], true, function($__require, exports, module) {
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

$__System.registerDynamic("3b", ["21", "39", "57"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $ = $__require('21'),
      createDesc = $__require('39');
  module.exports = $__require('57') ? function(object, key, value) {
    return $.setDesc(object, key, createDesc(1, value));
  } : function(object, key, value) {
    object[key] = value;
    return object;
  };
  return module.exports;
});

$__System.registerDynamic("3e", ["3b"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('3b');
  return module.exports;
});

$__System.registerDynamic("58", ["3e"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var redefine = $__require('3e');
  module.exports = function(target, src) {
    for (var key in src)
      redefine(target, key, src[key]);
    return target;
  };
  return module.exports;
});

$__System.registerDynamic("3f", [], true, function($__require, exports, module) {
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

$__System.registerDynamic("3a", ["21", "3f", "3c"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var def = $__require('21').setDesc,
      has = $__require('3f'),
      TAG = $__require('3c')('toStringTag');
  module.exports = function(it, tag, stat) {
    if (it && !has(it = stat ? it : it.prototype, TAG))
      def(it, TAG, {
        configurable: true,
        value: tag
      });
  };
  return module.exports;
});

$__System.registerDynamic("57", ["59"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = !$__require('59')(function() {
    return Object.defineProperty({}, 'a', {get: function() {
        return 7;
      }}).a != 7;
  });
  return module.exports;
});

$__System.registerDynamic("5a", ["29", "21", "57", "3c"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core = $__require('29'),
      $ = $__require('21'),
      DESCRIPTORS = $__require('57'),
      SPECIES = $__require('3c')('species');
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

$__System.registerDynamic("5b", ["52"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var global = $__require('52'),
      SHARED = '__core-js_shared__',
      store = global[SHARED] || (global[SHARED] = {});
  module.exports = function(key) {
    return store[key] || (store[key] = {});
  };
  return module.exports;
});

$__System.registerDynamic("5c", [], true, function($__require, exports, module) {
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

$__System.registerDynamic("3c", ["5b", "5c", "52"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var store = $__require('5b')('wks'),
      uid = $__require('5c'),
      Symbol = $__require('52').Symbol;
  module.exports = function(name) {
    return store[name] || (store[name] = Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
  };
  return module.exports;
});

$__System.registerDynamic("5d", ["3c"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var ITERATOR = $__require('3c')('iterator'),
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

$__System.registerDynamic("5e", [], true, function($__require, exports, module) {
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

$__System.registerDynamic("5f", ["5e"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('5e');
  return module.exports;
});

$__System.registerDynamic("60", ["5f"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__System._nodeRequire ? process : $__require('5f');
  return module.exports;
});

$__System.registerDynamic("55", ["60"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('60');
  return module.exports;
});

$__System.registerDynamic("61", ["21", "3d", "52", "4b", "48", "26", "4c", "45", "4f", "43", "4a", "27", "4d", "3c", "4e", "56", "57", "58", "3a", "5a", "29", "5d", "55"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var $ = $__require('21'),
        LIBRARY = $__require('3d'),
        global = $__require('52'),
        ctx = $__require('4b'),
        classof = $__require('48'),
        $export = $__require('26'),
        isObject = $__require('4c'),
        anObject = $__require('45'),
        aFunction = $__require('4f'),
        strictNew = $__require('43'),
        forOf = $__require('4a'),
        setProto = $__require('27').set,
        same = $__require('4d'),
        SPECIES = $__require('3c')('species'),
        speciesConstructor = $__require('4e'),
        asap = $__require('56'),
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
        if (works && $__require('57')) {
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
      $__require('58')(P.prototype, {
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
    $__require('3a')(P, PROMISE);
    $__require('5a')(PROMISE);
    Wrapper = $__require('29')[PROMISE];
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
    $export($export.S + $export.F * !(USE_NATIVE && $__require('5d')(function(iter) {
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
  })($__require('55'));
  return module.exports;
});

$__System.registerDynamic("62", ["2e", "32", "42", "61", "29"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  $__require('2e');
  $__require('32');
  $__require('42');
  $__require('61');
  module.exports = $__require('29').Promise;
  return module.exports;
});

$__System.registerDynamic("13", ["62"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "default": $__require('62'),
    __esModule: true
  };
  return module.exports;
});

$__System.register('7', [], function (_export) {
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
$__System.register('63', ['3'], function (_export) {
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

    var modelHelper, pageTagsModel;
    return {
        setters: [function (_) {
            modelHelper = _.modelHelper;
        }],
        execute: function () {
            pageTagsModel = {
                parse: function parse(data) {
                    var obj = modelHelper.fromJson(data);
                    var parsed = {
                        count: modelHelper.getInt(obj['@count']),
                        href: obj['@href']
                    };
                    if ('tag' in obj) {
                        parsed.tags = [];
                        var tags = modelHelper.getArray(obj.tag);
                        tags.forEach(function (tag) {
                            parsed.tags.push({
                                value: tag['@value'],
                                id: modelHelper.getInt(tag['@id']),
                                href: tag['@href'],
                                title: tag.title,
                                type: tag.type,
                                uri: tag.uri
                            });
                        });
                    }
                    return parsed;
                }
            };

            _export('pageTagsModel', pageTagsModel);
        }
    };
});
$__System.register('64', ['3', '4', '17'], function (_export) {
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

    var modelHelper, userModel, pageModel, fileModel;
    return {
        setters: [function (_) {
            modelHelper = _.modelHelper;
        }, function (_2) {
            userModel = _2.userModel;
        }, function (_3) {
            pageModel = _3.pageModel;
        }],
        execute: function () {
            fileModel = {
                parse: function parse(data) {
                    var obj = modelHelper.fromJson(data);
                    var parsed = {
                        id: modelHelper.getInt(obj['@id']),
                        revision: modelHelper.getInt(obj['@revision']),
                        resId: modelHelper.getInt(obj['@res-id']),
                        href: obj['@href'],
                        resIsHead: modelHelper.getBool(obj['@res-is-head']),
                        resIsDeleted: modelHelper.getBool(obj['@res-is-deleted']),
                        resRevIsDeleted: modelHelper.getBool(obj['@res-rev-is-head']),
                        resContentsId: modelHelper.getInt(obj['@res-contents-id']),
                        dateCreated: modelHelper.getDate(obj['date.created']),
                        description: obj.description,
                        filename: obj.filename,
                        contents: {
                            type: obj.contents['@type'],
                            size: modelHelper.getInt(obj.contents['@size']),
                            href: obj.contents['@href']
                        }
                    };
                    if ('user.createdby' in obj) {
                        parsed.userCreatedBy = userModel.parse(obj['user.createdby']);
                    }
                    if ('page.parent' in obj) {
                        parsed.pageParent = pageModel.parse(obj['page.parent']);
                    }
                    return parsed;
                }
            };

            _export('fileModel', fileModel);
        }
    };
});
$__System.register('65', ['3', '64'], function (_export) {
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

    var modelHelper, fileModel, pageFilesModel;
    return {
        setters: [function (_) {
            modelHelper = _.modelHelper;
        }, function (_2) {
            fileModel = _2.fileModel;
        }],
        execute: function () {
            pageFilesModel = {
                parse: function parse(data) {
                    var obj = modelHelper.fromJson(data);
                    var parsed = {
                        count: modelHelper.getInt(obj['@count']),
                        offset: modelHelper.getInt(obj['@offset']),
                        totalcount: modelHelper.getInt(obj['@totalcount']),
                        href: obj['@href']
                    };
                    if ('file' in obj) {
                        parsed.file = [];
                        var files = modelHelper.getArray(obj.file);
                        files.forEach(function (f) {
                            parsed.file.push(fileModel.parse(f));
                        });
                    }
                    return parsed;
                }
            };

            _export('pageFilesModel', pageFilesModel);
        }
    };
});
$__System.register('66', ['3', '17'], function (_export) {
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

    var modelHelper, pageModel, pageEditModel;
    return {
        setters: [function (_) {
            modelHelper = _.modelHelper;
        }, function (_2) {
            pageModel = _2.pageModel;
        }],
        execute: function () {
            pageEditModel = {
                parse: function parse(data) {
                    var obj = modelHelper.fromJson(data);
                    var parsed = {
                        status: obj['@status']
                    };
                    if ('page' in obj) {
                        parsed.page = pageModel.parse(obj.page);
                    }
                    if ('draft' in obj) {
                        parsed.draft = pageModel.parse(obj.draft);
                    }
                    if ('page.base' in obj) {
                        parsed.pageBase = pageModel.parse(obj['page.base']);
                    }
                    if ('page.overwritten' in obj) {
                        parsed.pageOverwritten = pageModel.parse(obj['page.overwritten']);
                    }
                    return parsed;
                }
            };

            _export('pageEditModel', pageEditModel);
        }
    };
});
$__System.register('67', ['3', '17'], function (_export) {
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

    var modelHelper, pageModel, relatedPagesModel;
    return {
        setters: [function (_) {
            modelHelper = _.modelHelper;
        }, function (_2) {
            pageModel = _2.pageModel;
        }],
        execute: function () {
            relatedPagesModel = {
                parse: function parse(data) {
                    var obj = modelHelper.fromJson(data);
                    var parsed = {
                        count: modelHelper.getInt(obj['@count']),
                        href: obj['@href'],
                        pages: []
                    };
                    var pages = modelHelper.getArray(obj.page);
                    pages.forEach(function (page) {
                        parsed.pages.push(pageModel.parse(page));
                    });
                    return parsed;
                }
            };

            _export('relatedPagesModel', relatedPagesModel);
        }
    };
});
$__System.register('16', ['3', '7', '8', '9', '13', '17', '63', '65', '66', '67', '68', '1c'], function (_export) {
    var modelHelper, utility, _createClass, _classCallCheck, _Promise, pageModel, pageTagsModel, pageFilesModel, pageEditModel, relatedPagesModel, pageContentsModel, _Object$keys, PageBase;

    function _handleVirtualPage(error) {
        if (error.errorCode === 404 && error.response && error.response['@virtual']) {
            return _Promise.resolve(pageModel.parse(error.response));
        }
        throw error;
    }
    return {
        setters: [function (_5) {
            modelHelper = _5.modelHelper;
        }, function (_4) {
            utility = _4.utility;
        }, function (_) {
            _createClass = _['default'];
        }, function (_2) {
            _classCallCheck = _2['default'];
        }, function (_3) {
            _Promise = _3['default'];
        }, function (_6) {
            pageModel = _6.pageModel;
        }, function (_8) {
            pageTagsModel = _8.pageTagsModel;
        }, function (_9) {
            pageFilesModel = _9.pageFilesModel;
        }, function (_10) {
            pageEditModel = _10.pageEditModel;
        }, function (_11) {
            relatedPagesModel = _11.relatedPagesModel;
        }, function (_7) {
            pageContentsModel = _7.pageContentsModel;
        }, function (_c) {
            _Object$keys = _c['default'];
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
                        return this._plug.get().then(pageModel.parse)['catch'](_handleVirtualPage);
                    }
                }, {
                    key: 'getContents',
                    value: function getContents(params) {
                        return this._plug.at('contents').withParams(params).get().then(pageContentsModel.parse);
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
                        return this._plug.at('contents').withParams(contentsParams).post(contents, 'text/plain; charset=utf-8').then(pageEditModel.parse);
                    }
                }, {
                    key: 'getFiles',
                    value: function getFiles() {
                        var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

                        return this._plug.at('files').withParams(params).get().then(pageFilesModel.parse);
                    }
                }, {
                    key: 'getOverview',
                    value: function getOverview() {
                        return this._plug.at('overview').get().then(JSON.parse).then(function (overview) {
                            return _Promise.resolve({ overview: modelHelper.getString(overview) });
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
                        return this._plug.at('tags').get().then(pageTagsModel.parse);
                    }
                }, {
                    key: 'getDiff',
                    value: function getDiff() {
                        throw new Error('Page.getDiff() is not impmemented');
                    }
                }, {
                    key: 'getRelated',
                    value: function getRelated() {
                        return this._plug.at('related').get().then(relatedPagesModel.parse);
                    }
                }]);

                return PageBase;
            })();

            _export('PageBase', PageBase);
        }
    };
});
$__System.register('69', ['3'], function (_export) {
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

    var modelHelper, subpagesModel;
    return {
        setters: [function (_) {
            modelHelper = _.modelHelper;
        }],
        execute: function () {
            subpagesModel = {
                parse: function parse(data) {
                    var obj = modelHelper.fromJson(data);
                    var parsed = {
                        totalcount: modelHelper.getInt(obj['@totalcount']),
                        count: modelHelper.getInt(obj['@count']),
                        href: obj['@href']
                    };
                    if ('page.subpage' in obj) {
                        var subpages = modelHelper.getArray(obj['page.subpage']);
                        parsed.pageSubpage = [];
                        subpages.forEach(function (sp) {
                            parsed.pageSubpage.push({
                                id: modelHelper.getInt(sp['@id']),
                                href: sp['@href'],
                                deleted: modelHelper.getBool(sp['@deleted']),
                                subpages: modelHelper.getBool(sp['@subpages']),
                                dateCreated: modelHelper.getDate(sp['date.created']),
                                language: sp.language,
                                namespace: sp.namespace,
                                path: modelHelper.getString(sp.path),
                                title: sp.title,
                                uriUi: sp['uri.ui']
                            });
                        });
                    }
                    return parsed;
                }
            };

            _export('subpagesModel', subpagesModel);
        }
    };
});
$__System.registerDynamic("6a", ["6b"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var _Object$defineProperty = $__require('6b')["default"];
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

$__System.register('68', ['3', '6a'], function (_export) {
    var modelHelper, _defineProperty, pageContentsModel;

    return {
        setters: [function (_) {
            modelHelper = _.modelHelper;
        }, function (_a) {
            _defineProperty = _a['default'];
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

            pageContentsModel = {
                parse: function parse(data) {
                    var obj = modelHelper.fromJson(data);
                    var parsed = {
                        type: obj['@type'],
                        title: obj['@title']
                    };
                    if ('@unsafe' in obj) {
                        parsed.unsafe = modelHelper.getBool(obj['@unsafe']);
                    }
                    if ('@draft' in obj) {
                        parsed.draft = modelHelper.getBool(obj['@draft']);
                    }
                    if (Array.isArray(obj.body)) {
                        parsed.body = obj.body[0];
                        parsed.targets = pageContentsModel._getTargets(obj.body);
                    } else {
                        parsed.body = obj.body;
                    }
                    modelHelper.addIfDefined(obj.tail, 'tail', parsed);
                    return parsed;
                },
                _getTargets: function _getTargets(body) {
                    var targets = [];
                    for (var i = 1; i < body.length; i++) {
                        targets.push(_defineProperty({}, body[i]['@target'], body[i]['#text']));
                    }
                    return targets;
                }
            };

            _export('pageContentsModel', pageContentsModel);
        }
    };
});
$__System.register('6c', ['3', '17'], function (_export) {
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

    var modelHelper, pageModel, pageTreeModel;
    return {
        setters: [function (_) {
            modelHelper = _.modelHelper;
        }, function (_2) {
            pageModel = _2.pageModel;
        }],
        execute: function () {
            pageTreeModel = {
                parse: function parse(data) {
                    var obj = modelHelper.fromJson(data);
                    return pageModel.parse(obj.page);
                }
            };

            _export('pageTreeModel', pageTreeModel);
        }
    };
});
$__System.register('6d', ['3'], function (_export) {
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
            modelHelper = _.modelHelper;
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

            _export('pageRatingModel', pageRatingModel);
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
                getArray: function getArray(val) {
                    if (!val) {
                        return [];
                    }
                    return Array.isArray(val) ? val : [val];
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

            _export('modelHelper', modelHelper);
        }
    };
});
$__System.register('6e', ['3'], function (_export) {
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

    var modelHelper, permissionsModel;
    return {
        setters: [function (_) {
            modelHelper = _.modelHelper;
        }],
        execute: function () {
            permissionsModel = {
                parse: function parse(data) {
                    var obj = modelHelper.fromJson(data);
                    var parsed = {
                        operations: modelHelper.getString(obj.operations).split(','),
                        role: {
                            id: modelHelper.getInt(obj.role['@id']),
                            name: modelHelper.getString(obj.role)
                        }
                    };
                    return parsed;
                }
            };

            _export('permissionsModel', permissionsModel);
        }
    };
});
$__System.register('4', ['3', '17', '6e'], function (_export) {
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

    var modelHelper, pageModel, permissionsModel, userModel;
    return {
        setters: [function (_) {
            modelHelper = _.modelHelper;
        }, function (_2) {
            pageModel = _2.pageModel;
        }, function (_e) {
            permissionsModel = _e.permissionsModel;
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
                        email: obj.email,
                        fullname: obj.fullname,
                        username: obj.username,
                        nick: obj.nick,
                        status: obj.status
                    };
                    if (typeof obj['license.seat'] === 'string') {
                        parsed.seated = modelHelper.getBool(obj['license.seat']);
                        parsed.siteOwner = false;
                    } else {
                        parsed.seated = modelHelper.getBool(modelHelper.getString(obj['license.seat']));
                        parsed.siteOwner = modelHelper.getBool(obj['license.seat']['@owner']);
                    }
                    if ('date.lastlogin' in obj) {
                        parsed.dateLastLogin = modelHelper.getDate(obj['date.lastlogin']);
                    }
                    if ('page.home' in obj) {
                        parsed.pageHome = pageModel.parse(obj['page.home']);
                    }
                    if ('permissions.user' in obj) {
                        parsed.userPermissions = permissionsModel.parse(obj['permissions.user']);
                    }
                    return parsed;
                }
            };

            _export('userModel', userModel);
        }
    };
});
$__System.register('17', ['3', '4', '6d'], function (_export) {
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

    var modelHelper, userModel, pageRatingModel, pageModel;
    return {
        setters: [function (_) {
            modelHelper = _.modelHelper;
        }, function (_2) {
            userModel = _2.userModel;
        }, function (_d) {
            pageRatingModel = _d.pageRatingModel;
        }],
        execute: function () {
            pageModel = {
                parse: function parse(data) {
                    var obj = modelHelper.fromJson(data);
                    var parsed = {
                        id: modelHelper.getInt(obj['@id']),
                        title: obj.title,
                        uriUi: obj['uri.ui']
                    };
                    modelHelper.addIfDefined(obj['@href'], 'href', parsed);
                    modelHelper.addIfDefined(obj['@state'], 'state', parsed);
                    modelHelper.addIfDefined(obj['@draft.state'], 'draftState', parsed);
                    modelHelper.addIfDefined(obj.article, 'article', parsed);
                    modelHelper.addIfDefined(obj.language, 'language', parsed);
                    modelHelper.addIfDefined(obj.namespace, 'namespace', parsed);
                    modelHelper.addIfDefined(obj['language.effective'], 'languageEffective', parsed);
                    modelHelper.addIfDefined(obj.timeuuid, 'timeuuid', parsed);
                    if ('path' in obj) {
                        parsed.path = modelHelper.getString(obj.path);
                    }
                    if ('@revision' in obj) {
                        parsed.revision = modelHelper.getInt(obj['@revision']);
                    }
                    if ('date.created' in obj) {
                        parsed.dateCreated = modelHelper.getDate(obj['date.created']);
                    }
                    if ('@deleted' in obj) {
                        parsed.deleted = modelHelper.getBool(obj['@deleted']);
                    }
                    if ('@publish' in obj) {
                        parsed.publish = modelHelper.getBool(obj['@publish']);
                    }
                    if ('@unpublish' in obj) {
                        parsed.unpublish = modelHelper.getBool(obj['@unpublish']);
                    }
                    if ('@deactivate' in obj) {
                        parsed.deactivate = modelHelper.getBool(obj['@deactivate']);
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

                    // TODO: Parse obj.files if defined
                    // TODO: Parse obj.content if defined
                    // TODO: Parse obj.properties if defined
                    // TODO: Parse obj['user.createdby'] if defined

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
                    pageDef = modelHelper.getArray(pageDef);
                    pageDef.forEach(function (sp) {
                        parsed.push(pageModel.parse(sp));
                    });
                    return parsed;
                }
            };

            _export('pageModel', pageModel);
        }
    };
});
$__System.register('6f', ['3', '17'], function (_export) {
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

    var modelHelper, pageModel, pageMoveModel;
    return {
        setters: [function (_) {
            modelHelper = _.modelHelper;
        }, function (_2) {
            pageModel = _2.pageModel;
        }],
        execute: function () {
            pageMoveModel = {
                parse: function parse(data) {
                    var obj = modelHelper.fromJson(data);
                    var parsed = {
                        count: obj['@count'],
                        pages: []
                    };
                    if ('page' in obj) {
                        var pages = modelHelper.getArray(obj.page);
                        pages.forEach(function (page) {
                            parsed.pages.push(pageModel.parse(page));
                        });
                    }
                    return parsed;
                }
            };

            _export('pageMoveModel', pageMoveModel);
        }
    };
});
$__System.register('70', ['6', '7', '8', '9', '13', '16', '17', '18', '19', '68', '69', '1c', '6c', '6d', '6f'], function (_export) {
    var Plug, utility, _createClass, _classCallCheck, _Promise, PageBase, pageModel, _get, _inherits, pageContentsModel, subpagesModel, _Object$keys, pageTreeModel, pageRatingModel, pageMoveModel, Page;

    return {
        setters: [function (_6) {
            Plug = _6.Plug;
        }, function (_7) {
            utility = _7.utility;
        }, function (_3) {
            _createClass = _3['default'];
        }, function (_4) {
            _classCallCheck = _4['default'];
        }, function (_5) {
            _Promise = _5['default'];
        }, function (_8) {
            PageBase = _8.PageBase;
        }, function (_9) {
            pageModel = _9.pageModel;
        }, function (_) {
            _get = _['default'];
        }, function (_2) {
            _inherits = _2['default'];
        }, function (_11) {
            pageContentsModel = _11.pageContentsModel;
        }, function (_10) {
            subpagesModel = _10.subpagesModel;
        }, function (_c) {
            _Object$keys = _c['default'];
        }, function (_c2) {
            pageTreeModel = _c2.pageTreeModel;
        }, function (_d) {
            pageRatingModel = _d.pageRatingModel;
        }, function (_f) {
            pageMoveModel = _f.pageMoveModel;
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

            Page = (function (_PageBase) {
                _inherits(Page, _PageBase);

                function Page(id, settings) {
                    if (id === undefined) id = 'home';

                    _classCallCheck(this, Page);

                    _get(Object.getPrototypeOf(Page.prototype), 'constructor', this).call(this, id);
                    this._plug = new Plug(settings).at('@api', 'deki', 'pages', this._id);
                }

                _createClass(Page, [{
                    key: 'getInfo',
                    value: function getInfo() {
                        var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

                        var infoParams = { exclude: 'revision' };
                        _Object$keys(params).forEach(function (key) {
                            infoParams[key] = params[key];
                        });
                        return this._plug.at('info').withParams(infoParams).get().then(pageModel.parse);
                    }
                }, {
                    key: 'getSubpages',
                    value: function getSubpages(params) {
                        return this._plug.at('subpages').withParams(params).get().then(subpagesModel.parse);
                    }
                }, {
                    key: 'getTree',
                    value: function getTree(params) {
                        return this._plug.at('tree').withParams(params).get().then(pageTreeModel.parse);
                    }
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
                }, {
                    key: 'getRating',
                    value: function getRating() {
                        return this._plug.at('ratings').get().then(pageRatingModel.parse);
                    }
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
                        return this._plug.at('ratings').withParams({ score: rating, previousScore: oldRating }).post(null, utility.textRequestType).then(pageRatingModel.parse);
                    }
                }, {
                    key: 'getHtmlTemplate',
                    value: function getHtmlTemplate(path) {
                        var params = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

                        params.pageid = this._id;

                        // Double-URL-encode the path and add '=' to the beginning.  This makes
                        //  it a proper page ID to be used in a URI segment.
                        var templatePath = '=' + encodeURIComponent(encodeURIComponent(path));
                        var contentsPlug = new Plug().at('@api', 'deki', 'pages', templatePath, 'contents').withParams(params);
                        return contentsPlug.get().then(pageContentsModel.parse);
                    }
                }, {
                    key: 'move',
                    value: function move() {
                        var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

                        return this._plug.at('move').withParams(params).post(null, 'text/plain; charset=utf-8').then(pageMoveModel.parse);
                    }
                }, {
                    key: 'activateDraft',
                    value: function activateDraft() {
                        return this._plug.at('activate-draft').post().then(pageModel.parse);
                    }
                }]);

                return Page;
            })(PageBase);

            _export('Page', Page);
        }
    };
});
$__System.register('71', ['8', '9', '13', '15', '70'], function (_export) {
    var _createClass, _classCallCheck, _Promise, DraftManager, Page, Article;

    function _getTagsMarkup(tags) {
        var tagsMarkup = '';
        tags.forEach(function (tag) {
            tagsMarkup = tagsMarkup + '<a>' + tag + '</a>';
        });
        tagsMarkup = '<p class="template:tag-insert">' + tagsMarkup + '</p>';
        return tagsMarkup;
    }
    return {
        setters: [function (_) {
            _createClass = _['default'];
        }, function (_2) {
            _classCallCheck = _2['default'];
        }, function (_3) {
            _Promise = _3['default'];
        }, function (_4) {
            DraftManager = _4.DraftManager;
        }, function (_5) {
            Page = _5.Page;
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
                    this._draftManager = new DraftManager(settings);
                }

                _createClass(Article, [{
                    key: 'createUnpublished',
                    value: function createUnpublished(_ref) {
                        var _this = this;

                        var path = _ref.path;
                        var content = _ref.content;
                        var _ref$title = _ref.title;
                        var title = _ref$title === undefined ? null : _ref$title;
                        var _ref$type = _ref.type;
                        var type = _ref$type === undefined ? 'article:topic' : _ref$type;
                        var _ref$tags = _ref.tags;
                        var tags = _ref$tags === undefined ? [] : _ref$tags;

                        return new _Promise(function (resolve, reject) {

                            // First, create a new, empty draft at the path supplied.
                            _this._draftManager.createDraft(path).then(function (resp) {
                                if (tags.indexOf(type) < 0) {
                                    tags.push(type);
                                }
                                var tagsMarkup = _getTagsMarkup(tags);
                                var newContent = '' + content + tagsMarkup;

                                // Now that the draft is created, set the contents and title;
                                var contentsParams = {};
                                if (title !== null) {
                                    contentsParams.title = title;
                                }
                                var newDraft = _this._draftManager.getDraft(resp.id);
                                newDraft.setContents(newContent, contentsParams).then(function () {
                                    resolve();
                                })['catch'](function () {
                                    reject('An error occurred while setting the unpublished article content');
                                });
                            })['catch'](function () {
                                reject('An error occurred while creating the unpublished article');
                            });
                        });
                    }
                }, {
                    key: 'createPublished',
                    value: function createPublished(_ref2) {
                        var _this2 = this;

                        var path = _ref2.path;
                        var _ref2$title = _ref2.title;
                        var title = _ref2$title === undefined ? null : _ref2$title;
                        var content = _ref2.content;
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
                            pageApi.setContents(newContent, contentsParams).then(function () {
                                resolve();
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
$__System.registerDynamic("21", [], true, function($__require, exports, module) {
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

$__System.registerDynamic("72", ["21"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $ = $__require('21');
  module.exports = function defineProperty(it, key, desc) {
    return $.setDesc(it, key, desc);
  };
  return module.exports;
});

$__System.registerDynamic("6b", ["72"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "default": $__require('72'),
    __esModule: true
  };
  return module.exports;
});

$__System.registerDynamic("8", ["6b"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var _Object$defineProperty = $__require('6b')["default"];
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

$__System.registerDynamic("31", [], true, function($__require, exports, module) {
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

$__System.registerDynamic("73", ["31"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var defined = $__require('31');
  module.exports = function(it) {
    return Object(defined(it));
  };
  return module.exports;
});

$__System.registerDynamic("52", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
  if (typeof __g == 'number')
    __g = global;
  return module.exports;
});

$__System.registerDynamic("4f", [], true, function($__require, exports, module) {
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

$__System.registerDynamic("4b", ["4f"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var aFunction = $__require('4f');
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

$__System.registerDynamic("26", ["52", "29", "4b"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var global = $__require('52'),
      core = $__require('29'),
      ctx = $__require('4b'),
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

$__System.registerDynamic("59", [], true, function($__require, exports, module) {
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

$__System.registerDynamic("1f", ["26", "29", "59"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $export = $__require('26'),
      core = $__require('29'),
      fails = $__require('59');
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

$__System.registerDynamic("74", ["73", "1f"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var toObject = $__require('73');
  $__require('1f')('keys', function($keys) {
    return function keys(it) {
      return $keys(toObject(it));
    };
  });
  return module.exports;
});

$__System.registerDynamic("29", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core = module.exports = {version: '1.2.6'};
  if (typeof __e == 'number')
    __e = core;
  return module.exports;
});

$__System.registerDynamic("75", ["74", "29"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  $__require('74');
  module.exports = $__require('29').Object.keys;
  return module.exports;
});

$__System.registerDynamic("1c", ["75"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "default": $__require('75'),
    __esModule: true
  };
  return module.exports;
});

$__System.register("2d", ["8", "9", "1c"], function (_export) {
    var _createClass, _classCallCheck, _Object$keys, _defaultProperties, Settings;

    return {
        setters: [function (_) {
            _createClass = _["default"];
        }, function (_2) {
            _classCallCheck = _2["default"];
        }, function (_c) {
            _Object$keys = _c["default"];
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
$__System.register('76', ['8', '9', '14', '71', 'f', '2d'], function (_export) {
    var _createClass, _classCallCheck, Search, Article, User, Settings, GeniusLink;

    return {
        setters: [function (_) {
            _createClass = _['default'];
        }, function (_2) {
            _classCallCheck = _2['default'];
        }, function (_3) {
            Search = _3.Search;
        }, function (_4) {
            Article = _4.Article;
        }, function (_f) {
            User = _f.User;
        }, function (_d) {
            Settings = _d.Settings;
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

            GeniusLink = (function () {

                /**
                 * Construct and configure the GeniusLink connection
                 *
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
                }

                _createClass(GeniusLink, [{
                    key: 'configuration',
                    get: function get() {
                        return this.settings.getProperties();
                    }
                }, {
                    key: 'search',
                    get: function get() {
                        return this.searchLib.search.bind(this.searchLib);
                    }
                }, {
                    key: 'User',
                    get: function get() {
                        return this.userLib;
                    }
                }, {
                    key: 'Article',
                    get: function get() {
                        return this.articleLib;
                    }
                }]);

                return GeniusLink;
            })();

            _export('GeniusLink', GeniusLink);
        }
    };
});
$__System.register('1', ['76'], function (_export) {
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
      GeniusLink = _.GeniusLink;
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
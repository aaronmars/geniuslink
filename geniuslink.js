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
import User from './user';
import search from './search';
import settings from 'martian/lib/settings';
export default {

    /**
     * Configure the GeniusLink connection
     *
     * @param {Object} configuration - An object containing other initialization values.
     */
    configure(configuration) {
        this.init(configuration.host);
        if(!('token' in configuration)) {
            throw new Error('A browser developer token must be supplied to configure the GeniusLink SDK.');
        }
        if(typeof configuration.token !== 'string') {
            throw new Error('An invalid browser developer token was supplied to the GeniusLink configure() function.');
        }
        let token = configuration.token.trim();
        if(token === '') {
            throw new Error('An invalid browser developer token was supplied to the GeniusLink configure() function.');
        }
        settings.set('token', token);
    },

    /**
     * Initialize GeniusLink connection
     * @deprecated
     * @param {String} host - MindTouch host (e.g. https://example.mindtouch.us)
     */
    init(host) {
        if(!host) {
            throw new Error('A MindTouch host (e.g. https://example.mindtouch.us) is required to initialize the GeniusLink connection.');
        }
        let protocolArr = host.match(/^http(s?):/);
        let protocol = (protocolArr && Array.isArray(protocolArr)) ? protocolArr[0] : window.location.protocol;
        if(!protocolArr) {
            host = `${protocol}//${host}`;
        }
        if(protocol === 'https:' && window.location.protocol === 'http:') {
            throw new Error('A secure HTTPS connection cannot be made from an insecure web page.');
        }
        settings.set('host', host);
    },
    search: search,
    User: User
};

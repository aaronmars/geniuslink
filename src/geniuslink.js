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
import settings from 'martian/settings';

export default {

    /**
     * Initialize GeniusLink connection
     *
     * @param {String} host - MindTouch host (e.g. https://example.mindtouch.us)
     */
    init: (host) => {
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
    user: User
};

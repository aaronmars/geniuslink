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
import {User} from './user';
import {Search} from './search';
import {Article} from './article';
import {Settings} from 'martian/lib/settings';

/**
 * The main GeniusLink SDK entry point.
 */
export class GeniusLink {

    /**
     * Construct and configure the GeniusLink connection
     *
     * @param {Object} configuration - An object containing other initialization values.
     */
    constructor(configuration = {}) {
        if(!('host' in configuration)) {
            throw new Error('A MindTouch host (e.g. https://example.mindtouch.us) is required to initialize the GeniusLink SDK connection.');
        }
        if(!('token' in configuration)) {
            throw new Error('A browser developer token must be supplied to initialize the GeniusLink SDK connection.');
        } else if(typeof configuration.token !== 'string') {
            throw new Error('An invalid browser developer token was used to initialize the GeniusLink SDK connection.');
        }
        let host = configuration.host;
        let protocolArr = host.match(/^http(s?):/);
        let protocol = (protocolArr && Array.isArray(protocolArr)) ? protocolArr[0] : window.location.protocol;
        if(!protocolArr) {
            host = `${protocol}//${host}`;
        }
        if(protocol === 'http:' && window.location.protocol === 'https:') {
            throw new Error('An insecure GeniusLink SDK connection (http) cannot be made from a secure web page (https).');
        }
        let token = configuration.token.trim();
        if(token === '') {
            throw new Error('An invalid browser developer token was used to initialize the GeniusLink SDK connection.');
        }
        this.settings = new Settings({ host: host, token: token });
        this.userLib = new User(this.settings);
        this.searchLib = new Search(this.settings);
        this.articleLib = new Article(this.settings);
    }

    /**
     * Get the configuration settings used for construction of the GeniusLink instance
     *
     * @return {type} A settings object with the configuration parameters
     */
    get configuration() {
        return this.settings.getProperties();
    }

    /**
     * Get the GeniusLink search interface.
     *
     * @return {Function} The GeniusLink search function.
     */
    get search() {
        return this.searchLib.search.bind(this.searchLib);
    }

    /**
     * Get current user management instance.
     *
     * @return {User} A User object that can be used to work with the user management functionality.
     */
    get User() {
        return this.userLib;
    }

    /**
     * Get current article management instance.
     *
     * @return {Article} An Article object that can be used to work with the article management functionality.
     */
    get Article() {
        return this.articleLib;
    }
}

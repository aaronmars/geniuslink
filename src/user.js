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
import MartianUser from 'martian/user';
import settings from 'martian/settings';
export default class User {

    /**
     * The current MindTouch host user, or an anonymous user is unauthenticated
     *
     * @returns {Object}
     */
    static getCurrentUser() {
        return MartianUser.getCurrentUser();
    }

    /**
     * A url that allows an anonymous user to authenticate with the MindTouch host
     *
     * @returns {String}
     */
    static getLoginUrl() {
        return `${settings.get('host')}/@app/login/redirect`;
    }
}

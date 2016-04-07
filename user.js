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
import { UserManager } from 'martian/user';
import { UserEvents } from 'martian/userEvents';

/**
 * User management
 */
export class User {
    constructor(settings) {
        this.settings = settings;
        this.martianUser = new UserManager(settings);
    }

    /**
     * The current MindTouch host user, or an anonymous user is unauthenticated
     * @returns {Promise.<Object>} - A Promise that, when resolved, yields an object with information about the current user.
     */
    getCurrentUser() {
        return this.martianUser.getCurrentUser();
    }

    /**
     * A url that allows an anonymous user to authenticate with the MindTouch host
     * @returns {String} - The URL on the MindTouch site that will present a user with a login form.
     */
    getLoginUrl() {
        return `${this.settings.get('host')}/@app/login/redirect`;
    }

    /**
     * Gets the activity of a user based on a system-defined token. Currently,
     * page views and search attempts are returned in the listing of the user activity.
     * @param  {String} userToken - A system-defined token that identifies a particular user.
     * @return {Promise.<Object>} - A Promise that, when resolved, yields the user activity event list.
     */
    getInsights(userToken) {
        let ue = new UserEvents(this.settings);
        return ue.getActivity(userToken, { include: 'page' });
    }
}

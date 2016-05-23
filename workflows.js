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
import { WorkflowManager } from 'mindtouch-martian/workflows';

/**
 * Workflow management
 */
export class Workflows {
    constructor(settings) {
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
    submitIssue(options = {}) {
        if('email' in options) {
            options._email = options.email;
            delete options.email;
        }
        if('path' in options) {
            options._path = options.path;
            delete options.path;
        }
        if('search' in options) {
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
    requestArticle(options = {}) {
        if('email' in options) {
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
    contactSupport(options = {}) {
        if('email' in options) {
            options._email = options.email;
            delete options.email;
        }
        if('path' in options) {
            options._path = options.path;
            delete options.path;
        }
        if('search' in options) {
            options._search = options.search;
            delete options.search;
        }
        return this._manager.contactSupport(options);
    }
}

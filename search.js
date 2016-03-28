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
import {Site} from 'martian/site';
export class Search {
    constructor(settings) {
        this.site = new Site(settings);
    }

    /**
     * @param {String} q - keywords or advanced search syntax
     * @param {Object} options - {
     *  page: paginated {page}
     *  limit: limit search results to {limit} items per paginated page
     *  tags: constrain search results to items tagged with {tag}
     *  type: Type or types to filter the results in a comma delimited list (default = '') types: `wiki`, `document`, `image`, `binary`
     *  path: constraint search results to items located in the {path} page hierarchy
     *  recommendations: `true` to include recommended search results based off site configuration. `false` to suppress them.
     * }
     * @returns {Object}
     */
    search(q, options = {}) {
        if(!q || q === '') {
            throw new Error('Search requires keywords or advanced search syntax.');
        }
        options.q = q;
        return this.site.search(options);
    }
}

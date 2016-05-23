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
import { Site } from 'mindtouch-martian/site';
export class Search {
    constructor(settings) {
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
    search(q, options = {}) {
        if(!q || q === '') {
            throw new Error('Search requires keywords or advanced search syntax.');
        }
        options.q = q;
        return this.site.search(options);
    }
}

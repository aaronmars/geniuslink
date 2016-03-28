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
import {DraftManager} from 'martian/draft';
import {Page} from 'martian/page';
function _getTagsMarkup(tags) {
    let tagsMarkup = '';
    tags.forEach((tag) => {
        tagsMarkup = `${tagsMarkup}<a>${tag}</a>`;
    });
    tagsMarkup = `<p class="template:tag-insert">${tagsMarkup}</p>`;
    return tagsMarkup;
}

/**
 * Article management
 */
export class Article {

    /**
     * Create an Article management object.
     * @param {Object} settings The settings object for the initialization of the SDK
     */
    constructor(settings) {
        this._settings = settings;
    }

    /**
     * Create an unpublished article on the MindTouch site.
     *
     * @param {Object} options - Parameters that control the Article creation. The following parameters are valid:
     * - `path` {string} - The path of the new article
     * - `content` {string} (optional) - The initial contents of the new article.  Defaults to ''
     * - `title` {string} (optional) - The display title of the new page.  If not supplied, it is inferred from the path parameter.
     * - `type` {string} (optional) - Article type of the new article. Valid types are: `article:topic-category`, `article:topic-guide`, `article:topic`, `article:howto`, `article:reference`.  Defaults to `article:topic`
     * - `tags` {Array} (optional) - Initial tags to be set on the new article.  Defaults to an empty array.
     * @return {Promise<Object>} A Promise yielding an object that contains information about the newly created article.
     */
    createUnpublished({ path, content = '', title = null, type = 'article:topic', tags = [] }) {
        return new Promise((resolve, reject) => {
            let draftManager = new DraftManager(this._settings);

            // First, create a new, empty draft at the path supplied.
            draftManager.createDraft(path).then((resp) => {
                if(tags.indexOf(type) < 0) {
                    tags.push(type);
                }
                let tagsMarkup = _getTagsMarkup(tags);
                let newContent = `${content}${tagsMarkup}`;

                // Now that the draft is created, set the contents and title;
                let contentsParams = {};
                if(title !== null) {
                    contentsParams.title = title;
                }
                let newDraft = draftManager.getDraft(resp.id);
                newDraft.setContents(newContent, contentsParams).then(() => {
                    resolve();
                }).catch(() => {
                    reject('An error occurred while setting the unpublished article content');
                });
            }).catch(() => {
                reject('An error occurred while creating the unpublished article');
            });
        });
    }

    /**
     * Create a published article on the MindTouch site.
     *
     * @param {Object} options - Parameters that control the Article creation. The following parameters are valid:
     * - `path` {string} - The path of the new article
     * - `content` {string} (optional) - The initial contents of the new article.  Defaults to ''
     * - `title` {string} (optional) - The display title of the new page.  If not supplied, it is inferred from the path parameter.
     * - `type` {string} (optional) - Article type of the new article. Valid types are: `article:topic-category`, `article:topic-guide`, `article:topic`, `article:howto`, `article:reference`.  Defaults to `article:topic`
     * - `tags` {Array} (optional) - Initial tags to be set on the new article.  Defaults to an empty array.
     * @return {Promise<Object>} A Promise yielding an object that contains information about the newly created article.
     */
    createPublished({ path, title = null, content = '', type = 'article:topic', tags = [] }) {
        return new Promise((resolve, reject) => {
            let pageApi = new Page(path, this._settings);
            if(tags.indexOf(type) < 0) {
                tags.push(type);
            }
            let newContent = `${content}
            ${_getTagsMarkup(tags)}`;
            let contentsParams = {};
            if(title !== null) {
                contentsParams.title = title;
            }
            pageApi.setContents(newContent, contentsParams).then(() => {
                resolve();
            }).catch(() => {
                reject('An error occurred while creating the published article');
            });
        });
    }
}

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
    constructor(settings) {
        this._settings = settings;
    }

    /**
     * Create an unpublished article on the MindTouch site.
     *
     * This function takes a single Object parameter that controls the Article creation. The following parameters are valid:
     * @param {String} path - The path of the new article
     * @param {String} [content=''] - The initial contents of the new article.  Defaults to ''
     * @param {String} [title=null] - The display title of the new page.  If not supplied, it is inferred from the path parameter.
     * @param {String} [type='article:topic'] - Article type of the new article. Valid types are: `article:topic-category`, `article:topic-guide`, `article:topic`, `article:howto`, `article:reference`.  Defaults to `article:topic`
     * @param {Array} [tags=[]] - Initial tags to be set on the new article.  Defaults to an empty array.
     * @return {Promise} A Promise yielding an object that contains information about the newly created article.
     */
    createUnpublished({ path, content = '', title = null, type = 'article:topic', tags = [] }) {
        return new Promise((resolve, reject) => {
            let draftManager = new DraftManager(this._settings);
            let tagsWithArticleType = [ ...tags ];

            // First, create a new, empty draft at the path supplied.
            draftManager.createDraft(path).then((resp) => {
                if(tagsWithArticleType.indexOf(type) < 0) {
                    tagsWithArticleType.push(type);
                }
                let tagsMarkup = _getTagsMarkup(tagsWithArticleType);
                let newContent = `${content}${tagsMarkup}`;

                // Now that the draft is created, set the contents and title;
                let contentsParams = {};
                if(title !== null) {
                    contentsParams.title = title;
                }
                let newDraft = draftManager.getDraft(resp.id);
                newDraft.setContents(newContent, contentsParams).then((contentsResp) => {
                    resolve(contentsResp);
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
     * This function takes a single Object parameter that controls the Article creation. The following parameters are valid:
     * @param {String} path - The path of the new article
     * @param {String} [content=''] - The initial contents of the new article.  Defaults to ''
     * @param {String} [title=null] - The display title of the new page.  If not supplied, it is inferred from the path parameter.
     * @param {String} [type='article:topic'] - Article type of the new article. Valid types are: `article:topic-category`, `article:topic-guide`, `article:topic`, `article:howto`, `article:reference`.  Defaults to `article:topic`
     * @param {Array} [tags=[]] - Initial tags to be set on the new article.  Defaults to an empty array.
     * @return {Promise} A Promise yielding an object that contains information about the newly created article.
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
            pageApi.setContents(newContent, contentsParams).then((resp) => {
                resolve(resp);
            }).catch(() => {
                reject('An error occurred while creating the published article');
            });
        });
    }
}

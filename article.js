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
export class Article {
    constructor(settings) {
        this._settings = settings;
        this._draftManager = new DraftManager(settings);
    }
    createUnpublished({ path, content, title = null, type = 'article:topic', tags = [] }) {
        return new Promise((resolve, reject) => {

            // First, create a new, empty draft at the path supplied.
            this._draftManager.createDraft(path).then((resp) => {
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
                let newDraft = this._draftManager.getDraft(resp.id);
                newDraft.setContents(newContent, contentsParams).then(() => {
                    resolve();
                }).catch(() => {
                    reject('An error occurred while setting the unpublished article content');
                });
            }).catch((e) => {
                reject('An error occurred while creating the unpublished article');
            });
        });
    }
    createPublished({ path, title = null, content, type = 'article:topic', tags = [] }) {
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

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
import { GeniusLink } from '../geniuslink';
import { WorkflowManager } from 'martian/workflows';
describe('Workflows', () => {
    let gl = null;
    beforeEach(() => {
        gl = new GeniusLink({ host: 'https://mindtouch.example.com', token: 'abcd1234' });
    });
    afterEach(() => {
        gl = null;
    });
    describe('operations', () => {
        it('can submit an issue', (done) => {
            spyOn(WorkflowManager.prototype, 'submitIssue').and.returnValue(Promise.resolve());
            gl.Workflows.submitIssue().then(() => {
                done();
            });
        });
        it('can submit an issue with params', (done) => {
            spyOn(WorkflowManager.prototype, 'submitIssue').and.returnValue(Promise.resolve());
            gl.Workflows.submitIssue({ email: 'user@example.com', path: 'foo/bar', search: 'search term' }).then(() => {
                done();
            });
        });
        it('can request an article', (done) => {
            spyOn(WorkflowManager.prototype, 'requestArticle').and.returnValue(Promise.resolve());
            gl.Workflows.requestArticle().then(() => {
                done();
            });
        });
        it('can request an article with params', (done) => {
            spyOn(WorkflowManager.prototype, 'requestArticle').and.returnValue(Promise.resolve());
            gl.Workflows.requestArticle({ email: 'user@example.com' }).then(() => {
                done();
            });
        });
        it('can contact support', (done) => {
            spyOn(WorkflowManager.prototype, 'contactSupport').and.returnValue(Promise.resolve());
            gl.Workflows.contactSupport().then(() => {
                done();
            });
        });
        it('can contact support with params', (done) => {
            spyOn(WorkflowManager.prototype, 'contactSupport').and.returnValue(Promise.resolve());
            gl.Workflows.contactSupport({ email: 'user@example.com', path: 'foo/bar', search: 'search term' }).then(() => {
                done();
            });
        });
    });
});

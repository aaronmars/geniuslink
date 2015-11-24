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
import GeniusLink from '../src/geniuslink';
GeniusLink.init('http://example.mindtouch.us');

describe('search', () => {
    describe('operations', () => {
        beforeEach(() => {
            jasmine.Ajax.install();
        });
        afterEach(() => {
            jasmine.Ajax.uninstall();
        });
        it('can fetch search results', (done) => {
            let infoUri = 'http://example.mindtouch.us/@api/deki/site/query?';
            jasmine.Ajax.stubRequest(new RegExp(infoUri), null, 'GET').andReturn({ status: 500, responseText: '{ \"message\": \"internal error\" }' });
            search({ q: "less" }).then((r) => {
                expect(r).toBeDefined();
                expect(r.errorCode).toBe(500);
                expect(r.message).toBe('internal error');
                done();
            });
        });
    });
});

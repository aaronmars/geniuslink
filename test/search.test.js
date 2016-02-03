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
import {GeniusLink} from 'geniuslink';
import {Site} from 'martian/site';
describe('search', () => {
    describe('operations', () => {
        let gl = null;
        beforeEach(() => {
            gl = new GeniusLink({ host: 'http://mindtouch.example.com', token: 'abcd1234' });
        });
        afterEach(() => {
            gl = null;
        });
        it('can get search results', (done) => {
            spyOn(Site.prototype, 'search').and.returnValue(Promise.resolve({ success: true }));
            gl.search('foo bar baz', {}).then(() => {
                done();
            });
        });
        it('can fail with invalid parameters', () => {
            expect(() => gl.search()).toThrow();
        });
    });
});

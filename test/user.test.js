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
import GeniusLink from '../geniuslink';
import User from 'martian/user';
describe('user', () => {
    describe('operations', () => {
        beforeEach(() => {
            GeniusLink.init('http://mindtouch.example.com');
        });
        it('can get current user', (done) => {
            spyOn(User, 'getCurrentUser').and.returnValue(Promise.resolve({ success: true }));
            GeniusLink.User.getCurrentUser().then(() => {
                done();
            });
        });
        it('can get login url', () => {
            var url = GeniusLink.User.getLoginUrl();
            expect(url).toBe('http://mindtouch.example.com/@app/login/redirect');
        });
        it('can create a blank User', () => {
            let u = new GeniusLink.User();
            expect(u).toBeDefined();
        });
    });
});

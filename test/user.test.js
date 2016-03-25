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
import {UserManager} from 'martian/user';
import {UserEvents} from 'martian/userEvents';
describe('user', () => {
    describe('operations', () => {
        let gl = null;
        beforeEach(() => {
            gl = new GeniusLink({ host: 'https://mindtouch.example.com', token: 'abcd1234' });
        });
        afterEach(() => {
            gl = null;
        });
        it('can get current user', (done) => {
            spyOn(UserManager.prototype, 'getCurrentUser').and.returnValue(Promise.resolve({ success: true }));
            gl.User.getCurrentUser().then(() => {
                done();
            });
        });
        it('can get login url', () => {
            var url = gl.User.getLoginUrl();
            expect(url).toBe('https://mindtouch.example.com/@app/login/redirect');
        });
        it('can fetch the user activity as Insights', (done) => {
            spyOn(UserEvents.prototype, 'getActivity').and.returnValue(Promise.resolve({ foo: 'bar' }));
            gl.User.getInsights('abcd1234').then((r) => {
                expect(r).toEqual({ foo: 'bar' });
                done();
            });
        });
    });
});

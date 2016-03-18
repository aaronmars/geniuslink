import {GeniusLink} from 'geniuslink';
describe('GeniusLink', () => {
    describe('construction', () => {
        it('can successfully construct a GL object', () => {
            let gl = new GeniusLink({
                host: 'https://www.example.com',
                token: 'abcd1234'
            });
            expect(gl).toBeDefined();
            expect(gl.configuration).toEqual({
                host: 'https://www.example.com',
                token: 'abcd1234'
            });
        });
        it('can successfully construct a GL object (no protocol)', () => {
            let gl = new GeniusLink({
                host: 'www.example.com',
                token: 'abcd1234'
            });
            expect(gl).toBeDefined();
            expect(gl.configuration).toEqual({
                host: 'https://www.example.com',
                token: 'abcd1234'
            });
        });
        it('can construct 2 GL objects with distinct configuration', () => {
            let gl1 = new GeniusLink({
                host: 'https://example.mindtouch.us',
                token: 'abcd1234'
            });
            let gl2 = new GeniusLink({
                host: 'https://www.example.com',
                token: 'efgh5678'
            });
            expect(gl1.configuration).toEqual({
                host: 'https://example.mindtouch.us',
                token: 'abcd1234'
            });
            expect(gl2.configuration).toEqual({
                host: 'https://www.example.com',
                token: 'efgh5678'
            });
        });
        it('can fail if invalid configuration is used in the constructor', () => {
            expect(() => new GeniusLink()).toThrow();
            expect(() => GeniusLink()).toThrow();
            expect(() => new GeniusLink({ host: 'https://www.example.com' })).toThrow();
            expect(() => new GeniusLink({ token: 'thisisatoken' })).toThrow();
            expect(() => new GeniusLink({ host: 'https://www.example.com', token: '' })).toThrow();
            expect(() => new GeniusLink({ host: 'www.example.com', token: 123 })).toThrow();
        });
        it('can fail if https in http window.location', () => {
            expect(() => new GeniusLink({
                host: 'http://www.example.com',
                token: 'abcd1234'
            })).toThrow();
        });
    });
    describe('GL members', () => {
        let gl = null;
        beforeEach(() => {
            gl = new GeniusLink({ host: 'https://example.mindtouch.us', token: 'abcd1234' });
        });
        afterEach(() => {
            gl = null;
        });
        it('can fetch the GL search function', () => {
            expect(typeof gl.search).toBe('function');
        });
        it('can fetch the GL User object', () => {
            expect(typeof gl.User).toBe('object');
        });
    });
});

import GeniusLink from 'geniuslink';
describe('GeniusLink', () => {
    describe('initialization', () => {
        it('can initialize the library', () => {
            expect(() => {
                GeniusLink.init('http://www.example.com');
            }).not.toThrow();
            expect(() => {
                GeniusLink.init('www.example.com');
            }).not.toThrow();
        });
        it('can fail correctly with invalid initialization', () => {
            expect(() => {
                GeniusLink.init();
            }).toThrow();
            expect(() => {
                GeniusLink.init('https://www.example.com');
            }).toThrow();
        });
        it('can initialize with a config object', () => {
            expect(() => {
                GeniusLink.configure({
                    host: 'http://www.example.com',
                    token: 'abcd1234'
                });
            }).not.toThrow();
        });
        it('can fail when an invalid configuration object is used', () => {
            expect(() => {
                GeniusLink.configure({ host: 'http://www.example.com' });
            }).toThrow();
            expect(() => {
                GeniusLink.configure({ token: 'abcd1234' });
            }).toThrow();
            expect(() => {
                GeniusLink.configure({
                    host: 'http://www.example.com',
                    token: 123
                });
            }).toThrow();
            expect(() => {
                GeniusLink.configure({
                    host: 'http://www.example.com',
                    token: '  '
                });
            }).toThrow();
        });
    });
});

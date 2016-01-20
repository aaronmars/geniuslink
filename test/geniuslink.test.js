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
    });
});

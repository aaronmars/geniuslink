import {GeniusLink} from 'geniuslink';
import {Draft, DraftManager} from 'martian/draft';
import {Page} from 'martian/page';
describe('article', () => {
    let gl = null;
    beforeEach(() => {
        gl = new GeniusLink({ host: 'https://mindtouch.example.com', token: 'abcd1234' });
    });
    afterEach(() => {
        gl = null;
    });
    describe('operations', () => {
        beforeEach(() => {
            spyOn(DraftManager.prototype, 'createDraft').and.returnValue(Promise.resolve({ id: 123 }));
            spyOn(Draft.prototype, 'setContents').and.returnValue(Promise.resolve({}));
            spyOn(Page.prototype, 'setContents').and.returnValue(Promise.resolve({}));
        });
        it('can create an unpublished article with mininmal params', (done) => {
            let createParams = { path: 'foo/bar/baz' };
            gl.Article.createUnpublished(createParams).then(() => {
                done();
            });
        });
        it('can create an unpublished article with all available params', (done) => {
            let createParams = {
                path: 'foo/bar/baz',
                content: 'this is test content',
                tags: [ 'foo', 'bar', 'baz' ],
                title: 'Article Title',
                type: 'article:howto'
            };
            gl.Article.createUnpublished(createParams).then(() => {
                done();
            });
        });
        it('can create an unpublished article with odd params', (done) => {
            let createParams = {
                path: 'foo/bar/baz',
                content: 'this is test content',
                tags: [ 'article:topic' ],
                title: 'Article Title'
            };
            gl.Article.createUnpublished(createParams).then(() => {
                done();
            });
        });
        it('can create an published article with mininmal params', (done) => {
            let createParams = { path: 'foo/bar/baz' };
            gl.Article.createPublished(createParams).then(() => {
                done();
            });
        });
        it('can create an published article with all available params', (done) => {
            let createParams = {
                path: 'foo/bar/baz',
                content: 'this is test content',
                tags: [ 'foo', 'bar', 'baz' ],
                title: 'Article Title',
                type: 'article:howto'
            };
            gl.Article.createPublished(createParams).then(() => {
                done();
            });
        });
        it('can create an published article with odd params', (done) => {
            let createParams = {
                path: 'foo/bar/baz',
                content: 'this is test content',
                tags: [ 'article:topic' ],
                title: 'Article Title'
            };
            gl.Article.createPublished(createParams).then(() => {
                done();
            });
        });
    });
    describe('failed operations', () => {
        let createParams = { path: 'foo/bar/baz', content: 'this is test content' };
        it('can fail when the create unpublished operation is unsuccessful', (done) => {
            spyOn(DraftManager.prototype, 'createDraft').and.returnValue(Promise.reject());
            gl.Article.createUnpublished(createParams).catch(() => {
                done();
            });
        });
        it('can fail when the set unpublished contents operation is unsuccessful', (done) => {
            spyOn(DraftManager.prototype, 'createDraft').and.returnValue(Promise.resolve({ id: 123 }));
            spyOn(Draft.prototype, 'setContents').and.returnValue(Promise.reject({}));
            gl.Article.createUnpublished(createParams).catch(() => {
                done();
            });
        });
        it('can fail when the create unpublished operation is unsuccessful', (done) => {
            spyOn(Page.prototype, 'setContents').and.returnValue(Promise.reject());
            gl.Article.createPublished(createParams).catch(() => {
                done();
            });
        });
    });
});

describe('route.js', function() {
    var router;
    beforeEach(function() {
        router = new Router();
        router.setURL('')
        router.start();
    });
    it('initialize', function() {
        expect(router.current).toBe('');
    });
});
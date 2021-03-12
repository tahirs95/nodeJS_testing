const lib = require('../../lib')

describe('absolute', () => {
    it('+', () => {
        const result = lib.absolute(1);
        expect(result).toBe(1);
    })
    
    it('-', () => {
        const result = lib.absolute(-1);
        expect(result).toBe(1);
    })
    
    it('0', () => {
        const result = lib.absolute(0);
        expect(result).toBe(0);
    })
})

describe('greet', () => {
    it('greet message', () => {
        const result = lib.greet('Mosh');
        // expect(result).toBe('Welcome Mosh');
        // expect(result).toMatch(/Mosh/);
        expect(result).toContain('Mosh');
    })

})

describe('getCurrencies', () => {
    it('supported currencies', () => {
        const result = lib.getCurrencies();
        expect(result).toEqual(expect.arrayContaining(['EUR', 'USD', 'AUD']));
    })

})

describe('getProduct', () => {
    it('get product with given ID', () => {
        const result = lib.getProduct(1);
        // expect(result).toEqual({id:1, price:10});
        expect(result).toMatchObject({id:1, price:10});
        // expect(result).toHaveProperty('id', 1);
    })

})


describe('registerUser', () => {
    it('invalid username', () => {
        const args = [null, undefined, '', NaN, 0 , false]
        args.forEach(a => {
            expect(() => { lib.registerUser(a) }).toThrow();
        })
    })

    it('valid username', () => {
        const result = lib.registerUser("Mosh")
        expect(result).toMatchObject({username:"Mosh"});
        expect(result.id).toBeGreaterThan(0);
    })
})
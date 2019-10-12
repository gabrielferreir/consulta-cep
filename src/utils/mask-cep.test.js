import MaskCep from './mask-cep';

describe('mask cep', () => {

    it('should apply mask cep null', () => {
        const value = null;
        expect(MaskCep(value)).toBe('');
    });


    it('should apply mask cep 000 ', () => {
        const value = '000';
        expect(MaskCep(value)).toBe('000');
    });

    it('should apply mask cep 00000', () => {
        const value = '00000';
        expect(MaskCep(value)).toBe('00000');
    });

    it('should apply mask cep 000000', () => {
        const value = '000000';
        expect(MaskCep(value)).toBe('00000-0');
    });

    it('should apply mask cep 14000321', () => {
        const value = '14000321';
        expect(MaskCep(value)).toBe('14000-321');
    });

    it('should apply mask cep 1400032100', () => {
        const value = '1400032100';
        expect(MaskCep(value)).toBe('14000-321');
    });

});
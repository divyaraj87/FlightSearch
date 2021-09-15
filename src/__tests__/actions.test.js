import { selectChange, progressChange, progressLoad, fieldLoad, responseMap } from '../actions';

describe('Actions', () => {    
    it('call fieldLoad', () => {
        expect(fieldLoad('trip', 'One Way'));
        expect(fieldLoad('trip', 'Return'));
        expect(fieldLoad('noReturn', true));
        expect(fieldLoad('noReturn', false));
    });
});
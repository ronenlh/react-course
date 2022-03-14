import counter from './index';

describe('reducers', () => {
    describe('counter', () => {
        it('should provide the initial state', () => {
            // @ts-ignore
            expect(counter(undefined, {})).toEqual({ counter: 0 });
        });

        it('should handle INCREMENT action', () => {
            expect(counter({ counter: 1 }, { type: 'INCREMENT' })).toEqual({ counter: 2 })
        });

        it('should handle DECREMENT action', () => {
            expect(counter({ counter: 1 }, { type: 'DECREMENT' })).toEqual({ counter: 0 })
        });

        it('should ignore unknown actions', () => {
            expect(counter({ counter: 1 }, { type: 'unknown' })).toEqual({ counter: 1 })
        });
    });
});

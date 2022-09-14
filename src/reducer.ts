export const numReducer = (state: any, action: any) => {
    switch(action.type) {
        case 'add':
            return state + 1;
        case 'substract':
            return state - 1;
        case 'addNum':
            return state + action.payload;
        default:
            return 0
    }
};

export const addAction = () => ({ type: 'add' });
export const substractAction = () => ({ type: 'substract' });
export const addNumAction = ( payload: number) => ({ type: 'addNum',  payload });
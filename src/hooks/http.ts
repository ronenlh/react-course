import { useReducer } from 'react';

interface HttpState {
  loading: boolean;
  error?: any;
  data?: any;
  extra?: any;
  identifier?: any;
}

interface HttpAction {
  type: 'SEND' |  'RESPONSE' |  'ERROR' |  'CLEAR';
  identifier?: any;
  responseData?: any;
  extra?: any;
  errorMessage?: any;
}

const initialState: HttpState = {
  loading: false,
  error: null,
  data: null,
  extra: null,
  identifier: null
};

const httpReducer: React.Reducer<HttpState, HttpAction> = (currentState, action) => {
  switch (action.type) {
    case 'SEND':
      return {
        loading: true,
        error: null,
        data: null,
        extra: null,
        identifier: action.identifier
      };
    case 'RESPONSE':
      return {
        ...currentState,
        loading: false,
        data: action.responseData,
        extra: action.extra
      };
    case 'ERROR':
      return { loading: false, error: action.errorMessage };
    case 'CLEAR':
      return initialState;
    default:
      throw new Error('Should not be reached!');
  }
};

const useHttp = () => {
  const [state, dispatch] = useReducer(httpReducer, initialState);

  const clear = () => dispatch({ type: 'CLEAR' });

  const sendRequest = (url: string, method: string, body?: any, reqExtra?: any, reqIdentifer?: any) => {
      dispatch({ type: 'SEND', identifier: reqIdentifer });
      fetch(url, {
        method: method,
        body: body,
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          return response.json();
        })
        .then(responseData => {
          dispatch({
            type: 'RESPONSE',
            responseData: responseData,
            extra: reqExtra
          });
        })
        .catch(error => {
          dispatch({
            type: 'ERROR',
            errorMessage: 'Something went wrong!'
          });
        });
    };

  return {
    isLoading: state.loading,
    data: state.data,
    error: state.error,
    sendRequest,
    reqExtra: state.extra,
    reqIdentifer: state.identifier,
    clear
  };
};

export default useHttp;

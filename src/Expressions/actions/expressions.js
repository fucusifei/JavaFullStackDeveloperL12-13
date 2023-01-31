const receiveExpressions = expressions => ({
    expressions,
    type: 'RECEIVE_EXPRESSIONS'
});

const requestExpressions = () => ({
    type: 'REQUEST_EXPRESSIONS'
});

const errorReceiveExpressions = () => ({
    type: 'ERROR_RECEIVE_EXPRESSIONS'
});

const getExpressions = () =>  {
   return  fetch();
};

const fetchExpressions = ({ expressionsCount }) => (dispatch) => {
    dispatch(requestExpressions());
    return getExpressions(expressionsCount)
        .then(expressions => dispatch(receiveExpressions(expressions)))
        .catch(() => dispatch(errorReceiveExpressions()));

};

export default {

    fetchExpressions,

};
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

const getExpressions= () => new Array( [{expression : '2+2'},{expression:'1-1'},{expression:'9/3'},{expression:'10*2'},{expression:'77/0'}]);
const fetchExpressions = ({ expressionsCount }) => (dispatch) => {
    dispatch(requestExpressions());
    return getExpressions()
        .then(expressions => dispatch(receiveExpressions(expressions)))
        .catch(() => dispatch(errorReceiveExpressions()));

};


export default {
    fetchExpressions,
};
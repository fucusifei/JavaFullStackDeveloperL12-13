import React from "react";
import { connect} from "react-redux";
import Button from "@material-ui/core/Button";

class Expressions extends React.Component{
    render() {
        console.log(this.props)
        return(
            <div>
                <Button variant="contained" onClick={() => this.props.dispatch({
                    type: 'RECEIVE_EXPRESSIONS',
                    expressions: [{expression : '2+2'},{expression:'1-1'},{expression:'9/3'},{expression:'10*2'},{expression:'77/0'}]

                })}> </Button>
            </div>
        )
    }
}
const mapReduxStateToProps = reduxState => ({
    ...reduxState,

});
const mapDispatchToProps = dispatch => ({
    dispatch,
})
export default connect(mapReduxStateToProps, mapDispatchToProps) (Expressions);
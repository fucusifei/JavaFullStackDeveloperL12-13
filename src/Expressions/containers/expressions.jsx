import React from "react";
import { connect} from "react-redux";
import Button from "@material-ui/core/Button";
import expressionsActions from "../actions/expressions"

class Expressions extends React.Component{
    render() {
        console.log(this.props)

        return(
            <div>
                <Button variant="contained" onClick={() => expressionsActions.fetchExpressions({
                    expressionsCount: 5,
                })(this.props.dispatch)}
                >
                </Button>
                <div>

                </div>
            </div>
        )
    }
}
const mapReduxStateToProps = (reduxState) => ({
    ...reduxState,

});
const mapDispatchToProps = (dispatch) => ({
    dispatch,

})
export default connect(mapReduxStateToProps, mapDispatchToProps) (Expressions);
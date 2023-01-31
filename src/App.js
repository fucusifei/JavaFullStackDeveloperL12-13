import React from 'react';
import Button from '@material-ui/core/Button';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({

}));

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      parameter: '',
      mark:'',
      out: '0',
      container: '',
      arr : []
    }
    this.ref = React.createRef()
  }

  pressNumberButton(number) {
      this.setState((state) => {
          if(state.out === '0') {state.out = ''}
          state.container = state.container + number
          return {out: state.out + number}
      });

  }
  pressMarkButton(mark) {
      this.setState((state) => {
          if(state.out === '0')
          {
              return  state.out
          }
          else {
              if (state.mark === ''){
                  state.parameter = state.container
                  state.container = ''
                  state.mark = mark
                  return {out: state.out + mark}
              }
              else {
                  state.out = state.parameter
                  state.mark = mark
                  return {out: state.out + mark}
              }

          }
      });
    }

  pressEqualButton() {
      this.setState((state) => {
          if(state.out === '0' || state.mark === '' || state.container === '')
          {
              return  state.out
          }
          else {
              switch (state.mark) {
                  case '+' :
                      state.container = parseFloat(state.parameter) + parseFloat(state.container)
                      state.mark = ''
                      break
                  case '-' :
                      state.container = parseFloat(state.parameter) - parseFloat(state.container)
                      state.mark = ''
                      break
                  case '*' :
                      state.container = parseFloat(state.parameter) * parseFloat(state.container)
                      state.mark = ''
                      break
                  case '/' :
                      if (state.container === '0'){
                          state.arr.push(state.out + " = Error division by zero")
                          state.mark = ''
                          return {out: state.container}
                      }
                      else {
                          state.container = parseFloat(state.parameter) / parseFloat(state.container)
                          state.mark = ''
                      }
                      break
              }
              state.arr.push(state.out + " = " + state.container)
              return {out: state.container}
          }
      });
  }


  render() {
    const {
        out,
        arr
    } = this.state;



    return (
        <div>
            <div>
                {out}
            </div>
          <div>
            <Button variant="contained" onClick={() => this.pressNumberButton('1')}>1</Button>
            <Button variant="contained" onClick={() => this.pressNumberButton('2')}>2</Button>
            <Button variant="contained" onClick={() => this.pressNumberButton('3')}>3</Button>
            <Button variant="contained" onClick={() => this.pressMarkButton('+')}>+</Button>
          </div>
          <div>
            <Button variant="contained" onClick={() => this.pressNumberButton('4')}>4</Button>
            <Button variant="contained" onClick={() => this.pressNumberButton('5')}>5</Button>
            <Button variant="contained" onClick={() => this.pressNumberButton('6')}>6</Button>
            <Button variant="contained" onClick={() => this.pressMarkButton('-')}>-</Button>
          </div>
          <div>
            <Button variant="contained" onClick={() => this.pressNumberButton('7')}>7</Button>
            <Button variant="contained" onClick={() => this.pressNumberButton('8')}>8</Button>
            <Button variant="contained" onClick={() => this.pressNumberButton('9')}>9</Button>
            <Button variant="contained" onClick={() => this.pressMarkButton('*')}>*</Button>
          </div>
            <div>
            <Button variant="contained" > </Button>
            <Button variant="contained" onClick={() => this.pressNumberButton('0')}>0</Button>
            <Button variant="contained" onClick={() => this.pressEqualButton()}>=</Button>
            <Button variant="contained" onClick={() => this.pressMarkButton('/')}>/</Button>
            </div>
            <div>
                {arr.map(name => <li key={name}> {name} </li>)}
            </div>
        </div>


    );
  }
}

export default App;

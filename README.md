# Movie App 2021
React JS Fundamentals Course (2021 Update!)
<hr>
###### setState 를 호출할 때 마다 리액트는 새로운 state와 함께 render function 호출

```js
class App extends React.Component {
  state = {
    count: 0,
  };
  add = () => {
    this.setState((current) => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState((current) => ({ count: current.count - 1 }));
  };

  render() {
    return (
      <div>
        <h1>I'm a class {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}
});
```
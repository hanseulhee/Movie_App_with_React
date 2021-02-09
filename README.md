# Movie App 2021
React JS Fundamentals Course (2021 Update!)
<hr>
 setState 를 호출할 때 마다 리액트는 새로운 state와 함께 render function 호출

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

async await을 함으로써 getMovies function이 접근이 끝날 때 까지 기다리게 함

```js
  getMovies = async () => {
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  }
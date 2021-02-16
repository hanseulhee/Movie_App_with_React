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
```

async await을 함으로써 getMovies function이 접근이 끝날 때 까지 기다리게 함

```js
  getMovies = async () => {
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  }
```
----


#### Deploying to Github Pages

* npm i gh-pages  (gh-page 설치) 

- package.JSON에 homepage 추가 - 
"homepage": "https://{깃헙 유저명}.github.io/{프로젝트 이름 (깃헙에 있는)}/"



+ npm run build 

* script 생성 - "deploy": "gh-pages -d build", "predeploy: "npm run build"

* npm run deploy


<br>

build 폴더를 얻는 법: npm run build

predeploy 호출하기: npm run deploy

프로젝트 이름은 소문자로만 구성, 띄어쓰기 안됨

안된다면 ctrl+shift+f5 (새로고침)

gh-pages 버전 에러  [gh-pages version](https://stackoverflow.com/questions/57308851/receive-error-when-deploy-to-github-pages)
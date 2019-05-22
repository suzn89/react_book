var h1 = React.createElement('h1', null, 'Hello world!')  // react엘리먼트를 생성하여 변수 h1에 담음
ReactDOM.render(
  h1,
  document.getElementById('content')
)
// Usage without the h1 variable
// ReactDOM.render(
//   React.createElement('h1', null, 'Hello world!'),
//   document.getElementById('content')
// )
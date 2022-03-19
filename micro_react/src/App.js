// import logo from './logo.svg';
import './App.css';
import React from 'react';
import action from './action';

function App() {

  const [ user, setUser ] = React.useState([])

  React.useEffect(() => {
    action.onGlobalStateChange((state) => {
      console.log('子程序获取state---react)');
      setUser(state.userInfo)
    }, true)
  }, [])

  const handleClick = () => {
    const temp = JSON.parse(JSON.stringify(user))
    temp.push({
      userName: 'test',
      userId: new Date().getTime()
    })
    action.setGlobalState({
      userInfo: temp
    })
  }

  return (
    <div className="App">
      <h1>子程序 -- react</h1>
      <p>父程序的数据: {user.length}</p>
      <button onClick={handleClick}>添加数据</button>
    </div>
  );
}

export default App;

'use strict'

const roodEl = document.getElementById('root');
const root = ReactDOM.createRoot(roodEl);

root.render(<App/>);

function App() {
    const isGreeting = true;
    const userName = 'Ivo'
    return (
      <Greeting isGreeting={isGreeting} userName={userName}/>
    );
  }
  function Greeting(props){
    const {isGreeting, userName} = props
    return <div>{isGreeting ?'Hello':'Goodbye'}, {userName}</div>
  }
  
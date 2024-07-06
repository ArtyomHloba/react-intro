'use strict'

const roodEl = document.getElementById('root');
const root = ReactDOM.createRoot(roodEl);

root.render(<App/>);

function App(){
    return (
    <>
        <Header/>
        <main>
            <UserCard/>
        </main>
        <Footer/>
    </>
    );
}

function UserCard (){
    const user = {
        name: "Ivo",
        age: 15,
        isMale: false,
        imgSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      };
      return(
        <article className="userCard">
            <img className="userImg" src={user.imgSrc} alt={user.name}/>
            <h2 className="userName" >{user.name}</h2>
            <p className="userAge">{user.age}</p>
        </article>
      );
}

function Header (){
    return <header className = 'pageHeader'>
        <img 
           src="./img/React-icon.png" 
           alt="logo"
           className ="imgLogo"
        >
        </img>
        <h1>React</h1>
    </header>
}

function Footer (){
    return (
        <footer className = "pageFooter">
            <a href="#">Посилання</a>
            <p>Some text</p>
            <a href="#">Посилання</a>
        </footer>
    );
}
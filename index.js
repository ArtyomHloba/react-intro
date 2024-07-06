'use strict'

const roodEl = document.getElementById('root');
const root = ReactDOM.createRoot(roodEl);

root.render(<App/>);

function App(){
    return (
    <>
        <Header/>
        <main className="pageMain">
            <UserCard/>
            <NewsCard/>
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
        favouriteColor: 'orange'
      };

      const nameStyle = {
        color: 'red',
        backgroundColor: 'green',
      }

      const imgBorderStyle = {
        border: `3px solid ${user.favouriteColor}`
      }

      const ageStyle ={
        color: user.age >= 18 ? "green" : "red",
      }

      return(
        <article className="userCard">
            <img className="userImg" 
            src={user.imgSrc} 
            alt={user.name}
            style={imgBorderStyle}
            />
            <h2 className="userName" style={nameStyle}>{user.name}</h2>
            <p className="userAge" style={ageStyle} >{user.age}</p>
        </article>
      );
}

const news = { 
    title: 'Some news', 
    body: 'Something hapenned', 
    isGood: true 
};

const isGoodNew ={
    boxShadow: news.isGood ? "0 0 5px green" : "0 0 5px red",
}

function NewsCard(){
    return(
        <div className="newsContainer" style={isGoodNew}>
            <h3>{news.title}</h3>
            <p>{news.body}</p>
        </div>
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
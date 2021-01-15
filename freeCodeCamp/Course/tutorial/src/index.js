import React from "react";
import ReactDom from "react-dom";

// CSS

import './style.css'

// Variables

// const title = "Harry Potter";
// const author = "J.K. Rowling";
// const img = "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fstatic3.businessinsider.com%2Fimage%2F511cffe5eab8ea1355000012-948-1445%2Fnew%2520harry%2520potter%2520cover.jpg&f=1&nofb=1";

// always return JSX

function BookList() {
  return (
    <section className='booklist'>
      <Book title="Game of Thrones" author="Test Author" img="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fstatic3.businessinsider.com%2Fimage%2F511cffe5eab8ea1355000012-948-1445%2Fnew%2520harry%2520potter%2520cover.jpg&f=1&nofb=1"/>
      <Book title="Star Wars" author="Second Author" img="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fstatic3.businessinsider.com%2Fimage%2F511cffe5eab8ea1355000012-948-1445%2Fnew%2520harry%2520potter%2520cover.jpg&f=1&nofb=1"/>
      <Book title="Narnia" author="Third Author" img="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fstatic3.businessinsider.com%2Fimage%2F511cffe5eab8ea1355000012-948-1445%2Fnew%2520harry%2520potter%2520cover.jpg&f=1&nofb=1"/>
    </section>
  )
}

const Book = (props) => {
  console.log(props);
  return (
    <article className='book'>
      <img alt="" width="200" src={props.img}></img>
      <h1>{props.title}</h1> 
      <h4>{props.author}</h4>
    </article>
  )
}

ReactDom.render(<BookList />, document.getElementById("root")); 
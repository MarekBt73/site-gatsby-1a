import React from "react"
import {Link} from 'gatsby' 
const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem`,  textShadow: `none`, backgroundImage: `none` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)


export default function Layout({ children }) {
  return (
    <div style={{ margin: `3rem auto`,  padding: `0 1rem`, maxWidth:1280 }}>
      <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline` }}>Moja pierwsza strona</h3>
        </Link>
        <ul style={{ listStyle: `none`, float: `right`, textShadow: `none`, backgroundImage: `none` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/galery/">O mnie</ListLink>
          <ListLink to="/omnie/">Galeria</ListLink>
          <ListLink to="/kontakt/">Kontakt</ListLink>
        </ul>
      </header>
      {children}
<footer style={{backgroundColor: 'red', display: `flex`, flexDirection:"row", }}>
  <p>Wsztkie prawa zastrzeżone</p>
  <ul style={{ listStyle: `none`, textAlign:"center", textShadow: `none`, backgroundImage: `none`}}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/galery/">O mnie</ListLink>
          <ListLink to="/omnie/">Galeria</ListLink>
          <ListLink to="/kontakt/">Kontakt</ListLink>
        </ul>
</footer>



    </div>
  )
}
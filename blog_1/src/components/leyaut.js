import React from "react"
import {Link} from 'gatsby' 
import { createGlobalStyle } from "styled-components"
const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => (props.theme === "purple" ? "purple" : "white")};
  }
`




const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem`,  textShadow: `none`, backgroundImage: `none` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)


export default function Layout({ children }) {
  return (
    <div style={{ margin: `3rem auto`,  padding: `0 1rem`, maxWidth:1280 }}>
      <header>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline` }}>Moja pierwsza strona</h3>
        </Link>
        <ul style={{ listStyle: `none`, float: `right`, textShadow: `none`, backgroundImage: `none`, textDecorationLine:"none" }}>
          <ListLink style={{ textDecorationLine:"none"}} to="/">Home</ListLink>
          <ListLink to="/galery/">Galeria</ListLink>
          <ListLink to="/omnie/">O mnie</ListLink>
          <ListLink to="/kontakt/">Kontakt</ListLink>
        </ul>
      </header>
      {children}
<footer style={{ display: `flex`, flexDirection:"row", flexWrap: "wrap",  alignSelf: "center", textAlign:"center"}}>
  <p style = {{flexGrow:"2"}}>Wsztkie prawa zastrzeżone</p>
  <ul style={{ listStyle: `none`, textShadow: `none`,flexGrow:"2"}}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/O mnie/">O mnie</ListLink>
          <ListLink to="/Galeria/">Galeria</ListLink>
          <ListLink to="/kontakt/">Kontakt</ListLink>
        </ul>
</footer>



    </div>
  )
}
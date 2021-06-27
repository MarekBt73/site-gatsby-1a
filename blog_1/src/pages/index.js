import  React from "react"
import {Link} from 'gatsby' 
import Layout from "../components/leyaut"

const IndexPage = () => {

return (


<Layout>
  <h1>
    Pierwsza sytona Marka w gatsby!
  </h1>
<h2>Witaj na moim pierwszym blogu zrobionym w gatsby</h2>
  <p>Masz sprawę 
  zapraszam na stronę - <Link to="/kontakt">Kontakt</Link></p>
  <p>Pozan mnie  - <Link to="/omnie">O mnie</Link></p>
  <p>Zobacz moje portfolio- <Link to="/galery">Galeria fotek</Link></p>
  </Layout>



)

}



export default IndexPage

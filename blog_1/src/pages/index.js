import * as React from "react"
import {Link} from 'gatsby' 

const IndexPage = () => {

return (

<div>
  <h1>
    Pierwsza sytona Marka w gatsby!
  </h1>
<h2>Witaj na moim pierwszym blogu zrobionym w gatsby</h2>
  <p>Masz sprawę zapraszam na stronę - <Link to="/kontakt">Kontakt</Link></p>
  <p>Pozan mnie  - <Link to="/omnie">O mnie</Link></p>
  <p>Zobacz moje portfolio- <Link to="/galery">Galeria fotek</Link></p>
</div>


)

}



export default IndexPage

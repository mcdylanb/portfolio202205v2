import * as React from "react"
import "./../components/index.css"
import Seo from "../components/seo"
import Header from "../components/header"

const IndexPage = () => (
    <div>
      <Header />
      <Seo title="Home" />
      <div className="Hero">
        <div className="HeroGroup">
          <h1>Your NOW <br/> Web Developer</h1>
           <h1>For Your NOW  <br/> Project</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis nibh eget tincidunt lobortis. Ut at ipsum quis lectus pellentesque aliquam sed at turpis. In ipsum enim, scelerisque sed odio eget, mattis sollicitudin erat. Suspendisse potenti. </p>
          <a href="#"> Lets Start </a>
        </div>
      </div>
    </div>
)

export default IndexPage

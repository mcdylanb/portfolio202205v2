import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className={styles.textCenter}>
      <h1>Your now Web Developer for your now project</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis nibh eget tincidunt lobortis. Ut at ipsum quis lectus pellentesque aliquam sed at turpis. In ipsum enim, scelerisque sed odio eget, mattis sollicitudin erat. Suspendisse potenti. </p>
      <button>Lets Start</button>
      <button>Learn More</button>
    </div>
  </Layout>
)

export default IndexPage

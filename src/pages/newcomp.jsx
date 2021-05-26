import React from "react"
import { StaticQuery, graphql } from "gatsby"

const ComponentName = () => (
  <StaticQuery
    query={graphql`
      {
        allDataJson(filter: {boomData: {elemMatch: {aslSupported: {eq: "No"}}}}) {
          totalCount
          edges {
            node {
              boomData {
                aslSupported
              }
            }
          }
        }
      }
    `}
    render={data => <pre>{JSON.stringify(data, null, 4)}</pre>}
  ></StaticQuery>
)

export default ComponentName

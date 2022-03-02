import { gql } from "@apollo/client";

function getSchools() {
  return (
    gql`
    query {
  getSchools(pagination: {afterId: "", limit: 100}) {
    id name
    admissionInfo {
      longDescription
      shortDescription
      assetsUrl
    }
  }
}
    `
  )
}

export default getSchools
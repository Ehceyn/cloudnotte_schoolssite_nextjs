import { gql } from "@apollo/client";

function getSchools() {
  return (
    gql`
   query {
  getSchools(pagination: {afterId: "", limit: 100}) {
    id name country state city logoUrl prefix type  admissionInfo{
      assetsUrl
    }
  }
}
    `
  )
}

export default getSchools
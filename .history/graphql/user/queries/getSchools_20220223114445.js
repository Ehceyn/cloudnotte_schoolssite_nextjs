import { gql } from "@apollo/client";

function GET_SCHOOLS() {
    gql`
   query {
  getSchools(pagination: {afterId: "", limit: 100}) {
    id name country state city logoUrl prefix type  admissionInfo{
      assetsUrl
    }
  }
}
    `
}

export default GET_SCHOOLS
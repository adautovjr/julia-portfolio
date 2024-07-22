import { gql } from "@apollo/client";


export const getProjectBySlugQuery = gql`
  query project ($slug: String) {
    project (slug: $slug) {
      data {
        id
        attributes {
          ProjectName
          Period
          Slogan
          Short_description
          Role
          Duration
          Actions {
            id
            Title
            Description
            OrderedList {
              id
              ListItem
            }
            InfoBlock {
              id
              Title
              Description
            }
          }
        }
      }
    }
  }
`
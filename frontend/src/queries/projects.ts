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
          PageBlocks {
            __typename
            ... on ComponentPageBlocksSection {
              id
              Name
              Title
              Text
            }
            ... on ComponentPageBlocksSubSections {
              id
              SubsectionTitle
              SubsectionText
            }
            ... on ComponentPageBlocksOrderedList {
              id
              OrderedList {
                id
                Item
              }
            }
            ... on ComponentPageBlocksInfoBlockSection {
              id
              InfoBlock {
                id
                Title
                Text
              }
            }
            ... on ComponentPageBlocksTableSection {
              id
              LeftTableName
              LeftTable {
                id
                Item
              }
              RightTableName
              RightTable {
                id
                Item
              }
            }
            ... on ComponentPageBlocksInfoCardSection {
              id
              InfoCard {
                id
                Text
              }
            }
            ... on Error {
              message
            }
          }
          localizations {
            data {
              id
              attributes {
                Slogan
                locale
              }
            }
          }
        }
      }
    }
  }
`
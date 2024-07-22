export interface PageBlockSection {
  __typename: string
  id: string
  Name: string
  Title: string
  Text: string
}

export interface PageBlockSubsection {
  __typename: string
  id: string
  SubsectionTitle: string
  SubsectionText: string
}

export interface PageBlockOrderedList {
  __typename: string
  id: string
  OrderedList: {
    id: string
    Item: string
  }[]
}

export interface PageBlockInfoBlock {
  __typename: string
  id: string
  InfoBlock: {
    id: string
    Title: string
    Text: string
  }[]
}

export interface PageBlockInfoCard {
  __typename: string
  id: string
  InfoCard: {
    id: string
    Text: string
  }[]
}

export interface PageBlockTable {
  __typename: string
  LeftTableName: string
  LeftTable: {
    id: string
    Item: string
  }[]
  RightTableName: string
  RightTable: {
    id: string
    Item: string
  }[]
}

export type PageBlock =
  | PageBlockSection
  | PageBlockSubsection
  | PageBlockOrderedList
  | PageBlockInfoBlock
  | PageBlockInfoCard
  | PageBlockTable

export interface Project {
  id: string
  ProjectName: string
  Period: string
  Slogan: string
  Short_description: string
  Role: string
  Duration: string
  PageBlocks: PageBlock[]
}
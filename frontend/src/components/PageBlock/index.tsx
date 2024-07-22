import React from "react";
import Section from "../PageBlocks/Section";
import Subsection from "../PageBlocks/Subsection";
import OrderedList from "../PageBlocks/OrderedList";
import InfoCard from "../PageBlocks/InfoCard";
import InfoBlock from "../PageBlocks/InfoBlock";
import Table from "../PageBlocks/Table";

interface availablePageBlockInterface { 
  [__typename: string]: JSX.Element
}

export const availablePageBlocks: React.FC = (block: any) => {
  const availableBlock: availablePageBlockInterface = {
    ComponentPageBlocksSection: <Section {...block} />,
    ComponentPageBlocksSubSections: <Subsection {...block} />,
    ComponentPageBlocksOrderedList: <OrderedList {...block} />,
    ComponentPageBlocksInfoBlockSection: <InfoBlock {...block} />,
    ComponentPageBlocksInfoCardSection: <InfoCard {...block} />,
    ComponentPageBlocksTableSection: <Table {...block} />
  }

  return availableBlock[block?.__typename] || null
}
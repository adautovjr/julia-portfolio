import React from "react";
import { PageBlockTable } from "../../../types/project";
import styles from './style.module.css'

const Table = (block: PageBlockTable) => {
  const biggerList = block.LeftTable.length > block.RightTable.length ? block.LeftTable : block.RightTable
  return (
    <div className={styles.container1290}>
      <div className={styles.grid}>
        <div>
          <h2>{block.LeftTableName}</h2>
          {biggerList.map((_, index) => {
            const item = block.LeftTable[index];
            return (
              <h2 key={`listItem-${item?.id}`}>
                {item?.Item}
              </h2>
            )
          })}
        </div>
        <div>
          <h2>{block.RightTableName}</h2>
          {biggerList.map((_, index) => {
            const item = block.RightTable[index];
            return (
              <h2 key={`listItem-${item?.id}`}>
                {item?.Item}
              </h2>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Table
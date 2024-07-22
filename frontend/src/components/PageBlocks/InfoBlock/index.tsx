import React from "react";
import { PageBlockInfoBlock } from "../../../types/project";
import styles from './style.module.css'

const InfoBlock = (block: PageBlockInfoBlock) => {
  return (
    <div className={styles.container1290}>
      <div className={styles.grid}>
        {block.InfoBlock.map((ib) => (
          <div key={`listItem-${ib.id}`}>
            {ib.Title}
            {ib.Text}
          </div>
        ))}
      </div>
    </div>
  )
}

export default InfoBlock
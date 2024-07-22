import React from "react";
import { PageBlockInfoCard } from "../../../types/project";
import styles from './style.module.css'

const InfoCard = (block: PageBlockInfoCard) => {
  return (
    <div className={styles.container1290}>
      <div className={styles.grid}>
        {block.InfoCard.map((ic) => (
          <div key={`listItem-${ic.id}`}>
            {ic.Text}
          </div>
        ))}
      </div>
    </div>
  )
}

export default InfoCard
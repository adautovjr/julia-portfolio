import React from "react";
import { PageBlockSubsection } from "../../../types/project";
import styles from './style.module.css'

const Subsection = (block: PageBlockSubsection) => {
  return (
    <div className={styles.container880}>
      <div className={styles.grid}>
        <div className={styles.subsectionTitle}>
          {block.SubsectionTitle}
        </div>
        <div className={styles.subsectionText}>
          {block.SubsectionText}
        </div>
      </div>
    </div>
  )
}

export default Subsection
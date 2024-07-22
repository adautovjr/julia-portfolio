import React from "react";
import { PageBlockSection } from "../../../types/project";
import styles from './style.module.css'

const Section = (block: PageBlockSection) => {
  return (
    <div className={styles.container880}>
      {block.Name && <h3 className={styles.sectionName}>{block.Name}</h3>}
      {block.Title && <h4 className={styles.sectionTitle}>{block.Title}</h4>}
      {block.Text && <p className={styles.sectionText}>{block.Text}</p>}
    </div>
)
}

export default Section
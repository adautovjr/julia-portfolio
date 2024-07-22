import React from "react";
import { PageBlockOrderedList } from "../../../types/project";
import styles from './style.module.css'

const OrderedList = (block: PageBlockOrderedList) => {
  return (
    <div className={styles.container1290}>
      <div className={styles.grid}>
        {block.OrderedList.map((li, index) => (
          <div key={`listItem-${li.id}`}>
            0{index + 1}. {li.Item}
          </div>
        ))}
      </div>
    </div>
  )
}

export default OrderedList
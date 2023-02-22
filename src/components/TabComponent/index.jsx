import React, { useState } from 'react';

import styles from './TabComponent.module.scss';

const TabComponent = ({tabMenuList, tabData}) => {
  	const [currentTab, setCurrentTab] = useState(0);
    const handleTabMenu = (idx) => {
      setCurrentTab(idx)
  }
    return (
      <>
        {/* tabMenu 영역 */}
      	<ul className={styles.tabMenu}>
          { tabMenuList.map(({menuName}, idx) => (
            <li key={idx} 
              className={currentTab === idx ? `${styles.tabList} ${styles.clicked}` :  `${styles.tabList}`}
              onClick={() => {handleTabMenu(idx)}}
            >
              <button type='button'>{menuName}</button>
            </li>
            ))
          }
        </ul>

      {/* tabContents 영역 */}
      { tabData && 
        <div className={styles.tabContents}>
          { tabData.map(({subject}, idx) => (
            idx === currentTab && 
            <ul key={idx} className={styles.tabBox}>
              { subject.map(({skill, num}) => (
                <li>
                  <span className={styles.skillType}>{skill}</span>
                  <div className={styles.line}></div>
                  <span className={styles.score}>{num}<em>%</em></span>
                </li>
              ))}
            </ul>
          ))}
        </div>
        }

        { !tabData && 
          <div>데이터 없음</div>
        }
      </>
    )
};

export default TabComponent
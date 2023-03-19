import React, { useState } from 'react';
import styles from './TabComponent.module.scss';

const TabComponent = ({tabData, isMobile}) => {
  	const [currentTab, setCurrentTab] = useState(0);
    const handleTabMenu = (e, idx) => {
      setCurrentTab(idx)
    }

  
  //   function open_chatroom(){
  //     const windowWidth = document.windowWidth
  //     if(windowWidth < 500) {
  //        //창 가로 크기가 500 미만일 경우 
  //     } else {
  //        //창 가로 크기가 500보다 클 경우
  //     }
  //  }

    return (
      <>
        {/* tabMenu 영역 */}
      	<ul className={styles.tabMenu}>
          { tabData.map(({type}, idx) => (
            <li key={idx} 
              className={currentTab === idx ? `${styles.tabList} ${styles.clicked}` :  `${styles.tabList}`}
            >
              <button type='button' onClick={(e) => {handleTabMenu(e, idx)}}>{type}</button>
            </li>
            ))
          }
        </ul>

      {/* tabContents 영역 */}
      { tabData && 
        <div className={styles.tabContents}>
          { tabData.map(({subject}, idx) => (
            idx === currentTab && 
            <ul key={idx} className={`${styles.tabBox} ${styles.isActive}`}>
              { subject.map(({skill, num}) => (
                <li key={skill}>
                  <span className={styles.skillType}>{skill}</span>
                    {
                      !isMobile
                      ? <>
                          <div className={styles.line} style={{width: `calc(${num}% - 123px)`}}></div>
                          <span className={styles.score}>{num}<em>%</em></span>
                        </>
                      : <div className={styles.lineWrap}>
                        <div className={styles.line} style={{width: `calc(${num}%)`}}></div>
                        <span className={styles.score}>{num}<em>%</em></span>
                      </div>
                    }
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
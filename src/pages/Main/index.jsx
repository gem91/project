import React, { useState } from 'react';
import styles from './Main.module.scss';

import Instagram from '../../components/Instagram';
import ListCards from '../../components/ListCards';
import BreadCrumbs from '../../components/BreadCrumbs';
// import TabMenu from '../../components/Tabs/TabMenu';
// import TabContent from '../../components/Tabs/TabContent';

const Main = (props) => {
	const skills = [ "Lang", "Front", "Design" ]
	const skillData =  { 
		type: "lang",
		data: {
			html : 90,
			css : 90,
			scss : 90
		}
	}

	Object.values(skillData).forEach(test => {
		console.log(test);
	})
	const [currentTab, setCurrentTab] = useState(0);
	const handleTabMenu = (idx) => {
    setCurrentTab(idx)
  }
	return (
		<div className={styles.main}>
			<div className={styles.container}>
				<BreadCrumbs text={'About'}></BreadCrumbs>
				<h3 className={styles.bigTitle}>
					Who Am I ?
				</h3>
				<Instagram />
				<div className={styles.tabs}>
					<ul className={styles.tabMenu}>
						{ skills.map((skill, idx) => (
							<li key={idx} 
								className={currentTab === idx ? styles.clicked :  ''}
								onClick={() => {handleTabMenu(idx)}}
							>
								<button type='button'>{skill}</button>
							</li>
							))
						}
					</ul>

					<div className={styles.tabContents}>
						<ul>
							{ Object.values(skillData).forEach( value => (
								<li key={value}>{value[0]}</li>
								)) 
							}
						</ul>
					</div>
				</div>
					
				<div className={styles.companyLogo}>
					<h4>Which Companies I Worked With</h4>
					<ul>
						<li><img src={require('../../assets/images/logo/hyundai.png')} alt='test' /></li>
						<li><img src={require('../../assets/images/logo/kia-b.png')} alt='test' /></li>
						<li><img src={require('../../assets/images/logo/kids.png')} alt='test' /></li>
						<li><img src={require('../../assets/images/logo/kiehls.png')} alt='test' /></li>
						<li><img src={require('../../assets/images/logo/media-pr.png')} alt='test' /></li>
						<li><img src={require('../../assets/images/logo/young.png')} alt='test' /></li>
					</ul>
				</div>
				<h4 className={styles.tagTitle}>
					<span>My Tags</span>
				</h4>
				<ListCards />
				<p className={styles.text}>
					<em>#도전적인</em> <em>#변함없는</em> <em>#추진력 있는</em> <em>#탐구심이 많은</em><br />
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sit aperiam suscipit. Placeat, quas. Repudiandae blanditiis ipsam rerum!
				</p>
			</div>
		</div>
	)
	
	};

export default Main;
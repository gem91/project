import React, { useState } from 'react';
import styles from './Main.module.scss';

import Instagram from '../../components/Instagram';
import ListCards from '../../components/ListCards';
import BreadCrumbs from '../../components/BreadCrumbs';
import TabComponent from '../../components/TabComponent';
import SliderEffects from '../../components/SliderEffect';
import WideFlow from '../../components/FlowText/WideFlow';

const Main = (props) => {
	const skillData = [
		{
			type: "Lang",
			subject : [
				{ skill : 'html', num : 30 }, { skill: "css", num : 50 }, { skill: "scss", num : 100 }
			]
		},
		{
			type: "Front",
			subject : [
				{ skill : 'js', num : 90 }, { skill: "react", num : 60 }, { skill: "vue", num : 90 }
			]
		},
		{
			type: "Design",
			subject : [
				{ skill : 'photoshop', num : 90 }, { skill: "Illust", num : 80 }, { skill: "Zeplin", num : 90 }
			]
		},
	]
	const companyLogos = [
		{
			id: 0,
			company : '현대모터스',
			imgURL: require('../../assets/images/logo/hyundai.png')
		},
		{
			id: 1,
			company : '기아',
			imgURL: require('../../assets/images/logo/kia-b.png')
		},
		{
			id: 2,
			company : '키즈현대',
			imgURL: require('../../assets/images/logo/kids.png')
		},
		{
			id: 3,
			company : '키즈현대',
			imgURL: require('../../assets/images/logo/young.png')
		},
		{
			id: 4,
			company : '키엘',
			imgURL: require('../../assets/images/logo/kiehls.png')
		},
		{
			id: 5,
			company : '미디어PR',
			imgURL: require('../../assets/images/logo/media-pr.png')
		},
	]




	return (
		<div className={styles.main}>
			<div className={styles.container}>
				<BreadCrumbs text={'About'}></BreadCrumbs>
				<div className={styles.profile}>
					<h3 className={styles.bigTitle}>
						Who Am I ?
					</h3>
					<Instagram />
				</div>
				<WideFlow></WideFlow>
				<h4 className={styles.tagTitle}>
					<span>My Tags</span>
				</h4>
				<ListCards />
				<p className={styles.text}>
					<em>#도전적인</em> <em>#변함없는</em> <em>#추진력 있는</em> <em>#탐구심이 많은</em><br />
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sit aperiam suscipit. Placeat, quas. Repudiandae blanditiis ipsam rerum!
				</p>
				<div className={styles.tabs}>
					<TabComponent tabData={skillData}></TabComponent>
				</div>
					
				<div className={styles.companyLogo}>
					<h4>Which Companies I Worked With..!</h4>
					<SliderEffects imageData={companyLogos}></SliderEffects>
				</div>
				
			
			</div>
		</div>
	)
	
	};

export default Main;
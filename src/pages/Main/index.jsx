import React, { useEffect, useRef } from 'react';
import styles from './Main.module.scss';

import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

//components
import Instagram from '../../components/Instagram';
// import ListCards from '../../components/ListCards';
import ImageReveal from '../../components/AnimationEffect/ImageReveal';
import BreadCrumbs from '../../components/BreadCrumbs';
import TabComponent from '../../components/TabComponent';
import SliderEffects from '../../components/SliderEffect';
import WideFlow from '../../components/FlowText/WideFlow';
import LightTextEffect from '../../components/LightTextEffect';


const skillData = [
	{
		type: "Lang",
		subject : [
			{ skill : 'html', num : 95 }, 
			{ skill: "css", num : 90 }, 
			{ skill: "scss", num : 80 }
		]
	},
	{
		type: "Front",
		subject : [
			{ skill : 'js', num : 80 }, 
			{ skill: "react", num : 65 }, 
			{ skill: "vue", num : 80 },
			{ skill: "git", num : 70 },
			{ skill: "yarn", num : 70 },
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
const bannerData = [
	{
		title : 'Hyundai-Dotcom',
		imgURL: require('../../assets/images/hyundai-car.jpg')
	},
	{
		title : 'Kids-Hyundai',
		imgURL: require('../../assets/images/kids-hyundai.jpg')
	},
	{
		title : 'KODEX',
		imgURL: require('../../assets/images/kodex.jpg')
	},
	{
		title : 'Young-Hyundai',
		imgURL: require('../../assets/images/young-hyundai.jpg')
	},
]

const Main = ({isMobile, isPc}) => {
	const titleRef1 = useRef(null)
  useEffect(() => {      
    gsap.registerPlugin(ScrollTrigger);
		if(isPc){
			gsap.to(titleRef1.current, {
				scrollTrigger: {
				 trigger: titleRef1.current,
					start: 'top 60%',
				 end: 'bottom 20%',
				 toggleActions: 'play none none reverse',
				 markers: true,
			 },
			 opacity: 1,
			 duration: .4,
			 letterSpacing: 2,
			 x: 0,
		 });
		} else {
			gsap.to(titleRef1.current, {
				scrollTrigger: {
				 trigger: titleRef1.current,
					start: 'top 60%',
				 end: 'bottom 20%',
				 toggleActions: 'play none none reverse',
			 },
			 opacity: 1,
			 duration: .4,
			 letterSpacing: 2,
			 x: 0,
		 })
	}
    
  }, []);


	return (
		<div className={styles.main}>
			<section className={styles.content}>
				<LightTextEffect title={'Hello there!'} text1={'Hi🙌. 클로이 월드에 놀러오신걸 환영합니다.'} text2={'꼭 합격하고 싶습니다!'} />
			</section>
			<div className={styles.container}>
				<div className={styles.breadCrumbsBox}>
					<BreadCrumbs text={'About'} />
				</div>
				<div className={styles.profileBox}>
					<h3>Who Am I ?</h3>
					<Instagram />
				</div>
				<div className={styles.tagTextBox}>
					<p className={styles.text}><em>#도전적인</em> <em>#변함없는</em> <em>#추진력 있는</em> <em>#탐구심이 많은</em><br /></p>
					<p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sit aperiam suscipit. Placeat, quas. Repudiandae blanditiis ipsam rerum!</p>
				</div>
				
				<div className={styles.tabs}>
					<TabComponent tabData={skillData} isMobile={isMobile} />
				</div>
				<div className={styles.companyLogo}>
					<h3>Which <br className='m-br'></br>Companies I Worked With..!</h3>
					<SliderEffects imageData={companyLogos} />
				</div>
			</div>
			<div className={styles.accordion}>
				<ul>
					{
						bannerData.map(({imgURL, title}, index) =>(
						<li key={index}>
							<div className={styles.floatImg}>
								<img src={imgURL} alt={title} />
							</div>
							<div className={styles.textBox}>
								<WideFlow tit={`${title}.`} em={`${title}.`} />
							</div>
							<span className={styles.thumb}>
								<img src={imgURL} alt={title} />
							</span>
						</li>
						))
					}
				</ul>
			</div>
			<div className={styles.container}>
				<div className={styles.imageEffectBox}>
					<h3 ref={titleRef1}>My Tags</h3>
					<ImageReveal isPc={isPc} />
				</div>
				{/* <ListCards /> */}
			</div>
		</div>
	)
};

export default Main;
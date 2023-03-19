import React, { useEffect, useRef } from 'react';
import styles from './Main.module.scss';

// data
import skillData from '../../db/skills.json'
import companyLogos from '../../db/projectLogo.json'
import bannerData from '../../db/testData.json';

import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

//components
import Instagram from '../../components/Instagram';
import BreadCrumbs from '../../components/BreadCrumbs';
import TabComponent from '../../components/TabComponent';
import SliderEffects from '../../components/SliderEffect';
import LightTextEffect from '../../components/LightTextEffect';
import PageNav from '../../components/PageNav';
import ImgScaleEffect from '../../components/ImageEffect/ImgScaleEffect';
import ItemFadeEffect from '../../components/ImageEffect/ItemFadeEffect';


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
				<LightTextEffect title={'Hello there!'} text1={'Hi🙌. 클로이 월드에 놀러오신걸 환영합니다.'} text2={'REACT를 이용해서 만든 포트폴리오!'} />
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
					<p className={styles.tagText}><em>#도전적인</em> <em>#에너지 충만</em> <em>#책임감 넘치는</em> <em>#새로운 창의력</em></p>
					<p className={styles.desc}>
						<span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sit aperiam suscipit. Placeat, quas. Repudiandae blanditiis ipsam rerum!</span>
						<span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, omnis!</span>
					</p>
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
				<ul className={styles.imgScaleLists}>
					{
						bannerData.map(({imgURL, title, id}) => (
							<ImgScaleEffect key={id} imgURL={imgURL} title={title} />
						))
					}
				</ul>
				
			</div>
			<div className={styles.imageFadeEffect}>
				<div className={styles.container}>
					<div className={styles.imageEffectBox}>
						<h3 ref={titleRef1}>My Tags</h3>
						<ItemFadeEffect isPc={isPc} />
					</div>
					{/* <ListCards /> */}
				</div>
			</div>
			<PageNav nextName={'web site'} nextLink={'/web'} prevLink={''} prevName={''} />
		</div>
	)
};

export default Main;
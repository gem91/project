import React from 'react';
import './Main.scss';
// import logoImages from '../../assets/logoImages.js';

import Instagram from '../Instagram';
import ListCards from '../ListCards';

const Main = (props) => (
	<div className='main'>
			<div className="container">
				<h2 className='subject'>&lt;About /&gt;</h2>
				<h3 className='title'>
					Who Am I ?
				</h3>
				<Instagram />
				<h4 className='tag-title'>
					<span>My Tags</span>
				</h4>
				<ListCards />
				<p className='text'>
					<em>#도전적인</em> <em>#변함없는</em> <em>#추진력 있는</em> <em>#탐구심이 많은</em><br />
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sit aperiam suscipit. Placeat, quas. Repudiandae blanditiis ipsam rerum!
				</p>

				<div className='company-logo'>
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
			</div>
	</div>
);

export default Main;
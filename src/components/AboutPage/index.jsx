import React from 'react';

const AboutPage = (props) => (
	<div className='about-wrap'>
		<h2>
		&lt;About /&gt;
		</h2>
		<h3 className='title'>
			Who Am I ?
		</h3>
		<div className='profile-wrap'>
			<div className='thumb'>
				<img src={`http://placeimg.com/400/450/any`} alt="민정이 사진" />
			</div>
			<div className='contents'>
				<div className="utils">
					<div className="sns">
						<i>insta</i>
						<i>kakao</i>
					</div>
					<div className='ux'>
						<div className="dm">메신저보내기</div>
						<i className='like'>like</i>
					</div>					
				</div>
			</div>
			<p className='introduce'>
				AboutPage page입니다
			</p>
		</div>

		<h3>My Tags</h3>
		<ul>
			<li><a href="#"><img src={`http://placeimg.com/300/350/any`} alt="민정이 사진" /></a></li>
			<li><a href="#"><img src={`http://placeimg.com/300/350/any`} alt="민정이 사진" /></a></li>
			<li><a href="#"><img src={`http://placeimg.com/300/350/any`} alt="민정이 사진" /></a></li>
			<li><a href="#"><img src={`http://placeimg.com/300/350/any`} alt="민정이 사진" /></a></li>
		</ul>
	</div>
);

export default AboutPage;
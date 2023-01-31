import React from 'react';
import './Main.scss';

const Main = (props) => (
	<div className='main'>
			<div className="container">
				<h2 className='subject'>&lt;About /&gt;</h2>
				<h3 className='title'>
					Who Am I ?
				</h3>
				<div className='profile-wrap'>
					<div className='thumb'>
						<img src={`http://placeimg.com/600/700/any`} alt="민정이 사진" />
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
			</div>
			<p className='m-size-title'>My Tags</p>
			<ul>
				<li><a href="#"><img src={`http://placeimg.com/300/350/any`} alt="민정이 사진" /></a></li>
				<li><a href="#"><img src={`http://placeimg.com/300/350/any`} alt="민정이 사진" /></a></li>
				<li><a href="#"><img src={`http://placeimg.com/300/350/any`} alt="민정이 사진" /></a></li>
				<li><a href="#"><img src={`http://placeimg.com/300/350/any`} alt="민정이 사진" /></a></li>
			</ul>
	
	</div>
);

export default Main;
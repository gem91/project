
import React, { useEffect, useRef } from 'react';
import './ToyProject.scss'

import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import BadgeIcon from '../../components/IconItems/BadgeIcon';

const ToyProject = (props) => {

  const panelsRef = useRef(null)
  const containRef = useRef(null)
  useEffect(() => {     
    gsap.registerPlugin(ScrollTrigger);
    const panels = gsap.utils.toArray(".panel");
    
    /* Panels */
    const content = gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (panels.length - 1),
        end: () => "+=" + containRef.current.offsetWidth - panels.innerWidth,
        markers: true
      }
    })
    return () => content.revert();
  }, []);

  return (
    <div className="toyProject">
      <section className="intro">
        <h1>Hero</h1>
      </section>

      <section ref={panelsRef} className="panels">
        <div ref={containRef} className="container" style={{width: '500%'}}>
          <article className="panel">
            <div className="item-container">
              <div className="item-image">
                <img src="https://images.unsplash.com/photo-1510154328089-bdd27fc4ff66?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=a8096fff6bf58a9b503f2d01cede364c&amp;auto=format&amp;fit=crop&amp;w=1936&amp;q=80"alt="" />
              </div>
              <div className="item-body">
                <h2 className="item-title">Grand Hotel</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem error mollitia provident.</p>
                <ul className="tags">
                  <li><BadgeIcon iconName={'SCSS'} /></li>
                  <li><BadgeIcon iconName={'HTML'} /></li>
                  <li><BadgeIcon iconName={'REACT'} /></li>
                </ul>
              </div>
            </div>
          </article>
          <article className="panel">
              <div className="item-container">
              <div className="item-image">
                <img src="https://images.unsplash.com/photo-1510154328089-bdd27fc4ff66?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=a8096fff6bf58a9b503f2d01cede364c&amp;auto=format&amp;fit=crop&amp;w=1936&amp;q=80"alt="" />
              </div>
              <div className="item-body">
                <h2 className="item-title">Grand Hotel</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem error mollitia provident.</p>
                <ul className="tags">
                  <li>Hotel</li>
                  <li>Colorful</li>
                  <li>Symetric</li>
                </ul>
              </div>
            </div>
          </article>
          <article className="panel">
             <div className="item-container">
              <div className="item-image">
                <img src="https://images.unsplash.com/photo-1510154328089-bdd27fc4ff66?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=a8096fff6bf58a9b503f2d01cede364c&amp;auto=format&amp;fit=crop&amp;w=1936&amp;q=80"alt="" />
              </div>
              <div className="item-body">
                <h2 className="item-title">Grand Hotel</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem error mollitia provident.</p>
                <ul className="tags">
                  <li>Hotel</li>
                  <li>Colorful</li>
                  <li>Symetric</li>
                </ul>
              </div>
            </div>
          </article>
          <article className="panel">
              <div className="item-container">
              <div className="item-image">
                <img src="https://images.unsplash.com/photo-1510154328089-bdd27fc4ff66?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=a8096fff6bf58a9b503f2d01cede364c&amp;auto=format&amp;fit=crop&amp;w=1936&amp;q=80"alt="" />
              </div>
              <div className="item-body">
                <h2 className="item-title">Grand Hotel</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem error mollitia provident.</p>
                <ul className="tags">
                  <li>Hotel</li>
                  <li>Colorful</li>
                  <li>Symetric</li>
                </ul>
              </div>
            </div>
          </article>
          <article className="panel">
              <div className="item-container">
              <div className="item-image">
                <img src="https://images.unsplash.com/photo-1510154328089-bdd27fc4ff66?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=a8096fff6bf58a9b503f2d01cede364c&amp;auto=format&amp;fit=crop&amp;w=1936&amp;q=80"alt="" />
              </div>
              <div className="item-body">
                <h2 className="item-title">Grand Hotel</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem error mollitia provident.</p>
                <ul className="tags">
                  <li>Hotel</li>
                  <li>Colorful</li>
                  <li>Symetric</li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="extra">
        <h1>Another section</h1>
      </section>
    </div>
  )
};

export default ToyProject;


// import React, { useEffect, useRef } from 'react';

// import {gsap} from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// import './ToyProject.scss'

// const ToyProject = (props) => {

//   const component = useRef();
//   const slider = useRef();

//   gsap.registerPlugin(ScrollTrigger);

//   useEffect(() => {
//     let ctx = gsap.context(() => {
//       let panels = gsap.utils.toArray(".panel");
//       gsap.to(panels, {
//         xPercent: -100 * (panels.length - 1),
//         ease: "none",
//         scrollTrigger: {
//           trigger: slider.current,
//           pin: true,
//           scrub: 1,
//           snap: 1 / (panels.length - 1),
//           end: () => "+=" + slider.current.offsetWidth,
//           markers: true
//         }
//       });
//     });
//     // return () => ctx.revert();
//   }, []);



//   return (
//    <div className="App" ref={component}>
//       <div className="firstContainer">
//         <h1>Testing horizontal scrolling w/ three sections</h1>
//         <h2>First Container</h2>
//       </div>
//       <div ref={slider} className="container">
//         <div className="description panel blue">
//           <div>
//             SCROLL DOWN
//             <div className="scroll-down">
//               <div className="arrow"></div>
//             </div>
//           </div>
//         </div>
//         <div className="panel red">ONE</div>
//         <div className="panel orange">TWO</div>
//         <div className="panel purple">THREE</div>
//       </div>
//       <div className="lastContainer">Last Container</div>
//     </div>
//   )
// };

// export default ToyProject;
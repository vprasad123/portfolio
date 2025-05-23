import React from 'react'
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';




const Skills = () => {
  return (
    <section id='skills'>
        <span className="skillTitle">What I Do</span>
        <span className="skillDescription">I am a skilled and passionate web designer with hands-on experience in crafting visually appealing and responsive websites. I specialize in combining aesthetics with functionality to deliver intuitive, user-friendly designs that align with brand goals and enhance user engagement. My work focuses on clean layouts, accessibility, and consistent user experience across all devices and platforms.</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>UI/UX Design</h2>
                    <p>This is a demo text, your can write your own content</p>
                </div>
            </div>
             <div className="skillBar">
                <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>WebDesign</h2>
                    <p>This demo text can be changes while making the production ready website</p>
                </div>
            </div>
             <div className="skillBar">
                <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>AppDesign</h2>
                    <p>you can write text related to mobile app developement</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills;
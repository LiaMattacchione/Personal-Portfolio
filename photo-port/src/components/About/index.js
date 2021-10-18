import React, { Component } from 'react';
import coverImage from '../../assets/cover/Lia_hero.jpg';
import '../../../src/App.css';

class About extends Component {
 render() {
    return (
      <article class="uk-article aboutMeSection">
        <h1 id="about" class="uk-article-title">About Me</h1>
        
        <div class="uk-flex-wrap">

          <div class="uk-child-width-expand@s uk-text-left" uk-grid>
              <div class="uk-width-1-2@m">
                  <div class="uk-card uk-card-default uk-card-body">
                    <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
                  </div>
              </div>
              <div>
                  <div class="uk-card-body uk-text-lead aboutText">
                    <p>
                      Lia has always been physically active, participating in a variety of individual 
                      and group activities and sports including kayaking, TaeKwonDo, Soccer, Volleyball, 
                      Basketball and swimming. Her love for movement and health grew as she persued an 
                      undergraduate degree in Kinesiology. After graduation, Lia became a Registered 
                      Kinesiologist with the College of Kinesiologists of Ontario. She worked in a 
                      variety of clinical and community settings with older adults creating and 
                      implementing curated health and wellness programs, youth sport concussion 
                      testing and education, and coaching youth soccer. Lia continued her education 
                      and completed a Master of Professional Kinesiology from the University of Toronto 
                      in June 2021.
                    </p>
                  </div>
              </div>
              <div>
                  <div class="uk-card-body uk-text-lead aboutText">
                    <p>
                      Collectively, her academic and work experiences alongside her
                      <a href="https://www.cmaj.ca/content/cmaj/193/15/E530.full.pdf" target="_blank"> lived experiences </a>
                      expanded her understanding of the overarching Canadian healthcare system and 
                      the multitude of factors that directly affect individual and community based 
                      health experiences. Lia brings her deep passion for health and healthcare 
                      forward as she seeks to fill the gaps in healthcare knowledge translation 
                      through the merging of healthcare, technology and programming.
                    </p>
                  </div>
              </div>
          </div>

          
        </div>
      </article>

    );
  }
}

export default About;
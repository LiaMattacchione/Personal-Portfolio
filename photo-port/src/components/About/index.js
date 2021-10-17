import React from 'react';
import coverImage from '../../assets/cover/Lia_hero.jpg';
import '../../../src/App.css';

function About() {
  return (
    <article class="uk-article">

        <h1 class="uk-article-title">About Me</h1>

        <div class="uk-child-width-1-2@m" uk-grid>
            <div>
                <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
                    </div>
                    <div class="uk-card-body">
                        <h3 class="uk-card-title">Lia Mattacchione B.Kin, MPK</h3>
                    </div>
                </div>
            </div>
        </div>

        <p class="uk-text-lead">
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

        <p class="uk-text-lead">
            Collectively, her academic and work experiences alongside her
            <a href="https://www.cmaj.ca/content/cmaj/193/15/E530.full.pdf" target="_blank"> lived experiences </a>
            expanded her understanding of the overarching Canadian healthcare system and 
            the multitude of factors that directly affect individual and community based 
            health experiences. Lia brings her deep passion for health and healthcare 
            forward as she seeks to fill the gaps in healthcare knowledge translation 
            through the merging of healthcare, technology and programming.
        </p>


    </article>

  );
}

export default About;
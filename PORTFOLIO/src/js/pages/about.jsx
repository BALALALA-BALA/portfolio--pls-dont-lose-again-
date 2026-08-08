import '../../css/sections/about.css';

function About() {
  return (
       <>
    <div class="content">
        <div class="image-section">
            <img src="images/mistr george unicon.png" alt="Main Image" class="main-image"/>
        </div>
        <div className="about__title">
            <h1>About Me</h1>
            <ul class="info-list">
                <li><span class="about__label">Name: </span>Lisa Chen</li>
                <li><span class="about__label">Location: </span>Earth</li>
                <li><span class="about__label">Fun Fact: </span>I have the same birthday as my best friend.</li>
            </ul>
    
        </div>
    </div>
    <div>
        <img src="images/mistr george unicon.png" alt="Mini Image" class="mini-image"/>
    </div>

    </>

    );
}

export default About;

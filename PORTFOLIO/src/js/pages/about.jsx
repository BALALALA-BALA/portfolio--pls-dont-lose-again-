import '../../css/sections/about.css';

function About() {
  return (
       <>
    <div className="about__title">
        <h1>About Me</h1>
    </div>
    <div class="content">
    <div class="image-section">
        <img src="images/IMAGE_HERE.png" alt="Mini Image" class="mini-image"/>
        <img src="images/IMAGE_HERE.png" alt="Main Image" class="main-image"/>
    </div>

    <ul class="info-list">
        <li><span class="about__label">Name: </span>Lisa Chen</li>
        <li><span class="about__label">Location: </span>Earth</li>
        <li><span class="about__label">Fun Fact: </span>I have the same birthday as my best friend.</li>
    </ul>
</div>
    </>

    );
}

export default About;

import front from '../../assets/coding.png'
import back from '../../assets/heartbeat.png'
import datab from '../../assets/database.png'
import git from '../../assets/merge.png'


export default function AboutMe() {
  return (
            <>
              <section id="AboutMe" className="about--section">
                <div className="about--section--img">
                  
                </div>
                <div className="hero--section--content--box about--section--box">
                  <div className="hero--section--content">
                
                    <h1 className="skills-section--heading">About Me</h1>
                    <p className="hero--section-description">
                    Hello there! 👋 I'm a passionate learner diving into the exciting world of MERN (MongoDB, Express.js, React.js, Node.js) stack development. With a background in frontend, I've embarked on a journey to craft immersive web experiences and scalable applications.
                    </p>
                    
                  </div>
                </div>
              </section>

                  <section className="skills--section" id="mySkills">
                    <div className="portfolio--container">
                      <h4 className="skills--section--heading">My Skills</h4>
                    </div>
                    <div className="skills--section--container">
                     
                       <div  className="skills--section--card">
                            <div className="skills--section--img">
                                <img src={front} alt="front end img" className='skillimg' />
                            </div>
                            <div className="skills--section--card--content">
                                <h3 className="skills--section--title">Frontend</h3>
                                <p className="skills--section--description">HTML</p>
                                <p className="skills--section--description">CSS</p>
                                <p className="skills--section--description">Bootstrap</p>
                                <p className="skills--section--description">Javascript</p>
                                <p className="skills--section--description">React</p>
                            </div>
                        </div>
                     

                            <div  className="skills--section--card">
                                  <div className="skills--section--img">
                                  <img src={back} alt="front end img" className='skillimg' />
                                  </div>
                                  <div className="skills--section--card--content">
                                  <h3 className="skills--section--title">Backend</h3>
                                      <p className="skills--section--description">Node.js</p>
                                      <p className="skills--section--description">Express</p>
                                     
                                  </div>

                            </div>

                            <div  className="skills--section--card">
                                  <div className="skills--section--img">
                                      <img src={datab} alt="front end img" className='skillimg' />
                                  </div>
                                  <div className="skills--section--card--content">
                                      <h3 className="skills--section--title">Database</h3>
                                      <p className="skills--section--description">Mongodb</p>
                                     
                                  </div>

                            </div>

                            <div  className="skills--section--card">
                                  <div className="skills--section--img">
                                      <img src={git} alt="front end img" className='skillimg' />
                                  </div>
                                  <div className="skills--section--card--content">
                                      <h3 className="skills--section--title">Version Control</h3>
                                      <p className="skills--section--description">Git</p>
                                      
                                  </div>

                            </div>
                            


                      </div>
                  </section>
    
             </>  
    



  );
}




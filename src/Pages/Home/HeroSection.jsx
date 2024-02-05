import img from '../../assets/abygeorge.jpg'


export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Aby George</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">MERN Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            I am a MERN stack developer based on Kerala.
          </p>
        </div>
      </div>
      <div className="hero--section--img">
        <img src={img} alt="Hero Section" style={{width:'350px', borderRadius:'10px'}} />
      </div>
    </section>
  );
}

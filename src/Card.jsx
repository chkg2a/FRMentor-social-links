import image from "./assets/pic.png"

function Card(){
  return (
    <div className="card">
      <div className="img-box">
        <img src={image}/>
      </div>
      <div className="title-box">
        <h2>ChK x Renne</h2>
        <p>India, Manipur</p>
      </div>
      <div className="description-box">
        <p>"Front-end developer and avid Linux enjoyer."</p>
      </div>
      <div className="link-box">
        <a target="_blank" href="https://github.com/chkg2a"><div className="links">GitHub</div></a>
        <a target="_blank" href="https://www.frontendmentor.io/"><div className="links">Frontend Mentor</div></a>
        <a target="_blank" href="https://www.linkedin.com/"><div className="links">LinkedIn</div></a>
        <a target="_blank" href="https://data.typeracer.com/pit/profile?user=chkg2a"><div className="links">Typeracer</div></a>
        <a target="_blank" href="https://www.theodinproject.com/"><div className="links">TheOdinProject</div></a>
      </div>
    </div>
  )
}

export default Card

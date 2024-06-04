import './Card.css'
import data from '../project.json'

function Card() {

  return (
    <>
      {data.map(project => (
        <div className="card" style={{ backgroundImage: `url(${project.img})` }}>
          <div className='card-body'>
            <h2 className="card-title">{project.title}</h2>
            <a href={project.liveLink} className='liveSite'>Live Site</a>
            <a href={project.github} className='github'>GitHub</a>
          </div>
        </div>
      ))
      }
    </>
  );
}

export default Card
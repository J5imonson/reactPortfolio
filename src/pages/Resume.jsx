import './Resume.css'

export default function Resume() {
  return (
    <>
      <div className="resume-page">
        <button className='resume-button'>
          <a href="../public/assets/Resume example.pdf" download >Download my Resume!</a>
        </button>
        <h3 className="proficiencies">
          |Proficiencies|
          <br />
          JavaScript ES6+, CSS3, HTML5, SQL, NoSQL, GitHub, MongoDB, MySQL, Express, React, Node, Handlebars, jQuery, Bootstrap
        </h3>
      </div>

    </>
  )
}
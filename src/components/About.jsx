import React from 'react'
import ButtonLink from './ButtonLink';
// import Footer from './Footer';
const About = () => {
  return (
    <div className="section">
      <h2>Introduction</h2>
      <p2>👨‍💻 Hello! I'm [Your Name],🎓 a passionate full-stack web developer and technology enthusiast with a solid foundation in programming languages like C and C++. Through my recent internship, I gained expertise in MongoDB, Express.js, React, and Node.js, along with skills in HTML, CSS, and JavaScript. I’m dedicated to crafting efficient, scalable solutions that elevate user experience.

My projects reflect my commitment to problem-solving, clean code, and continuous learning. Whether you need a developer to bring your ideas to life or you’re interested in collaborating on innovative tech-driven projects, I’d love to connect!</p2>
<ButtonLink
              url='https://www.canva.com/design/DAGQFrs9mbU/2pUrPksp1NajPKPFdDGcgQ/view?utm_content=DAGQFrs9mbU&utm_campaign=designshare&utm_medium=link&utm_source=editor'
              text='View Resume →'
              padding={`p-3`}
            />
            
    </div>
    
  )
}

export default About
import AboutImg from '../assets/aboutme.jpg';

function About() {
    const config = {
        line1: 'Hi, My name is R Balasoundariya. I am a Full stack web developer. I built beautiful Websites with React.js,Node.js,MongoDB,Expressjs,JWT.',
        line2: 'I am proficient in Frontend skills like HTML,CSS,Javascript,Bootstrap,Reactjs,Redux',
        line3: 'In backend I know Node.js, Express.js,MySQL, MongoDB and Mongoose'
    }
  return <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
  <div className='py-5 px-10 md:w-1/3'>
      <img src={AboutImg} />
  </div>
  <div className='md:w-1/2 flex justify-center'>
      <div className='flex flex-col justify-center text-white'>
          <h1 className='text-4xl border-b-4  border-primary  mb-5 w-[170px] font-bold'>About Me</h1>
          <p className='pb-5'>{config.line1}</p>
          <p className='pb-5'>{config.line2}</p>
          <p className='pb-5'>{config.line3}</p>
      </div>
  </div>
</section>
}

export default About;
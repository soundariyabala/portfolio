import Profileimg from '../assets/Profileimg.jpg';
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";


function Profile() {
    const config  = {
        subtitle: 'Iam a Full-stack developer ',
        social: {
            Github: 'https://github.com/soundariyabala',
            linkedin: 'https://linkedin.com/in/bala-soundariya-759429296'
        }
    }

    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
       <div className='md:w-1/2 flex flex-col'>
            <h1 className=' text-white text-6xl font-hero-font'>Hi, <br/> Iam <span className='text-black'>R</span> Bala soundariya
                <p className='text-2xl'>{config.subtitle}</p>
            </h1>
            <div className='flex py-10'>
                <a href={config.social.Github} className='pr-5 hover:text-white'><AiOutlineGithub size={40} /></a>
                <a href={config.social.linkedin} className='hover:text-white'><AiOutlineLinkedin size={40}/></a>
            </div>
       </div>
       <img className='md:w-1/6' src={Profileimg} />
    </section>
}


export default Profile;
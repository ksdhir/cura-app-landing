// import React from 'react';
// import Image from 'next/image';
import aerick from '../assets/team/aerickold.png';
import rock from '../assets/team/rockold.png';
import cj from '../assets/team/cjold.png';
import heids from '../assets/team/heidsold.png';
import jb from '../assets/team/jbold.png';
import karan from '../assets/team/karanold.png';
import meralds from '../assets/team/meraldsold.png';
import kat from '../assets/team/katold.png';
import aerickyoung from '../assets/team/Aerick-young.png';
import rockyoung from '../assets/team/Rock-young.png';
import cjyoung from '../assets/team/CJ-young.png';
import heidsyoung from '../assets/team/Heids-young.png';
import jbyoung from '../assets/team/JB-young.png';
import karanyoung from '../assets/team/Karan-young.png';
import meraldsyoung from '../assets/team/Meralds-young.png';
import katyoung from '../assets/team/Kat-young.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

// export const Team = () => {
//   return (
//     <section
//       id='team'
//       className='flex flex-col lg:min-h-screen px-6 py-32 sm:px-16 lg:px-28 justify-center items-center bg-primaryLightest font-sans'>
//       <h2 className='flex flex-1 w-full py-6 pb-20 items-center justify-center text-[48px] lg:text-7xl  font-SatoshiBold text-primaryDark'>
//         Our Team
//       </h2>

//       {/* creata an auto grid tthat starts with 2 columns in mobile and becomes 4 cols in large screen */}

//       <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-20'>
//         <div className='flex flex-col items-center justify-center '>
//           <Image
//             className='w-32 md:w-40 lg:w-52 flex py-2'
//             //if mouse change the src to the colored image
//             src={karan}
//             alt='karan'
//             width={300}
//             height={300}
//           />
//           <h3 className='text-lg md:text-2xl lg:text-4xl font-SatoshiBold text-curaBlack text-center'>
//             Karan Singh Dhir
//           </h3>
//           <p className='text-sm font-SatoshiMedium text-center lg:text-left sm:text-xl md:text-xl lg:text-2xl text-curaBlack'>
//             Full Stack Developer
//           </p>
//           <a
//             className='flex justify-center items-center gap-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300'
//             href='https://www.linkedin.com/in/ksdhir/'>
//             <FontAwesomeIcon
//               className='w-[16px] h-auto md:w-6'
//               icon={faLinkedin}
//             />
//             <p className='text-sm font-SatoshiMedium text-center lg:text-left sm:text-xl md:text-xl lg:text-2xl text-curaBlack delay-150  hover:text-primary '>
//               /ksdhir
//             </p>
//           </a>
//         </div>
//         <div className='flex flex-col items-center justify-center '>
//           <Image
//             className='w-32 md:w-40 lg:w-52 flex py-2 '
//             src={heids}
//             alt='heids'
//             width={300}
//             height={300}
//           />
//           <h3 className='text-lg md:text-2xl lg:text-4xl  font-SatoshiBold text-curaBlack text-center'>
//             Haidren Amalia
//           </h3>
//           <p className='text-sm font-SatoshiMedium text-center lg:text-left sm:text-xl md:text-xl lg:text-2xl text-curaBlack'>
//             Full Stack Developer
//           </p>
//           <a
//             className='flex justify-center items-center gap-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300'
//             href='https://www.linkedin.com/in/haidrenamalia/'>
//             <FontAwesomeIcon
//               className='w-[16px] h-auto md:w-6'
//               icon={faLinkedin}
//             />
//             <p className='text-sm font-SatoshiMedium text-center lg:text-left sm:text-xl md:text-xl lg:text-2xl text-curaBlack delay-150 hover:text-primary '>
//               {' '}
//               /haidrenamalia
//             </p>
//           </a>
//         </div>
//         <div className='flex flex-col items-center justify-center '>
//           <Image
//             className='w-32 md:w-40 lg:w-52 flex py-2 '
//             src={meralds}
//             alt='meralds'
//             width={300}
//             height={300}
//           />
//           <h3 className='text-lg md:text-2xl lg:text-4xl  font-SatoshiBold text-curaBlack text-center'>
//             Meraldo Cazar
//           </h3>
//           <p className='text-sm font-SatoshiMedium text-center lg:text-left sm:text-xl md:text-xl lg:text-2xl text-curaBlack'>
//             Full Stack Developer
//           </p>
//           <a
//             className='flex justify-center items-center gap-1 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300'
//             href='https://www.linkedin.com/in/mscjr/'>
//             <FontAwesomeIcon
//               className='w-[16px] h-auto md:w-6'
//               icon={faLinkedin}
//             />
//             <p className='text-sm font-SatoshiMedium text-center lg:text-left sm:text-xl md:text-xl lg:text-2xl text-curaBlack delay-150 hover:text-primary '>
//               /mscjr
//             </p>
//           </a>
//         </div>
//         <div className='flex flex-col items-center justify-center '>
//           <Image
//             className='w-32 md:w-40 lg:w-52 flex py-2 '
//             src={jb}
//             alt='jb'
//             width={300}
//             height={300}
//           />
//           <h3 className='text-lg md:text-2xl lg:text-4xl  font-SatoshiBold text-curaBlack text-center'>
//             JB Sinluenam
//           </h3>
//           <p className='text-sm font-SatoshiMedium text-center lg:text-left sm:text-xl md:text-xl lg:text-2xl text-curaBlack'>
//             Front-End Developer
//           </p>
//           <a
//             className='flex justify-center items-center gap-1 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300'
//             href='https://www.linkedin.com/in/jbsinluenam/'>
//             <FontAwesomeIcon
//               className='w-[16px] h-auto md:w-6'
//               icon={faLinkedin}
//             />
//             <p className='text-sm font-SatoshiMedium text-center lg:text-left sm:text-xl md:text-xl lg:text-2xl text-curaBlack delay-150 hover:text-primary '>
//               {' '}
//               /jbsinluenam
//             </p>
//           </a>
//         </div>
//         <div className='flex flex-col items-center justify-center '>
//           <Image
//             className='w-32 md:w-40 lg:w-52 flex py-2 '
//             src={aerick}
//             alt='aerick'
//             width={300}
//             height={300}
//           />
//           <h3 className='text-lg md:text-2xl lg:text-4xl  font-SatoshiBold text-curaBlack text-center'>
//             Aerick Estrella
//           </h3>
//           <p className='text-sm font-SatoshiMedium text-center lg:text-left sm:text-xl md:text-xl lg:text-2xl text-curaBlack'>
//             UX Lead
//           </p>
//           <a
//             className='flex justify-center items-center gap-1 transition ease-in-out delay-150   hover:-translate-y-1 hover:scale-110  duration-300'
//             href='https://www.linkedin.com/in/aerick-estrella/'>
//             <FontAwesomeIcon
//               className='w-[16px] h-auto md:w-6'
//               icon={faLinkedin}
//             />
//             <p className='text-sm font-SatoshiMedium text-center lg:text-left sm:text-xl md:text-xl lg:text-2xl text-curaBlack delay-150 hover:text-primary '>
//               {' '}
//               /aerick-estrella
//             </p>
//           </a>
//         </div>
//         <div className='flex flex-col items-center justify-center '>
//           <Image
//             className='w-32 md:w-40 lg:w-52 flex py-2 '
//             src={cj}
//             alt='cj'
//             width={300}
//             height={300}
//           />
//           <h3 className='text-lg md:text-2xl lg:text-4xl  font-SatoshiBold text-curaBlack text-center'>
//             Christian Flordeliza
//           </h3>
//           <p className='text-sm font-SatoshiMedium text-center lg:text-left sm:text-xl md:text-xl lg:text-2xl text-curaBlack'>
//             UI Lead
//           </p>
//           <a
//             className='flex justify-center items-center gap-1 transition ease-in-out delay-150   hover:-translate-y-1 hover:scale-110  duration-300'
//             href='https://www.linkedin.com/in/christian-flordeliza/'>
//             <FontAwesomeIcon
//               className='w-[16px] h-auto md:w-6'
//               icon={faLinkedin}
//             />
//             <p className='text-sm font-SatoshiMedium text-center lg:text-left sm:text-xl md:text-xl lg:text-2xl text-curaBlack delay-150 hover:text-primary '>
//               {' '}
//               /christian-flordeliza
//             </p>
//           </a>
//         </div>
//         <div className='flex flex-col items-center justify-center '>
//           <Image
//             className='w-32 md:w-40 lg:w-52 flex py-2 '
//             src={rock}
//             alt='rock'
//             width={300}
//             height={300}
//           />
//           <h3 className='text-lg md:text-2xl lg:text-4xl  font-SatoshiBold text-curaBlack text-center'>
//             Rock Manuel
//           </h3>
//           <p className='text-sm font-SatoshiMedium text-center lg:text-left sm:text-xl md:text-xl lg:text-2xl text-curaBlack'>
//             PM/Designer
//           </p>
//           <a
//             className='flex justify-center items-center gap-1 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300'
//             href='https://www.linkedin.com/in/rock-manuel/'>
//             <FontAwesomeIcon
//               className='w-[16px] h-auto md:w-6'
//               icon={faLinkedin}
//             />
//             <p className='text-sm font-SatoshiMedium text-center lg:text-left sm:text-xl md:text-xl lg:text-2xl text-curaBlack delay-150 hover:text-primary '>
//               {' '}
//               /rock-manuel
//             </p>
//           </a>
//         </div>
//         <div className='flex flex-col items-center justify-center '>
//           <Image
//             className='w-32 md:w-40 lg:w-52 flex py-2 '
//             src={kat}
//             alt='kat'
//             width={300}
//             height={300}
//           />
//           <h3 className='text-lg md:text-2xl lg:text-4xl  font-SatoshiBold text-curaBlack text-center'>
//             Katrina Mirambel
//           </h3>
//           <p className='text-sm font-SatoshiMedium text-center lg:text-left sm:text-xl md:text-xl lg:text-2xl text-curaBlack'>
//             UX/UI Designer
//           </p>
//           <a
//             className='flex justify-center items-center gap-1 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300'
//             href='https://www.linkedin.com/in/katrinamirambel/'>
//             <FontAwesomeIcon
//               className='w-[16px] h-auto md:w-6'
//               icon={faLinkedin}
//             />
//             <p className='text-sm font-SatoshiMedium text-center lg:text-left sm:text-xl md:text-xl lg:text-2xl text-curaBlack delay-150 hover:text-primary '>

//               /katrinamirambel
//             </p>
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

import React from 'react';
import TeamMember from './TeamMember'; // Import the TeamMember component

const Team = () => {
  const teamMembers = [
    {
      name: 'Karan Singh Dhir',
      imageSrc: karan,
      youngerImageSrc: karanyoung,
      jobTitle: 'Full Stack Developer',
      linkedinLink: 'https://www.linkedin.com/in/ksdhir/',
      linkedinPath: '/ksdhir',
    },
    {
      name: 'Haidren Amalia',
      imageSrc: heids,
      youngerImageSrc: heidsyoung,
      jobTitle: 'Full Stack Developer',
      linkedinLink: 'https://www.linkedin.com/in/haidrenamalia/',
      linkedinPath: '/haidrenamalia',
    },
    {
      name: 'Meraldo Cazar',
      imageSrc: meralds,
      youngerImageSrc: meraldsyoung,
      jobTitle: 'Full Stack Developer',
      linkedinLink: 'https://www.linkedin.com/in/mscjr/',
      linkedinPath: '/mscjr',
    },
    {
      name: 'JB Sinluenam',
      imageSrc: jb,
      youngerImageSrc: jbyoung,
      jobTitle: 'Front-End Developer',
      linkedinLink: 'https://www.linkedin.com/in/jbsinluenam/',
      linkedinPath: '/jbsinluenam',
    },
    {
      name: 'Aerick Estrella',
      imageSrc: aerick,
      youngerImageSrc: aerickyoung,
      jobTitle: 'UX Lead',
      linkedinLink: 'https://www.linkedin.com/in/aerick-estrella/',
      linkedinPath: '/aerick-estrella',
    },
    {
      name: 'Christian Flordeliza',
      imageSrc: cj,
      youngerImageSrc: cjyoung,
      jobTitle: 'UI Lead',
      linkedinLink: 'https://www.linkedin.com/in/christian-flordeliza/',
      linkedinPath: '/christian-flordeliza',
    },
    {
      name: 'Rock Manuel',
      imageSrc: rock,
      youngerImageSrc: rockyoung,
      jobTitle: 'PM/Designer',
      linkedinLink: 'https://www.linkedin.com/in/rock-manuel/',
      linkedinPath: '/rock-manuel',
    },
    {
      name: 'Katrina Mirambel',
      imageSrc: kat,
      youngerImageSrc: katyoung,
      jobTitle: 'UX/UI Designer',
      linkedinLink: 'https://www.linkedin.com/in/katrinamirambel/',
      linkedinPath: '/katrinamirambel',
    },
  ];

  return (
    <section
      className='flex flex-col lg:min-h-screen px-6 py-32 sm:px-16 lg:px-28 justify-center items-center bg-primaryLightest font-sans'
      id='team'>
      <h2 className='flex flex-1 w-full py-6 pb-20 items-center justify-center text-[48px] lg:text-7xl font-SatoshiBold text-primaryDark'>
        Our Team
      </h2>

      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-20'>
        {teamMembers.map((member, index) => (
          <TeamMember
            key={index}
            name={member.name}
            imageSrc={member.imageSrc}
            youngerImageSrc={member.youngerImageSrc}
            jobTitle={member.jobTitle}
            linkedinLink={member.linkedinLink}
            linkedinPath={member.linkedinPath}
          />
        ))}
      </div>
    </section>
  );
};

export default Team;

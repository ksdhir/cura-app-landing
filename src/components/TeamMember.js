import React, { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const TeamMember = ({
  name,
  imageSrc,
  youngerImageSrc,
  jobTitle,
  linkedinLink,
  linkedinPath,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='flex flex-col items-center justify-center'>
      <Image
        className='w-32 md:w-40 lg:w-52 flex py-2'
        src={isHovered ? imageSrc : youngerImageSrc}
        alt={name}
        width={300}
        height={300}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />

      <h3 className='text-lg md:text-2xl lg:text-4xl whitespace-no-wrap font-SatoshiBold text-curaBlack text-center'>
        {name}
      </h3>

      <p className='text-sm font-SatoshiMedium text-center lg:text-left sm:text-xl md:text-xl lg:text-2xl text-curaBlack'>
        {jobTitle}
      </p>
      <a
        className='flex justify-center items-center gap-1 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300'
        href={linkedinLink}
        target='_blank'
        rel='noopener noreferrer'>
        <FontAwesomeIcon className='w-[16px] h-auto md:w-6' icon={faLinkedin} />

        <p className='text-sm font-SatoshiMedium text-center lg:text-left sm:text-xl md:text-xl lg:text-2xl text-curaBlack delay-150 hover:text-primary '>
          {linkedinPath}
        </p>
      </a>
    </div>
  );
};

export default TeamMember;

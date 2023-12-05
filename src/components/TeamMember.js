import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const TeamMember = ({
  name,
  imageSrc,
  youngerImageSrc,
  jobTitle,
  linkedinLink,
  linkedinPath,
  ctr,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const transform = () => {
      setTimeout(() => {
        setIsHovered(true);

        setTimeout(() => {
          setIsHovered(false);
        }, 2000);
      }, 1000 * ctr);
    };

    const interval = setInterval(() => {
      transform();
    }, 9000);

    transform();
    return () => clearInterval(interval);
  }, []);

  return (
    <a
      href={linkedinLink}
      target="_blank"
      className="flex flex-col items-center justify-center group"
    >
      <Image
        className="w-32 md:w-40 lg:w-52 flex py-2 group-hover:scale-110 transition ease-in-out duration-300"
        src={isHovered ? imageSrc : youngerImageSrc}
        alt={name}
        width={300}
        height={300}
      />

      <h3 className="text-lg md:text-2xl lg:text-4xl whitespace-no-wrap font-SatoshiBold text-curaBlack text-center">
        {name}
      </h3>

      <p className="text-sm font-SatoshiMedium text-center lg:text-left sm:text-xl md:text-xl lg:text-2xl text-curaBlack">
        {jobTitle}
      </p>

      <div
        className="flex justify-center items-center gap-1"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="w-[16px] h-auto md:w-6" icon={faLinkedin} />

        <p className="text-sm font-SatoshiMedium text-center lg:text-left sm:text-xl md:text-xl lg:text-2xl text-curaBlack delay-150 ">
          {linkedinPath}
        </p>
      </div>
    </a>
  );
};

export default TeamMember;

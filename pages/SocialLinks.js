import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const SocialLinks = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href: "https://linkedin.com",
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    Github <FaGithub size={30} />
                </>
            ),
            href: "https://github.com/siam63",
        },
        {
            id: 3,
            child: (
                <>
                    Email <HiOutlineMail size={30} />
                </>
            ),
            href: "mailto:siamrahman711@gmail.com",
        },
        {
            id: 4,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: "New_Resume_2024.pdf",
            style: 'rounded-br-md',
            download: true,
        }
    ]

    return (
        <div className="hidden lg:flex flex-col top-[25%] left-0 fixed">
            <ul>
                {links.map(({id, child, href, style, download}) => (
                    <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 dark:bg-gray-400 bg-gray-500 ml-[-100px] duration-300 hover:ml-[-10px] hover:rounded-md" + " " + style}>
                        <a href={href} className="flex justify-between items-center w-full text-gray-200 dark:text-black pl-4" download={download} target="_blank">
                            <>
                                {child}
                            </>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SocialLinks

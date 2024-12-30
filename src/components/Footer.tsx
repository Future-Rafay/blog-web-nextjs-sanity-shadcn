import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-background dark:bg-background-dark py-8 mt-8">
            <div className="container mx-auto text-center text-muted-foreground dark:text-muted-foreground-dark">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} <Link
                        href="https://my-portfolio-animated-abdul-rafays-projects-87eac4f7.vercel.app/"
                        target="_blank"
                        className="text-primary dark:text-primary-dark hover:text-primary-foreground dark:hover:text-primary-foreground-dark transition-colors duration-200"
                        aria-label="Portfolio"
                    >
                        Abdul Rafay.
                    </Link>  All Rights Reserved.
                </p>
                <div className="mt-4 flex justify-center space-x-6">

                    <Link
                        href="https://www.linkedin.com/in/rafay-nadeem-14a2632bb/"
                        target="_blank"
                        className="text-primary dark:text-primary-dark hover:text-primary-foreground dark:hover:text-primary-foreground-dark transition-colors duration-200"
                        aria-label="LinkedIn"
                    >
                        <span className="sr-only">LinkedIn</span>
                        <FaLinkedin size={24} />
                    </Link>
                    <Link
                        href="https://github.com/Future-Rafay"
                        target="_blank"
                        className="text-primary dark:text-primary-dark hover:text-primary-foreground dark:hover:text-primary-foreground-dark transition-colors duration-200"
                        aria-label="GitHub"
                    >
                        <span className="sr-only">GitHub</span>
                        <FaGithub size={24} />
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

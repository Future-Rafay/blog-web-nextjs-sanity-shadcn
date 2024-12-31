import Image from "next/image";
import React from "react";

const About = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-center mb-8 text-primary">About Me</h1>
            <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-12">
                <Image
                    src="/myphotozoomed.jpg" // Replace with your photo's path
                    alt="Abdul Rafay"
                    className=" rounded-full shadow-md mb-6 lg:mb-0"
                    width={192}
                    height={302}
                />
                <div className="max-w-2xl">
                    <p className="text-muted-foreground mb-4">
                        Hello! I'm Abdul Rafay, a passionate blogger and developer based in Karachi, Pakistan. I enjoy sharing my thoughts, tutorials, and insights on technology, coding, and creativity. My mission is to inspire and educate others while documenting my journey in the tech world.
                    </p>
                    <p className="text-muted-foreground mb-4">
                        With a strong foundation in web development, I specialize in technologies like TypeScript, Next.js, and Tailwind CSS. Beyond coding, I participate in hackathons, explore UI/UX design, and experiment with innovative project ideas.
                    </p>
                    <p className="text-muted-foreground mb-4">
                        I believe in continuous learning and the power of community. I’m currently attending GIAIC university classes and actively building my portfolio to showcase my projects and achievements.
                    </p>
                    <p className="text-muted-foreground">
                        When I'm not coding or blogging, you’ll find me exploring new skills, playing games, or spending time with my family. Thank you for visiting my blog, and I hope you enjoy my content!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;

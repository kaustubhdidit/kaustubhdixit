import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

import Wrapper from "./Wrapper";
import SkillIcon from "./SkillIcon";
import Service from "./Service";
import Portfolio from "./Portfolio";
import Achievements from "./Achievements";
import Div from "./Div";

// IMAGES
import sk1 from "../assets/sk-1.png";
import sk2 from "../assets/sk-2.png";
import sk3 from "../assets/sk-3.png";
import sk4 from "../assets/sk-4.png";
import sk5 from "../assets/sk-5.png";
import sk6 from "../assets/sk-6.png";
import sk7 from "../assets/sk-7.png";
import sk8 from "../assets/sk-8.png";
import sk9 from "../assets/sk-9.png";
import sk10 from "../assets/sk-10.png";
import sk11 from "../assets/sk-11.png";
import pattern from "../assets/heading-pattern.png";
import pe1 from "../assets/sec-3-p-e-1.png";
import pe2 from "../assets/sec-3-p-e-2.png";
import pe3 from "../assets/sec-3-p-e-3.png";

const Skills = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 1500], [1000, 0], { clamp: false });
    const y2 = useTransform(scrollY, [0, 2200], [1500, 0], { clamp: false });
    const y3 = useTransform(scrollY, [0, 2700], [2000, 0], { clamp: false });
    return (
        <div
            id="skills"
            className="bg-[#111111] py-[50px] md:py-[100px] relative overflow-hidden"
        >
            {/* BACKGROUND ELEMENTS START */}
            <div className="sec-3-bg-gradient-1" />
            <div className="sec-3-bg-gradient-2" />
            <motion.img className="sec-3-p-e-1" style={{ y: y1 }} src={pe1} />
            <motion.img className="sec-3-p-e-2" style={{ y: y2 }} src={pe2} />
            <motion.img className="sec-3-p-e-3" style={{ y: y3 }} src={pe3} />
            {/* BACKGROUND ELEMENTS END */}
            <Wrapper>
                {/* SKILL ICONS START */}
                <Div className="grid grid-cols-4 gap-3 md:grid-cols-11 relative">
                    {/* <SkillIcon path={sk1} />
                    <SkillIcon path={sk2} />
                    <SkillIcon path={sk3} />
                    <SkillIcon path={sk4} />
                    <SkillIcon path={sk5} />
                    <SkillIcon path={sk6} />
                    <SkillIcon path={sk7} /> */}
                    <SkillIcon path={sk8} />
                   
                    <SkillIcon path={sk9} />
                    <SkillIcon path={sk10} />
                    <SkillIcon path={sk7} /> 
                    <SkillIcon path={sk5} />
                    <SkillIcon path={sk11} />
                    <SkillIcon path={sk6} />
                </Div>
                {/* SKILL ICONS END */}

                {/* SERVICES SECTION START */}
                <div className="flex items-end justify-between flex-wrap-reverse py-[50px] md:py-[100px] relative">
                    {/* SERVICES START */}
                    <div className="md:max-w-[65%] flex flex-col gap-6 md:gap-10">
                    <Service
                            num="1"
                            title="Web Development"
                            desc="Proficient in React, HTML, CSS, JS, and Node.js. Crafting seamless user experiences. Executed real-life projects, including API-integrated clones of popular websites, showcasing my dynamic web development skills."
                            data={[
                                "React",
                                "HTML",
                                "CSS",
                                "JS",
                                "User Experience",
                                "NodeJs",
                            ]}
                        />
                        <Service
                            num="2"
                            title="Data Structures and Algorithms"
                            desc="I possess a strong grasp of Data Structures and algorithms, showcased through solving numerous problems across platforms like LeetCode and CodeChef, reflecting my dedication and proficiency."
                            data={[
                                "JAVA",
                                "Dynamic Programming",
                                "Leet Code",
                                
                            ]}
                        />
                     
                        <Service
                            num="3"
                            title="Electronics Engineering"
                            desc="I'm currently pursuing a Bachelors in Electronic Engineering at HBTU Kanpur, driven by a passion for understanding and innovating within the realm of electronics and technology."
                            data={[
                                "Analog Communication",
                                "Digital Electronics",
                                "Micro-processors",
                               
                            ]}
                        />
                    </div>
                    {/* SERVICES END */}

                    {/* SECTION HEADING START */}
                    <div className="flex flex-wrap justify-center gap-2 md:gap-0 md:flex-col text-[40px] md:text-[90px] 2xl:text-[120px] leading-[40px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase text-gradient mb-10 md:mb-0 md:sticky top-2">
                        <span>Solving</span>
                        <span>Problems</span>
                        <span className="flex items-center gap-2">
                            With
                            <img
                                src={pattern}
                                className="block md:hidden w-[80px] mt-1"
                            />
                        </span>
                        <span className="flex items-center gap-4">
                            Latest{" "}
                            <img
                                src={pattern}
                                className="hidden md:block md:w-[140px] 2xl:w-[190px] mt-3"
                            />
                        </span>
                        <span>Technology</span>
                    </div>
                    {/* SECTION HEADING END */}
                </div>
                {/* SERVICES SECTION END */}

                <Portfolio />
                <Achievements />
            </Wrapper>
        </div>
    );
};

export default Skills;

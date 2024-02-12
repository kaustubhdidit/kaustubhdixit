import p0 from "./assets/project-0.png";
import p1 from "./assets/project-1.png";
import p2 from "./assets/project-2.png";
import p3 from "./assets/project-3.png";
import p4 from "./assets/project-4.png";
import p5 from "./assets/project-5.png";
import p6 from "./assets/project-6.png";
import pc from "./assets/pc.png";

export const filters = [
    {
        name: "All",
        id: "all",
    },
    {
        name: "Dashboard",
        id: "dashboard",
    },
    {
        name: "Mobile App",
        id: "mobile-app",
    },
    {
        name: "Website",
        id: "website",
    },
];

export const projects = [
    {
        name: "Torento",
        image: p0,
        web: "https://torento.vercel.app",
        tags: ["dashboard", "website", "mobile-app"],
    },
    {
        name: "Callidus Community Website",
        image: pc,
        web: "https://kaustubhdidit.github.io/callidus/",
        tags: ["dashboard", "website", "mobile-app"],
    },
    {
        name: "Watch-It",
        image: p1,
        web: "https://watch-it-yt-alternative.netlify.app",
        tags: ["dashboard", "website", "mobile-app"],
    },
    {
        name: "NewsWind",
        image: p2,
        web: "https://github.com/kaustubhdidit/NewsWind",
        tags: ["dashboard", "website","mobile-app"],
    },
    {
        name: "Symphony (E-Commerce web app)",
        image: p3,
        web: "https://github.com/kaustubhdidit/Symphony",
        tags: ["dashboard"],
    },
    {
        name: "Write (Notes App)",
        image: p4,
        web: "https://github.com/kaustubhdidit/Write-NotesApp",
        tags: ["dashboard"],
    },
    {
        name: "Text-Utils",
        image: p5,
        web: "https://kaustubhdidit.github.io/TextUtils/",
        tags: [ "dashboard"],
    },
    // {
    //     name: "Saving Photo Memories",
    //     image: p6,
    //     tags: ["website"],
    // },
];

export const achievements = [
    {
        id: 1,
        year: 9,
        description: "SUCCESSFULLY<br />COMPLETED<br />PROJECTS",
    },
    {
        id: 2,
        year: 2,
        description: "YEARS OF<br />EXPERIENCE",
    },
    {
        id: 3,
        year: 10,
        description: "TECHNOLOGIES",
    },
    {
        id: 4,
        year: 4,
        description: "COMMUNITY<br />POSTS",
    },
];

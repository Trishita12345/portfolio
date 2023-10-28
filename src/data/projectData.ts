import { images } from "../../src/Assets/images"

export const projectData = (t: any) =>
({
    domains: ['Full Stack'],
    projects: [
        {
            imgSrc: images.GRPAC_Thambnail,
            name: 'GRPAC',
            id: '1',
            domain: 'Full Stack',
            description: t('GRPAC_Desc'),
            tags: ["Firebase", "Ant Design", "PWA", "Google Sign in", "Hosting", "Payment Integration", "Image Upload"],
            // clientName: "John Doe",
            githubLink: "https://github.com/psubhajit14/grpac_mern",
            websiteUrl: "https://grpac-mern-grpac.vercel.app/",
            finishDate: "20/06/2023",
            collaboration: ['Trishita Majumder - Frontend', 'Subhajit Paul - Backend']
        },
    ],

})


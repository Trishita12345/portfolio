import { images } from "../../src/Assets/images"

export const projectData = (t: any) =>
({
    domains: ['Full Stack', 'Frontend'],
    projects: [
        {
            imgSrc: images.GRPAC_Thambnail,
            name: 'GRPAC',
            id: '1',
            domain: 'Full Stack',
            description: 'It is a application that is being used in Social service for getting digital signature from common people. It supports 2 language Bengali & English for more customer reach.It has features like Google Sign in, Autenticated Screens for Admin. Firebase setup, Hosting, Image upload, Payment Gateway integration etc.',
            tags: ["Firebase", "Ant Design", "PWA", "Google Sign in", "Hosting", "Payment Integration", "Image Upload"],
            clientName: "John Doe",
            githubLink: "https://github.com/psubhajit14/grpac_mern",
            websiteUrl: "https://grpac-mern-grpac.vercel.app/",
            finishDate: "20/06/2023"
        }
    ],

})
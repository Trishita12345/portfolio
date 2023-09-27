
import { FaReact } from 'react-icons/fa'
import { SiMui, SiRedux, SiVisualstudio, SiNodemon, SiFirebase } from 'react-icons/si'
import { BiLogoSpringBoot } from 'react-icons/bi'
import { BsDatabaseAdd } from 'react-icons/bs'

export const expertizeData = (t: any) => [
    {
        icon: <FaReact style={{ fontSize: '70px' }} />,
        label: 'React JS',
        description: t('reactJsDesc'),
        url: 'https://react.dev/'
    },
    {
        icon: <SiMui style={{ fontSize: '70px' }} />,
        label: 'Material UI',
        description: t('muiDesc'),
        url: 'https://mui.com/material-ui/'
    },
    {
        icon: <SiVisualstudio style={{ fontSize: '70px' }} />,
        label: 'Visual Studio',
        description: t('vscodeDesc'),
        url: 'https://code.visualstudio.com/'
    },
    {
        icon: <SiRedux style={{ fontSize: '70px' }} />,
        label: 'Redux',
        description: t('reduxDesc'),
        url: 'https://redux.js.org/'
    },
    {
        icon: <BiLogoSpringBoot style={{ fontSize: '70px' }} />,
        label: 'Spring Boot',
        description: t('springDesc'),
        url: 'https://spring.io/projects/spring-boot'
    },
    {
        icon: <SiNodemon style={{ fontSize: '70px' }} />,
        label: 'Node JS',
        description: t('nodeDesc'),
        url: 'https://nodejs.org/en'
    },
    {
        icon: <SiFirebase style={{ fontSize: '70px' }} />,
        label: 'Firebase',
        description: t('firebaseDesc'),
        url: 'https://shorturl.at/lvVXZ'
    },
    {
        icon: <BsDatabaseAdd style={{ fontSize: '70px' }} />,
        label: 'MySQL',
        description: t('databaseDesc'),
        url: 'https://www.mysql.com/'
    }
]
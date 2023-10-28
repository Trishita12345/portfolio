
import { FaReact } from 'react-icons/fa'
import { SiMui, SiRedux, SiVisualstudio, SiTypescript, SiJira, SiFigma } from 'react-icons/si'
import { BiLogoGit, } from 'react-icons/bi'
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
        icon: <SiTypescript style={{ fontSize: '70px' }} />,
        label: 'Typescript',
        description: t('typescriptDesc'),
        url: 'https://www.typescriptlang.org/'
    },
    {
        icon: <BsDatabaseAdd style={{ fontSize: '70px' }} />,
        label: 'MySQL',
        description: t('databaseDesc'),
        url: 'https://www.mysql.com/'
    },
    {
        icon: <BiLogoGit style={{ fontSize: '70px' }} />,
        label: 'Git',
        description: t('gitDesc'),
        url: 'https://git-scm.com/'
    },
    {
        icon: <SiFigma style={{ fontSize: '70px' }} />,
        label: 'Figma',
        description: t('figmaDesc'),
        url: 'https://www.figma.com/'
    },
]
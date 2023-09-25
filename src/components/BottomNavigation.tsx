import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import { NavigationComponent } from './NavigationComponent';
import { useTranslation } from 'react-i18next';
import { AiFillHome, AiOutlineTeam, AiFillStar } from 'react-icons/ai';
import { MdWork } from 'react-icons/md';
import { IoMdContact } from 'react-icons/io';
import { BiSolidGroup } from 'react-icons/bi';


export default function FixedBottomNavigation() {
    const [value, setValue] = React.useState(0);
    const ref = React.useRef<HTMLDivElement>(null);
    const [t] = useTranslation('common', { keyPrefix: 'header' })

    const arr = [
        {
            name: t('homeText'),
            icon: <AiFillHome size={'20px'} />,
            handleClick: () => window.scrollTo({ top: 0, behavior: "smooth" })
        },
        {
            name: t('aboutText'),
            icon: <BiSolidGroup size={'20px'} />,
            handleClick: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
        },
        {
            name: t('skillsText'),
            icon: <AiFillStar size={'20px'} />,
            handleClick: () => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })
        },
        {
            name: t('projectsText'),
            icon: <MdWork size={'20px'} />,
            handleClick: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
        },
        {
            name: t('contactText'),
            icon: <IoMdContact size={'20px'} />,
            handleClick: () => document.getElementById('contactUs')?.scrollIntoView({ behavior: 'smooth' })
        },
    ];

    return (
        <Box sx={{ pb: 7 }} ref={ref}>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={10}>
                <BottomNavigation
                    sx={{ zIndex: '1000000', backgroundColor: '#FBA91F' }}
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    {/* <NavigationComponent backgroundColor="white" color={'red'} /> */}
                    {arr.map((i: any) => <BottomNavigationAction label={i.name} onClick={i.handleClick} icon={i.icon}
                    />)}
                </BottomNavigation>
            </Paper>
        </Box>
    );
}



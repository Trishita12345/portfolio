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
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 10000, width: "100vw" }} elevation={10} >
            <BottomNavigation
                sx={{ backgroundColor: '#FBA91F', width: "100%" }}
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                {arr.map((i: any) => <BottomNavigationAction style={{ padding: 2, }} label={i.name} onClick={i.handleClick} icon={i.icon}
                />)}
            </BottomNavigation>
        </Paper>
    );
}



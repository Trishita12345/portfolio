import { Box, Button, Grid, IconButton, TextField, Typography, useMediaQuery, useTheme } from "@mui/material"
import { useTranslation } from "react-i18next";
import { theme } from "../../../theme";
import { MdDrafts } from "react-icons/md";
import { FaBuilding } from "react-icons/fa"
import { useState } from "react";

const RightSection = () => {
    const theme = useTheme();
    const screenSizeDownSm = useMediaQuery(theme.breakpoints.down('sm'))
    const [t] = useTranslation('common', { keyPrefix: 'contactUs' })

    const emailRegex = new RegExp(/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/)

    const [name, setName] = useState<string>('')
    const [nameError, setNameError] = useState<boolean>(false)
    const [email, setEmail] = useState<string>('')
    const [emailError, setEmailError] = useState<boolean>(false)
    const [emailValidError, setEmailValidError] = useState<boolean>(false)
    const [subject, setSubject] = useState<string>('')
    const [subjectError, setSubjectError] = useState<boolean>(false)
    const [message, setMessage] = useState<string>('')
    const [messageError, setMessageError] = useState<boolean>(false)

    const handleSubmit = () => {
        const formData = {
            name, email, subject, message
        }
        console.log('formData: ', formData);
    }

    return (
        <>
            <Typography fontWeight={600} fontSize={'18px'} color={theme.palette.primary.dark}>{t('writeToUs')}</Typography>
            <TextField
                sx={{ mt: 4 }}
                fullWidth
                value={name}
                onChange={(e: any) => {
                    if (e.target.value === '') {
                        setNameError(true)
                    }
                    else {
                        setNameError(false)
                    }
                    setName(e.target.value)
                }}
                error={nameError}
                helperText={nameError && t('nameRequired')}
                label={t('name')}
                defaultValue=""
            />
            <TextField
                sx={{ mt: 2 }}
                fullWidth
                value={email}
                onChange={(e: any) => {
                    if (e.target.value === '') {
                        setEmailValidError(false)
                        setEmailError(true)
                    }
                    else if (!emailRegex.test((e.target.value).toLowerCase())) {
                        setEmailError(false)
                        setEmailValidError(true)
                    }
                    else {
                        setEmailError(false)
                        setEmailValidError(false)
                    }
                    setEmail(e.target.value)
                }}
                error={emailError || emailValidError}
                helperText={emailError ? t('emailRequired') : emailValidError ? t('emailInvalid') : ''}
                label={t('email')}
                defaultValue=""
            />
            <TextField
                sx={{ mt: 2 }}
                fullWidth
                value={subject}
                onChange={(e: any) => {
                    if (e.target.value === '') {
                        setSubjectError(true)
                    }
                    else {
                        setSubjectError(false)
                    }
                    setSubject(e.target.value)
                }}
                error={subjectError}
                helperText={subjectError && t('subjectRequired')}
                label={t('subject')}
                defaultValue=""
            />
            <TextField
                sx={{ mt: 2 }}
                fullWidth
                value={message}
                onChange={(e: any) => {
                    if (e.target.value === '') {
                        setMessageError(true)
                    }
                    else {
                        setMessageError(false)
                    }
                    setMessage(e.target.value)
                }}
                error={messageError}
                helperText={messageError && t('messageRequired')}
                label={t('yourMessage')}
                defaultValue=""
                multiline={true}
                minRows={4}
                maxRows={200}
            />
            <Button fullWidth variant="contained"
                disabled={name === '' || email === '' || subject === '' || message === '' || nameError || emailError || emailValidError || subjectError || messageError}
                onClick={handleSubmit}
                sx={{
                    mt: 2, py: 1.5,
                    backgroundColor: theme.palette.secondary.main,
                    textTransform: 'capitalize',
                    ':hover': {
                        backgroundColor: '#BB2548'
                    }
                }}>
                {t('submitNow')}
            </Button>
        </>
    )
}

export default RightSection;
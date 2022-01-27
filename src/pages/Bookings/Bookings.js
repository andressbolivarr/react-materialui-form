import React from 'react'
import BookingForm from "./BookingForm";
import PageHeader from "../../components/PageHeader";
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper,makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(2)
    }
}))

export default function Bookings() {

    const classes = useStyles();

    return (
        <>
            <PageHeader
                title="New Booking"
                subTitle="Form design with validation"
                icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
            />
            <Paper className={classes.pageContent}>
                <BookingForm />
            </Paper>
        </>
    )
}

import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import Controls from "../../components/controls/Controls";
import { useForm, Form } from "../../components/useForm";
import * as BookingService from "../../services/BookingService";
import { Container} from "@material-ui/core";
import TimeButtons from "../../components/controls/TimeButtons";


const dinnerItems = [
  { id: "breakfast", title: "Breakfast" },
  { id: "lunch", title: "Lunch" },
  { id: "dinner", title: "Dinner" },
];

const initialFValues = {
  id: 0,
  firstName: "",
  lastName: "",
  email: "",
  mobile: "",
  dinner: "breakfast",
  coverId: "",
  hours: "",
  restaurant: "",
  tables: "",
  notes: "",
  options: "",
  isPermanent: false,
};

export default function BookingForm() {
  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("fullName" in fieldValues)
      temp.fullName = fieldValues.fullName ? "" : "This field is required.";
    if ("email" in fieldValues)
      temp.email = /$^|.+@.+..+/.test(fieldValues.email)
        ? ""
        : "Email is not valid.";
    if ("mobile" in fieldValues)
      temp.mobile =
        fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required.";
    if ("coverId" in fieldValues)
      temp.coverId =
        fieldValues.coverId.length !== 0 ? "" : "This field is required.";
    setErrors({
      ...temp,
    });

    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
  };

  const { values, errors, setErrors, handleInputChange, resetForm } = useForm(
    initialFValues,
    true,
    validate
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      BookingService.insertBooking(values);
      resetForm();
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={12}>
          <Controls.DatePicker
            name=""
            label="Date"
            value={values.hireDate}
            onChange={handleInputChange}
          />
          <Grid>
            <Controls.Select
              name="coverId"
              label="Covers"
              value={values.coverId}
              onChange={handleInputChange}
              options={BookingService.getcoverCollection()}
              error={errors.coverId}
            />
          <Grid item xs={2}>
          <Controls.TimeButtons
            name="dinner"
            label="Dinner"
            value={values.dinner}
            onChange={handleInputChange}
            items={dinnerItems}
          />

          </Grid>
            <Grid item xs={2} rowSpacing={12}>
              <Container item spacing={1}>
                <TimeButtons
                  name="hours"
                  label=""
                  value={values.hours}
                  onChange={handleInputChange}
                  items={[
                    { id: "1", title: "12:00" },
                    { id: "2", title: "12:15" },
                    { id: "3", title: "12:30" },
                    { id: "4", title: "12:45" },
                    { id: "5", title: "13:00" },
                    { id: "6", title: "13:15" },
                    { id: "7", title: "13:30" },
                    { id: "8", title: "13:45" },
                    { id: "9", title: "14:00" },
                    { id: "10", title: "14:15" },
                    { id: "11", title: "14:30" },
                    { id: "12", title: "14:45" },
                    { id: "13", title: "15:00" },
                    { id: "14", title: "15:15" },
                    { id: "15", title: "15:30" },
                    { id: "16", title: "15:45" },
                    { id: "17", title: "16:00" },
                    { id: "18", title: "16:15" },
                    { id: "19", title: "16:30" },
                    { id: "20", title: "16:45" },
                    { id: "21", title: "17:00" },
                    { id: "22", title: "17:15" },
                    { id: "23", title: "17:30" },
                    { id: "24", title: "17:45" },
                    { id: "25", title: "18:00" },
                    { id: "26", title: "18:15" },
                    { id: "27", title: "18:30" },
                    { id: "28", title: "18:45" },
                    { id: "29", title: "19:00" },
                    { id: "30", title: "19:15" },
                    { id: "31", title: "19:30" },
                    { id: "32", title: "19:45" },
                    { id: "33", title: "20:00" },
                    { id: "34", title: "20:15" },
                    { id: "35", title: "20:30" },
                    { id: "36", title: "20:45" },
                    { id: "37", title: "21:00" },
                    { id: "38", title: "21:15" },
                    { id: "39", title: "21:30" },
                    { id: "40", title: "21:45" },
                    { id: "41", title: "22:00" },
                    { id: "42", title: "22:15" },
                    { id: "43", title: "22:30" },
                    { id: "44", title: "22:45" },
                  ]}
                  error={errors.hours}
                ></TimeButtons>
              </Container>
            </Grid>
          </Grid>

          <Container>
            <Typography>Diner Data</Typography>
          </Container>

          <Controls.Input
            label="Mobile"
            name="mobile"
            value={values.mobile}
            onChange={handleInputChange}
            error={errors.mobile}
          />
          <Controls.Input
            name="firstName"
            label="Firstname"
            value={values.firstName}
            onChange={handleInputChange}
            error={errors.firstName}
          />
          <Controls.Input
            name="lastName"
            label="Lastname"
            value={values.lastName}
            onChange={handleInputChange}
            error={errors.lastName}
          />
          <Controls.Input
            label="Email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
            error={errors.email}
          />
          <Controls.Input
            name="notes"
            label="Booking Notes"
            value={values.notes}
            onChange={handleInputChange}
            error={errors.notes}
          />
          <Controls.Input
            name="notes"
            label="Guest Notes"
            value={values.notes}
            onChange={handleInputChange}
            error={errors.notes}
          />
        </Grid>
        <Grid item xs={12}>
          <Controls.Checkbox
            name="isPermanent"
            label="Permanent Booking"
            value={values.isPermanent}
            onChange={handleInputChange}
          />

          <div>
            <Controls.Button type="submit" text="Submit" />
            <Controls.Button text="Reset" color="default" onClick={resetForm} />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
}

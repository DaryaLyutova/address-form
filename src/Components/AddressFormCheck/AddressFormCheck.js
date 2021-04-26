import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import * as Yup from 'yup';
import { CurrentAddressContext } from '../../context/CurrentAddressContext';
import { Formik, Form } from 'formik';
import TextField from '../TextField/TextField';
import Button from '../Button/Button';

const AddressFormCheck = () => {

    const currentAddress = React.useContext(CurrentAddressContext);

    const FORM_VALIDATION = Yup.object().shape({
        postal_code: Yup.number()
            .required('Required'),
        country: Yup.string()
            .required('Required'),
        administrative_area: Yup.string()
            .required('Required'),
        locality: Yup.string()
            .required('Required'),
        route: Yup.string()
            .required('Required'),
        street_number: Yup.string()
            .required('Required'),
    });

    return (
        <Formik
            initialValues={{ currentAddress }}
            validationSchema={FORM_VALIDATION}
            onSubmit={values => {
                console.log(values);
            }}>
            <Form>

                <Grid container spacing={2}>

                    <Grid item xs={12}>
                        <TextField
                            name="country"
                            label="Страна"
                            defaultValue={currentAddress.country}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            name="administrative_area"
                            label="Область, район"
                            defaultValue={currentAddress.administrative_area}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            name="locality"
                            label="Город"
                            defaultValue={currentAddress.locality}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            name="route"
                            label="Улица"
                            defaultValue={currentAddress.route}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField
                            name="street_number"
                            label="№ дома"
                            defaultValue={currentAddress.street_number}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField
                            name="postal_code"
                            label="Индекс"
                            defaultValue={currentAddress.postal_code}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Button type="submit">
                            Сохранить
                        </Button>
                    </Grid>

                </Grid>

            </Form>
        </Formik>
    )
}

export default AddressFormCheck;
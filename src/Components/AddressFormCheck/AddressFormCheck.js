import React from 'react';
import { Grid } from '@material-ui/core';
import * as Yup from 'yup';
import { CurrentAddressContext } from '../../context/CurrentAddressContext';
import { Formik, Form } from 'formik';
import TextField from '../TextField/TextField';
import Button from '../Button/Button';

const AddressFormCheck = (props) => {

    const currentAddress = React.useContext(CurrentAddressContext);

    const FORM_VALIDATION = Yup.object().shape({
        postal_code: Yup.number()
            .required('*обязательно для заполнения'),
        country: Yup.string()
            .required('*обязательно для заполнения'),
        administrative_area: Yup.string()
            .required('*обязательно для заполнения'),
        locality: Yup.string()
            .required('*обязательно для заполнения'),
        route: Yup.string()
            .required('*обязательно для заполнения'),
        street_number: Yup.string()
            .required('*обязательно для заполнения'),
    });

    const handlerSubmite = (values) => {
        props.onSubmit(values);
    }

    return (
        <Formik
            initialValues={currentAddress}
            validationSchema={FORM_VALIDATION}
            onSubmit={values => {
                handlerSubmite(values);
                console.log(values);
            }}>
            <Form>

                <Grid container spacing={2}>

                    <Grid item xs={12}>
                        <TextField
                            name="country"
                            label="Страна"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            name="administrative_area"
                            label="Область, район"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            name="locality"
                            label="Город"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            name="route"
                            label="Улица"
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField
                            name="street_number"
                            label="№ дома"
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField
                            name="postal_code"
                            label="Индекс"
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
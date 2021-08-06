import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FormField, Button, Label } from "semantic-ui-react";
import KodluyoruzTextInput from "../utilities/customFormControls/KodluyoruzTextInput";
import KodluyoruzRadioButton from "../utilities/KodluyoruzRadioButton";
export default function kisiKayit() {
    const initiValues = { id: " ", institutionsname: "",dutyNo:""}
    const schema = Yup.object({
        grantorName: Yup.string().required("Kişi Adı   zorunludur "),
        identity: Yup.string().required("TC Kimlik Numarası zorunludur "),
    


    })
    return (
        <div>
     <Formik
                initialValues={initiValues} validationSchema={schema}
            >
                <Form className="ui form">
          <KodluyoruzTextInput name="grantorName" placeholder="Kişi Adı"/>
          <KodluyoruzTextInput name="identity" placeholder="TC Kimlik Numarası"/>
          <Button color="green" type="submit">Ekle</Button> <br/>  <br/>

        </Form>
        
            </Formik>
        </div>
    )
}

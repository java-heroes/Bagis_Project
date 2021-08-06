import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FormField, Button, Label } from "semantic-ui-react";
import KodluyoruzTextInput from "../utilities/customFormControls/KodluyoruzTextInput";
import KodluyoruzRadioButton from "../utilities/KodluyoruzRadioButton";
export default function kurumKayit() {
    const initiValues = { id: " ", institutionsname: "",dutyNo:""}
    const schema = Yup.object({
        institutionsname: Yup.string().required("Kurum Adı   zorunludur "),
        dutyNo: Yup.string().required("Vergi Numarası zorunludur "),
    


    })
    return (
        <div>
     <Formik
                initialValues={initiValues} validationSchema={schema}
            >
                <Form className="ui form">
          <KodluyoruzTextInput name="institutionsname" placeholder="Kurum Adı"/>
          <KodluyoruzTextInput name="dutyNo" placeholder="Vergi Numarası"/>
          <Button color="green" type="submit">Ekle</Button> <br/>  <br/>

        </Form>
        
            </Formik>
        </div>
    )
}

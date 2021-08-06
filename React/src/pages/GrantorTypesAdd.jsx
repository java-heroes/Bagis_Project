import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FormField, Button, Label } from "semantic-ui-react";
import KodluyoruzTextInput from "../utilities/customFormControls/KodluyoruzTextInput";

export default function GrantorTypesAdd() {
    const initiValues = { grantorTypesId: " ", grantorTypesName: 10 }
    const schema = Yup.object({
        grantorTypesName: Yup.string().required("Bağış adı zorunlu ")

    })
    return (
        <div>
            <Formik
                initialValues={initiValues} validationSchema={schema}
            >
                <Form className="ui form">
          <KodluyoruzTextInput name="grantorTypesName" placeholder="Bağış Adı"/>
          <Button color="green" type="submit">Ekle</Button>
        </Form>
        
            </Formik>


        </div>
    )
}

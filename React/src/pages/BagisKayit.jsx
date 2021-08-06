import React ,{useState,useEffect }from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FormField, Button, Label } from "semantic-ui-react";
import UserAddService from '../services/UserAddService'
import KodluyoruzTextInput from "../utilities/customFormControls/KodluyoruzTextInput";
import KodluyoruzRadioButton from "../utilities/KodluyoruzRadioButton";
export default function BagisKayit() {
    const [formValues, setformValues] = useState(null)
    const SavedValues = { id: " ", declaration: "",email: " " ,password:" ",phone:"" ,paymentTotal:"",grantortype:""}
    const initiValues = { id: " ", declaration: "",email: " " ,password:" ",phone:"" ,paymentTotal:"",grantortype:""}
    useEffect(()=>{
        let userAddService =new UserAddService()
        userAddService.getUserAdd().then(result=>setformValues(result.data.data))
        },[])
    const schema = Yup.object({
        declaration: Yup.string().required("Açıklama   zorunludur "),
        email: Yup.string().required("Açıklama   zorunludur "),
        password: Yup.string().required("Açıklama   zorunludur "),
        phone: Yup.string().required("Telefon Numarası zorunludur "),
        paymentTotal: Yup.string().required("Bağış Miktarı zorunludur "),
        grantortype: Yup.string().required("Bağış Türü zorunludur "),



    })
    return (
        <div>
     <Formik
                initialValues={initiValues} validationSchema={schema}
            >
                <Form className="ui form">
          <KodluyoruzTextInput name="declaration" placeholder="Bağış Açıklaması"/>
          <KodluyoruzTextInput name="email" placeholder="Bağış Açıklaması"/>
          <KodluyoruzTextInput name="password" placeholder="Bağış Açıklaması"/>
          <KodluyoruzTextInput name="phone" placeholder="Telefon Numarası"/>
          <KodluyoruzTextInput name="paymentTotal" placeholder="Bağış Miktarı"/>
          <KodluyoruzTextInput name="grantortype" placeholder="Bağış Türü"/>
          <Button color="green" type="submit" onClick={()=>SavedValues} >Ekle</Button> <br/>  <br/>
          <KodluyoruzRadioButton />

        </Form>
        
            </Formik>
        </div>
    )
}

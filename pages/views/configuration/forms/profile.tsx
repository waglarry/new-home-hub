/* eslint-disable require-jsdoc */
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import React from "react";

type FormModel = {
    clientName: string;
    email: string;
    education: string;
    phoneNumber: string;
    gender: string;
    maritalStatus: string;
    country: string;
    city: string;
    region: string;
    digitalAddress: string;
    zipCode: string | number;
    postalAddress: string;
    residentialAddress: string;
    yes: string;
    no: string;
    condition: string;
    allergies: string;
    medicalHistory: string;
    school: string;
    dateCommenced: Date | string;
    dateCompleted: Date | string;
    certificate: any;
    highesteducation: string;
};

export default function Profile() {
    const phoneRegExp =
        /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
    return (
        <>
            {/* Form */}
            <div className="mt-10 px-[5rem]">
                <Formik<FormModel>
                    initialValues={{
                        clientName: "",
                        email: "",
                        education: "",
                        phoneNumber: "",
                        gender: "",
                        maritalStatus: "",
                        country: "",
                        city: "",
                        region: "",
                        digitalAddress: "",
                        zipCode: "",
                        postalAddress: "",
                        residentialAddress: "",
                        yes: "",
                        no: "",
                        condition: "",
                        allergies: "",
                        medicalHistory: "",
                        school: "",
                        dateCommenced: "",
                        dateCompleted: "",
                        certificate: "",
                        highesteducation: "",
                    }}
                    validationSchema={Yup.object({
                        clientName: Yup.string()
                            .max(5, "Must be 40 characters or less")
                            .required("Required field"),
                        email: Yup.string()
                            .email("Invalid email")
                            .required("required"),
                        phoneNumber: Yup.string()
                            .matches(phoneRegExp, "Phone number is not valid")
                            .required("required"),
                        education: Yup.string().required("required"),
                        gender: Yup.string().required("required"),
                        maritalStatus: Yup.string().required("required"),
                        country: Yup.string().required("required"),
                        city: Yup.string().required("required"),
                        region: Yup.string().required("required"),
                        digitalAddress: Yup.string().required("required"),
                        zipCode: Yup.string().required("required"),
                        postalAddress: Yup.string().required("required"),
                        residentialAddress: Yup.string().required("required"),
                        condition: Yup.string(),
                        allergies: Yup.string(),
                        medicalHistory: Yup.string(),
                        highesteducation: Yup.string().required("required"),
                        school: Yup.string().required("required"),
                        dateCommenced: Yup.string().required("required"),
                        dateCompleted: Yup.string().required("required"),
                    })}
                    onSubmit={(values) => {
                        alert(JSON.stringify(values));
                    }}
                >
                    {({
                        handleSubmit,
                        values,
                        handleChange,
                        setFieldValue,
                    }) => (
                        <form
                            onSubmit={handleSubmit}
                            className="bg-white px-[2.5rem] pb-20"
                        >
                            {/* Basic */}
                            <p className="font-bold py-6">Bank Information</p>
                            <div className="grid grid-cols-2 grid-rows-2 gap-y-5">
                                <div>
                                    <label
                                        htmlFor="clientName"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Bank Name
                                    </label>
                                    <Field
                                        type="text"
                                        id="bankName"
                                        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-11/12 p-2.5"
                                        placeholder="Zenith Bank"
                                        value={values.bankName}
                                        onChange={handleChange}
                                    />
                                    <p className="font-medium text-red-700">
                                        <ErrorMessage name="bankName" />
                                    </p>
                                </div>
                                <div>
                                    <label
                                        htmlFor="school"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Admin Name
                                    </label>
                                    <Field
                                        type="text"
                                        id="Admin"
                                        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-11/12 p-2.5"
                                        placeholder="Admin"
                                        value={values.Admin}
                                        onChange={handleChange}
                                    />
                                    <p className="font-medium text-red-700">
                                        <ErrorMessage name="name" />
                                    </p>
                                </div>
                                <div>
                                    <label
                                        htmlFor="education"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Phone
                                    </label>
                                    <Field
                                        type="text"
                                        id="phoneNumber"
                                        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-11/12 p-2"
                                        placeholder="+233"
                                        value={values.phoneNumber}
                                        onChange={handleChange}
                                    />
                                    <p className="font-medium text-red-700">
                                        <ErrorMessage name="phoneNumber" />
                                    </p>
                                </div>
                            </div>

                            {/* Address */}
                            <p className="font-bold py-6">Address:</p>
                            <div className="grid grid-cols-2 grid-rows-2 gap-y-5">
                                <div>
                                    <label
                                        htmlFor="country"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Country <span style={{color: 'red'}}>*</span>
                                    </label>
                                    <select
                                        id="country"
                                        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-11/12 p-2.5"
                                        value={values.country}
                                        onChange={handleChange}
                                    >
                                        <option selected>
                                            ·· Select option ··
                                        </option>
                                        <option>Ghana</option>
                                        <option>Gambia</option>
                                        <option>Holand</option>
                                        <option>Hungary</option>
                                    </select>
                                    <p className="font-medium text-red-700">
                                        <ErrorMessage name="country" />
                                    </p>
                                </div>
                                <div>
                                    <label
                                        htmlFor="city"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Branch
                                    </label>
                                    <Field
                                        type="text"
                                        id="city"
                                        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-11/12 p-2.5"
                                        placeholder="Enter city"
                                        value={values.city}
                                        onChange={handleChange}
                                    />
                                    <p className="font-medium text-red-700">
                                        <ErrorMessage name="city" />
                                    </p>
                                </div>
                                <div>
                                    <label
                                        htmlFor="region"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Region
                                    </label>
                                    <select
                                        id="region"
                                        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-11/12 p-2.5"
                                        value={values.region}
                                        onChange={handleChange}
                                    >
                                        <option selected>
                                            ·· Select option ··
                                        </option>
                                        <option>#</option>
                                        <option>#</option>
                                        <option>#</option>
                                        <option>#</option>
                                    </select>
                                    <p className="font-medium text-red-700">
                                        <ErrorMessage name="region" />
                                    </p>
                                </div>
                                <div>
                                    <label
                                        htmlFor="digitalAddress"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Digital Address <span style={{color: 'red'}}>*</span>
                                    </label>
                                    <Field
                                        type="text"
                                        id="digitalAddress"
                                        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-11/12 p-2.5"
                                        placeholder="Enter your digital address here"
                                        value={values.digitalAddress}
                                        onChange={handleChange}
                                    />
                                    <p className="font-medium text-red-700">
                                        <ErrorMessage name="digitalAddress" />
                                    </p>
                                </div>
                                <div>
                                    <label
                                        htmlFor="zipCode"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Zip code
                                    </label>
                                    <Field
                                        type="number"
                                        id="zipCode"
                                        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-11/12 p-2.5"
                                        placeholder="Enter your zipcode here"
                                        value={values.zipCode}
                                        onChange={handleChange}
                                    />
                                    <p className="font-medium text-red-700">
                                        <ErrorMessage name="zipCode" />
                                    </p>
                                </div>
                                <div>
                                    <label
                                        htmlFor="postalAddress"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Postal Address
                                    </label>
                                    <Field
                                        type="text"
                                        id="postalAddress"
                                        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-11/12 p-2.5"
                                        placeholder="Enter your postal address here"
                                        value={values.postalAddress}
                                        onChange={handleChange}
                                    />
                                    <p className="font-medium text-red-700">
                                        <ErrorMessage name="postalAddress" />
                                    </p>
                                </div>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </>
    );
}

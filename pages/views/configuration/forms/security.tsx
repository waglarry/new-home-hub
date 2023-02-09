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

export default function Security() {
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
                            <p className="font-bold py-6">Password</p>
                            <div className="grid grid-cols-2 grid-rows-2 gap-y-5">
                                <div>
                                    <label
                                        htmlFor="clientName"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Current Password
                                    </label>
                                    <Field
                                        type="password"
                                        id="password"
                                        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-11/12 p-2.5"
                                        placeholder="password"
                                        value={values.password}
                                        onChange={handleChange}
                                    />
                                    <p className="font-medium text-red-700">
                                        <ErrorMessage name="password" />
                                    </p>
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Security Question
                                    </label>
                                    <Field
                                        type="text"
                                        id="text"
                                        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-11/12 p-2.5"
                                        placeholder="Your mother's name"
                                        value={values.text}
                                        onChange={handleChange}
                                    />
                                    <p className="font-medium text-red-700">
                                        <ErrorMessage name="text" />
                                    </p>
                                </div>
                                <div>
                                    <label
                                        htmlFor="education"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        New Password
                                    </label>
                                    <Field
                                        type="password"
                                        id="password"
                                        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-11/12 p-2"
                                        value={values.password}
                                        onChange={handleChange}
                                    />
                                    <p className="font-medium text-red-700">
                                        <ErrorMessage name="password" />
                                    </p>
                                </div>
                                <div>
                                    <label
                                        htmlFor="condition"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Confirm New Password
                                    </label>
                                    <Field
                                        type="password"
                                        id="password"
                                        className="bg-[#CDCDCF] border border-gray-300 text-[#58575F] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-11/12 p-2.5"
                                        value={values.password}
                                        onChange={handleChange}
                                    />
                                    <p className="font-medium text-red-700">
                                        <ErrorMessage name="password" />
                                    </p>
                                </div>
                                <div>
                                    <label
                                        htmlFor="country"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Two Step Verification
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
                                        <option>Enabled</option>
                                        <option>#</option>
                                    </select>
                                    <p className="font-medium text-red-700">
                                        <ErrorMessage name="country" />
                                    </p>
                                </div>
                            </div>

                            {/* Address */}
                            <p className="font-bold py-6">Devices You're Logged Into</p>
                            <div className="grid grid-cols-2 grid-rows-2 gap-y-5">
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </>
    );
}

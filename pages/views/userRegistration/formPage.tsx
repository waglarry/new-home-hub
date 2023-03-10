/* eslint-disable react/no-unknown-property */
/* eslint-disable require-jsdoc */
import React from "react";
import Head from "next/head";
import Header from "../../../components/header";
import Layout from "../../../components/layout";
import Link from "next/link";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import BusinessForm from "./forms/business";
import PersonalForm from "./forms/personal";

export default function FormPage() {
    return (
        <>
            <Layout>
                <Head>
                    <title>Client List</title>
                    <meta
                        name="description"
                        content="Generated by create next app"
                    />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                </Head>

                <Header title={"User Registration"} number={5} />
                {/* Code goes into the main tag */}
                <main className="bg-[#FAFAFA] ">
                    {/* Bottom menu */}
                    <div className="flex items-center bg-white justify-between border-b px-[5rem] py-3">
                        <div className="text-[#FA790F]">
                            User registration
                            <span className="text-black">/View Details</span>
                        </div>
                        <Link href={"/"}>
                            <button className="border border-[#D0650D] text-[#D0650D] rounded-md p-1 px-9 mr-2 hover:text-orange-300">
                                Cancel
                            </button>
                            <button className="bg-[#D0650D] text-white rounded-md p-1 px-10 hover:shadow-md hover:shadow-[#D0650D]">
                                Save
                            </button>
                        </Link>
                    </div>

                    <Tabs>
                        <div className="flex items-end  h-[4.6rem] justify-between px-[5rem]">
                            <TabList className="flex flex-row gap-x-[8rem] ">
                                <Tab className="active:border-b focus:underline focus:decoration-[#FA790F] focus:text-[#FA790F]">
                                    Personal Information
                                </Tab>
                                <Tab className="active:border-b focus:underline focus:decoration-[#FA790F] focus:text-[#FA790F]">
                                    Business Information
                                </Tab>
                            </TabList>
                        </div>

                        <TabPanel>
                            <PersonalForm />
                        </TabPanel>
                        <TabPanel>
                            <BusinessForm />
                        </TabPanel>
                    </Tabs>
                </main>
            </Layout>
        </>
    );
}

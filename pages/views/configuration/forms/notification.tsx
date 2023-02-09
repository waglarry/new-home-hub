/* eslint-disable require-jsdoc */
import React from "react";

export default function Notification() {
    return (
        <>
            {/* Form */}
            <div className="mt-10 px-[5rem]">
                <div className="bg-white px-[2.5rem] pb-20">
                    <div className="border-b pb-5">
                        <p className="font-bold py-6">General</p>
                        <div className="flex flex-row justify-between mb-5">
                            <div>Receive messages from Homehub</div>
                            <div>Switch</div>
                        </div>
                        <div className="flex flex-row justify-between mb-5">
                            <div>Receive messages about your account</div>
                            <div>Switch</div>
                        </div>
                        <div className="flex flex-row justify-between mb-5">
                            <div>Receive updates on new policies</div>
                            <div>Switch</div>
                        </div>
                        <div className="flex flex-row justify-between mb-5">
                            <div>Receive notifications when clients send messages</div>
                            <div>Switch</div>
                        </div>
                        <div className="flex flex-row justify-between mb-5">
                            <div>Always ask for password when going to perform an action</div>
                            <div>Switch</div>
                        </div>
                    </div>
                    <div className="border-b pb-5">
                        <p className="font-bold py-6">Reminders</p>
                        <div className="flex flex-row justify-between mb-5">
                            <div>Receive reminders for appointments</div>
                            <div>Switch</div>
                        </div>
                        <div className="flex flex-row justify-between mb-5">
                            <div>Receive reminders when billings are overdue a week after</div>
                            <div>Switch</div>
                        </div>
                        <div className="flex flex-row justify-between mb-5">
                            <div>Receive reminders when loans are due 3 days before</div>
                            <div>Switch</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

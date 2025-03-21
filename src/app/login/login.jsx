"use client"

import Button from "../components/Button"
import Input from "../components/Input"

export default function Login() {
    return  <div className="bg-blue-500 w-screen h-screen flex justify-center items-center">
                <div className="bg-white rounded-xl border p-8 min-w-48">
                    <h5 className="text-red-300">Sign-In</h5>
                    <Input placeholder="Username" type="text"/>
                    <Input placeholder="Email" type="text"/>
                    <div className="bg-blue-500 flex justify-center pt-4">
                        <Button variant="secondary" text="Sign-in"/>
                    </div>
                </div>
    <h1 className="bg-blue-500 items-center justify-center"></h1>
            </div>
}

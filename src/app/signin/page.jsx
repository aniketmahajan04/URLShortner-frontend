// "use client"

import Button from "../components/Button"
import Input from "../components/Input"

// export default function Signin() {

//     return <div className="w-screen h-screen flex justify-center items-center">
//         <div className="border p-2">
//             <input type="text" placeholder="username"></input>
//             <input type="password" placeholder="password"></input>

//             <button onClick={() => {
//                 axios.post("http://localhost:3000/api/v1/signin")
//             }}>Sign in</button>
//         </div>

//     </div>
// }

export default function Signin() {
    return <div className="w-screen h-screen flex justify-center items-center">
        <div>
            <h5>Sing-In</h5>
            <Input placeholder={"Username"} type={"text"}/>
            <Input placeholder={"Email"} type={"text"}/>
            <Button variant={"secondary"} text={"signin"}/>
        </div>
    </div>
}
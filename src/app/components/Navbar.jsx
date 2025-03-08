import  Button  from "./Button";

function Navbar(){
    return <div className="container
                            bg-blue-500
                            flex
                            justify-around
                            items-center
                            h-18">
        <div>
            <h6 className="text-white">nike</h6>
        </div>
        <div className="flex justify-between m-4">
            <Button text={"sign-up"} variant={"primary"} />
            <Button text={"sign-in"} variant={"primary"}/>
        </div>
    </div>
}

export default Navbar;
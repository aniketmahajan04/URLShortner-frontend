import  Button  from "./Button";

function Navbar(){
    return <header className="container
                            bg-blue-500
                            flex
                            justify-around
                            items-center
                            h-16
                            px-[100px]">
        <div>
            <h6 className="text-white text-lg font-bold ml-4">nike</h6>
        </div>
        <div className=" ml-auto flex space-x-4">
            <Button text={"sign-up"} variant={"primary"} />
            <Button text={"sign-in"} variant={"primary"}/>
        </div>
    </header>                  
}

export default Navbar;
export default function OneWayBindingComponent(){
    var username= "John";
    return(
        <div className="container">
            <h2>User Details</h2>
            UserName:
            <input type="text" value={username} onChange={username} />
            <br/>
            Hello {username}

        </div>
    )
}
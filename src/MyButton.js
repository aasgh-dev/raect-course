let name="Ahmed"

export default function MyButton(){
    console.log(name);

    return (
        <div>
            <button onClick={buttonClicked}>Click Me</button>
            <h1>{name}</h1>
        </div>
    )
}

function buttonClicked(){
    name="Abod"
}
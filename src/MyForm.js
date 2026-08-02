import { useState } from "react"

export default function MyForm() {
    const [formInput, setFormInput] = useState({ name: "", email: "" });
    // const [emailInput,setEmailInput]=useState("")

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
        }}>
           <label>Name:</label>
            <input 
                value={formInput.name} 
                onChange={(e) => {
                    setFormInput({ ...formInput, name: e.target.value });
                }} 
            />

            <hr />

            <label>Email:</label>
            <input 
                value={formInput.email} 
                onChange={(e) => {
                    setFormInput({ ...formInput, email: e.target.value });
                }} 
            />

            <hr></hr>

            <button type="submit">Submit</button>
        </form>
    )
}
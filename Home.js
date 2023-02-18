


import { useNavigate } from "react-router-dom"
export const Home = ()=>{
    const navigate = useNavigate()
    return(
        <>
        <div>
            <h1>Welcome to home page</h1>
            <button onClick= {() =>navigate('order-summary')}>Place order</button>
        </div>
        </>
    )

}
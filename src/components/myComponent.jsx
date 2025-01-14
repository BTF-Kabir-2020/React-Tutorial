export const MyComponent = ({ a, b = "salam" }) => {
    return (
        <p>
            {b} {a ? a : "your name"}  
        </p>
    )
}

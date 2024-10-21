// também é possível criar components com arrow functions.
const StatusText = () => {
    const status = true;

    /* não é possivel usar if/else mas podemos usar operadores ternarios*/
    return <h2
        style={{
            color: status ? "#00ff9f" : "f64348"
        }}
    >
        Current status: {status ? "ON" : "OFF"}</h2>
}

export default StatusText;
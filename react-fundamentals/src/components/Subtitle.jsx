function sum(x, y) {
    return x + y;
}

export default function Subtitle() {

    // podemos adicionar também funções para obter resultados de forma dinamica
    return <h2 style={{ color: "#e2e2e2" }}
    >
        It's easy, like 1 + 1 is {sum(1, 1)}.
    </h2>
}
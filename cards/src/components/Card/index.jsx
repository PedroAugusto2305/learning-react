import Button from "../Button";
import Poster from "../Poster";
import Text from "../Text";
import Title from "../Title";
import "./style.css";

export default function Card() {
    return (
        <div className="container">
            <Poster />
            <div className="content">
            <Title />
            <Text />
            <Button />
            </div>
        </div>
    )
}
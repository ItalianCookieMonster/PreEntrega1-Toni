//Boostrap imports
import Container from "react-bootstrap/Container"
import Spinner from "react-bootstrap/Spinner"

const Loading = () => {
    return (
        <Container className="text-center">
            <Spinner animation="border" role="status" className="mt-5">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </Container>
    )
}

export default Loading
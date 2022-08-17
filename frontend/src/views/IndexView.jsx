import Accordion from 'react-bootstrap/Accordion';
import { reposData } from '../static/data/reposData';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export const IndexView = _ => {
    return (
        <div className='index-view'>
            <Navbar bg="dark">
                <Container>
                    <Navbar.Brand className='text-light'>Avenue</Navbar.Brand>
                </Container>
            </Navbar>

            {
                reposData.map((repo, i) => (
                    <Accordion defaultActiveKey="1" className='py-1 mx-5'>
                        <Accordion.Item eventKey={i}>
                            <Accordion.Header className='ff-poppins'> {repo.name} </Accordion.Header>
                            <Accordion.Body className='ff-lato'>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr><th>Responsabilidade</th></tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                {
                                                    repo.responsability !== "" ?
                                                        repo.responsability :
                                                        "Pesquisar..."
                                                }
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>

                                <Table striped bordered hover>
                                    <thead>
                                        <tr><th>Squad responsável</th></tr>
                                    </thead>
                                    <tbody>
                                        <tr><td>{repo.squad !== null ? repo.squad.name : "Empty..."}</td></tr>
                                    </tbody>
                                </Table>

                                {
                                    repo.technologies.list.length > 0 &&
                                    <Table striped bordered hover>
                                        <thead>
                                            <tr><th>Tecnologias</th></tr>
                                        </thead>
                                        <tbody>

                                            {
                                                repo.technologies.list.map((tech, k) => (
                                                    <tr>
                                                        <td>
                                                            {tech.name}
                                                        </td>

                                                        <td>{tech.version}</td>
                                                    </tr>
                                                ))
                                            }

                                        </tbody>
                                    </Table>
                                }
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                ))
            }
        </div>
    )
}
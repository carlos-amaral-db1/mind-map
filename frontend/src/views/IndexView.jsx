import Accordion from 'react-bootstrap/Accordion';
import { reposData } from '../static/data/reposData';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Stack from 'react-bootstrap/Stack';
import Alert from 'react-bootstrap/Alert';

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
                    <div className='list-item m-5 bordered bordered'>
                        <Stack
                            className='item-header bg-dark text-light p-3'
                            direction="horizontal"
                            gap={3}
                        >
                            <div>
                                <h3 className="m-0">{repo.name}</h3>
                                <small className="text-muted">{repo.subtitle}</small>
                            </div>

                            <a className='ms-auto' href={repo.githubLink}>Github</a>
                        </Stack>

                        <div className="item-content">
                            {
                                repo.observations.isEmpty &&
                                <Alert key={i} variant={"danger"}>
                                    <b>Importante!</b> Este repositório está vazio
                                </Alert>
                            }

                            {
                                !repo.observations.branchMainIsUpdated &&
                                <Alert key={i} variant={"warning"}>
                                    <b>Alerta!</b> A branch main está desatualizada
                                </Alert>
                            }

                            {
                                !repo.observations.readmeIsUpdated &&
                                <Alert key={i} variant={"warning"}>
                                    <b>Alerta!</b> O readme está desatualizado
                                </Alert>
                            }

                            <Table striped bordered hover className='mt-2'>
                                <thead>
                                    <tr>
                                        <th colSpan={12}>Tecnologias</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {

                                        repo.technologies.list.map((tech, i) => (
                                            <tr>
                                                <td>{tech.name}</td>
                                                <td>{tech.version}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </Table>


                            <Table striped bordered hover className='mt-2'>
                                <thead>
                                    <tr>
                                        <th colSpan={12}>
                                            Anotações
                                            <br />
                                            <small className="fw-light text-muted">Por: Carlos Amaral</small>
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {

                                        repo.observations.suggestionsList.map((note, i) => (
                                            <tr>
                                                <td>{note}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </Table>

                        </div>


                    </div>
                ))
            }
        </div>
    )
}
import Accordion from 'react-bootstrap/Accordion';
import { reposData } from '../static/data/reposData';
import Table from 'react-bootstrap/Table';
import InputGroup from 'react-bootstrap/InputGroup';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';

export const IndexView = _ => {
    return (
        <div className='index-view'>
            <Navbar bg="dark py-4">
            </Navbar>

            <h1 className='text-center m-5'>Avenue</h1>

            <InputGroup className="w-50 mx-auto my-5">
                <Form.Control
                    placeholder="Search..."
                    aria-label="Search..."
                />
                <InputGroup.Text>Enviar</InputGroup.Text>
            </InputGroup>

            <Accordion defaultActiveKey={0} className="mx-5">
                {
                    reposData.map((r, index) => (
                        <Accordion.Item eventKey={index}>
                            <Accordion.Header>
                                <p>
                                    <b>{r.name}</b>
                                    <br />
                                    <small className="text-muted">{r.subtitle}</small>
                                </p>
                            </Accordion.Header>

                            <Accordion.Body>
                                {
                                    r.observations.isEmpty &&
                                    <Alert variant='danger'>
                                        <b>Importante!</b> <br /> Repositorio esta vazio
                                    </Alert>
                                }

                                {
                                    r.observations.branchMainIsUpdated &&
                                    <Alert variant='warning'>
                                        <b>Alerta!</b> <br /> A branch main nao esta atualizada
                                    </Alert>
                                }

                                {
                                    r.observations.readmeIsUpdated &&
                                    <Alert variant='warning'>
                                        <b>Alerta!</b> <br /> README nao esta atualizado
                                    </Alert>
                                }

                                {
                                    r.technologies.list.length > 0 &&
                                    <div className='mt-5'>
                                        <h4>Tecnologias</h4>
                                        <Toast show={true} className="w-100">
                                            {
                                               r.technologies.list.map((technology, k)=> (
                                                <Toast.Body>
                                                    {
                                                        k >= r.technologies.list.length - 1 ?
                                                        <a href={r.technologies.dependenciesPackageLink} target="_blank">Ver mais</a>

                                                        :

                                                        <p>Name</p>
                                                    }
                                                </Toast.Body>
                                               ))
                                            }
                                        </Toast>
                                    </div>
                                }
                            </Accordion.Body>
                        </Accordion.Item>
                    ))
                }
            </Accordion>
        </div>
    )
}
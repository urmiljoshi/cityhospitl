import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';


function ListAppointment(props) {
    const [data, setData] = useState([]);

    const history = useHistory();

    const getData = () => {
        let localData = JSON.parse(localStorage.getItem("apt"));

        // console.log(localData);
        setData(localData);
    }

    useEffect(() => {
        getData();
    }, [])

    const handldelet = (id) => {
        let localdata = JSON.parse(localStorage.getItem("apt"));
        let data = localdata.filter((l) => l.id !== id);
        console.log(localdata);
        localStorage.setItem("apt", JSON.stringify(data));

        history.push("/Appointment")
    }

    const handlEdit = (data) => {
        console.log(data);

        history.push("/Appointment", data)
    }

    return (

        <div>
            <div className='row'>
                    <div>
                        <NavLink to={"/Appointment"}>Appointment</NavLink>
                    </div>
                </div>
            <div className='row'>
                {
                    data.map((d, i) => (
                        <div key={i} className='col-md-4'>
                            <Card
                                style={{
                                    width: '18rem'
                                }}
                            >
                                <CardBody>
                                    <CardTitle tag="h5">
                                        {d.name}
                                    </CardTitle>
                                    <CardSubtitle
                                        className="mb-2 text-muted"
                                        tag="h6"
                                    >
                                        {d.phone}<br />
                                        {d.date}<br />
                                        {d.department}<br />
                                        {d.email}<br />
                                        {d.message}<br />
                                        {d.Gender}<br />
                                        {d.Hobby}<br />
                                        <button onClick={() => handlEdit(d)}>Edit</button>
                                        <button onClick={() => handldelet(d.id)}>Delete</button>
                                    </CardSubtitle>
                                </CardBody>
                            </Card>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default ListAppointment;
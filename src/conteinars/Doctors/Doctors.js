import React from 'react';
import { NavLink } from 'react-router-dom';
function Doctors(props) {

    const orgData = [
        {   
            id: 101,
            img: <img src="../assets/img/doctors/doctors-1.jpg" className="img-doctor" alt />,
            name: 'Atha Smith',
            designation: 'Chief Medical Officer',
            description: 'Duis sagittis rutrum neque, quis tincidunt arcu pretium ac.',
        },

        {   
            id: 102,
            img: <img src="../assets/img/doctors/doctors-2.jpg" className="img-doctor" alt />,
            name: 'John White',
            designation: 'Anesthesiologist',
            description: 'Aenean ac turpis ante. Mauris velit sapien.',
        },

        {   
            id: 103,
            img: <img src="../assets/img/doctors/doctors-3.jpg" className="img-doctor" alt />,
            name: 'Umika Loha',
            designation: 'Cardiology',
            description: 'Curabitur luctus eleifend odio. Phasellus placerat mi.',
        },

        {   
            id: 104,
            img: <img src="../assets/img/doctors/doctors-4.jpg" className="img-doctor" alt />,
            name: 'Daimy Smith',
            designation: 'Neurosurgeon',
            description: 'Morbi vulputate, tortor nec pellentesque molestie, eros nisi ornare purus.',
        },

    ]
            
    return (
        <div>
            {
                orgData.map((d, i) => (
                    <div key={i}>
                        <section id="doctors" className="doctors">
                            <div className="container">
                                <div className="row">
                                    <div className='col-lg-6'>
                                        <NavLink to={{
                                            pathname:"/DoctorList",
                                            state:{id : d.id}
                                        }}>
                                            <div className="member d-flex align-items-start">
                                                <div className="pic">{d.img}</div>
                                                <div className="member-info">
                                                    <h4>{d.name}</h4>
                                                    <span>{d.designation}</span>
                                                    <p>{d.description}</p>
                                                    <div className="social">
                                                        <a href><i className="ri-twitter-fill" /></a>
                                                        <a href><i className="ri-facebook-fill" /></a>
                                                        <a href><i className="ri-instagram-fill" /></a>
                                                        <a href> <i className="ri-linkedin-box-fill" /> </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                ))
            }
        </div>
    )
}
export default Doctors;



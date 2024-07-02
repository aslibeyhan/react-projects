//import React from 'react'
import PropTypes from 'prop-types';

function Course({ course }) {
    const { title, description, price, image } = course;
    return (
        <div className="course">
            <div>
                <img src={image} width={270} height={250} />
                <h4 className='course-title'>{title}</h4>
                <p className='course-desc'>{description}</p>
                <h3 className='course-price'>{price} ₺</h3>
                <a className='course-link' href='{link}'>Kursu satın almak için tıkayın</a>


            </div>
        </div>
    )
}

Course.propTypes = {
    course: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
};
export default Course
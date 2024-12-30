import React from 'react';
import PropTypes from 'prop-types';

const ProfileCard = (props) => {
    console.log(props);
    return (
        <>
            <div style={{ border: "1px solid black", margin: "10px", padding: "10px", borderRadius: "10px" }}>
                <p style={{ fontSize: "18px", fontWeight: "bold" }}>Name: {props?.name}</p>
                <p>Age: {props?.age}</p>
                <p>Profession: {props?.profession}</p>
            </div>
        </>
    );
};

ProfileCard.defaultProps = {
    name: "Unknown",
    age: "N/A",
    profession: "Unemployed",
};

ProfileCard.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    profession: PropTypes.string.isRequired,
};

export default ProfileCard;

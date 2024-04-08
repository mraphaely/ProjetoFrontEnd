import './Profile.css'

// eslint-disable-next-line react/prop-types
const Profile = ({ image, name, location, role }) => {
    return (
        < >
            <img src={image} alt={""} />
            <h1 id='name'>{name}</h1>
            <p id='location'>{location}</p>
            <p id='role'>{role}</p>
         
        </>
    )
}

export default Profile;

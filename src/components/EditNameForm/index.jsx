import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../app/userSlice";
import { selectUser } from "../../app/selectors";
import { getUserProfile, updateUserProfile } from "../../api/apiService";
import "./editNameForm.scss";

function EditNameForm() {
    const dispatch = useDispatch();
    const { firstName, lastName } = useSelector(selectUser);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const userProfile = await getUserProfile();
                dispatch(setUser(userProfile.body));
            } catch (error) {
                console.error("Erreur lors de la récupération du profil utilisateur:", error);
            }
        };

        fetchUserProfile();
    }, [dispatch]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const updatedData = {
            firstName: formData.get("firstName"),
            lastName: formData.get("lastName"),
        };

        try {
            const updatedUser = await updateUserProfile(updatedData);
            dispatch(setUser(updatedUser.body));
            setIsEditing(false);
        } catch (error) {
            console.error("Erreur lors de la mise à jour du profil utilisateur:", error);
        }
    };

    return (
        <>
            {!isEditing ? (
                <div className="editName">
                    <h2>{firstName} {lastName}!</h2>
                    <button className="edit-button" onClick={() => setIsEditing(true)}>
                        Edit Name
                    </button>
                </div>
            ) : (
                <form className="editNameForm" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-wrapper">
                            <label className="sr-only" htmlFor="firstname">
                                Firstname
                            </label>
                            <input
                                className="editNameinput"
                                type="text"
                                id="firstname"
                                name="firstName"
                                defaultValue={firstName}
                            />
                        </div>
                        <div className="input-wrapper">
                            <label className="sr-only" htmlFor="lastname">
                                Lastname
                            </label>
                            <input
                                className="editNameinput"
                                type="text"
                                id="lastname"
                                name="lastName"
                                defaultValue={lastName}
                            />
                        </div>
                    </div>
                    <div className="input-group">
                        <button type="submit" className="edit-button">
                            Save
                        </button>
                        <button
                            type="button"
                            className="edit-button edit-button-danger"
                            onClick={() => setIsEditing(false)}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            )}
        </>
    );
}

export default EditNameForm;
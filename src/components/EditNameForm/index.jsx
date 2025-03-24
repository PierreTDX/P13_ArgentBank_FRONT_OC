import { useState } from "react"
import { useSelector } from "react-redux"
import { selectUser } from "../../app/selectors"
// import { useUserProfile } from "../../hooks/useUserProfile"
import { useUpdateUserProfile } from "../../hooks/useUpdateUserProfile"
import "./editNameForm.scss"

function EditNameForm() {
    const { firstName, lastName } = useSelector(selectUser)
    const [isEditing, setIsEditing] = useState(false)

    // Utilisation du hook pour récupérer le profil utilisateur = pas besoin grace à Redux
    // useUserProfile()

    // Utilisation du hook pour la mise à jour du profil
    const { handleUpdate } = useUpdateUserProfile()

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const updatedData = {
            firstName: formData.get("firstName"),
            lastName: formData.get("lastName"),
        };
        setIsEditing(false);

        handleUpdate(updatedData); // Appel de la fonction du hook pour mettre à jour
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
                    <div className="input-group column">
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
                                placeholder="firstname"
                                required
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
                                placeholder="lastname"
                                required
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

export default EditNameForm
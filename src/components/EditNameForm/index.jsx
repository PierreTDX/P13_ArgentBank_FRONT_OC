import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "./../../app/userSlice"; // Import de l'action Redux
import "./editNameForm.scss";

function EditNameForm() {
    const dispatch = useDispatch();

    // Récupération des valeurs actuelles depuis Redux
    const { firstName, lastName } = useSelector((state) => state.user);

    // États locaux temporaires pour l'édition
    const [isEditing, setIsEditing] = useState(false);
    const [tempFirstName, setTempFirstName] = useState(firstName);
    const [tempLastName, setTempLastName] = useState(lastName);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Mise à jour des valeurs dans le store Redux seulement au "Save"
        dispatch(setUser({ firstName: tempFirstName, lastName: tempLastName }));

        setIsEditing(false);
    };

    return (
        <>
            {!isEditing ? (
                <div className="editName">
                    <h2>{firstName} {lastName}!</h2>
                    <button className="edit-button" onClick={() => {
                        setTempFirstName(firstName); // Réinitialiser les inputs
                        setTempLastName(lastName);
                        setIsEditing(true);
                    }}>
                        Edit Name
                    </button>
                </div>
            ) : (
                <form className="editNameForm" onSubmit={handleSubmit}>
                    <div className="input-group column">
                        <div className="input-wrapper">
                            <label className="sr-only" htmlFor="firstname"> Firstname </label>
                            <input
                                className="editNameinput"
                                type="text"
                                id="firstname"
                                name="firstname"
                                value={tempFirstName}
                                onChange={(e) => setTempFirstName(e.target.value)}
                            />
                        </div>
                        <div className="input-wrapper">
                            <label className="sr-only" htmlFor="lastname"> Lastname </label>
                            <input
                                className="editNameinput"
                                type="text"
                                id="lastname"
                                name="lastname"
                                value={tempLastName}
                                onChange={(e) => setTempLastName(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="input-group">
                        <button type="submit" className="edit-button"> Save </button>
                        <button
                            type="button"
                            className="edit-button edit-button-danger"
                            onClick={() => setIsEditing(false)} // Annule sans rien modifier
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
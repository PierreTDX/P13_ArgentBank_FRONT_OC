import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../app/userSlice";
import { selectUser } from "../../app/selectors";
import { getUserProfile } from "../../api/apiService"; // Assure-toi que le chemin est correct
import "./editNameForm.scss";

function EditNameForm() {
    const dispatch = useDispatch();
    const { firstName, lastName } = useSelector(selectUser);
    const [isEditing, setIsEditing] = useState(false);

    // Utiliser useEffect pour récupérer les données de l'utilisateur
    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const userProfile = await getUserProfile();
                dispatch(setUser(userProfile.body)); // Passer toutes les données du profil à Redux
            } catch (error) {
                console.error("Erreur lors de la récupération du profil utilisateur:", error);
            }
        };

        fetchUserProfile();
    }, [dispatch]); // Appel uniquement lors du montage du composant

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        // Mettez à jour le profil utilisateur dans Redux avec les nouvelles valeurs du formulaire
        dispatch(setUser({
            firstName: formData.get("firstname"),
            lastName: formData.get("lastname")
        }));
        setIsEditing(false); // Ferme le mode d'édition après la soumission
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
                                name="firstname"
                                defaultValue={firstName} // Utiliser la valeur par défaut de Redux
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
                                name="lastname"
                                defaultValue={lastName} // Utiliser la valeur par défaut de Redux
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
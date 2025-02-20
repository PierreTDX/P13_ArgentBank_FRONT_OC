import { useState } from "react";
import "./editNameForm.scss";

function EditNameForm() {
    const [isEditing, setIsEditing] = useState(false);
    const [firstName, setFirstName] = useState("Tony");
    const [lastName, setLastName] = useState("Jarvis");

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        setFirstName(formData.get("firstname"));
        setLastName(formData.get("lastname"));
        setIsEditing(false);
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
                    <div className="input-group colum">
                        <div className="input-wrapper">
                            <label className="sr-only" htmlFor="firstname">
                                Firstname
                            </label>
                            <input
                                className="editNameinput"
                                type="text"
                                id="firstname"
                                name="firstname"
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
                                name="lastname"
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
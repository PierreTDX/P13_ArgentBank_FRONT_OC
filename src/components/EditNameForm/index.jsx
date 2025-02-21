import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "./../../app/userSlice";
import { selectUser } from "./../../app/selectors";
import "./editNameForm.scss";

function EditNameForm() {
    const dispatch = useDispatch();
    const { firstName, lastName } = useSelector(selectUser);

    const [isEditing, setIsEditing] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        dispatch(setUser({
            firstName: formData.get("firstname"),
            lastName: formData.get("lastname")
        }));
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
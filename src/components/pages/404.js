import ErrorMessage from "../errorMessage/ErrorMessage";
import {Link} from "react-router-dom";

export const Page404 = () => {
    return (
        <div>
            <ErrorMessage />
            <p>not page</p>
            <Link to="/">Back to main page</Link>
        </div>
    )

}
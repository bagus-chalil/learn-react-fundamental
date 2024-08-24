import { useRouteError } from "react-router-dom";

const ErrorPage404 = () => {
    const error = useRouteError();

    return (
        <div className="flex justify-center min-h-screen items-center flex-col">
            <h1 className="text-3xl font-bold">Oops</h1>
            <p className="md-5 text-xl">Sory, an unexpected error has occured</p>
            <p className="md-5 text-lg">
                {error.statusText || error.message}
            </p>
        </div>
    )
}

export default ErrorPage404;
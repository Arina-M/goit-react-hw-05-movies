import { Hearts } from "react-loader-spinner";

const Loader = () => {
    return (
        <Hearts 
        height="80"
        width="100"
        color="#483d8b"
        ariaLabel="-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        />
    )
}

export default Loader;
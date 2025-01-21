import useAdoptionReq from "../../../hooks/useAdoptionReq";

const AdoptionRequest = () => {
    const [reqCart] = useAdoptionReq();
    return (
        <div>
            <h2 className="text-3xl">Adoption Request: {reqCart.length}</h2>
        </div>
    );
};

export default AdoptionRequest;
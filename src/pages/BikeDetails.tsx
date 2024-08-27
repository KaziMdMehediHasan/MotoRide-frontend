import { useParams } from "react-router-dom"

export default function BikeDetails() {
    const { bikeId } = useParams();
    return (
        <div>
            <h1>Bike Details for: {bikeId}</h1>
        </div>
    )
}

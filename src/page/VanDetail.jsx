import React from "react"
import { Link, useParams } from "react-router-dom"
import  {fetchVanData } from "../page/api"


export default function VanDetail() {
    const {id} = useParams()
    const [van, setVan] = React.useState(null)

    React.useEffect(() => {
        async function fetchData() {
            try {
                const data = await fetchVanData(id);
                if (data) {
                    setVan(data);
                }
            } catch (error) {
                console.error("Failed to fetch van data:", error);
            }
        }

        fetchData();
    }, [id]);

    return (
        <div className="van-detail-container">
            <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>
            
            {van ? (
                <div className="van-detail">
                    <img src={van.imageUrl} />
                    <i className={`van-type ${van.type} selected`}>
                        {van.type}
                    </i>
                    <h2>{van.name}</h2>
                    <p className="van-price"><span>${van.price}</span>/day</p>
                    <p>{van.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    )
}
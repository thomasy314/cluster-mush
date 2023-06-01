import { MushroomInfo } from "./data-objects"

type MushroomTitleNameProps = {
    mushroomInfo: MushroomInfo
}

const MushroomTitleName = (props: MushroomTitleNameProps) => {
    // TODO: Link to the various species and add more specific species
    return (
        <div>
            <h1>{props.mushroomInfo.name}</h1>
            <h2><i>{props.mushroomInfo.latinName}</i></h2>
            {props.mushroomInfo.latinSubInfo && <p><i>{props.mushroomInfo.latinSubInfo}</i></p>}
        </div>
    )
}

export default MushroomTitleName;
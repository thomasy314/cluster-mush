type MushroomTitleNameProps = {
    name: string,
    latinName: string
}

const MushroomTitleName = (props: MushroomTitleNameProps) => {
    // TODO: Link to the various species and add more specific species
    return (
        <div>
            <h1>{props.name}</h1>
            <h2><i>{props.latinName}</i></h2>
            <p><i>Oyster mushroom refers to various species found within the genus Pleurotus, including Pleurotus ostreatus (the pearl oyster), Pleurotus Pulminarus, ... .</i></p>
        </div>
    )
}

export default MushroomTitleName;
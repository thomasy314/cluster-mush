type MushroomTitleNameProps = {
    name: string,
    latinName: string
}

const MushroomTitleName = (props: MushroomTitleNameProps) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <h2>({props.latinName})</h2>
        </div>
    )
}

export default MushroomTitleName;
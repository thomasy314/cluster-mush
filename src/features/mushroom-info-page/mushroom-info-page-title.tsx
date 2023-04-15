type MushroomTitleNameProps = {
    name: string,
    latinName: string
}

const MushroomTitleName = (props: MushroomTitleNameProps) => {
    return (
        <>
            <h1>{props.name}</h1>
            <h2>({props.latinName})</h2>
        </>
    )
}

export default MushroomTitleName;
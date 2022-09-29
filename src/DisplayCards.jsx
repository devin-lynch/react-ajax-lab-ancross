

export default function DisplayCards(props) {
    const villagers = props.villagers.map(villager => {
        return (
            <li key={`villager${villager.id}`} style={{ listStyleType: 'none' }}>
                <img src={villager.image_uri} alt={villager.name['name-USen']} />

                <p>{villager.name['name-USen']}</p>
            </li>
        )
    } )

    return (
        <ul>
            {villagers}
        </ul>
    )
}
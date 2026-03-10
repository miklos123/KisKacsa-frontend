const BACKEND_URL = '/hirlevel'

export async function hirlevelFeliratkozas(vezeteknev, keresztnev, szuletesnap, email) {

    const res = await fetch(`${BACKEND_URL}/hirlevel`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            vezeteknev,
            keresztnev,
            szuletesnap,
            email
        })
    })

    const data = await res.json()
    return data
}
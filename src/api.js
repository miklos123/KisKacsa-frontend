const BACKEND_URL = '/users'

//login
export async function login(email, psw) {
    //console.log(email, psw)
    const res = await fetch(`${BACKEND_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({ email, psw })
    })

    //console.log(res)
    const data = await res.json()
    //console.log(data)
    return data
}

//logout
export async function logout() {
    const res = await fetch(`${BACKEND_URL}/logout`, {
        method: 'POST',
        credentials: 'include'
    })

    if (!res.ok) {
        const data = await res.json()
        return { error: data?.error }
    }
    return await res.json()
}
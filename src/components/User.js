import React, { useState } from 'react'

function User() {
    const [user, setUser] = useState({ name: "Burak", surname: "Özlece" })
    return (
        <div>
            <h2>User</h2>
            {user.name} {user.surname}

            <div>
                <button onClick={() => setUser({ ...user, name: "Kenan" })}>Ad Değiştir</button>
                <button onClick={() => setUser({ ...user, surname: "Kuzgun" })}>Soyad Değiştir</button>
            </div>
        </div>
    )
}

export default User
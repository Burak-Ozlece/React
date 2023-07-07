import React, { useState } from 'react'


function Form() {
    const [name, setName] = useState("Burak");
    const [surName, setSurName] = useState("Özlece");
    return (
        <div>
            <div>
                <div>İsim</div>
                <input placeholder='İsim' onChange={(event) => setName(event.target.value)} value={name} />
                <input placeholder='Soyisim' value={surName} onChange={(event) => setSurName(event.target.value)} />
            </div>
            <div>
                <strong>{name} {surName}</strong>
            </div>
            <div>
                <div>Cinsiyet</div>
                <select>
                    <option>Erkek</option>
                    <option>Kadın</option>
                </select>
            </div>
        </div>
    )
}

export default Form
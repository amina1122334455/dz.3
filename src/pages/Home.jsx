import React from 'react'

const Home = () => {
    const [user, setUser] = useState({
        id: '',
        name:'',
        password:''
    })

    
    return (
    <div>
        <h1>Add User</h1>
        <input name='id' placeholder='enter a id'/>
        <input name='name' placeholder='enter a name'/>
        <input name='password' type='password' placeholder='enter a password'/>
        <button type='submit'>Add user</button>
    </div>
  )
}

export default Home
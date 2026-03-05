import { useParams, useNavigate } from 'react-router-dom'

const UserDetail = () => {

    const { id } = useParams();
    const user = [
        { id: 1, name: 'Spiderman', age: 22 },
        { id: 2, name: 'Superman', age: 23 },
        { id: 3, name: 'Batman', age: 24 },
        { id: 4, name: 'Ironman', age: 25 }
    ]
    const navigate = useNavigate();
    const specificUser = user.find((data) => data.id == id);

    return (
        <div className='px-7'>
            <h1>Name: {specificUser.name}</h1>
            <h1>Age: {specificUser.age}</h1>
            <div className='mt-2'>
                <button className='bg-red-600 text-white px-2 py-1 rounded-md' onClick={() => navigate('/')}>
                    Back to home
                </button>
            </div>
        </div>
    )
}

export default UserDetail;
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'

export default function Search () {

    const navigate = useNavigate();
    const location = useLocation();
    const [keyword, setKeyword] = useState("")

    const searchHandler = (e) => {
        e.preventDefault();
        navigate(`/search/${keyword}`)

    }

    const clearKeyword = () =>{
        setKeyword("");
    }

    useEffect(() => {
        if(location.pathname === '/') {
            clearKeyword();
        }
    },[location])

    return (
        <form onSubmit={searchHandler}>
            <div className="frame-inner">
                <input
                type="text"
                id="search_field"
                lassName="form-control"
                placeholder="Enter Product Name ..."
                onChange={(e) =>{ setKeyword(e.target.value)}}
                value={keyword}
                />

            </div>
        </form>
    )
}
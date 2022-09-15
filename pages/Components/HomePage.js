import React, { useState, useEffect } from 'react'
import axios from "axios";
import Image from 'next/image'

const HomePage = () => {

    const [userData, setUserData] = useState([])


    const options = {
        method: 'GET',
        url: 'https://instagram130.p.rapidapi.com/account-info',
        params: { username: 'adele' },
        headers: {
            'X-RapidAPI-Key': '87e00c0f75msh8b7d5f1c63f8d85p1726a1jsnb2d6aba1d6ba',
            'X-RapidAPI-Host': 'instagram130.p.rapidapi.com'
        }
    };

    useEffect(() => {
        axios.request(options).then(function (response) {
            setUserData(response.data)
            console.log(userData);
        }).catch(function (error) {
            console.error(error);
        });
    }, []);


    return (
        <>
            <div className='container'>
                <div className="row">
                    <div className="col-md-7 col-xl-7 col-sm-12 col-12">
        
                    </div>
                    <div className="col-md-5 col-xl-5 col-sm-12 col-12">

                    </div>
                </div>
            </div>

        </>
    )
}

export default HomePage
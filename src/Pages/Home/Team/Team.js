import React, { useEffect, useState } from 'react';
import Member from '../Member/Member';

const Team = () => {
    const [members, setMembers] = useState([]);

    useEffect( () => {
        fetch('team.json')
        .then(res => res.json())
        .then(data => setMembers(data))
    },[])

    return (
        <div className='my-10'>
            <div className='text-center'>
                <p className="text-xl text-orange-600 font-bold ">Team</p>
                <h1 className="text-5xl font-bold my-3">Meet Our Team</h1>
                <p className="text-gray-500">the majority have suffered alteration in some form, by injected humour,
                <br />
                or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                {
                    members.map(mamber => <Member
                    key={mamber._id}
                        member={mamber}
                    ></Member>)
                }
            </div>
        </div>
    );
};

export default Team;
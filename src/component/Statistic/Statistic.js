import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistic = () => {
    const statData = useLoaderData().data;
    console.log(statData)
    return (
        <div className='container'>
            <h3 className='my-5'>This is a Number of Quiz chart</h3>
            <ResponsiveContainer width="100%" height={400}>
                <LineChart width={500} height={400} data={statData}>
                    <CartesianGrid strokeDasharray="2 2" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistic;
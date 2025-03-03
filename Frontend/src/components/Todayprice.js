import React, { useState, useEffect } from 'react';
import './css/Todayprice.css';

export default function Todayprice() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    async function handleApi() {
        try {
            const response = await fetch('https://kalimatimarket.gov.np/api/daily-prices/en');
            const result = await response.json();
            setIsLoading(false);
            setData(result?.prices || []);
        } catch (error) {
            console.error("Error fetching data:", error);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        handleApi();
    }, []);

    const filteredData = data.filter(item =>
        item.commodityname.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <h1>Kalimati Fruits and Vegetables Daily Rate</h1>
            <div className='search-commodity'>
                <input
                    type='text'
                    placeholder='Search commodity...'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className='search-input'
                />
            </div>
            <div className='container'>
                {isLoading ? (
                    <h1>Data is loading...</h1>
                ) : (
                    <table border="1" className="price-table">
                        <thead>
                            <tr>
                                <th>Commodity Name</th>
                                <th>Price (Avg)</th>
                                <th>Max Price</th>
                                <th>Min Price</th>
                                <th>Unit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.length > 0 ? (
                                filteredData.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.commodityname}</td>
                                        <td>{item.avgprice}</td>
                                        <td>{item.maxprice}</td>
                                        <td>{item.minprice}</td>
                                        <td>{item.commodityunit}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" style={{ textAlign: 'center' }}>No data found</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                )}
            </div>
        </>
    );
}
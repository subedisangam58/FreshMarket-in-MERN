import React from 'react'

export default function OrderHistory() {
    return (
        <main>
            <div className="filters-container">
                <h1>Order History</h1>
                <div className="filters">
                    <select id="filter-status">
                        <option>Filter by Status</option>
                    </select>
                    <select id="sort-date">
                        <option>Sort by Date</option>
                    </select>
                </div>
            </div>

            <div className="order-card">
                <div className="order-header">
                    <span>#ORD-2025-1234</span>
                    <span className="status delivered">Delivered</span>
                </div>
                <div className="order-body">
                    <div className="details">
                        <span>📅 March 15, 2025</span>
                        <span>🛒 4 items</span>
                        <span>💵 $45.90</span>
                    </div>
                    <div className="actions">
                        <button className="view-details">View Details</button>
                        <button className="reorder">Reorder</button>
                        <button className="invoice">📄 Invoice</button>
                    </div>
                </div>
            </div>

            <div className="order-card">
                <div className="order-header">
                    <span>#ORD-2025-1233</span>
                    <span className="status in-progress">In Progress</span>
                </div>
                <div className="order-body">
                    <div className="details">
                        <span>📅 March 12, 2025</span>
                        <span>🛒 2 items</span>
                        <span>💵 $23.50</span>
                    </div>
                    <div className="actions">
                        <button className="view-details">View Details</button>
                        <button className="invoice">📄 Invoice</button>
                        <a href="#" className="track-order">🚚 Track Order</a>
                    </div>
                </div>
            </div>

            <div className="order-card">
                <div className="order-header">
                    <span>#ORD-2025-1232</span>
                    <span className="status canceled">Canceled</span>
                </div>
                <div className="order-body">
                    <div className="details">
                        <span>📅 March 10, 2025</span>
                        <span>🛒 3 items</span>
                        <span>💵 $34.75</span>
                    </div>
                    <div className="actions">
                        <button className="view-details">View Details</button>
                        <button className="reorder">Reorder</button>
                    </div>
                </div>
            </div>
        </main>
    )
}

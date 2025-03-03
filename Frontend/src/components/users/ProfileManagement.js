import React, { useState, useEffect } from 'react'
import '../css/ProfileManagement.css';

export default function ProfileManagement() {
    return (
        <main class="containers">
            <aside class="sidebar">
                <div class="profile-card">
                    <img src="profile-placeholder.png" alt="Profile Picture" class="profile-picture" />
                    <h2>John Doe</h2>
                    <p>Member since 2023</p>
                    <button class="edit-profile-btn">Edit Profile</button>
                </div>
                <ul class="menu">
                    <li>Personal Information</li>
                    <li>Preferences</li>
                    <li>Security</li>
                    <li>Order History</li>
                </ul>
            </aside>

            <section class="main-content">
                <div class="box personal-info">
                    <h3>Personal Information</h3>
                    <div class="form-group">
                        <label>Full Name</label>
                        <input type="text" value="John Doe" />
                    </div>
                    <div class="form-groups">
                        <label>Email</label>
                        <input type="email" value="john@example.com" />
                    </div>
                    <div class="form-groups">
                        <label>Phone</label>
                        <input type="text" value="+1 234 567 8900" />
                    </div>
                    <div class="form-groups">
                        <label>Address</label>
                        <input type="text" value="123 Market Street" />
                    </div>
                </div>
                <div class="box preferences">
                    <h3>Preferences</h3>
                    <div class="toggle">
                        <label>Newsletter Subscription</label>
                        <input type="checkbox" checked />
                    </div>
                    <div class="toggle">
                        <label>Order Notifications</label>
                        <input type="checkbox" checked />
                    </div>
                </div>
                <div class="box security">
                    <h3>Security</h3>
                    <div class="form-groups">
                        <label>Current Password</label>
                        <input type="password" />
                    </div>
                    <div class="form-groups">
                        <label>New Password</label>
                        <input type="password" />
                    </div>
                    <div class="form-groups">
                        <label>Confirm New Password</label>
                        <input type="password" />
                    </div>
                    <button class="update-password-btn">Update Password</button>
                </div>
            </section>
        </main>
    )
}

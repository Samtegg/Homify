import React from 'react'
import '../index.css';

const NotificationComp = () => {
    const notifications = [
        "New Listing Alert: Luxury 3-bedroom apartment in Lekki Phase 1 just added!",
        "Your property '2 Bedroom Bungalow' has received 5 new inquiries.",
        "Reminder: Complete your profile to increase visibility of your listings.",
        "Your property '2 Bedroom Bungalow' has received 5 new inquiries.",
        "Reminder: Complete your profile to increase visibility of your listings.",
        "Your property '2 Bedroom Bungalow' has received 5 new inquiries.",
        "Reminder: Complete your profile to increase visibility of your listings."
    ];
    
  return (
    <div className='personal-properties-container margin-top'>
        <section class="notification-bar margin-top2">
            <h3>Notifications</h3>
            <ul class="notifications" id="notifications">
                {
                    notifications.map(notify => (
                        <li className='notify-text'>{notify}</li>
                    ))
                }
            </ul>
        </section>
    </div>
  )
}

export default NotificationComp
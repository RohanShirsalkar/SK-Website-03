import React from 'react';

const ContactCard = () => {
  return (
    <div style={styles.card}>
      <h2 style={styles.title}>Contact Us</h2>
      <div style={styles.info}>
        <div style={styles.infoItem}>
          <strong>Address:</strong>
          <p>Veerabhadreshwara Nagar, Opp. APMC, Vijayapura Road, Basavan Bagewadi, Vijayapura - 586 203 India.</p>
        </div>
        <div style={styles.infoItem}>
          <strong>Phone:</strong>
          <p>+91 8073978410</p>
        </div>
        <div style={styles.infoItem}>
          <strong>Email:</strong>
          <p>SKRoadlines060@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: '#ffffff',
    padding: '40px', // Bigger padding
    borderRadius: '16px', // More rounded
    boxShadow: '0 8px 20px rgba(0,0,0,0.15)', // Stronger shadow
    maxWidth: '800px', // Wider card
    margin: '40px auto', // More top-bottom space
  },
  title: {
    marginBottom: '25px',
    fontSize: '28px', // Bigger title
    color: '#0077b6',
    textAlign: 'center',
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px', // More gap between sections
  },
  infoItem: {
    fontSize: '18px', // Bigger text
    color: '#333',
    lineHeight: '1.6',
  }
};

export default ContactCard;

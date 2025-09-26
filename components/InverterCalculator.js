"use client"
import React, { useState } from 'react';
import styles from './InverterCalculator.module.css';

const propertyTypes = {
  '1 Bedroom': {
    "Ceiling Fan": { quantity: 1, watts: 70 },
    "Laptop": { quantity: 1, watts: 60 },
    "LED Bulb": { quantity: 3, watts: 10 },
    "Phone Charger": { quantity: 2, watts: 5 },
    "Fridge": { quantity: 1, watts: 150 },
    "Washing Machine": { quantity: 0, watts: 400 },
    "AC (Air Conditioner)": { quantity: 0, watts: 1500 },
    "Desktop": { quantity: 0, watts: 300 },
    "65’’ TV": { quantity: 0, watts: 125 },
  },
  '2 Bedrooms': {
    "Ceiling Fan": { quantity: 2, watts: 70 },
    "Laptop": { quantity: 2, watts: 60 },
    "LED Bulb": { quantity: 4, watts: 10 },
    "Phone Charger": { quantity: 2, watts: 5 },
    "Fridge": { quantity: 1, watts: 150 },
    "Freezer": { quantity: 1, watts: 200 },
    "65’’ TV": { quantity: 1, watts: 120 },
    "Washing Machine": { quantity: 0, watts: 400 },
    "AC (Air Conditioner)": { quantity: 0, watts: 1500 },
    "Desktop": { quantity: 0, watts: 300 },
  },
  '3 Bedrooms': {
    "Ceiling Fan": { quantity: 3, watts: 70 },
    "LED Bulb": { quantity: 6, watts: 10 },
    "Fridge": { quantity: 1, watts: 150 },
    "Freezer": { quantity: 1, watts: 200 },
    "AC (Air Conditioner)": { quantity: 1, watts: 2000 },
    "Laptop": { quantity: 2, watts: 60 },
    "Desktop": { quantity: 1, watts: 200 },
    "Phone Charger": { quantity: 3, watts: 5 },
    "65’’ TV": { quantity: 2, watts: 120 },
  },
  '4 Bedrooms': {
    "Ceiling Fan": { quantity: 4, watts: 70 },
    "LED Bulb": { quantity: 8, watts: 10 },
    "Fridge": { quantity: 1, watts: 150 },
    "Freezer": { quantity: 1, watts: 200 },
    "AC (Air Conditioner)": { quantity: 2, watts: 2000 },
    "Laptop": { quantity: 3, watts: 60 },
    "Desktop": { quantity: 2, watts: 200 },
    "Phone Charger": { quantity: 4, watts: 5 },
    "65’’ TV": { quantity: 2, watts: 120 },
    "Washing Machine": { quantity: 1, watts: 500 }
  },
  'Villa': {
    "Ceiling Fan": { quantity: 6, watts: 70 },
    "LED Bulb": { quantity: 12, watts: 10 },
    "Fridge": { quantity: 2, watts: 150 },
    "Freezer": { quantity: 2, watts: 200 },
    "AC (Air Conditioner)": { quantity: 4, watts: 2000 },
    "Laptop": { quantity: 4, watts: 60 },
    "Desktop": { quantity: 3, watts: 200 },
    "Phone Charger": { quantity: 5, watts: 5 },
    "65’’ TV": { quantity: 3, watts: 120 },
    "Washing Machine": { quantity: 2, watts: 500 },
    "Pumping Machine": { quantity: 1, watts: 1500 },
    "CCTV Camera": { quantity: 4, watts: 40 }
  }
};

const defaultAppliances = {
  "LED Bulb": { watts: 10 },
  "LED Lamp": { watts: 20 },
  "Ceiling Fan": { watts: 60 },
  "Rechargeable Fan": { watts: 30 },
  "Ox Fan": { watts: 70 },
  "65’’ TV": { watts: 125 },
  "CCTV Camera": { watts: 10 },
  "Fridge": { watts: 150 },
  "Freezer": { watts: 200 },
  "AC (Air Conditioner)": { watts: 1500 },
  "Laptop": { watts: 75 },
  "Desktop": { watts: 300 },
  "Phone Charger": { watts: 7 },
  "Pumping Machine": { watts: 800 },
  "Washing Machine": { watts: 400 }
};

function InverterCalculator() {
  const [selectedProperty, setSelectedProperty] = useState('Custom');
  const [appliances, setAppliances] = useState(
    Object.entries(defaultAppliances).map(([name, { watts }]) => ({ name, watts, quantity: 1 }))
  );
  const [overallWatts, setOverallWatts] = useState(
    appliances.reduce((sum, a) => sum + a.watts * a.quantity, 0)
  );
  const [backupHours, setBackupHours] = useState(4);
  const [avgPercent, setAvgPercent] = useState(50);

  const handlePropertyType = (type) => {
    setSelectedProperty(type);
    if (type === 'Custom') {
      setAppliances(
        Object.entries(defaultAppliances).map(([name, { watts }]) => ({ name, watts, quantity: 1 }))
      );
    } else {
      setAppliances(
        Object.entries(propertyTypes[type]).map(([name, { watts, quantity }]) => ({ name, watts, quantity }))
      );
    }
  };

  const handleQuantityChange = (index, delta) => {
    setAppliances((prev) => {
      const updated = [...prev];
      updated[index].quantity = Math.max(0, updated[index].quantity + delta);
      return updated;
    });
  };

  React.useEffect(() => {
    setOverallWatts(appliances.reduce((sum, a) => sum + a.watts * a.quantity, 0));
  }, [appliances]);

  return (
    <div className={styles.container}>
      <div className={styles.heading}>Inverter System Calculator</div>
      <div className={styles.propertyTypeBar}>
        {['Custom', ...Object.keys(propertyTypes)].map((type) => (
          <button
            key={type}
            className={selectedProperty === type ? `${styles.propertyTypeBtn} ${styles.selected}` : styles.propertyTypeBtn}
            onClick={() => handlePropertyType(type)}
          >
            {type}
          </button>
        ))}
      </div>
      <table className={styles.applianceTable}>
        <thead>
          <tr>
            <th>Device</th>
            <th>Usage per device</th>
            <th>Qty</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {appliances.map((a, i) => (
            <tr key={a.name}>
              <td>{a.name}</td>
              <td>{a.watts} Watts</td>
              <td>
                <button className={styles.qtyBtn} onClick={() => handleQuantityChange(i, -1)}>-</button>
                {a.quantity}
                <button className={styles.qtyBtn} onClick={() => handleQuantityChange(i, 1)}>+</button>
              </td>
              <td>{a.watts * a.quantity} Watts</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.totalOutput}>
        Total output: <span>{overallWatts} Watts</span>
      </div>
      <div className={styles.backupBar}>
        <span>I would require</span>
        <button className={styles.qtyBtn} onClick={() => setBackupHours(Math.max(4, backupHours - 2))}>-</button>
        <input type="number" value={backupHours} disabled className={styles.backupInput} />
        <button className={styles.qtyBtn} onClick={() => setBackupHours(Math.min(8, backupHours + 2))}>+</button>
        <span>Hours of backup in a day</span>
      </div>
      <div className={styles.percentBar}>
        <span>Estimate the average % of appliance capacity running simultaneously</span>
        <input
          type="range"
          min={25}
          max={100}
          step={25}
          value={avgPercent}
          onChange={e => setAvgPercent(Number(e.target.value))}
          className={styles.percentRange}
        />
        <span className={styles.percentValue}>{avgPercent} %</span>
      </div>
    </div>
  );
}

export default InverterCalculator;

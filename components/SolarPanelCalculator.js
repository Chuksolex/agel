"use client";
import React, { useState, useEffect } from "react";

const appliancesList = [
  { name: "Normal Bulb", defaultWatt: 60 },
  { name: "Tube Light", defaultWatt: 18 },
  { name: "LED Lamp", defaultWatt: 15 },
  { name: "Fan", defaultWatt: 70 },
  { name: "Music System", defaultWatt: 320 },
  { name: 'LCD/LED TV (< 42")', defaultWatt: 150 },
  { name: 'LCD/LED TV (> 42")', defaultWatt: 200 },
  { name: "Desktop Computer", defaultWatt: 200 },
  { name: "Laptop", defaultWatt: 100 },
  { name: "Refrigerator (165-250Ltr)", defaultWatt: 150 },
  { name: "Refrigerator (250-350Ltr)", defaultWatt: 210 },
  { name: "Refrigerator (350-450Ltr)", defaultWatt: 320 },
  { name: "Refrigerator (> 450Ltr)", defaultWatt: 460 },
  { name: "AC - 1HP", defaultWatt: 1120 },
  { name: "AC - 1.5HP", defaultWatt: 1830 },
  { name: "AC - 2HP", defaultWatt: 2500 },
  { name: "Toaster", defaultWatt: 800 },
  { name: "Washing Machine", defaultWatt: 1000 },
  { name: "Gaming Console", defaultWatt: 200 },
  { name: "Microwave Oven", defaultWatt: 1400 },
];

export default function SolarPanelCalculator() {
  const [appliances, setAppliances] = useState(
    appliancesList.map((a) => ({ ...a, selected: false, qty: 0, load: 0 }))
  );
  const [totalWatts, setTotalWatts] = useState(0);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const total = appliances.reduce((sum, a) => sum + a.load, 0);
    setTotalWatts(total);

    if (total === 0) setRating(0);
    else if (total <= 400) setRating(800);
    else if (total <= 750) setRating(1500);
    else if (total <= 1225) setRating(2500);
    else if (total <= 1750) setRating(3500);
    else if (total <= 2500) setRating(5000);
    else if (total <= 3750) setRating(7500);
    else if (total <= 5000) setRating(10000);
    else if (total <= 7500) setRating(15000);
    else if (total <= 10000) setRating(20000);
    else setRating(30000);
  }, [appliances]);

  const handleSelect = (idx) => {
    setAppliances((prev) =>
      prev.map((item, i) => {
        if (i !== idx) return item;
        const selected = !item.selected;
        const qty = selected ? (item.qty > 0 ? item.qty : 1) : 0;
        const load = selected ? qty * item.defaultWatt : 0;
        return { ...item, selected, qty, load };
      })
    );
  };

  const handleQtyChange = (idx, qty) => {
    const newQty = Math.max(0, Number(qty));
    setAppliances((prev) =>
      prev.map((item, i) =>
        i === idx
          ? { ...item, qty: newQty, load: newQty * item.defaultWatt }
          : item
      )
    );
  };

  return (
    <div className="container my-5">
      <div className="card shadow-lg">
        <div className="card-body">
          <h1 className="text-center mb-4 text-primary fw-bold">
            Solar Panel Calculator
          </h1>

          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead className="table-secondary">
                <tr>
                  <th>Appliance</th>
                  <th className="text-center">Qty</th>
                  <th className="text-center">Load (W)</th>
                </tr>
              </thead>
              <tbody>
                {appliances.map((a, i) => (
                  <tr key={a.name}>
                    <td>
                      <button
                        className={`btn w-100 ${
                          a.selected
                            ? "btn-primary"
                            : "btn-outline-primary"
                        }`}
                        onClick={() => handleSelect(i)}
                      >
                        {a.selected && (
                          <span className="me-2">✓</span>
                        )}
                        {a.name}
                      </button>
                    </td>
                    <td className="text-center">
                      <div className="d-flex justify-content-center align-items-center">
                        <button
                          className="btn btn-sm btn-outline-secondary me-2"
                          disabled={!a.selected || a.qty <= 0}
                          onClick={() => handleQtyChange(i, a.qty - 1)}
                        >
                          –
                        </button>
                        <input
                          type="number"
                          min={0}
                          value={a.qty}
                          disabled={!a.selected}
                          onChange={(e) =>
                            handleQtyChange(i, Number(e.target.value))
                          }
                          className="form-control form-control-sm text-center"
                          style={{ width: "70px" }}
                        />
                        <button
                          className="btn btn-sm btn-outline-secondary ms-2"
                          disabled={!a.selected}
                          onClick={() => handleQtyChange(i, a.qty + 1)}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="text-center fw-bold text-primary">
                      {a.load} W
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="alert bg-warning mt-4">
            <p className="d-flex justify-content-between mb-2">
              <span>Total Load:</span>
              <strong>{totalWatts} W</strong>
            </p>
            <p className="d-flex justify-content-between">
              <span>Recommended Solar Panel Rating:</span>
              <strong>{rating} VA</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';

export default function Home() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [age, setAge] = useState(null);

  const calculateExactAge = (day, month, year) => {
    const today = new Date();
    const birthDate = new Date(year, month - 1, day);
    
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }

    const months = monthDiff < 0 ? 12 + monthDiff : monthDiff;
    const days = dayDiff < 0 ? new Date(today.getFullYear(), today.getMonth(), 0).getDate() + dayDiff : dayDiff;

    return {
      years: age,
      months: months,
      days: days,
    };
  };

  const handleSubmit = () => {
    if (day && month && year) {
      const exactAge = calculateExactAge(day, month, year);
      setAge(exactAge);
    }
  };

  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>Exact Age Calculator</h1>
      <div className="ageCalculatorBox">
      
          <select 
              value={day}
              onChange={(e) => setDay(e.target.value)}
          >
              <option value="">Day</option>
              {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                  <option key={d} value={d}>{d}</option>
              ))}
          </select>

          <select 
              value={month}
              onChange={(e) => setMonth(e.target.value)}
          >
              <option value="">Month</option>
              {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => (
                  <option key={m} value={m}>{m}</option>
              ))}
          </select>

          <input 
              placeholder="YYYY"
              maxLength="4"
              value={year}
              onChange={(e) => setYear(e.target.value)}
          />
      </div>

      <button className="btn-blue"
       onClick={handleSubmit}>Calculate Age</button>
      {age && (
        <p>
          You are {age.years} years, {age.months} months, and {age.days} days old.
        </p>
      )}
    </div>
  );
}

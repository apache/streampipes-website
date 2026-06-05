import React from 'react';

const items = [
  'Apache Open Source',
  'Docker & Kubernetes',
  'OPC UA (+Events), S7, Modbus, MQTT',
  'Distributed OT/IT Deployments',
  'Java, Python & TypeScript',
];

const TrustBand = () => (
  <section className="homepage-trust-band">
    <div className="container">
      <div className="homepage-trust-band-inner">
        <span className="homepage-trust-band-label">Built for industrial teams</span>
        <div className="homepage-trust-band-items">
          {items.map(item => (
            <span className="homepage-trust-pill" key={item}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TrustBand;

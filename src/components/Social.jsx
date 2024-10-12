import React from "react";
/* import "./social.scss"; */
import { Mail, Smartphone } from "lucide-react";
import { MapPin } from "lucide-react";

const Social = () => {
  return (
    <section className="social">
      <h2>Let's Connect</h2>
      <div style={{ display: "flex", gap: "1.5rem" }}>
        <a href="">
          <Smartphone size={24} />
          <p>+56932864632</p>
        </a>
        <a href="">
          <Mail size={24} />
          <p>mateo.ossa.b@gmail.com</p>
        </a>
        <a href="">
          <MapPin size={24} />
          <p>Coronel, Concepcion, Chile</p>
        </a>
      </div>
    </section>
  );
};

export default Social;

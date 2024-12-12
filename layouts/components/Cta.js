import config from "@config/config.json";
import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";
import CalendlyPopup from "./calendlyEmbed";

function Cta() {
  const { title, content, button, enable } = config.call_to_action;
  if (!enable) return;

  return (
    <section className="cta section pt-10 pb-10">
      <div className="container-xl rounded-3xl bg-[#E6F7FF] p-8 shadow-md">
        {/* Contenido */}
        <div className="section px-4 text-center">
          <div className="content z-10 mb-10">
            {markdownify(title, "h2", "section-title text-3xl font-bold mb-6")}
            {markdownify(content, "p", "text-lg text-gray-700 leading-relaxed mb-6")}
            {/* Calendly Popup */}
            <CalendlyPopup url="https://calendly.com/miguefreeagent" text="Agendar cita ahora" />
          </div>
        </div>

        {/* Contenedor del Mapa */}
        <div className="map-container relative z-10 mt-10 mx-auto rounded-3xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.811541895597!2d-75.685682!3d4.802389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e388715f06e79e7%3A0xccac31110254e366!2sTripoli!5e0!3m2!1ses!2sco!4v1734044896380!5m2!1ses!2sco"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-96"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Cta;

import { FiCode, FiShoppingBag, FiFigma, FiTrendingUp, FiLayout, FiZap, FiArrowUpRight } from "react-icons/fi";
import { FaWordpressSimple } from "react-icons/fa6";
import { services } from "@/lib/data";

const icons = { app: FiCode, wp: FaWordpressSimple, shop: FiShoppingBag, ui: FiFigma, seo: FiTrendingUp, wix: FiLayout, vibe: FiZap };

export default function Services() {
  return (
    <div className="bento">
      {services.map((s, i) => {
        const Icon = icons[s.icon];
        return (
          <div key={s.title} className={`service card reveal ${s.big ? "big" : ""}`} style={{ "--d": `${(i % 3) * 90}ms` }}>
            <div className="service-top">
              <span className="service-icon"><Icon /></span>
              <FiArrowUpRight className="service-arrow" />
            </div>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
            <div className="mini-tags">{s.tags.map((t) => <span key={t}>{t}</span>)}</div>
            <span className="service-num">0{i + 1}</span>
          </div>
        );
      })}
    </div>
  );
}

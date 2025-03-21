"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import servicesData from "@/data/servicesData.json";
import socialData from "@/data/socialData.json";

const MenuOne = () => {
  const pathname = usePathname();
  const [fixedHeader, setFixedHeader] = useState(false);
  // const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const [openMenuMobile, setOpenMenuMobile] = useState(false);
  const [openSubNavMobile, setOpenSubNavMobile] = useState<number | null>(null);

  const handleOpenSubNavMobile = (index: number) => {
    setOpenSubNavMobile(openSubNavMobile === index ? null : index);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setFixedHeader(scrollPosition > 400);
      // setLastScrollPosition(scrollPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`header-menu style-one bg-white ${
          fixedHeader ? "fixed" : ""
        }`}
      >
        <div className="container flex items-center justify-between h-20">
          <Link className="menu-left-block" href="/">
            <Image
              src={"/images/Logo.png"}
              width={2000}
              height={1000}
              alt="logo"
              priority={true}
              className="w-[149px] max-sm:w-[132px]"
            />
          </Link>
          <div className="menu-center-block h-full">
            <ul className="menu-nav flex items-center xl:gap-2 h-full">
              <li
                className={`nav-item h-full flex items-center justify-center home ${
                  pathname === "/" || pathname.includes("/homepages/")
                    ? "active"
                    : ""
                }`}
              >
                <Link
                  className="nav-link text-title flex items-center gap-1"
                  href="/"
                >
                  <span>Accueil</span>
                </Link>
              </li>
              <li
                className={`nav-item h-full flex items-center justify-center ${
                  pathname.includes("/about") ? "active" : ""
                }`}
              >
                <Link
                  className="nav-link text-title flex items-center gap-1"
                  href="/about"
                >
                  <span>A propos</span>
                </Link>
              </li>
              
              
              {/* <li
                className={`nav-item h-full flex items-center justify-center ${
                  pathname.includes("/service") ? "active" : ""
                }`}
              >
                <Link
                  className="nav-link text-title flex items-center gap-1"
                  href="/services"
                >
                  <span>Services</span>
                  <span></span>
                </Link>
              </li> */}

              <li
                className={`nav-item h-full flex items-center justify-center ${
                  pathname.includes("/services/") ? "active" : ""
                }`}
              >
                <Link
                  className="nav-link text-title flex items-center gap-1"
                  href="/services"
                >
                  <span>Services</span>
                  <span>
                    <Icon.CaretDown className="text-sm" />
                  </span>
                </Link>
                <ul className="sub-nav">
                  
                {servicesData.map((service, index) => (
                        <li
                        key={`menu-services-detail-${service.id}`}
                        className={`sub-nav-item ${
                          pathname === "/services/"+service.slug ? "active" : ""
                        }`}
                      >
                        <Link
                          className="sub-nav-link font-medium"
                          href={`/services/${service.slug}`}
                        >
                          {service.title}
                        </Link>
                      </li>
                      ))}
                </ul>
              </li>

              <li
                className={`nav-item h-full flex items-center justify-center ${
                  pathname.includes("/social/") ? "active" : ""
                }`}
              >
                <Link
                  className="nav-link text-title flex items-center gap-1"
                  href="/social"
                >
                  <span>Social</span>
                  <span>
                    <Icon.CaretDown className="text-sm" />
                  </span>
                </Link>
                <ul className="sub-nav">
                  
                {socialData.slice(0, 3).map((social, index) => (
                        <li
                        key={`menu-social-detail-${social.id}`}
                        className={`sub-nav-item ${
                          pathname === "/social/"+social.slug ? "active" : ""
                        }`}
                      >
                        <Link
                          className="sub-nav-link font-medium"
                          href={`/social/${social.slug}`}
                        >
                          {social.title}
                        </Link>
                      </li>
                      ))}
                </ul>
              </li>

              <li
                className={`nav-item h-full flex items-center justify-center ${
                  pathname.includes("/pages/") ? "active" : ""
                }`}
              >
                <Link
                  className="nav-link text-title flex items-center gap-1"
                  href="#!"
                >
                  <span>Boite à Outils</span>
                  <span>
                    <Icon.CaretDown className="text-sm" />
                  </span>
                </Link>
                <ul className="sub-nav">
                  <li
                    className={`sub-nav-item ${
                      pathname === "/pages/faqs" ? "active" : ""
                    }`}
                  >
                    <Link
                      className="sub-nav-link font-medium"
                      href="/pages/faqs"
                    >
                      FAQs
                    </Link>
                  </li>
                  <li
                    className={`sub-nav-item ${
                      pathname === "/pages/evaluation-maturite" ? "active" : ""
                    }`}
                  >
                    <Link
                      className="sub-nav-link font-medium"
                      href="/pages/evaluation-maturite"
                    >
                      Evaluation Maturité Numérique
                    </Link>
                  </li>
                  <li
                    className={`sub-nav-item ${
                      pathname === "/pages/integration-ia" ? "active" : ""
                    }`}
                  >
                    <Link
                      className="sub-nav-link font-medium"
                      href="/pages/integration-ia"
                    >
                      Evaluation Intégration IA
                    </Link>
                  </li>

                  <li
                    className={`sub-nav-item ${
                      pathname === "/pages/incidence-algorithmique" ? "active" : ""
                    }`}
                  >
                    <Link
                      className="sub-nav-link font-medium"
                      href="/pages/incidence-algorithmique"
                    >
                      Evaluation de l'Incidence Algorithmique
                    </Link>
                  </li>

                  <li
                    className={`sub-nav-item ${
                      pathname === "/pages/etat-sante-cybersecurite" ? "active" : ""
                    }`}
                  >
                    <Link
                      className="sub-nav-link font-medium"
                      href="/pages/etat-sante-cybersecurite"
                    >
                      Etat de santé en Cybersécurité
                    </Link>
                  </li>
                </ul>
              </li>

              <li
                className={`nav-item h-full flex items-center justify-center ${
                  pathname.includes("/contact") ? "active" : ""
                }`}
              >
                <Link
                  className="nav-link text-title flex items-center gap-1"
                  href="/contact"
                >
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="menu-right-block flex items-center">
            <div className="icon-call">
              <i className="icon-phone-call text-4xl"></i>
            </div>
            <div className="text ml-3">
              <div className="text caption1">Conseil Gratuit</div>
              <div className="number text-button">+123 456 7890</div>
            </div>
            <div
              className="menu-humburger hidden pointer"
              onClick={() => setOpenMenuMobile(!openMenuMobile)}
            >
              <Icon.List className="text-2xl" weight="bold" />
            </div>
          </div>
        </div>
        <div id="menu-mobile-block" className={`${openMenuMobile && "open"}`}>
          <div className="menu-mobile-main">
            <div className="container">
              <ul className="menu-nav-mobile h-full pt-1 pb-1">
                <li
                  className={`nav-item-mobile h-full flex-column gap-2 pt-2 pb-2 pl-3 pr-3 pointer home ${
                    openSubNavMobile === 1 ? "active" : ""
                  }`}
                  onClick={() => handleOpenSubNavMobile(1)}
                >
                  <a
                    className="nav-link-mobile flex items-center justify-between"
                    href="/"
                  >
                    <span className="body2 font-semibold">Home </span>
                  </a>
                </li>
                <li
                  className={`nav-item-mobile h-full flex-column gap-2 pt-4 pb-2 pl-3 pr-3 pointer about ${
                    openSubNavMobile === 2 ? "active" : ""
                  }`}
                  onClick={() => handleOpenSubNavMobile(2)}
                >
                  <a
                    className="nav-link-mobile flex items-center justify-between"
                    href="/about"
                  >
                    <span className="body2 font-semibold">About </span>
                  </a>
                </li>
                <li
                  className={`nav-item-mobile h-full flex-column gap-2 pt-4 pb-2 pl-3 pr-3 pointer services ${
                    openSubNavMobile === 3 ? "active" : ""
                  }`}
                  onClick={() => handleOpenSubNavMobile(3)}
                >
                  <a
                    className="nav-link-mobile flex items-center justify-between"
                    href="/services"
                  >
                    <span className="body2 font-semibold">Services </span>
                  </a>
                </li>

                <li
                  className={`nav-item-mobile h-full flex-column gap-2 pt-4 pb-2 pl-3 pr-3 pointer pages ${
                    openSubNavMobile === 4 ? "active" : ""
                  }`}
                  onClick={() => handleOpenSubNavMobile(4)}
                >
                  <a
                    className="nav-link-mobile flex items-center justify-between"
                    href="#!"
                  >
                    <span className="body2 font-semibold">Pages </span>
                    <Icon.CaretRight className="text-base" />
                  </a>
                  <ul
                    className={`sub-nav-mobile ${
                      openSubNavMobile === 4 ? "open" : ""
                    }`}
                  >
                    <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2">
                      <Link
                        className="sub-nav-link text-base"
                        href="/pages/faqs"
                      >
                        FAQs
                      </Link>
                    </li>
                    <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2">

                      <Link
                        className="sub-nav-link text-base"
                        href="/pages/pricing"
                      >
                        Pricing
                      </Link>
                    </li>
                    <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2">

                      <Link
                        className="sub-nav-link text-base"
                        href="/pages/partners"
                      >
                        Partners
                      </Link>
                    </li>
                  </ul>
                </li>

                <li
                  className={`nav-item-mobile h-full flex-column gap-2 pt-4 pb-2 pl-3 pr-3 pointer contact ${
                    openSubNavMobile === 5 ? "active" : ""
                  }`}
                  onClick={() => handleOpenSubNavMobile(5)}
                >
                  <a
                    className="nav-link-mobile flex items-center justify-between"
                    href="/contact"
                  >
                    <span className="body2 font-semibold">Contact </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MenuOne;

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem";
import ServiceFilter from "@/components/Section/Service/ServiceFilter";
import CtaOne from "@/components/Section/CTA/CtaOne";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import faqData from "@/data/faqs.json";
import servicesData from "@/data/servicesData.json";
import Image from "next/image";
import { useRouter } from "next/router";
import { ServiceType } from "@/type/ServiceType";
import { notFound } from "next/navigation";

export default function ServiceStyleOne({
  params,
}: {
  params: { slug: string };
}) {
  const [faq, setFaq] = useState<number | null>(1);
  const [reverse, setReverse] = useState(false);

  // Trouver le service correspondant au slug
  const serviceFound = servicesData.find((s) => s.slug === params.slug);

  // Si le service n'existe pas, retourner une 404
  if (!serviceFound) {
    notFound();
  }

  const handleFaq = (id: number) => {
    setFaq((prevId) => (prevId === id ? null : id));
  };

  return (
    <>
      <div className="overflow-x-hidden">
        <main className="content">
          <BreadcrumbItem
            link="Our Services"
            img="/images/banner/about1.png"
            title="Nos services"
            desc="Découvrez notre large gamme de services conçus pour accompagner les entreprises dans leur transformation numérique. Nous offrons des solutions adaptées à chaque besoin, allant de l’élaboration de stratégies de transformation à l'intégration de technologies avancées. Quel que soit votre secteur, nos experts sont là pour vous aider à naviguer dans le monde numérique et à améliorer votre performance organisationnelle."
          />
          <div className="content-detail-block lg:py-[100px] sm:py-16 py-10">
            <div className="container">
              <div className="flex max-xl:flex-col gap-y-8">
                <div className="col-12 xl:w-3/4">
                  <div className="content-para xl:pr-[80px]">
                    <div className="heading3">
                      Service 1 - {serviceFound?.title}
                    </div>
                    {/* <div className="body2 text-secondary mt-4">
                      {serviceFound?.shortDesc}
                      Prix: 20% réduction // intervention 24h
                    </div> */}
                    <div className="bg-img mt-8 mb-8">
                      <Image
                        width={5000}
                        height={5000}
                        className="w-full h-full rounded-xl"
                        src="/images/component/630x200.png"
                        alt=""
                      />
                    </div>
                    {/* <div className="heading6">
                      subtitle...
                    </div> */}
                    <div className="body2 text-secondary mt-4">
                      {serviceFound?.desc}
                    </div>
                    <div className="list-feature mt-8">
                      <div className="flex max-lg:flex-col gap-y-3">
                        <div className="w-full lg:w-1/2 gap-y-3 flex flex-col">
                          {
                            /*serviceFound?.serviceItems.length > 0 &&*/ serviceFound?.serviceItems
                              .slice(
                                0,
                                Math.ceil(serviceFound?.serviceItems.length / 2)
                              )
                              .map((item, index) => (
                                <div
                                  key={`service-item-l-${index}`}
                                  className="item flex items-start gap-4"
                                >
                                  <Icon.CheckCircle
                                    weight="fill"
                                    className="text-xl text-blue flex-shrink-0 mt-1"
                                  />
                                  <div>
                                    <div className="text-button">
                                      {item.itemTitle}
                                    </div>
                                    <div className="text-secondary mt-2">
                                      {item.itemDesc}
                                    </div>
                                  </div>
                                </div>
                              ))
                          }
                        </div>
                        <div className="w-full lg:w-1/2 gap-y-3 flex flex-col">
                          {
                            /*serviceFound?.serviceItems.length > 0 &&*/ serviceFound?.serviceItems
                              .slice(
                                Math.ceil(
                                  serviceFound?.serviceItems.length / 2
                                ),
                                serviceFound?.serviceItems.length
                              )
                              .map((item, index) => (
                                <div
                                  key={`service-item-r-${index}`}
                                  className="item flex items-start gap-4"
                                >
                                  <Icon.CheckCircle
                                    weight="fill"
                                    className="text-xl text-blue flex-shrink-0 mt-1"
                                  />
                                  <div>
                                    <div className="text-button">
                                      {item.itemTitle}
                                    </div>
                                    <div className="text-secondary mt-2">
                                      {item.itemDesc}
                                    </div>
                                  </div>
                                </div>
                              ))
                          }
                        </div>
                      </div>
                    </div>

                    <div className="list-question lg:mt-[60px] mt-8">
                      <div className="heading6">
                        Questions / Réponses sur le service
                      </div>
                      {
                        /*serviceFound?.serviceQuestions.length > 0 &&*/ serviceFound?.serviceQuestions.map(
                          (item) => (
                            <div
                              key={item.id}
                              className={`question-item hover-box-shadow pointer mt-5 px-7 rounded-lg border border-line cursor-pointer ${
                                faq === item.id ? "open" : ""
                              }`}
                              onClick={() => handleFaq(item.id)}
                            >
                              <div className="question-item-main flex items-center justify-between py-4 heading7">
                                {item.qsSubject}
                                {faq === item.id ? (
                                  <Icon.Minus
                                    weight="bold"
                                    className="text-xl"
                                  />
                                ) : (
                                  <Icon.Plus
                                    weight="bold"
                                    className="text-xl"
                                  />
                                )}
                              </div>
                              <div className="content-question">
                                <div className="border-line w-full"></div>
                                <div className="body3 text-secondary pb-4">
                                  {item.qsResponse}
                                </div>
                              </div>
                            </div>
                          )
                        )
                      }
                    </div>
                  </div>
                </div>
                <div className="w-full xl:w-1/4">
                  <div className="more-infor border border-line rounded-xl py-8 px-6">
                    <div className="heading6">Le meilleur de nos Services</div>
                    <div className="body3 text-secondary mt-2">
                      Que vous ayez une équipe de 10 ou 100 personnes, nous
                      avons la solution pour vous, et vous aurez toujours des
                      services de qualité.
                    </div>
                    <div className="list-nav mt-4">
                      {servicesData.map((service, index) => (
                        <Link
                          key={`service-detail-${service.id}`}
                          className="nav-item rounded-lg flex-between p-12"
                          href={`/services/${service.slug}`} /*href={"/services/[slug]"}
                          as={"/services/transformation-numérique"}*/
                        >
                          <div className="text-button text-secondary">
                            {service.title}
                          </div>
                          <i className="ph-bold ph-caret-right hidden"></i>
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="ads-block rounded-lg md:mt-10 mt-6 relative">
                    <div className="bg-img">
                      <Image
                        width={5000}
                        height={5000}
                        src="/images/component/ads.png"
                        alt=""
                      />
                    </div>
                    <div className="text flex flex-col justify-between absolute left-0 top-0 w-full h-full p-8">
                      <div className="title">
                        <div className="heading5 text-white">Parlons-en</div>
                        <div className="body3 text-white mt-4">
                          Si vous avez un projet,
                          <br />
                          contactez-nous!
                        </div>
                      </div>
                      <div className="button-block md:mt-10 mt-6">
                        <a
                          className="button-main hover:bg-black hover:text-white inline-block bg-white text-button"
                          href="contact-style-one.html"
                        >
                          Consultez!
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <CtaOne />
        </main>
      </div>
    </>
  );
}

// // Générer tous les chemins possibles pour les services
// export function generateStaticParams() {
//   return servicesData.map((serviceFound) => ({
//     slug: serviceFound.slug,
//   }));
// }

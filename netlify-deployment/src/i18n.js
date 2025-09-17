import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "company": "Tax and Accounting",
      "tagline": "Professional Services",
      "phone": "(972) 777-4449",
      "email": "info@butatax.com",
      "address": "5700 Tennyson Pkwy Suite 300, Plano, TX 75024",
      "address_formatted": "5700 Tennyson Pkwy Suite 300\nPlano, TX 75024",
      "nav": {
        "services": "Services",
        "about": "About",
        "pricing": "Pricing",
        "resources": "Resources",
        "contact": "Contact",
        "client_login": "Client Login",
        "free_consultation": "Get Free Consultation"
      },
      "hero": {
        "trusted": "Trusted by 5,000+ clients from 50 states",
        "title": "Your Trusted",
        "subtitle": "Tax & Accounting",
        "partner": "Partner",
        "description": "BUTA Tax and Accounting provides expert tax preparation, strategic planning, and comprehensive accounting services designed to save you time and money. We proudly serve individuals and businesses in all 50 states.",
        "cta": "Get Started",
        "email_placeholder": "Enter your email",
        "cta_subtitle": "Free consultation • No obligation • Expert advice",
        "benefits": {
          "savings": "Save 15-30% on taxes",
          "support": "Year-round support",
          "protection": "Audit protection included",
          "experts": "Expert CPAs and Enrolled Agents"
        }
      },
      "stats": {
        "clients": "Happy Clients",
        "experience": "Years Experience",
        "saved": "Taxes Saved",
        "rating": "Client Rating"
      },
      "services": {
        "main_title": "Professional Tax Services in Plano, TX",
        "subtitle": "For Your Success",
        "description": "From individual tax returns to complex corporate accounting, BUTA provides expert services tailored to your needs.",
        "get_quote": "Get Quote",
        "individual": {
          "title": "Individual Tax Filing",
          "description": "Complete tax preparation and filing services for individuals and families with expert guidance.",
          "price": "Starting at $149",
          "features": ["Federal & State Returns", "Tax Optimization", "Audit Support", "Year-round Consultation"]
        },
        "business": {
          "title": "Business Tax Services", 
          "description": "Comprehensive tax solutions for small to medium businesses, including quarterly filings and planning.",
          "price": "Starting at $299",
          "features": ["Quarterly Returns", "Business Deductions", "Payroll Tax", "Strategic Planning"]
        },
        "corporate": {
          "title": "Corporate Accounting",
          "description": "Full-service accounting and financial management for corporations and large enterprises.",
          "price": "Custom Pricing",
          "features": ["Financial Statements", "Cash Flow Management", "Compliance Reporting", "CFO Services"]
        }
      },
      "testimonials": {
        "title": "What Our Clients Say",
        "description": "Don't just take our word for it. Here's what our satisfied clients have to say about BUTA's services.",
        "sarah": {
          "review": "Suleyman from BUTA Tax helped me save over $5,000 in taxes last year through their strategic planning. Their team is incredibly knowledgeable and responsive."
        },
        "michael": {
          "review": "From startup formation to complex tax situations, Javid and Suleyman have been our trusted partner. Professional, reliable, and always available when we need them."
        }
      },
      "contact": {
        "title": "Contact BUTA Tax and Accounting",
        "description": "Get your tax questions answered by our expert team",
        "call_us": "Call Us",
        "email_us": "Email Us",
        "visit_office": "Visit Our Office",
        "business_hours": "Business Hours",
        "weekdays": "Monday - Friday",
        "weekdays_hours": "9:00 AM - 6:00 PM",
        "saturday": "Saturday",
        "saturday_hours": "10:00 AM - 4:00 PM",
        "sunday": "Sunday",
        "sunday_hours": "Closed",
        "tax_season": "Tax Season",
        "extended_hours": "Extended Hours Available",
        "consultation_subject": "Free Tax Consultation Request",
        "consultation_intro": "Hi",
        "consultation_body": "I'm interested in learning more about your tax services. Please contact me at",
        "consultation_schedule": "I'd like to schedule a free tax consultation.\n\nPlease contact me.",
        "quote_subject": "Tax Service Quote Request",
        "quote_intro": "Hi",
        "quote_body": "I'd like to get a quote for",
        "quote_more_info": "Please contact me with more information.",
        "thank_you": "Thank you!"
      },
      "footer": {
        "description": "Professional tax and accounting services you can trust. We help individuals and businesses across America to optimize their tax strategies and achieve financial success.",
        "rights": "All rights reserved."
      }
    }
  },
  es: {
    translation: {
      "company": "Impuestos y Contabilidad",
      "tagline": "Servicios Profesionales de Impuestos y Contabilidad",
      "phone": "(972) 777-4449",
      "email": "info@butatax.com",
      "address": "5700 Tennyson Pkwy Suite 300, Plano, TX 75024",
      "address_formatted": "5700 Tennyson Pkwy Suite 300\nPlano, TX 75024",
      "nav": {
        "services": "Servicios",
        "about": "Acerca de",
        "pricing": "Precios",
        "resources": "Recursos",
        "contact": "Contacto",
        "client_login": "Acceso Cliente",
        "free_consultation": "Consulta Gratuita"
      },
      "hero": {
        "trusted": "Confiado por más de 5,000 clientes en Texas",
        "title": "Su Socio de Confianza en",
        "subtitle": "Impuestos y Contabilidad",
        "partner": "",
        "description": "BUTA Impuestos y Contabilidad proporciona preparación experta de impuestos, planificación estratégica y servicios integrales de contabilidad diseñados para ahorrarle tiempo y dinero. Servimos con orgullo a individuos y empresas en los 50 estados.",
        "cta": "Comenzar",
        "email_placeholder": "Ingrese su email",
        "cta_subtitle": "Consulta gratuita • Sin obligación • Asesoría experta",
        "benefits": {
          "savings": "Ahorre 15-30% en impuestos",
          "support": "Soporte todo el año",
          "protection": "Protección de auditoría incluida",
          "experts": "CPAs and Enrolled Agentsexpertos"
        }
      },
      "stats": {
        "clients": "Clientes Satisfechos",
        "experience": "Años de Experiencia",
        "saved": "Impuestos Ahorrados",
        "rating": "Calificación de Clientes"
      },
      "services": {
        "main_title": "Servicios Profesionales de Impuestos,
        "subtitle": "Para Su Éxito",
        "description": "Desde declaraciones de impuestos individuales hasta contabilidad corporativa compleja, BUTA proporciona servicios expertos adaptados a sus necesidades.",
        "get_quote": "Obtener Cotización",
        "individual": {
          "title": "Declaración de Impuestos Individual",
          "description": "Servicios completos de preparación y presentación de impuestos para individuos y familias con orientación experta.",
          "price": "Desde $149",
          "features": ["Declaraciones Federales y Estatales", "Optimización de Impuestos", "Soporte de Auditoría", "Consulta Todo el Año"]
        },
        "business": {
          "title": "Servicios de Impuestos Comerciales",
          "description": "Soluciones fiscales integrales para pequeñas y medianas empresas, incluyendo presentaciones trimestrales y planificación.",
          "price": "Desde $299",
          "features": ["Declaraciones Trimestrales", "Deducciones Comerciales", "Impuestos sobre Nómina", "Planificación Estratégica"]
        },
        "corporate": {
          "title": "Contabilidad Corporativa",
          "description": "Servicios completos de contabilidad y gestión financiera para corporaciones y grandes empresas.",
          "price": "Precio Personalizado",
          "features": ["Estados Financieros", "Gestión de Flujo de Efectivo", "Informes de Cumplimiento", "Servicios CFO"]
        }
      },
      "testimonials": {
        "title": "Lo que Dicen Nuestros Clientes de Plano",
        "description": "No solo tome nuestra palabra. Esto es lo que nuestros clientes satisfechos en Texas tienen que decir sobre los servicios de BUTA.",
        "sarah": {
          "review": "Suleyman de BUTA Tax me ayudó a ahorrar más de $5,000 en impuestos el año pasado a través de su planificación estratégica. Su equipo es increíblemente conocedor y receptivo."
        },
        "michael": {
          "review": "Desde la formación de startup hasta situaciones fiscales complejas, Javid y Suleyman han sido nuestro socio de confianza. Profesional, confiable y siempre disponible cuando los necesitamos."
        }
      },
      "contact": {
        "title": "Contactar BUTA Impuestos y Contabilidad",
        "description": "Obtenga respuestas a sus preguntas fiscales de nuestro equipo experto en Plano, TX",
        "call_us": "Llámanos",
        "email_us": "Envíanos un Email",
        "visit_office": "Visita Nuestra Oficina",
        "business_hours": "Horario de Atención",
        "weekdays": "Lunes - Viernes",
        "weekdays_hours": "9:00 AM - 6:00 PM",
        "saturday": "Sábado",
        "saturday_hours": "10:00 AM - 4:00 PM",
        "sunday": "Domingo",
        "sunday_hours": "Cerrado",
        "tax_season": "Temporada de Impuestos",
        "extended_hours": "Horario Extendido Disponible",
        "consultation_subject": "Solicitud de Consulta Fiscal Gratuita",
        "consultation_intro": "Hola",
        "consultation_body": "Estoy interesado en aprender más sobre sus servicios fiscales. Por favor contáctenme en",
        "consultation_schedule": "Me gustaría programar una consulta fiscal gratuita.\n\nPor favor contáctenme.",
        "quote_subject": "Solicitud de Cotización de Servicios Fiscales",
        "quote_intro": "Hola",
        "quote_body": "Me gustaría obtener una cotización para",
        "quote_more_info": "Por favor contáctenme con más información.",
        "thank_you": "¡Gracias!"
      },
      "footer": {
        "description": "Servicios profesionales de impuestos y contabilidad en los que puede confiar. Ayudamos a individuos y empresas en Plano y en todo Texas a optimizar sus estrategias fiscales y lograr el éxito financiero.",
        "rights": "Todos los derechos reservados."
      }
    }
  },
  tr: {
    translation: {
      "company": "Vergi ve Muhasebe",
      "tagline": "Profesyonel Hizmetleri",
      "phone": "(972) 777-4449",
      "email": "info@butatax.com",
      "address": "5700 Tennyson Pkwy Suite 300, Plano, TX 75024",
      "address_formatted": "5700 Tennyson Pkwy Suite 300\nPlano, TX 75024",
      "nav": {
        "services": "Hizmetler",
        "about": "Hakkımızda",
        "pricing": "Fiyatlar",
        "resources": "Kaynaklar",
        "contact": "İletişim",
        "client_login": "Müşteri Girişi",
        "free_consultation": "Ücretsiz Danışmanlık"
      },
      "hero": {
        "trusted": "Texas'ta 5,000+ müşteri tarafından güveniliyor",
        "title": "Güvenilir",
        "subtitle": "Vergi ve Muhasebe",
        "partner": "Ortağınız",
        "description": "BUTA Vergi ve Muhasebe, zamanınızı ve paranızı tasarruf etmek için tasarlanmış uzman vergi hazırlığı, stratejik planlama ve kapsamlı muhasebe hizmetleri sunar. 50 eyaletteki bireylere ve işletmelere gururla hizmet veriyoruz.",
        "cta": "Başlayın",
        "email_placeholder": "E-posta adresinizi girin",
        "cta_subtitle": "Ücretsiz danışmanlık • Yükümlülük yok • Uzman tavsiyeleri",
        "benefits": {
          "savings": "%15-30 vergi tasarrufu",
          "support": "Yıl boyu destek",
          "protection": "Denetim koruması dahil",
          "experts": "Uzman CPA'lar ve Enrolled Agent'ler"
        }
      },
      "stats": {
        "clients": "Mutlu Müşteriler",
        "experience": "Yıl Deneyim",
        "saved": "Tasarruf Edilen Vergi",
        "rating": "Müşteri Puanı"
      },
      "services": {
        "main_title": "Plano, TX'de Profesyonel Vergi Hizmetleri",
        "subtitle": "Başarınız İçin",
        "description": "Bireysel vergi beyannamelerinden karmaşık kurumsal muhasebeye kadar, BUTA ihtiyaçlarınıza göre uyarlanmış uzman hizmetleri sunar.",
        "get_quote": "Teklif Al",
        "individual": {
          "title": "Bireysel Vergi Beyannamesi",
          "description": "Uzman rehberliğinde bireyler ve aileler için tam vergi hazırlama ve dosyalama hizmetleri.",
          "price": "149$'dan başlayan",
          "features": ["Federal ve Eyalet Beyannameleri", "Vergi Optimizasyonu", "Denetim Desteği", "Yıl Boyu Danışmanlık"]
        },
        "business": {
          "title": "İşletme Vergi Hizmetleri",
          "description": "Üçer aylık dosyalamalar ve planlama dahil küçük ve orta ölçekli işletmeler için kapsamlı vergi çözümleri.",
          "price": "299$'dan başlayan",
          "features": ["Üçer Aylık Beyannameler", "İşletme Kesintileri", "Bordro Vergisi", "Stratejik Planlama"]
        },
        "corporate": {
          "title": "Kurumsal Muhasebe",
          "description": "Şirketler ve büyük kuruluşlar için tam hizmet muhasebesi ve finansal yönetim.",
          "price": "Özel Fiyatlandırma",
          "features": ["Mali Tablolar", "Nakit Akış Yönetimi", "Uyumluluk Raporlaması", "CFO Hizmetleri"]
        }
      },
      "testimonials": {
        "title": "Plano Müşterilerimiz Ne Diyor",
        "description": "Sadece bizim sözümüze güvenmeyin. Texas'taki memnun müşterilerimizin BUTA'nın hizmetleri hakkında söyledikleri burada.",
        "sarah": {
          "review": "BUTA Tax'tan Suleyman, stratejik planlamaları sayesinde geçen yıl vergilerimde 5.000$'dan fazla tasarruf etmeme yardımcı oldu. Ekipleri inanılmaz derecede bilgili ve duyarlı."
        },
        "michael": {
          "review": "Startup kuruluşundan karmaşık vergi durumlarına kadar, Javid ve Suleyman güvenilir ortağımız oldu. Profesyonel, güvenilir ve ihtiyacımız olduğunda her zaman mevcut."
        }
      },
      "contact": {
        "title": "BUTA Vergi ve Muhasebe ile İletişim",
        "description": "Plano, TX'deki uzman ekibimizden vergi sorularınızın yanıtlarını alın",
        "call_us": "Bizi Arayın",
        "email_us": "E-posta Gönderin",
        "visit_office": "Ofisimizi Ziyaret Edin",
        "business_hours": "Çalışma Saatleri",
        "weekdays": "Pazartesi - Cuma",
        "weekdays_hours": "09:00 - 18:00",
        "saturday": "Cumartesi",
        "saturday_hours": "10:00 - 16:00",
        "sunday": "Pazar",
        "sunday_hours": "Kapalı",
        "tax_season": "Vergi Sezonu",
        "extended_hours": "Uzatılmış Saatler Mevcut",
        "consultation_subject": "Ücretsiz Vergi Danışmanlığı Talebi",
        "consultation_intro": "Merhaba",
        "consultation_body": "Vergi hizmetleriniz hakkında daha fazla bilgi edinmek istiyorum. Lütfen benimle şu adresten iletişime geçin",
        "consultation_schedule": "Ücretsiz vergi danışmanlığı planlamak istiyorum.\n\nLütfen benimle iletişime geçin.",
        "quote_subject": "Vergi Hizmeti Teklif Talebi",
        "quote_intro": "Merhaba",
        "quote_body": "Şu hizmet için teklif almak istiyorum",
        "quote_more_info": "Lütfen daha fazla bilgi ile benimle iletişime geçin.",
        "thank_you": "Teşekkürler!"
      },
      "footer": {
        "description": "Güvenebileceğiniz profesyonel vergi ve muhasebe hizmetleri. Plano ve tüm Texas'taki bireylerin ve işletmelerin vergi stratejilerini optimize etmelerine ve finansal başarı elde etmelerine yardımcı oluyoruz.",
        "rights": "Tüm hakları saklıdır."
      }
    }
  },
  az: {
    translation: {
      "company": "Vergi və Mühasibat",
      "tagline": "Peşəkar Xidmətləri",
      "phone": "(972) 777-4449",
      "email": "info@butatax.com",
      "address": "5700 Tennyson Pkwy Suite 300, Plano, TX 75024",
      "address_formatted": "5700 Tennyson Pkwy Suite 300\nPlano, TX 75024",
      "nav": {
        "services": "Xidmətlər",
        "about": "Haqqımızda",
        "pricing": "Qiymətlər",
        "resources": "Resurslar",
        "contact": "Əlaqə",
        "client_login": "Müştəri Girişi",
        "free_consultation": "Pulsuz Məsləhət"
      },
      "hero": {
        "trusted": "Texas-da 5,000+ müştəri tərəfindən güvənilir",
        "title": "Sizin Etibarlı",
        "subtitle": "Vergi və Mühasibat",
        "partner": "Tərəfdaşınız",
        "description": "BUTA Vergi və Mühasibat vaxtınıza və pulunuza qənaət etmək üçün nəzərdə tutulmuş ekspert vergi hazırlığı, strateji planlaşdırma və hərtərəfli mühasibat xidmətləri təqdim edir. Biz 50 ştatda fərdlər və biznesləri qürurla xidmət göstəririk.",
        "cta": "Başla",
        "email_placeholder": "E-poçtunuzu daxil edin",
        "cta_subtitle": "Pulsuz məsləhət • Öhdəlik yox • Ekspert məsləhəti",
        "benefits": {
          "savings": "Vergilərdə 15-30% qənaət",
          "support": "İl boyu dəstək",
          "protection": "Audit müdafiəsi daxildir",
          "experts": "Ekspert CPA-lar və Enrolled Agent-lər"
        }
      },
      "stats": {
        "clients": "Məmnun Müştərilər",
        "experience": "İl Təcrübə",
        "saved": "Qənaət Edilən Vergi",
        "rating": "Müştəri Reytinqi"
      },
      "services": {
        "main_title": "Plano, TX-də Peşəkar Vergi Xidmətləri",
        "subtitle": "Uğurunuz Üçün",
        "description": "Fərdi vergi bəyannamələrindən mürəkkəb korporativ mühasibata qədər, BUTA ehtiyaclarınıza uyğunlaşdırılmış ekspert xidmətləri təqdim edir.",
        "get_quote": "Qiymət Al",
        "individual": {
          "title": "Fərdi Vergi Bəyannaməsi",
          "description": "Ekspert rəhbərliyi ilə fərdlər və ailələr üçün tam vergi hazırlığı və təqdim xidmətləri.",
          "price": "$149-dan başlayır",
          "features": ["Federal və Ştat Bəyannamələri", "Vergi Optimallaşdırılması", "Audit Dəstəyi", "İl Sərifsiz Məsləhətləşmə"]
        },
        "business": {
          "title": "Biznes Vergi Xidmətləri",
          "description": "Rüblük təqdimatlar və planlaşdırma daxil olmaqla kiçik və orta müəssisələr üçün hərtərəfli vergi həlləri.",
          "price": "$299-dan başlayır",
          "features": ["Rüblük Bəyannamələr", "Biznes Güzəştləri", "Əmək haqqı Vergisi", "Strateji Planlaşdırma"]
        },
        "corporate": {
          "title": "Korporativ Mühasibat",
          "description": "Korporasiyalar və böyük müəssisələr üçün tam xidmət mühasibatı və maliyyə idarəetməsi.",
          "price": "Fərdi Qiymətləndirmə",
          "features": ["Maliyyə Hesabatları", "Nağd Axın İdarəetməsi", "Uyğunluq Hesabatları", "CFO Xidmətləri"]
        }
      },
      "testimonials": {
        "title": "Müştərilərimiz Nə Deyir",
        "description": "Sadəcə bizim sözümüzü götürməyin. Burada bizim məmnun müştərilərimizin BUTA-nın xidmətləri haqqında dedikləri var.",
        "sarah": {
          "review": "BUTA Tax-dan Süleyman, strateji planlaşdırmaları vasitəsilə keçən il vergilərimdə 5,000 dollardan çox qənaət etməyimə kömək etdi. Onların komandası inanılmaz dərəcədə bilgili və həssasdır."
        },
        "michael": {
          "review": "Startup yaradılmasından mürəkkəb vergi vəziyyətlərinə qədər, Cavid və Süleyman bizim etibarlı tərəfdaşımız olublar. Peşəkar, etibarlı və ehtiyacımız olduğu zaman həmişə əlçatandır."
        }
      },
      "contact": {
        "title": "BUTA Vergi və Mühasibat ilə Əlaqə",
        "description": "Plano, TX-dəki ekspert komandamızdan vergi suallarınızın cavablarını alın",
        "call_us": "Bizə Zəng Edin",
        "email_us": "Bizə E-poçt Göndərin",
        "visit_office": "Ofisimizi Ziyarət Edin",
        "business_hours": "İş Saatları",
        "weekdays": "Bazar ertəsi - Cümə",
        "weekdays_hours": "09:00 - 18:00",
        "saturday": "Şənbə",
        "saturday_hours": "10:00 - 16:00",
        "sunday": "Bazar",
        "sunday_hours": "Bağlı",
        "tax_season": "Vergi Mövsümü",
        "extended_hours": "Uzadılmış Saatlar Mövcuddur",
        "consultation_subject": "Pulsuz Vergi Məsləhəti Tələbi",
        "consultation_intro": "Salam",
        "consultation_body": "Vergi xidmətləriniz haqqında daha çox öyrənmək istəyirəm. Zəhmət olmasa mənimlə əlaqə saxlayın",
        "consultation_schedule": "Pulsuz vergi məsləhəti planlaşdırmaq istəyirəm.\n\nZəhmət olmasa mənimlə əlaqə saxlayın.",
        "quote_subject": "Vergi Xidməti Qiymət Tələbi",
        "quote_intro": "Salam",
        "quote_body": "Bu xidmət üçün qiymət almaq istəyirəm",
        "quote_more_info": "Zəhmət olmasa daha çox məlumatla mənimlə əlaqə saxlayın.",
        "thank_you": "Təşəkkür edirik!"
      },
      "footer": {
        "description": "Güvənə biləcyəniz peşəkar vergi və mühasibat xidmətləri. Biz bütün Amerikadakı fərdlərin və bizneslərin vergi strategiyalarını optimallaşdırmaq və maliyyə uğuru əldə etmək üçün kömək edirik.",
        "rights": "Bütün hüquqlar qorunur."
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Default language
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false // React already does escaping
    },
    react: {
      useSuspense: false
    }
  });

export default i18n;

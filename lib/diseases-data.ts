export interface DiseaseItem {
  id: string;
  en: string;
  hi: string;
  image: string;
}

export interface DiseaseCategory {
  id: string;
  titleEn: string;
  titleHi: string;
  accent: string;
  items: DiseaseItem[];
  image?: string;
}

export const diseaseCategories: DiseaseCategory[] = [
  {
    id: "anal-digestive",
    titleEn: "Anal and Digestive",
    titleHi: "गुदा और पाचन",
    accent: "bg-red-500",
    items: [
      { id: "piles-fistula-fissure", en: "Piles / Fistula / Fissure", hi: "बवासीर", image: "/Dr Bundela/diseases/Piles.jpg" },
      { id: "gastric-troubles", en: "Gastric Troubles", hi: "पेट संबन्धी बीमारियाँ", image: "/Dr Bundela/diseases/gastric.jpg" },
      { id: "chronic-constipation", en: "Chronic Constipation", hi: "पुरानी कब्ज की समस्या", image:"/Dr Bundela/diseases/chronic constipation.jpg" },
      { id: "fatty-liver", en: "Fatty Liver", hi: "फैटी लिवर", image: "/Dr Bundela/diseases/fatty liver.jpg" },
      { id: "gerd", en: "GERD", hi: "गैस्ट्रोओसोफेगल रिफ्लक्स", image: "/Dr Bundela/diseases/GERD.jpg" },
      { id: "colitis", en: "Colitis", hi: "कोलाइटिस", image: "/Dr Bundela/diseases/colitis.jpg" },
      { id: "ibs", en: "IBS (Irritable Bowel Syndrome)", hi: "इरिटेबल बाउल सिंड्रोम", image: "/Dr Bundela/diseases/IBS.jpg" },
    ]
  },
  {
    id: "anxiety",
    titleEn: "Anxiety",
    titleHi: "मानसिक स्वास्थ्य",
    accent: "bg-indigo-500",
    items: [
      { id: "anxiety-disorder", en: "Anxiety", hi: "अवसाद", image: "/Dr Bundela/diseases/anxiety.jpg" }
    ]
  },
  {
    id: "bones-joint",
    titleEn: "Bones and Joint",
    titleHi: "हड्डियाँ और जोड़",
    accent: "bg-blue-600",
    items: [
      { id: "arthritis", en: "Arthritis", hi: "घुटने में दर्द", image: "/Dr Bundela/diseases/arthritis.jpg" },
      { id: "cervical-spondylosis", en: "Cervical Spondylosis", hi: "गर्दन में दर्द", image: "/Dr Bundela/diseases/Cervical Spondylosis.jpg" },
      { id: "ankylosing-spondylitis", en: "Ankylosing Spondylitis", hi: "एंकिलोज़िंग स्पॉन्डिलाइटिस", image: "/Dr Bundela/diseases/Ankylosing Spondylitis.jpg" },
      { id: "calcaneal-spur", en: "Calcaneal Spur", hi: "एड़ी दर्द", image: "/Dr Bundela/diseases/Calcaneal Spur.jpg" },
      { id: "slip-disc", en: "Slip Disc", hi: "स्लिप डिस्क", image: "/Dr Bundela/diseases/Slip Disc.jpg" },
      { id: "gout", en: "Gout", hi: "गठिया", image: "/Dr Bundela/diseases/Gout.jpg" },
      { id: "sciatica", en: "Sciatica", hi: "साइटिका", image: "/Dr Bundela/diseases/Sciatica.jpg" },
      { id: "ganglion", en: "Ganglion", hi: "गैग्लियन", image: "/Dr Bundela/diseases/Ganglion.jpg" },
      { id: "parkinson-disease", en: "Parkinson Disease", hi: "पार्किंसंस रोग", image: "/Dr Bundela/diseases/Parkinson Disease.jpg" },
      { id: "backache", en: "Backache", hi: "कमर दर्द", image: "/Dr Bundela/diseases/Backache.jpg" },
      { id: "rheumatoid-arthritis", en: "Rheumatoid Arthritis", hi: "रूमेटाइड अर्थराइटिस", image: "/Dr Bundela/diseases/Rheumatoid Arthritis.jpg" },
      { id: "osteoarthritis", en: "Osteoarthritis", hi: "ऑस्टियोआर्थराइटिस", image: "/Dr Bundela/diseases/Osteoarthitis.jpg" },
    ]
  },
  {
    id: "children",
    titleEn: "Children",
    titleHi: "बच्चे",
    accent: "bg-orange-400",
    items: [
      { id: "height-increase", en: "Height Increase", hi: "लम्बाई न बढ़ना", image: "/Dr Bundela/diseases/Height Increase.jpg" },
      { id: "delayed-teething", en: "Delayed Teething", hi: "दाँत देर से निकलना", image: "/Dr Bundela/diseases/Delayed Teething.jpg" },
    ]
  },
  {
    id: "ent",
    titleEn: "Ear Nose and Throat",
    titleHi: "कान, नाक और गला",
    accent: "bg-emerald-500",
    items: [
      { id: "allergic-rhinitis", en: "Allergic Rhinitis", hi: "एलर्जिक राइनाइटिस", image: "/Dr Bundela/diseases/Allergic Rhinitis.jpg" },
      { id: "nasal-bleeding", en: "Nasal Bleeding", hi: "नाक से खून आना", image: "/Dr Bundela/diseases/Nasal Bleeding.jpg" },
    ]
  },
  {
    id: "eyes",
    titleEn: "Eyes",
    titleHi: "आँखें",
    accent: "bg-cyan-500",
    items: [
      { id: "chalazion", en: "Chalazion", hi: "आंख की पलक में गांठ", image: "/Dr Bundela/diseases/Chalazion.jpg" },
      { id: "conjunctivitis", en: "Conjunctivitis", hi: "कन्जंक्टिवाइटिस", image: "/Dr Bundela/diseases/Conjunctivitis.jpg" },
      { id: "dry-eye", en: "Dry Eye", hi: "आंखो मे सूखापन", image: "/Dr Bundela/diseases/Dry Eye.jpg" },
      { id: "epiphora", en: "Epiphora", hi: "आंखों में पानी आना", image: "/Dr Bundela/diseases/Epiphora.jpg" },
      { id: "glaucoma", en: "Glaucoma", hi: "मोतियाबिंद", image: "/Dr Bundela/diseases/Glaucoma.jpg" },
      { id: "trachoma", en: "Trachoma", hi: "टेक्रोमा (रोहे)", image: "/Dr Bundela/diseases/Trachoma.jpg" },
      { id: "eye-redness", en: "Redness in Eyes", hi: "आँखों में लालपन", image: "/Dr Bundela/diseases/Redness in Eyes.jpg" },
      { id: "eye-burning", en: "Burning in Eyes", hi: "आँखों में जलन", image: "/Dr Bundela/diseases/Burning in eyes.jpg" },
    ]
  },
  {
    id: "female",
    titleEn: "Female",
    titleHi: "महिला रोग",
    accent: "bg-pink-500",
    items: [
      { id: "pcod-cyst", en: "PCOS / PCOD / Cyst / Fibroid", hi: "बच्चेदानी में गाँठ", image: "/Dr Bundela/diseases/PCOS:PCOD.jpg" },
      { id: "dysmenorrhea", en: "Dysmenorrhea (Painful menses)", hi: "डिसमेनोरिया", image: "/Dr Bundela/diseases/Dysmenorrhea.jpg" },
      { id: "endometriosis", en: "Endometriosis", hi: "एंडोमेट्रियोसिस", image: "/Dr Bundela/diseases/Endometriosis.jpg" },
      { id: "fibroadenoma", en: "Fibroadenoma", hi: "फाइब्रोएडीनोमा", image: "/Dr Bundela/diseases/Fibroadenoma.jpg" },
      { id: "fibromyalgia", en: "Fibromyalgia", hi: "फाइब्रोमायेल्जिया", image: "/Dr Bundela/diseases/Fibromyalgia.jpeg" },
      { id: "uti", en: "Urinary Tract Infections - UTI", hi: "यू.टी.आई", image: "/Dr Bundela/diseases/Urinary Tract Infections.jpg" },
      { id: "leukorrhea", en: "White Discharge - Leukorrhea", hi: "सफ़ेद पानी", image: "/Dr Bundela/diseases/White Discharge.jpg" },
      { id: "pms", en: "Premenstrual Syndrome", hi: "प्रीमेंस्ट्रुअल सिंड्रोम", image: "/Dr Bundela/diseases/Premenstrual Syndrome.jpg" },
      { id: "low-sexual-desire", en: "Low Sexual Desire", hi: "कामेच्छा की कमी", image: "/Dr Bundela/diseases/Low Sexual Desire.jpg" },
      { id: "menopausal-syndrome", en: "Menopausal Syndrome", hi: "रजोनिवृति (मेनोपॉज)", image: "/Dr Bundela/diseases/Menopausal Syndrome.jpg" },
      { id: "irregular-periods", en: "Irregular Periods", hi: "इर्रेगुलर पीरियड", image: "/Dr Bundela/diseases/Irregular Periods.jpg" },
    ]
  },
  {
    id: "general-medicine",
    titleEn: "General Medicine",
    titleHi: "सामान्य चिकित्सा",
    accent: "bg-slate-600",
    items: [
      { id: "tonsillitis", en: "Tonsillitis", hi: "टॉन्सिल", image: "/Dr Bundela/diseases/Tonsillitis.jpg" },
      { id: "frequent-colds", en: "Frequent Colds", hi: "बार - बार जुकाम होना", image: "/Dr Bundela/diseases/Frequent Colds.jpg" },
      { id: "mouth-ulcers", en: "Mouth Ulcers", hi: "मुँह में छाला", image: "/Dr Bundela/diseases/Mouth Ulcers.jpg" },
      { id: "obesity", en: "Obesity", hi: "मोटापा", image: "/Dr Bundela/diseases/Obesity.jpg" },
    ]
  },
  {
    id: "headache",
    titleEn: "Headache",
    titleHi: "सर दर्द",
    accent: "bg-amber-600",
    items: [
      { id: "migraine", en: "Migraine", hi: "आधे / पूरे सर में दर्द", image: "/Dr Bundela/diseases/Migraine.jpg" },
      { id: "general-headache", en: "Headache", hi: "सर दर्द", image: "/Dr Bundela/diseases/Headache.jpg" },
    ]
  },
  {
    id: "male",
    titleEn: "Male",
    titleHi: "पुरुष रोग",
    accent: "bg-sky-700",
    items: [
      { id: "erectile-dysfunction", en: "Erectile Dysfunction", hi: "नपुसंकता",  image: "/Dr Bundela/diseases/Erectile Dysfunction.jpg" },
      { id: "gynecomastia", en: "Gynecomastia", hi: "पुंस्तनवृद्धि",  image: "/Dr Bundela/diseases/Gynecomastia.jpg" },
      { id: "prostate-enlargement", en: "Prostate Enlargement", hi: "प्रोस्टेट का बढ़ना",  image: "/Dr Bundela/diseases/Prostate Enlargement.jpg" },
      { id: "prostate-discharge", en: "Prostate Discharge", hi: "धात का गिरना",  image: "/Dr Bundela/diseases/Prostate Discharge.jpg" },
      { id: "premature-ejaculation", en: "Premature / Early Ejaculation", hi: "शीघ्रपतन",  image: "/Dr Bundela/diseases/Premature.jpg" },
      { id: "hydrocele", en: "Hydrocele", hi: "हाइड्रोसील",  image: "/Dr Bundela/diseases/Hydrocele.jpg" },
      { id: "varicocele", en: "Varicocele", hi: "वैरिकोसील",  image: "/Dr Bundela/diseases/Varicocele.jpg" },
      { id: "low-sperm-count", en: "Nil / Low Sperm Count", hi: "निल / कम शुक्राणु", image: "/Dr Bundela/diseases/Prostate Discharge.jpg" },
    ]
  },
  {
    id: "renal-problems",
    titleEn: "Renal Problems",
    titleHi: "गुर्दा रोग",
    accent: "bg-blue-400",
    items: [
      { id: "renal-stone", en: "Renal Stone / Kidney Stones", hi: "गुर्दे की पथरी", image: "/Dr Bundela/diseases/Renal Stone.jpg" },
      { id: "renal-infection", en: "Renal Infection", hi: "गुर्दा संक्रमण", image: "/Dr Bundela/diseases/Renal Infection.jpg" },
      { id: "burning-urination", en: "Burning Urination", hi: "पेशाब में जलन", image: "/Dr Bundela/diseases/Burning Urination.jpg" },
    ]
  },
  {
    id: "respiratory",
    titleEn: "Respiratory",
    titleHi: "श्वसन रोग",
    accent: "bg-teal-400",
    items: [
      { id: "asthma", en: "Asthma", hi: "अस्थमा", image: "/Dr Bundela/diseases/Asthma.jpg" },
      { id: "pneumonia", en: "Pneumonia", hi: "निमोनिया", image: "/Dr Bundela/diseases/Pneumonia.jpg" },
      { id: "copd", en: "Chronic Obstructive Pulmonary Disease", hi: "सीओपीडी", image: "/Dr Bundela/diseases/COPD.jpg" },
      { id: "bronchiectasis", en: "Bronchiectasis", hi: "श्वासनलियों का फैलाव", image: "/Dr Bundela/diseases/Bronchiectasis.jpg" },
    ]
  },
  {
    id: "skin-hair",
    titleEn: "Skin and Hair",
    titleHi: "त्वचा और बाल",
    accent: "bg-rose-400",
    items: [
      { id: "hair-fall", en: "Hair Fall", hi: "बाल झड़ना", image: "/Dr Bundela/diseases/Hair Fall.jpg" },
      { id: "psoriasis", en: "Psoriasis", hi: "सोरायसिस", image: "/Dr Bundela/diseases/Psoriasis.jpg" },
      { id: "alopecia-areata", en: "Alopecia Areata", hi: "गंजापन", image: "/Dr Bundela/diseases/Alopecia Areata.jpg" },
      { id: "eczema", en: "Eczema", hi: "खुजली", image: "/Dr Bundela/diseases/Eczema.jpg" },
      { id: "allergy", en: "Allergy", hi: "एलर्जी", image: "/Dr Bundela/diseases/Allergy.jpg" },
      { id: "fungal-infection", en: "Fungal Infection", hi: "फंगल इन्फेक्शन", image: "/Dr Bundela/diseases/Fungal Infection.jpg" },
      { id: "acne-pimple", en: "Acne / Pimple", hi: "पिम्पल की समस्या", image: "/Dr Bundela/diseases/Acne.jpg" },
      { id: "warts", en: "Warts", hi: "मस्से", image: "/Dr Bundela/diseases/Warts.jpg" },
      { id: "vitiligo", en: "Vitiligo / Leucoderma", hi: "सफ़ेद दाग", image: "/Dr Bundela/diseases/Vitiligo.jpg" },
      { id: "pigmentation", en: "Pigmentation", hi: "झाइंया", image: "/Dr Bundela/diseases/Pigmentation.jpg" },
      { id: "moles", en: "Moles", hi: "तिल की समस्या", image: "/Dr Bundela/diseases/Moles.jpg" },
      { id: "lipoma", en: "Lipoma", hi: "लाइपोमा", image: "/Dr Bundela/diseases/Lipma.jpg" },
    ]
  }
];
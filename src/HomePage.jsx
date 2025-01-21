import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-5 bg-indigo-500">
      <h1 className="items-center mt-6 text-2xl font-bold text-center text-white sm:text-5xl lg:text-5xl md:text-5xl fade-in">
        Welcome To Apni Scholarships
      </h1>

      <Link
        className="flex items-center justify-center gap-2 p-3 mt-10 text-xl font-extrabold text-white transition-colors duration-300 ease-in-out bg-green-600 border-none rounded-lg hover:bg-green-700 fade-in"
        to="/Scholar"
      >
        Scholarships <FaArrowRight />
      </Link>

      <p className="px-6 mt-4 text-lg text-center text-white fade-in">
        हमारी वेबसाइट एक <strong>Scholarships Finder App</strong> है, जिसका
        उद्देश्य छात्रों को विभिन्न स्कॉलरशिप्स और वित्तीय सहायता के अवसरों के
        बारे में जानकारी प्रदान करना है। यह ऐप उन छात्रों के लिए एक उपयोगी टूल
        है, जो अपनी शिक्षा को आगे बढ़ाने के लिए आर्थिक सहायता की तलाश में हैं।
      </p>

      <p className="px-6 mt-4 text-lg text-center text-white fade-in">
        <strong>मुख्य विशेषताएँ:</strong>
      </p>

      <ul className="px-8 text-lg text-left text-white list-disc fade-in">
        <li>
          <strong>विभिन्न स्कॉलरशिप्स की जानकारी:</strong> इस ऐप में छात्रों को
          विभिन्न शैक्षिक संस्थानों, सरकारी योजनाओं और निजी संगठनों द्वारा
          प्रदान की जाने वाली स्कॉलरशिप्स के बारे में विस्तार से जानकारी मिलती
          है।
        </li>
        <li>
          <strong>फिल्टर और सर्च ऑप्शन:</strong> छात्रों के लिए यह ऐप विभिन्न
          श्रेणियों जैसे विषय, पाठ्यक्रम, देश, और पात्रता मानदंड के आधार पर
          स्कॉलरशिप्स खोजने की सुविधा प्रदान करता है।
        </li>
        <li>
          <strong>नई स्कॉलरशिप्स की अपडेट्स:</strong> ऐप में समय-समय पर नई और
          प्रासंगिक स्कॉलरशिप्स की जानकारी अपडेट की जाती है, ताकि छात्र कभी भी
          महत्वपूर्ण अवसरों से वंचित न हों।
        </li>
        <li>
          <strong>आसान आवेदन प्रक्रिया:</strong> इस ऐप के माध्यम से छात्र सीधे
          स्कॉलरशिप्स के लिए आवेदन प्रक्रिया की जानकारी प्राप्त कर सकते हैं,
          जिससे उन्हें आवेदन करने में आसानी होती है।
        </li>
        <li>
          <strong>यूज़र-फ्रेंडली इंटरफेस:</strong> यह ऐप एक सरल और सहज इंटरफेस
          प्रदान करता है, जिससे छात्रों को स्कॉलरशिप्स के बारे में जानकारी
          प्राप्त करने और आवेदन करने में कोई कठिनाई नहीं होती।
        </li>
      </ul>

      <p className="px-6 mt-6 text-lg text-center text-white fade-in">
        इस वेबसाइट/ऐप का उद्देश्य छात्रों को उनके शिक्षा के सपनों को साकार करने
        के लिए वित्तीय मदद प्राप्त करने में सहारा देना है।
      </p>
    </div>
  );
}

export default HomePage;

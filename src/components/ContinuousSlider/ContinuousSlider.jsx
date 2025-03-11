import React from "react";

const logos = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBWjxuZx__a25hgj1JCqKkQF-6_UiqrUG7_g&s",
  "https://g.foolcdn.com/art/companylogos/square/jpm.png",
  "https://cloudfront-us-east-1.images.arcpublishing.com/gmg/G5EBK3TZQNGUJIWS4HYAKAJQMI.jpg",
  "https://media.licdn.com/dms/image/v2/C4E0BAQEZs2BU8_0oMw/company-logo_200_200/company-logo_200_200/0/1645015558948/ibm_security_logo?e=2147483647&v=beta&t=2dRY_sGeWfNKq8F8ToZmIHDXeDSYwZ9a1APrgYZfUDw",
  "https://latn.com/wp-content/uploads/2014/12/walmart-logo-vector.png",
  "https://jnj-content-lab2.brightspotcdn.com/dims4/default/9849760/2147483647/strip/true/crop/499x374+0+63/resize/1005x753!/quality/90/?url=https%3A%2F%2Fjnj-production-jnj.s3.us-east-1.amazonaws.com%2Fbrightspot%2F9a%2F76%2Fbd7b1a4c104486eb82033ce4df92%2Flogo-130-x-130-1.png",
  "https://pngimg.com/d/google_PNG19640.png",
  "https://www.frikko.com/wp-content/uploads/2019/03/amazon-logo-icon-png_44637.png",
  "https://i.pinimg.com/736x/12/c4/58/12c458169858d17de2c2d944ca694ce6.jpg",
  "https://static.vecteezy.com/ti/vecteur-libre/p1/29881110-pfizer-vecteur-logo-dernier-bleu-couleur-americain-pharmaceutique-societe-cette-recherche-et-developpement-vaccins-et-medical-des-produits-pharmacie-laboratoire-gratuit-vectoriel.jpg",
];

export default function ContinuousSlider() {
  return (
    <div className="relative overflow-hidden pt-6">
      {/* Wrapping the animation to make it continuous */}
      <div className="animate-marquee">
        {/* Duplicate the logos to ensure smooth infinite scrolling */}
        {logos.concat(logos).map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`}
            className="h-20 mx-4"
          />
        ))}
      </div>
    </div>
  );
}

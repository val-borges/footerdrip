
import './footer.css';

const logoData = {
  icon: "/src/assets/logo-footer.svg", 
  alt: "Digital Store Logo", 
};


const socialIcons = [     
  { icon: "/src/assets/facebook.svg", link: "https://facebook.com" },
  { icon: "/src/assets/twitter.svg", link: "https://twitter.com" },
  { icon: "/src/assets/instagram.svg", link: "https://instagram.com" },
];


const footerData = {
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  informationLinks: [
    { text: "Sobre Drip Store", link: "/about" },
    { text: "Segurança", link: "/security" },
    { text: "Wishlist", link: "/wishlist" },
    { text: "Blog", link: "/blog" },
    { text: "Trabalhe conosco", link: "/careers" },
    { text: "Meus Pedidos", link: "/orders" },
  ],
  categories: [
    { text: "Camisetas", link: "/categories/shirts" },
    { text: "Calças", link: "/categories/pants" },
    { text: "Bonés", link: "/categories/caps" },
    { text: "Headphones", link: "/categories/headphones" },
    { text: "Tênis", link: "/categories/shoes" },
  ],
  contact: {
    address: "Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161",
    phone: "(85) 3051-3411",
  },
  copyright: "© 2022 Digital College",
};

// Footer principal
const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
        
          <div className="col-md-4">
            
            <img
              src={logoData.icon}
              alt={logoData.alt}
              style={{ width: "243px", marginBottom: "10px" }}
            />
            <p>{footerData.description}</p>
            <div className="d-flex">
              {socialIcons.map((icon, index) => (
                <a
                  key={index}
                  href={icon.link}
                  className="text-white me-3"
                  aria-label={`Link to ${icon.link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={icon.icon}
                    alt={`Icon for ${icon.link}`}
                    style={{ width: "24px", height: "24px" }}
                  />
                </a>
              ))}
            </div>
          </div>

        
          <div className="col-md-3">
            <h5>Informação</h5>
            <ul className="list-unstyled">
              {footerData.informationLinks.map((item, index) => (
                <li key={index}>
                  <a href={item.link} className="text-white text-decoration-none">
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        
          <div className="col-md-3">
            <h5>Categorias</h5>
            <ul className="list-unstyled">
              {footerData.categories.map((item, index) => (
                <li key={index}>
                  <a href={item.link} className="text-white text-decoration-none">
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

         
          <div className="col-md-2">
            <h5>Contato</h5>
            <p className="mb-1">{footerData.contact.address}</p>
            <p>{footerData.contact.phone}</p>
          </div>
        </div>

        
        <hr className="bg-white my-3" />

        <div className="text-center mt-3">
          <p className="mb-0">{footerData.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

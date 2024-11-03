import Title from "./Title";
import certs from "../data/certs";
import CertItem from "./CertItem";

const Cert = () => {
    return (
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div>
          <Title>Certifications</Title>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certs.map((cert) => (
              <CertItem 
              imgUrl={cert.imgUrl}
              url={cert.url} 
              />
            ))}
          </div>
        </div>
      </div>
    );
}

export default Cert;
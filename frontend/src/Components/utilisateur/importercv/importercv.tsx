import React, { ChangeEvent, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { Document, Page, pdfjs } from 'react-pdf';

// Configure react-pdf pour le chargement du document PDF
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const ImportCV = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { offre } = location.state;
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (event !== null && file && file.type === "application/pdf") {
      console.log("Nom du fichier sélectionné :", file.name);
      setPdfFile(file);
    } else {
      console.log("Veuillez sélectionner un fichier PDF.");
    }
  };

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  const savePdf = async () => {
    setIsLoading(true);
    if (pdfFile) {
      const formData = new FormData();
      formData.append('file', pdfFile); // Ajoute le fichier PDF
      try {
        const response = await fetch(`https://projet-aws-backend.onrender.com/postuler/create1/${offre.id}`,{
            method: 'POST',
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem("token")
            },
           // body: formData, // /postuler/create1 
          });
          console.log(response)
        if (!response.ok) {
          
          throw new Error("Erreur lors de la récupération des données");
        } else {
          navigate('/utilisateur/candidature');
        }
      } catch (error) {
          console.error("Erreur:", error);
      }
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#f1f2f6] flex items-center justify-center p-6 flex-grow">
      <div className="containercv border-2 border-blue-500 p-8 rounded-lg text-center w-400 h-200 mx-auto mt-16">
        
          {pdfFile && (
            <div className="pdf-preview mb-8">
              <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} />
              </Document>
              <p>
                Page {pageNumber} sur {numPages}
              </p>
            </div>
          )}
          <label htmlFor="file-upload" className="file-button bg-blue-500 text-white py-2 px-4 rounded-md cursor-pointer hover:bg-blue-600">
            Importer un CV
          </label>
          <input
            id="file-upload"
            className="file-input hidden"
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
          />
          {pdfFile && (
            <button onClick={savePdf} className="save-button bg-blue-500 text-white py-2 px-4 rounded-md cursor-pointer hover:bg-blue-600 mt-4" disabled={isLoading}>{isLoading ? 'Chargement...' : 'Enregistrer'}
              
            </button>
          )}
      </div>
    </div>
  );
};

export default ImportCV;

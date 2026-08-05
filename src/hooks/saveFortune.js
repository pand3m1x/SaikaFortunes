import { useRef, useCallback, useState } from "react";
import { toJpeg } from "html-to-image";

function useSaveFortune( filename="your-fortune" ) {
  const fortuneRef = useRef(null);
  const [showSavedMessage, setShowSavedMessage] = useState(false);

  const saveFortune = useCallback( () => {

    if (!fortuneRef.current) return;

    toJpeg(fortuneRef.current, 
      { quality: 0.95, backgroundColor: "white" })
    .then((dataUrl) => {
      const link = document.createElement("a");
      link.download = `${filename}.jpeg`;
      link.href = dataUrl;
      link.click();
      setShowSavedMessage(true);
    })

      .catch((err) => {
        console.error("Failed to save fortune:", err)

      });

  }, [filename]);

  const clearSavedMessage = useCallback(() => {
    setShowSavedMessage(false);
  }, []);

  return { fortuneRef, saveFortune, showSavedMessage, clearSavedMessage };

}

export default useSaveFortune
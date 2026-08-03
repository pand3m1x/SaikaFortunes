import { useRef, useCallback } from "react";
import { toJpeg } from "html-to-image";

function useSaveFortune( filename="your-fortune" ) {
  const fortuneRef = useRef(null);

  const saveFortune = useCallback( () => {

    if (!fortuneRef.current) return;

    toJpeg(fortuneRef.current, { quality: 0.95, backgroundColor: "white" })
    .then((dataUrl) => {
      const link = document.createElement("a");
      link.download = `${filename}.jpeg`;
      link.href = dataUrl;
      link.click();

    })

      .catch((err) => {
        console.error("Failed to save fortune:", err)

      });

  }, [filename]);

  return { fortuneRef, saveFortune };

}

export default useSaveFortune
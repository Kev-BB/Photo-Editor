import { useState, useEffect } from "react";
import "./styles.css";
export default function App() {
  const [filter, setFilter] = useState({
    brightness: 1,
    contrast: 1,
    saturation: 1,
  });

  /* Challenge

    Range input'ları henüz hiçbir şey yapmıyor. Sizin göreviniz bunları aşağıdaki gibi çalıştırmaktır: 
    
        1. Kullanıcı range input kaydırıcılarından birini her hareket ettirdiğinde, filter state nesnesindeki karşılık gelen değer, değişmeyen diğer iki değer korunarak input değeri olacak şekilde güncellenmelidir. 
           
        2. Filter state nesnesinin her güncellemesinde, --brightness, --contrast ve 
           --saturation görüntünün filter özelliklerini kontrol eden CSS değişkenleri, karşılık gelen filter state nesne özelliklerinin değerleri olacak şekilde güncellenmelidir. İlgili CSS, styles.css dosyasının 1-13 satırlarında bulunabilir. 
		                       
        3. Range input'larının başlangıç değerleri, filter state nesnesindeki karşılık gelen özelliklerinin başlangıç değerleri olmalıdır.   
		   
		4. Kodunuzu mümkün olduğunca DRY yapmaya çalışın
*/

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFilter((prevFilter) => ({
      ...prevFilter,
      [name]: parseFloat(value), 
    }));
  };

  const brightnessStyle = { "--brightness": filter.brightness };
  const contrastStyle = { "--contrast": filter.contrast };
  const saturationStyle = { "--saturation": filter.saturation };

  return (
    <div className="main-container">
      <h1>
        <span>📷</span> Photo Editörü <span>📷</span>
      </h1>

      <div className="image-container">
        <img src="./images/kunal-goswami-CuUn__aMGD4-unsplash.jpg" style={{ ...brightnessStyle, ...contrastStyle, ...saturationStyle }} />
      </div>

      <form>
        <label>
          <input
            type="range"
            name="brightness"
            value={filter.brightness}
            onChange={handleInputChange}
            min={0}
            max={2}
            step={0.1}
          />
          <span>Brightness</span>
        </label>

        <label>
          <input
            type="range"
            name="contrast"
            value={filter.contrast}
            onChange={handleInputChange}
            min={0}
            max={2}
            step={0.1}
          />
          <span>Contrast</span>
        </label>

        <label>
          <input
            type="range"
            name="saturation"
            value={filter.saturation}
            onChange={handleInputChange}
            min={0}
            max={2}
            step={0.1}
          />
          <span>Saturation</span>
        </label>
      </form>
    </div>
  );
}

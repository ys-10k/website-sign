document.addEventListener('DOMContentLoaded', () => {
    fetch('gallery.json')
      .then(response => response.json())
      .then(data => {
        const galleries = [
          { id: 'gallery1', direction: 'right' },
          { id: 'gallery2', direction: 'left' }
        ];
  
        galleries.forEach(galleryConfig => {
          const container = document.getElementById(galleryConfig.id);
          const imageList = data[galleryConfig.id];
  
          // 画像を2倍に複製して挿入
          for (let i = 0; i < 2; i++) {
            imageList.forEach(src => {
              const img = document.createElement('img');
              img.src = src;
              img.alt = '作品';
              container.appendChild(img);
            });
          }
  
          // 無限スクロール処理
          const scrollStep = galleryConfig.direction === 'right' ? 1 : -1;
  
          setInterval(() => {
            container.scrollLeft += scrollStep;
  
            // 半分を超えたら巻き戻す
            const scrollLimit = container.scrollWidth / 2;
            if (galleryConfig.direction === 'right' && container.scrollLeft >= scrollLimit) {
              container.scrollLeft = 0;
            }
            if (galleryConfig.direction === 'left' && container.scrollLeft <= 0) {
              container.scrollLeft = scrollLimit;
            }
          }, 50);
        });
      })
      .catch(error => {
        console.error('JSONの読み込みに失敗しました:', error);
      });
  });
  
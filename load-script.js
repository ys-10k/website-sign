    // ページが読み込まれたとき（load）にスクロール位置をトップに戻す
    window.addEventListener('load', () => {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 50);
    });
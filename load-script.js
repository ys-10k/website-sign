    // ページが読み込まれたとき（load）にスクロール位置をトップに戻す

    window.addEventListener('load', () => {
    // スクロール位置を初期化
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50);

    // フェードアウト開始（3秒後）
    setTimeout(() => {
      const splash = document.getElementById('splash');
      if (splash) {
        splash.classList.add('fade-out');

        // フェードアウトが終わったら非表示＋スクロール許可
        setTimeout(() => {
          splash.style.display = 'none';
          document.body.classList.remove('no-scroll'); // ← ここでスクロール復活
        }, 2000); // アニメーション時間と同じだけ待って非表示に
      }
    }, 3000); // 表示しておく時間
  });
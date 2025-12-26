$(function () {
  /*=================================================
  ハンバーガーメニュー
  ===================================================*/
  $(".hamburger").on("click", function () {
    $("header").toggleClass("open");
  });

  // #maskのエリアをクリックした時にメニューを閉じる
  $(".mask").on("click", function () {
    $("header").removeClass("open");
  });

  // リンクをクリックした時にメニューを閉じる
  $("nav a").on("click", function () {
    $("header").removeClass("open");
  });


  /*=================================================
  スムーススクロール
  ===================================================*/
  // ページ内リンクのイベント
  $('a[href^="#"]').click(function () {

    // リンクを取得 クリックされたaタグのhref属性の中身をhrefという変数に代入する （#menuなど）をhrefという変数に代入する
    let href = $(this).attr("href");

    // ジャンプ先のid名をセット href == "#" 】 変数hrefの値が"#"【 || 】 または【href == ""】  であれば（【？】）
    // 【 $('html'); 】 へのリンク（≒ページトップ）,そうでなければ（【:】）【 $(href); 】 変数hrefの中身が到着地点になる
    let target = $(href == "#" || href == "" ? "html" : href);

    // トップからジャンプ先の要素までの距離を取得 （id=menuなどがページの一番上から何pxかを取得）
    let position = target.offset().top;

    // animateでスムーススクロールを行う ページトップからpositionだけスクロールする
    // 600はスクロール速度で単位はミリ秒 swingはイージングのひとつ
    $("html, body").animate({ scrollTop: position }, 600, "swing");
    return false;
  });



  /*=================================================
  PICK UP スライダー
  ===================================================*/
  // カルーセル用 jQueryプラグイン「slick」の設定
  // マニュアル：https://kenwheeler.github.io/slick/
  $(".slick-items").slick({
    arrows: false,
    centerMode: true,
    centerPadding: "100px",
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    // rtl:true,
    // variableWidth:true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          centerPadding: "100px",
          slidesToShow: 1,

        },
      },
    ],
  });

  $(".slick-items").on("beforeChange", function () {
    $(".slick-current").removeClass("is-active");
  });

  $(".slick-items").on("afterChange", function () {
    $(".slick-current").addClass("is-active");
  });

  /*=================================================
  スクロール時の画像フェード表示
  ===================================================*/
  // スクロール時のイベント
  $(window).scroll(function () {
    // fadeinクラスに対して順に処理を行う
    $(".fadein").each(function () {
      // スクロールした距離
      let scroll = $(window).scrollTop();
      // fadeinクラスの要素までの距離
      let target = $(this).offset().top;
      // 画面の高さ
      let windowHeight = $(window).height();
      // fadeinクラスの要素が画面下にきてから200px通過した
      // したタイミングで要素を表示
      if (scroll > target - windowHeight + 200) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }
    });
  });


});
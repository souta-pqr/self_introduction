// スクリプトが最初に実行された時点でページの可視性を「hidden」に設定
document.body.style.visibility = "hidden";

window.onload = function() {
    // すべての画像が読み込まれたかどうかをチェック
    let images = Array.from(document.images);
    let imagesLoaded = 0;

    images.forEach((img) => {
        if (img.complete) {
            // 画像がすでに読み込まれている場合はカウントアップ
            imagesLoaded++;
        } else {
            // 画像がまだ読み込まれていない場合は、読み込み完了を待つ
            img.addEventListener("load", () => {
                imagesLoaded++;
                if (imagesLoaded === images.length) {
                    // すべての画像が読み込まれたら、ページの可視性を「visible」に設定し、スピナーを非表示にする
                    document.body.style.visibility = "visible";
                    document.getElementById('spinner').style.display = "none";
                }
            });
        }
    });

    // すべての画像がすでに読み込まれている場合は、ページの可視性を「visible」に設定し、スピナーを非表示にする
    if (imagesLoaded === images.length) {
        document.body.style.visibility = "visible";
        document.getElementById('spinner').style.display = "none";
    }

    // 以下は元のコード
    document.getElementById('vision').innerText = '私がこの先やりたいことは、エンジニアとして働くことです。特に、ソフトウェア開発の分野に興味があります。新しい技術を学び、それを使って社会に貢献する製品を開発することが私の目標です。また、チームで働くことにも強い関心があります。共同作業を通じて、他のエンジニアから学び、自分のスキルを向上させることができると考えています。さらに、自分が開発した製品が人々の生活を改善することを見るのは、エンジニアとしての最大の達成感だと思います。このような経験を通じて、私は自己成長を遂げ、エンジニアとしてのキャリアを築いていきたいと考えています。';

    var descriptions = document.querySelectorAll('.description');
    window.addEventListener('scroll', function() {
        descriptions.forEach(function(description) {
            var rect = description.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                description.classList.add('draw-line');
            }
        });
    });
};

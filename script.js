window.onload = function() {
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

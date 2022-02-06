var iniciop = new Vue({
  el: '#iniciop',
  data: {
    inicio: `<h3> A lenda de São José de Riba pro Mar </h3>
    <p class="lead">Diz a lenda que um navegador português, após ter se desviado de sua rota, esteve prestes a naufragar, em plena baía de São José, por causa de uma tempestade. Tendo invocado a intercessão do santo, o navegador viu a tempestade cessar. </p>
<br> 
<p class="lead"> Grato pela ajuda de São José, decidiu erguer uma capelinha de frente para o mar. Para isso, trouxe de Portugal uma imagem de São José. </p><br><br>`
  }
});

var txt1 = new Vue({
    el: '#txt1',
    data: {
      lavaPratos: `O Lava-Pratos acontece sempre no final de semana após o carnaval tradicional. O evento é considerado como sendo um dos carnavais fora de época mais antigos do país, além de encerrar oficialmente a temporada momesca no Estado.
      De acordo com historiadores ribamarenses, o evento teve sua origem no ano de 1946, no então chamado “Carnaval da Vitória”, assim batizado após a vitoriosa participação do Brasil na Segunda Guerra Mundial, que terminou em 1945`
    }
  });

  var gruta = new Vue({
    el: '#gruta',
    data: {
      grutadeloude: `
      <h5>Gruta de Nossa Senhora de Lourdes</h5>
      <p>
      Lourdes é uma pequena cidade francesa, localizada aos pés dos Pirineus, a 420m de altitude. Situa-se entre a planície e a montanha. No Santuário de São José de Ribamar, temos uma réplica da Gruta de Lourdes, onde todos os anos milhares de romeiros visitam e fazem suas orações.
      </p>
      `
    }
  });

  var museu = new Vue({
    el: '#museu',
    data: {
      exvotos: `
      <h5>Museu dos Ex-votos</h5>
      <p>
      Com um acervo catalogado, que possui desde mechas de cabelo, fardamentos militares a réplicas de monumentos, como a igreja matriz, o Museu dos Ex-Votos abriga objetos devocionais. São artefatos que simbolizam a gratidão dos romeiros e devotos de São José de Ribamar pelas graças e benção alcançadas.
      </p>`
    }
  });

  var estatua = new Vue({
    el: '#estatua',
    data: {
      monumento: `
      <h5>Monumento de São José de Ribamar</h5>
      <p>Com 33m de altura, o monumento a São José é um dos maiores do país, ficando atrás apenas do Cristo Redentor com 38m. O monumento retrata São José segurando firmemente a mão do Menino Jesus, simbolizando o carinho e a preocupação de ensinar os primeiros passos ao Menino Jesus.</p>`
    }
  });

  var igreja = new Vue({
    el: '#igreja',
    data: {
      igrejasjr: `
      <h5>Igreja de São José de Ribamar</h5>
      <p>
      A Igreja de São José de Ribamar é um templo católico dedicado ao santo padroeiro do Maranhão. A igreja atual, construída em 1915 de frente para a orla é considerada um símbolo da cidade.
      </p>`
    }
  });

  var casaMilagres = new Vue({
    el: '#cmilagres',
    data: {
      cdosMilagres: `
      <h5>Casa dos Milagres</h5>
      <p>
      Idealizada para abrigar objetos dedicados a São José de Ribamar. Após a grande reforma de 2001, as peças foram realocadas para o Museu dos ex-votos e o prédio foi restaurado para abrigar a loja oficial do Santuário de São José de Ribamar.
      </p>`
    }
  });

  var caminhoSaoJose = new Vue({
    el: '#caminhosaojose',
    data: {
      caminhosj: `
      <h5>Caminho de São José</h5>
      <p>
      Em frente a Igreja da Matriz, veja as esculturas que contam a história da peregrinação da família de Jesus.
      </p>`
    }
  });
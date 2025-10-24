(function(){
  const embedConfig = {
  actions: false,
  config: {
    background: 'transparent',
    font: 'Bitter',
    axis: {labelColor: '#374151', titleColor: '#374151'},
    title: {font: 'Anton', color: '#1f2937', fontSize: 25, labelFontSize: 25, fontWeight: 700},
    view: {stroke: 'transparent'}
  }
};

  function mount(id, specUrl) {
    const el = document.getElementById(id);
    if (!el) {
      console.warn('none with id="${id}"');
      return;
    }
    vegaEmbed(el, specUrl, embedConfig)
      .catch(err => {
        console.error('failed to load ${specUrl} into #${id}', err);
        el.innerHTML = 'no viz loaded';
      });
  }

  mount("mapChart", "fifa_map.vg.json");
  mount("scatterChart", "scatterplot.vg.json");
  mount("lineChart", "line_chart.vg.json");
  mount("stackedBarChart", "stackedbar.vg.json");
})();



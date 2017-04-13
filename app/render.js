module.exports = function render(store) {

  const catalog = document.querySelector('#output')
  const tbody = catalog.querySelector('tbody')

  function renderShirt(shirt){
    console.log (shirt.id)

    const tr = document.querySelector('tr')
    tbody.appendChild(tr)

    const idCell = document.createElement('td')
    idCell.textContent = shirt.id
    tr.appendChild(idCell)
  }
  (function renderCatalog(){
    while (tbody.firstChild){
      tbody.removeChild(tbody.firstChild)
    }
    store.map(renderShirt)
  })()

}

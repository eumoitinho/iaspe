$('.change_icon_click').on('show.bs.collapse', function () {
    $('.cic_' + $(this).attr('counts')).text('- Mostrar menos');
});
$('.change_icon_click').on('hide.bs.collapse', function () {
    $('.cic_' + $(this).attr('counts')).text('+ Mostrar mais');
});
$('.navbar .navbar-collapse').on('hide.bs.collapse', function () {
    $('.termoInfo').addClass('d-none');
}).on('show.bs.collapse', function () {
    $('.termoInfo').removeClass('d-none');
});
$('.portal-search-button').on('click', (e) => {
    e.preventDefault();
    sendRequest();
});
function toggleFilters() {
    const panel = document.getElementById('filter-panel');
    const isVisible = panel.style.display === 'block';
    panel.style.display = isVisible ? 'none' : 'block';
}
document.addEventListener('click', function(event) {
    const container = document.querySelector('.search-container');
    const panel = document.getElementById('filter-panel');
    if (!container.contains(event.target)) {
        panel.style.display = 'none';
    }
});
let tselect =  tail.select(".tail-select", {
    multiSelectAll:true,
    multiSelectGroup:true,
    search: true,
    locale: "pt_BR",
    width: '100%',
})
function limparFiltros() {
    document.querySelector('.search-input').value = '';
    const anoInput = document.querySelector('.filter-item input[type="number"]');
    if (anoInput) anoInput.value = '';
    const statusSelect = document.getElementById('statusEdiSearch');
    if (statusSelect) statusSelect.selectedIndex = 0;
    if (tselect && typeof tselect.forEach === "function") {
        tselect.forEach(function(instance) {
            instance.e.selectedIndex = 0;
            instance.reload();
        });
    }
}
function aplicarFiltros() {
    const panel = document.getElementById('filter-panel');
    panel.style.display = 'none';
    sendRequest();
}
function sendRequest() {
    // Pegar o valor da busca
    const searchVal = $('.search-input').val();
    const params = new URLSearchParams();
    if (searchVal) params.append('search', searchVal);
    const entid = $('#entSearch').val();
    const tipId = $('#tipEdiSearch').val();
    const ano = $('.filter-item input[type="number"]').val();
    const status = $('#statusEdiSearch').val();
    if (entid && entid !== 'default') params.append('entidade', entid);
    if (tipId && tipId !== 'default') params.append('tipoEdital', tipId);
    if (ano) params.append('ano', ano);
    if (status && status !== 'default') params.append('situacao', status);

    window.location.href = BASE_URL + 'edital/searchEdital?' + params.toString();
}
document.addEventListener("DOMContentLoaded", () => {
  inicializarCategorias();
  renderizarCatalogo(datos);

  const inputBusqueda = document.getElementById("inputBusqueda");
  const selectCategoria = document.getElementById("selectCategoria");

  inputBusqueda.addEventListener("input", filtrarCatalogo);
  selectCategoria.addEventListener("change", filtrarCatalogo);
});

function inicializarIconos() {
  if (window.lucide) {
    lucide.createIcons();
  }
}

function obtenerClaseCategoria(categoria) {
  switch (categoria) {
    case "Arquitectura": return "badge-arquitectura";
    case "Diseño Industrial": return "badge-industrial";
    case "Diseño Gráfico": return "badge-grafico";
    case "Estética": return "badge-estetica";
    case "Tipografía": return "badge-tipografia";
    default: return "badge-industrial";
  }
}

function inicializarCategorias() {
  const selectCategoria = document.getElementById("selectCategoria");
  if (!selectCategoria || !Array.isArray(datos)) return;

  const categorias = Array.from(new Set(datos.map(d => d.categoria))).sort();

  categorias.forEach(cat => {
    const opt = document.createElement("option");
    opt.value = cat;
    opt.textContent = cat;
    selectCategoria.appendChild(opt);
  });
}

function filtrarCatalogo() {
  const termino = document.getElementById("inputBusqueda").value.toLowerCase().trim();
  const categoriaSeleccionada = document.getElementById("selectCategoria").value;

  const resultados = datos.filter(item => {
    const coincideTexto =
      item.titulo.toLowerCase().includes(termino) ||
      item.autor.toLowerCase().includes(termino) ||
      item.resumen.toLowerCase().includes(termino) ||
      item.editorial.toLowerCase().includes(termino);

    const coincideCategoria =
      categoriaSeleccionada === "" || item.categoria === categoriaSeleccionada;

    return coincideTexto && coincideCategoria;
  });

  renderizarCatalogo(resultados);
}

function crearBookCardHTML(item) {
  const claseBadge = obtenerClaseCategoria(item.categoria);

  return `
    <article class="book-card">
      <div>
        <div class="card-top">
          <div class="card-icon-container">
            <i data-lucide="${item.icono}"></i>
          </div>
          <span class="card-rating-badge">
            <i data-lucide="star" class="icon-sm"></i>
            <span>${item.calificacion.toFixed(1)}</span>
          </span>
        </div>

        <span class="badge ${claseBadge}" style="margin-bottom: 12px;">${item.categoria}</span>
        <h3 class="card-title">${item.titulo}</h3>
        <p class="card-author">Por ${item.autor} (${item.anio})</p>
        <p class="card-summary">${item.resumen}</p>

        <div class="card-details-box">
          <span>Editorial: <strong>${item.editorial}</strong></span>
          <span>ISBN: <code>${item.isbn}</code></span>
        </div>
      </div>

      <div class="card-footer">
        <span class="card-meta">
          <i data-lucide="book-marked" class="icon-sm"></i>
          <span>${item.paginas} páginas</span>
        </span>
        <span class="card-meta" style="color: var(--text-muted);">
          <i data-lucide="calendar" class="icon-sm"></i>
          <span>Edición ${item.anio}</span>
        </span>
      </div>
    </article>
  `;
}

function renderizarCatalogo(lista) {
  const contenedor = document.getElementById("gridCatalogo");
  const textoConteo = document.getElementById("textoConteo");

  if (!contenedor || !textoConteo) return;

  textoConteo.textContent = `${lista.length} de ${datos.length} registros`;

  if (lista.length === 0) {
    contenedor.innerHTML = `
      <div style="grid-column: 1 / -1; padding: 48px; background: white; border-radius: 12px; text-align: center; border: 1px dashed var(--border-medium);">
        <p style="font-size: 1.05rem; color: var(--text-muted); margin-bottom: 16px;">No se encontraron registros con los filtros actuales.</p>
        <button class="btn btn-secondary" onclick="limpiarFiltros()">Limpiar Filtros</button>
      </div>
    `;
    inicializarIconos();
    return;
  }

  contenedor.innerHTML = lista.map(crearBookCardHTML).join("");
  inicializarIconos();
}

function limpiarFiltros() {
  document.getElementById("inputBusqueda").value = "";
  document.getElementById("selectCategoria").value = "";
  renderizarCatalogo(datos);
}

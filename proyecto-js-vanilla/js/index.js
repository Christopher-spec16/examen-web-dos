document.addEventListener("DOMContentLoaded", () => {
  renderizarEstadisticas();
  renderizarDestacados();
  inicializarIconos();
});

function inicializarIconos() {
  if (window.lucide) {
    lucide.createIcons();
  }
}

function renderizarEstadisticas() {
  const contenedor = document.getElementById("resumenMetricas");
  if (!contenedor || !Array.isArray(datos)) return;

  const totalLibros = datos.length;
  const categoriasUnicas = new Set(datos.map(d => d.categoria)).size;
  const promedioRating = (datos.reduce((acc, d) => acc + d.calificacion, 0) / totalLibros).toFixed(1);
  const totalPaginas = datos.reduce((acc, d) => acc + d.paginas, 0);

  const stats = [
    { label: "Libros Indexados", valor: totalLibros, icono: "book", bg: "#eef2ff", color: "#4f46e5" },
    { label: "Categorías Temáticas", valor: categoriasUnicas, icono: "tag", bg: "#e0f2fe", color: "#0284c7" },
    { label: "Calificación Promedio", valor: `${promedioRating}`, icono: "star", bg: "#fef3c7", color: "#d97706" },
    { label: "Páginas Totales", valor: totalPaginas.toLocaleString(), icono: "file-text", bg: "#ecfdf5", color: "#059669" }
  ];

  contenedor.innerHTML = stats.map(st => `
    <article class="stat-card">
      <div class="stat-icon-wrapper" style="background-color: ${st.bg}; color: ${st.color};">
        <i data-lucide="${st.icono}"></i>
      </div>
      <div class="stat-content">
        <span class="stat-number">${st.valor}</span>
        <span class="stat-label">${st.label}</span>
      </div>
    </article>
  `).join("");
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

function renderizarDestacados() {
  const contenedor = document.getElementById("gridDestacados");
  if (!contenedor || !Array.isArray(datos)) return;

  const destacados = datos.filter(d => d.destacado);
  contenedor.innerHTML = destacados.map(crearBookCardHTML).join("");
}

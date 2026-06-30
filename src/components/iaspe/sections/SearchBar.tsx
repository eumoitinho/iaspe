"use client";

import { useState } from "react";
import { ENTIDADES, TIPOS_EDITAL, SITUACOES } from "../data";

type ThemeWindow = {
  toggleFilters?: () => void;
  limparFiltros?: () => void;
  aplicarFiltros?: () => void;
};

// Search bar with the collapsible filter panel. The panel is hidden by default
// (theme CSS). The filter button toggles it; if the theme's global helpers are
// present we defer to them, otherwise we fall back to local state.
export default function SearchBar() {
  const [open, setOpen] = useState(false);

  const toggleFilters = () => {
    const w = window as unknown as ThemeWindow;
    if (w.toggleFilters) w.toggleFilters();
    else setOpen((v) => !v);
  };

  return (
    <div className="col-12 text-center search-container">
      <input type="text" placeholder="Pesquisar..." className="search-input" />
        <div className="search-actions">
          <button type="button" className="filter-btn" onClick={toggleFilters} title="Filtros">
            <i className="fa fa-filter"></i>
          </button>
          <button className="portal-search-button">
            <i className="fa fa-search"></i>
          </button>
        </div>
        <div
          id="filter-panel"
          className="filter-dropdown"
          style={open ? { display: "block" } : undefined}
        >
          <div className="filter-grid">
            <div className="filter-item">
              <label>Entidades</label>
              <select
                id="entSearch"
                name="entSearch"
                className="form-control tail-select"
                style={{ width: "100%" }}
                defaultValue="default"
              >
                {ENTIDADES.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="filter-item">
              <label>Tipo do edital</label>
              <select
                id="tipEdiSearch"
                name="tipEdiSearch"
                className="form-control tail-select"
                style={{ width: "100%" }}
                defaultValue="default"
              >
                {TIPOS_EDITAL.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="filter-grid">
            <div className="filter-item">
              <label>Ano</label>
              <input
                type="number"
                className="form-control"
                placeholder="Ex: 2026"
                min={2000}
                max={2099}
              />
            </div>
            <div className="filter-item">
              <label>Situação</label>
              <select name="statusEdiSearch" id="statusEdiSearch" defaultValue="default">
                {SITUACOES.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="filter-footer">
            <button
              type="button"
              className="btn-reset"
              onClick={() => (window as unknown as ThemeWindow).limparFiltros?.()}
            >
              Limpar
            </button>
            <button
              type="button"
              className="btn-apply"
              onClick={() => (window as unknown as ThemeWindow).aplicarFiltros?.()}
            >
              Aplicar Filtros
            </button>
          </div>
        </div>
      </div>
  );
}

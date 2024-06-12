import React from 'react';
import './Sidebar.css';
import {translations} from "../utils/Translations";

const Sidebar = ({ facets, onFacetChange, selectedFacets }) => {

    //Renderiza la barra lateral con las facetas (las que se hayan recibido por API)
    return (
        <div className="sidebar">
            <h1>Filtros estáticos</h1>
            <div key={"name"} className="facet-category">
                <h3>Nombre de pila (Completo)</h3>
                <div className="facet-options">
                    <input
                        type="text"
                        className="facet-option__text"
                        placeholder="Buscar por nombre..."
                        onInput={(e) => onFacetChange("name", e.target.value)}
                    />
                </div>
            </div>
            <div key={"address"} className="facet-category">
                <h3>Dirección (Parcial)</h3>
                <div className="facet-options">
                    <input
                        type="text"
                        className="facet-option__text"
                        placeholder="Buscar por dirección..."
                        onInput={(e) => onFacetChange("address", e.target.value)}
                    />
                </div>
            </div>

            {
                Object.keys(facets).length > 0 && <h1>Filtros dinámicos</h1>
            }

            {Object.keys(facets).map((facetKey) => (
                <div key={facetKey} className="facet-category">
                    <h3>{translations.get(facetKey)}</h3>
                    <div className="facet-options">
                        {facets[facetKey].map((facetValue) => (

                            //Aseguramos mediante renderizado condicional que solo se muestren las opciones con un número de empleados mayor que 0
                            facetValue.count > 0 &&
                            <div
                                key={facetValue.key}
                                className={`facet-option ${selectedFacets[facetKey] && selectedFacets[facetKey].includes(facetValue.key) ? 'selected' : ''}`}
                                onClick={() => onFacetChange(facetKey, facetValue.key)}
                            >
                                {translations.get(facetValue.key) ? translations.get(facetValue.key) : facetValue.key} ({facetValue.count})
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Sidebar;
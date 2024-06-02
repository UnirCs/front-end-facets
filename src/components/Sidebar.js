import React from 'react';
import './Sidebar.css';
import {translations} from "../utils/Translations";

const Sidebar = ({ facets, onFacetChange, selectedFacets }) => {

    //Renderiza la barra lateral con las facetas (las que se hayan recibido por API)
    return (
        <div className="sidebar">
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
                                {facetValue.key} ({facetValue.count})
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Sidebar;
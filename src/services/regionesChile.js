const regionesChile = {
  "Arica y Parinacota": ["Arica", "Camarones", "Putre", "General Lagos"],
  Tarapacá: ["Iquique", "Alto Hospicio", "Pozo Almonte", "Pica"],
  Antofagasta: ["Antofagasta", "Calama", "Tocopilla", "Mejillones"],
  Atacama: ["Copiapó", "Vallenar", "Chañaral", "Caldera"],
  Coquimbo: ["La Serena", "Coquimbo", "Ovalle", "Illapel"],
  Valparaíso: ["Valparaíso", "Viña del Mar", "Quilpué", "San Antonio"],
  "Metropolitana de Santiago": [
    "Santiago",
    "Maipú",
    "Puente Alto",
    "Las Condes",
  ],
  "O'Higgins": ["Rancagua", "Machalí", "San Fernando", "Pichilemu"],
  Maule: ["Talca", "Curicó", "Linares", "Constitución"],
  Ñuble: ["Chillán", "Chillán Viejo", "San Carlos", "Bulnes"],
  Biobío: ["Concepción", "Talcahuano", "Los Ángeles", "Coronel"],
  "La Araucanía": ["Temuco", "Angol", "Villarrica", "Pucón"],
  "Los Ríos": ["Valdivia", "La Unión", "Río Bueno", "Panguipulli"],
  "Los Lagos": ["Puerto Montt", "Osorno", "Castro", "Ancud"],
  Aysén: ["Coyhaique", "Aysén", "Cochrane", "Chile Chico"],
  Magallanes: [
    "Punta Arenas",
    "Puerto Natales",
    "Porvenir",
    "Torres del Paine",
  ],
};

const RegionesChile = () => {
  return (
    <div>
      <h2>Regiones y Comunas de Chile</h2>
      <ul>
        {Object.entries(regionesChile).map(([region, comunas]) => (
          <li key={region}>
            <strong>{region}</strong>
            <ul>
              {comunas.map((comuna) => (
                <li key={comuna}>{comuna}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RegionesChile;

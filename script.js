document.addEventListener("DOMContentLoaded", function() {
    const tasksTable = document.getElementById("tasksTable").querySelector("tbody");

    // Descripciones para cada semana
    const descripciones = [
        "Actividad 01: Modelo conceptual de base de datos",
        "Actividad 02: Modelo Entidad - Relación",
        "Actividad 03: Modelo Lógico",
        "Actividad 04: Modelo Físico",
        "Actividad 05: Consultas básicas en SQL Server y PostgreSQL",
        "Actividad 06: Consultas Avanzadas en SQL Server",
        "Descripción de la tarea de la semana 7",
        
    ];

    // Rutas relativas para cada PDF y archivo complementario
    const pdfFiles = [
        "./semanas/SEMANA_1/Actividad1.pdf",
        "./semanas/SEMANA_2/Actividad2.pdf",
        "./semanas/SEMANA_3/Actividad3.pdf",
        "./semanas/SEMANA_4/Actividad4.pdf",
        "./semanas/SEMANA_5/Actividad5.pdf",
        "./semanas/SEMANA_6/Actividad6.pdf",
        
    ];
    const pdfDown = [
        "./semanas/SEMANA_1/Actividad1.pdf",
        "./semanas/SEMANA_2/Actividad2.pdf",
        "./semanas/SEMANA_3/Actividad3.pdf",
        "./semanas/SEMANA_4/Actividad4.pdf",
        "./semanas/SEMANA_5/Actividad5.pdf",
        "./semanas/SEMANA_6/Actividad6.pdf",

        
    ];

    const complementaryFiles = [
        
        
    ];

    // Generar las filas de la tabla dinámicamente
    for (let week = 1; week <= 16; week++) {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>Semana ${week}</td>
            <td>${descripciones[week - 1] || "Descripción no disponible"}</td>
            <td>
                <a href="${pdfFiles[week - 1]}" target="_blank">Ver PDF</a>
                <a href="#" class="button-download" onclick="downloadPDF(${week})">Descargar PDF</a>
            </td>
            <td>
            downloadComplementaryFiles(${week})
                <div class="complementary-files" id="complementaryFiles${week}"></div>
                <a href="#" class="button-download" onclick="downloadComplementaryFiles(${week})">Descargar Complementarios</a>
            </td>
        `;

        // Añadir enlaces de descarga para los complementarios
        const complementaryDiv = row.querySelector(`#complementaryFiles${week}`);
        complementaryFiles[week - 1]?.forEach(file => {
            const link = document.createElement("a");
            link.href = file;
            link.target = "_blank";
            link.textContent = file.split('/').pop(); // Muestra solo el nombre del archivo
            complementaryDiv.appendChild(link);
            complementaryDiv.appendChild(document.createElement("br"));
        });

        tasksTable.appendChild(row);
    }


// Descargar el PDF
function downloadPDF(week) {
        const link = document.createElement("a");
        link.href = pdfDown[week - 1];
        link.download = `Actividad_${week}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

// Descargar los complementarios
function downloadComplementaryFiles(week) {
    complementaryFiles[week - 1]?.forEach((file, index) => {
        const link = document.createElement("a");
        link.href = file;
        link.download = `Complementario_Semana_${week}_${index + 1}_${file.split('/').pop()}`;
        link.click();
    });
}
});

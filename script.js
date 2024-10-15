document.addEventListener("DOMContentLoaded", function() {
    const tasksTable = document.getElementById("tasksTable").querySelector("tbody");

    // Descripciones para cada semana
    const descripciones = [
        "Actividad 01: Modelo conceptual de base de datos",
        "Actividad 02: Modelo Entidad - Relación",
        "Actividad 03: Modelo Lógico",
        "Actividad 04: Modelo Físico",
        "Actividad 05: Consultas básicas en SQL Server y PostgreSQL",
        "Descripción de la tarea de la semana 6",
        "Descripción de la tarea de la semana 7",
        // Continúa hasta la semana 16
    ];

    // Rutas relativas para cada PDF y archivo complementario
    const pdfFiles = [
        "./semanas/SEMANA_1/Actividad01.pdf",
        "./semanas/SEMANA_2/Actividad02.pdf",
        "./semanas/SEMANA_3/Actividad03.pdf",
        "./semanas/SEMANA_4/Actividad04.pdf",
        "./semanas/SEMANA_5/Actividad05.pdf",
        "./semanas/SEMANA_6/Actividad06.pdf",
        // Continúa con las rutas correctas para cada semana
    ];

    const complementaryFiles = [
        
        // Continúa con las rutas correctas para cada archivo complementario
    ];

    // Generar las filas de la tabla dinámicamente
    for (let week = 1; week <= 16; week++) {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>Semana ${week}</td>
            <td>${descripciones[week - 1] || "Descripción no disponible"}</td>
            <td>
                <a href="${pdfFiles[week - 1]}" target="_blank">Ver PDF</a>
                <button class="button-download" onclick="downloadPDF(${week})">Descargar PDF</button>
            </td>
            <td>
                <div class="complementary-files" id="complementaryFiles${week}"></div>
                <button class="button-download" onclick="downloadComplementaryFiles(${week})">Descargar Complementarios</button>
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
});

// Descargar el PDF
function downloadPDF(week) {
    const link = document.createElement("a");
    link.href = pdfFiles[week - 1];
    link.download = `Actividad0${week}.pdf`;
    link.click();
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


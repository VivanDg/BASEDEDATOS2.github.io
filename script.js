document.addEventListener("DOMContentLoaded", function () {
    const tasksTable = document.getElementById("tasksTable").querySelector("tbody");

    const descripciones = [
        "Actividad 01: Modelo conceptual de base de datos",
        "Actividad 02: Modelo Entidad - Relación",
        "Actividad 03: Modelo Lógico",
        "Actividad 04: Modelo Físico",
        "Actividad 05: Consultas básicas en SQL Server y PostgreSQL",
        "Actividad 06: Consultas Avanzadas en SQL Server",
        "Descripción de la tarea de la semana 7",
    ];

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
        "./complementos/SEMANA 1/semana1.rar",
        "./complementos/SEMANA 2/semana2.rar",
        "./complementos/SEMANA 3/semana3.rar",
        // Añadir archivos complementarios para las siguientes semanas si es necesario
    ];

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
               <!-- El div ya no mostrará los archivos complementarios, pero sigue ahí si es necesario -->
                <div class="complementary-files" id="complementaryFiles${week}" style="display: none;"></div>
                <a href="#" class="button-download" onclick="downloadComplementaryFiles(${week})">Descargar Complementarios</a>
            </td>
        `;

        tasksTable.appendChild(row);
    }
});

function downloadPDF(week) {
    const pdfDown = [
        "./semanas/SEMANA_1/Actividad1.pdf",
        "./semanas/SEMANA_2/Actividad2.pdf",
        "./semanas/SEMANA_3/Actividad3.pdf",
        "./semanas/SEMANA_4/Actividad4.pdf",
        "./semanas/SEMANA_5/Actividad5.pdf",
        "./semanas/SEMANA_6/Actividad6.pdf",
    ];
    if (pdfDown[week - 1]) {
        const link = document.createElement("a");
        link.href = pdfDown[week - 1];
        link.download = `Actividad_${week}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        console.error("Archivo PDF no disponible para la semana:", week);
    }
}

function downloadComplementaryFiles(week) {
    // Usar la variable complementaryFiles definida en la parte superior
    const complementaryFiles = [
        "./complementos/SEMANA 1/semana1.rar",
        "./complementos/SEMANA 2/semana2.rar",
        "./complementos/SEMANA 3/semana3.rar",
        // Añadir archivos complementarios para más semanas
    ];

    // Validar si hay archivos complementarios para la semana seleccionada
    if (complementaryFiles[week - 1]) {
        complementaryFiles[week - 1].forEach((file, index) => {
            const link = document.createElement("a");
            link.href = file;
            link.download = `Complementario_Semana_${week}_${index + 1}_${file.split("/").pop()}`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    } else {
        console.error("Archivos complementarios no disponibles para la semana:", week);
    }
}

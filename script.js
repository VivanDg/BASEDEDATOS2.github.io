document.addEventListener("DOMContentLoaded", function() {
    const tasksTable = document.getElementById("tasksTable").querySelector("tbody");

    // Array con descripciones personalizadas para cada semana
    const descripciones = [
        "Actividad 01: Modelo conceptual de base de datos",
        "Actividad 02: Modelo Entidad - Relación",
        "Actividad 03: Modelo Lógico",
        "Actividad 04: Modelo Físico",
        "Actividad 05: Consultas básicas en SQL Server y PostgreSQL",
        "Descripción de la tarea de la semana 6",
        "Descripción de la tarea de la semana 7",
        "Descripción de la tarea de la semana 8",
        "Descripción de la tarea de la semana 9",
        "Descripción de la tarea de la semana 10",
        "Descripción de la tarea de la semana 11",
        "Descripción de la tarea de la semana 12",
        "Descripción de la tarea de la semana 13",
        "Descripción de la tarea de la semana 14",
        "Descripción de la tarea de la semana 15",
        "Descripción de la tarea de la semana 16"
    ];

    // Asignar archivos PDF y complementarios directamente desde carpetas
    const pdfFiles = [
        "semanas/SEMANA_1/Actividad01.pdf", // Semana 1
        "semanas/SEMANA 2/Actividad 02.pdf", // Semana 2
        "semanas/SEMANA_3/Actividad03.pdf", // Semana 3
        "semanas/SEMANA_4/Actividad04.pdf", // Semana 4
        "semanas/SEMANA_5/Actividad05.pdf", // Semana 5
        "semanas/SEMANA_6/Actividad06.pdf", // Semana 6
        "semanas/SEMANA_7/Actividad07.pdf", // Semana 7
        "semanas/SEMANA_8/Actividad08.pdf", // Semana 8
        "semanas/SEMANA_9/Actividad09.pdf", // Semana 9
        "semanas/SEMANA_10/Actividad10.pdf", // Semana 10
        "semanas/SEMANA_11/Actividad11.pdf", // Semana 11
        "semanas/SEMANA_12/Actividad12.pdf", // Semana 12
        "semanas/SEMANA_13/Actividad13.pdf", // Semana 13
        "semanas/SEMANA_14/Actividad14.pdf", // Semana 14
        "semanas/SEMANA_15/Actividad15.pdf", // Semana 15
        "semanas/SEMANA_16/Actividad16.pdf"  // Semana 16
    ];

    const complementaryFiles = [
        ["complementarios/complementario1.zip"], // Complementarios de Semana 1
        ["complementarios/complementario2.zip"], // Complementarios de Semana 2
        ["complementarios/complementario3.zip"], // Complementarios de Semana 3
        ["complementarios/complementario4.zip"], // Complementarios de Semana 4
        ["complementarios/complementario5.zip"], // Complementarios de Semana 5
        ["complementarios/complementario6.zip"], // Complementarios de Semana 6
        ["complementarios/complementario7.zip"], // Complementarios de Semana 7
        ["complementarios/complementario8.zip"], // Complementarios de Semana 8
        ["complementarios/complementario9.zip"], // Complementarios de Semana 9
        ["complementarios/complementario10.zip"], // Complementarios de Semana 10
        ["complementarios/complementario11.zip"], // Complementarios de Semana 11
        ["complementarios/complementario12.zip"], // Complementarios de Semana 12
        ["complementarios/complementario13.zip"], // Complementarios de Semana 13
        ["complementarios/complementario14.zip"], // Complementarios de Semana 14
        ["complementarios/complementario15.zip"], // Complementarios de Semana 15
        ["complementarios/complementario16.zip"]  // Complementarios de Semana 16
    ];

    // Generar filas de la tabla para cada semana
    for (let week = 1; week <= 16; week++) {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>Semana ${week}</td>
            <td>${descripciones[week - 1]}</td>
            <td>
                <a href="${pdfFiles[week - 1]}" target="_blank">Ver PDF</a>
                <button class="button-download" onclick="downloadPDF(${week})">Descargar PDF</button>
            </td>
            <td>
                <div class="complementary-files" id="complementaryFiles${week}"></div>
                <button class="button-download" onclick="downloadComplementaryFiles(${week})">Descargar Complementarios</button>
            </td>
        `;

        // Agregar archivos complementarios
        const complementaryDiv = row.querySelector(`#complementaryFiles${week}`);
        complementaryFiles[week - 1].forEach(file => {
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

// Funciones de descarga
function downloadPDF(week) {
    const link = document.createElement("a");
    link.href = pdfFiles[week - 1];
    link.download = `Semana_${week}.pdf`;
    link.click();
}

function downloadComplementaryFiles(week) {
    complementaryFiles[week - 1].forEach((file, index) => {
        const link = document.createElement("a");
        link.href = file;
        link.download = `Complementario_Semana_${week}_${index + 1}_${file.split('/').pop()}`;
        link.click();
    });
}



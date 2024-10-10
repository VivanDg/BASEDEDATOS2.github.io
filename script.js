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
        "ruta/a/tu/archivo2.pdf", // Semana 2
        "ruta/a/tu/archivo3.pdf", // Semana 3
        // ...continúa con los demás archivos PDF
    ];

    const complementaryFiles = [
        ["ruta/a/tu/complementario1.zip"], // Complementarios de Semana 1
        ["ruta/a/tu/complementario2.zip"], // Complementarios de Semana 2
        ["ruta/a/tu/complementario3.zip"], // Complementarios de Semana 3
        // ...continúa con los demás complementarios
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
                <div id="complementaryFiles${week}" class="complementary-files"></div>
                <button class="button-download" onclick="downloadComplementaryFiles(${week})">Descargar Complementarios</button>
            </td>
        `;

        // Agregar archivos complementarios
        const complementaryDiv = document.getElementById(`complementaryFiles${week}`);
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

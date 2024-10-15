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

    // Archivos PDF y complementarios
    const pdfFiles = [
        "./semanas/SEMANA_1/Actividad01.pdf",
        "./semanas/SEMANA_2/Actividad02.pdf",
        "./semanas/SEMANA_3/Actividad03.pdf",
        // Agrega las rutas correctas para cada semana
    ];

    const complementaryFiles = [
        ["./complementarios/complementario1.zip"],
        ["./complementarios/complementario2.zip"],
        ["./complementarios/complementario3.zip"],
        // Agrega las rutas correctas para cada archivo complementario
    ];

    // Generación dinámica de filas
    for (let week = 1; week <= 16; week++) {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>Semana ${week}</td>
            <td>${descripciones[week - 1] || "Descripción no disponible"}</td>
            <td>
                <button class="button-view" onclick="togglePDF(${week})">Ver PDF</button>
                <button class="button-download" onclick="downloadPDF(${week})">Descargar PDF</button>
                <iframe id="pdfFrame${week}" class="pdf-frame" style="display: none;"></iframe>
            </td>
            <td>
                <div class="complementary-files" id="complementaryFiles${week}"></div>
                <button class="button-download" onclick="downloadComplementaryFiles(${week})">Descargar Complementarios</button>
            </td>
        `;

        // Añadir archivos complementarios
        const complementaryDiv = row.querySelector(`#complementaryFiles${week}`);
        complementaryFiles[week - 1]?.forEach(file => {
            const link = document.createElement("a");
            link.href = file;
            link.target = "_blank";
            link.textContent = file.split('/').pop();
            complementaryDiv.appendChild(link);
            complementaryDiv.appendChild(document.createElement("br"));
        });

        tasksTable.appendChild(row);
    }
});

// Mostrar PDF en iframe
function togglePDF(week) {
    const pdfFrame = document.getElementById(`pdfFrame${week}`);
    const pdfFile = pdfFiles[week - 1];

    if (pdfFrame.style.display === "none") {
        pdfFrame.src = pdfFile;
        pdfFrame.style.display = "block";
    } else {
        pdfFrame.style.display = "none";
        pdfFrame.src = "";
    }
}

// Descargar PDF
function downloadPDF(week) {
    const link = document.createElement("a");
    link.href = pdfFiles[week - 1];
    link.download = `Semana_${week}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Descargar complementarios
function downloadComplementaryFiles(week) {
    complementaryFiles[week - 1]?.forEach((file, index) => {
        const link = document.createElement("a");
        link.href = file;
        link.download = `Complementario_Semana_${week}_${index + 1}_${file.split('/').pop()}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}


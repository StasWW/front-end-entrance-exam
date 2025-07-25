document.getElementById('downloadPdfBtn').addEventListener('click', () => {
    const element = document.getElementById('toPrint');

    // Force reflow to ensure content is stable
    document.body.offsetHeight;

    const opt = {
        margin: [0.5, 0.5, 0.5, 0.5],  // Margins for the PDF
        filename: 'resume.pdf',         // Output PDF filename
        image: { type: 'jpeg', quality: 0.98 },  // Set image quality for embedded images
        jsPDF: {
            unit: 'in',                 // Units to use in the PDF (inches)
            format: 'a4',               // A4 paper format
            orientation: 'portrait',    // Portrait orientation
            compress: true,             // Enable compression for smaller file sizes
            pageBreak: true             // Enable automatic page breaks
        },
        html2canvas: {
            logging: true,              // Enable logging to debug issues
            ignoreElements: (el) => el.classList.contains('addBtn') // Ignore addBtn buttons
        }
    };

    // Use html2pdf to convert the HTML to PDF and save it
    html2pdf().from(element).set(opt).save();
});

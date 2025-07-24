document.getElementById('downloadPdfBtn').addEventListener('click', () => {
    const element = document.getElementById('toPrint');

    const opt = {
        margin:       [0, 0, 0, 0],  // Set margins
        filename:     'resume.pdf',   // PDF filename
        image:        { type: 'jpeg', quality: 0.98 },  // Image format and quality
        jsPDF: {
            unit: 'in',
            format: 'a4',            // Paper format: A4 (standard)
            orientation: 'portrait', // Portrait orientation
            compress: true,          // Compress content to reduce file size
            pageBreak: true          // Allow automatic page breaks
        }
    };

    // Use html2pdf to convert the HTML to PDF and save it
    html2pdf().from(element).set(opt).save();
});

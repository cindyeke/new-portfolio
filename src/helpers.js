export const downloadResume = async () => {
  try {
    const response = await fetch("../public/pdfs/resume.pdf");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "Cindy-Eke-Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error("An error occurred while downloading the file:", error);
  }
};

document.addEventListener("DOMContentLoaded", async () => {
    const scriptTag = document.querySelector('script[src$="banner.js"]');
    const apiUrl = scriptTag.getAttribute("data-api");
    const position = scriptTag.getAttribute("data-position") || "top"; // Default to "top"
    const bannerWidth = scriptTag.getAttribute("data-width") || "600";
    const bannerHeight = scriptTag.getAttribute("data-height") || "2500";

    if (!apiUrl) {
        console.error("API URL not provided in the script tag!");
        return;
    }
    try {
        const response = await fetch(apiUrl);
        const banner = await response.json();

        if (banner.length==0 || banner.error) {
            console.warn("No banner available.");
            return;
        }
        // Create banner wrapper
        const bannerWrapper = document.createElement("div");
        bannerWrapper.style.position = "fixed";
        bannerWrapper.style.width  = `${bannerWidth}px`;
        bannerWrapper.style.height = `${bannerHeight}px`;

        // Determine position dynamically
        if (position === "top") {
            bannerWrapper.style.top = "120px";
            bannerWrapper.style.left = "50%";
            bannerWrapper.style.transform = "translateX(-50%)"; // Center horizontally
        } else if (position === "bottom") {
            bannerWrapper.style.bottom = "20px";
            bannerWrapper.style.left = "50%";
            bannerWrapper.style.transform = "translateX(-50%)";
        } else if (position === "left") {
            bannerWrapper.style.top = "50%";
            bannerWrapper.style.left = "20px";
            bannerWrapper.style.transform = "translateY(-50%)"; // Center vertically
        } else if (position === "right") {
            bannerWrapper.style.top = "50%";
            bannerWrapper.style.right = "20px";
            bannerWrapper.style.transform = "translateY(-50%)";
        } else {
            bannerWrapper.style.top = "100px";
            bannerWrapper.style.left = "50%";
            bannerWrapper.style.transform = "translateX(-50%)";
        }

        // Create anchor link
        const anchor = document.createElement("a");
        anchor.href = banner.link;
        anchor.target = "_blank";

        // Create banner image
        const img = document.createElement("img");
        img.src = banner.image_url;
        img.alt = banner.alt_text;
        img.style.width = "100%";
        img.style.height = "100%";
        img.style.borderRadius = "10px";

        // Tooltip for alt text on hover
        img.title = banner.alt_text;

        // Append elements
        anchor.appendChild(img);
        bannerWrapper.appendChild(anchor);
        document.body.appendChild(bannerWrapper); // Add banner to the page

    } catch (error) {
        console.error("Error fetching banner:", error);
    }
});

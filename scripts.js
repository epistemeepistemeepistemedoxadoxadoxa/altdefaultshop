document.addEventListener("DOMContentLoaded", () => {
    const files = [
        { name: "videos/Screen_Recording_Asset_3.mov", caption: "Demo: June 9, 2024" },
        { name: "videos/Screen_Recording_Asset_4.mov", caption: "Feature Walkthrough: June 13" },
        { name: "videos/Screen_Recording_Asset_5.mov", caption: "Recording: June 13, 2:37 PM" },
        { name: "videos/Screen_Recording_Asset_7.mov", caption: "Late Night Session: June 16", playback: 1.75 },
        { name: "videos/Screen_Recording_Asset_8.mov", caption: "Recording: June 30" },
        { name: "videos/Screen_Recording_Asset_9.mov", caption: "Morning Session: July 3" },
        { name: "videos/Screen_Recording_Asset_10.mov", caption: "Session: July 3, 11:57 AM" },
        { name: "videos/Screen_Recording_Asset_11.mov", caption: "Recording: July 13" },
        { name: "videos/Screen_Recording_Asset_12.mov", caption: "Afternoon Session: July 20" },
        { name: "videos/Screen_Recording_Asset_13.mov", caption: "Session: July 20, 4:28 PM" },
        { name: "videos/Screen_Recording_Asset_14.mov", caption: "Recording: July 20, Evening" },
        { name: "videos/Screen_Recording_Asset_15.mov", caption: "Session: July 22, Evening" },
        { name: "videos/Screen_Recording_Asset_16.mov", caption: "Demo: July 22" },
        { name: "videos/Screen_Recording_Asset_17.mov", caption: "Session: July 22" },
        { name: "videos/Screen_Recording_Asset_18.mov", caption: "Recording: July 22, Evening" },
        { name: "videos/Screen_Recording_Asset_19.mov", caption: "Night Session: July 22" },
        { name: "videos/Screen_Recording_Asset_20.mov", caption: "Demo: July 22", playback: 5.0 },
        { name: "videos/Screen_Recording_Asset_21.mov", caption: "Demo: July 22", playback: 5.0 },
        { name: "videos/Screen_Recording_Asset_22.mov", caption: "Recording: July 22, Night", playback: 16.0},
        { name: "videos/Screen_Recording_Asset_23.mov", caption: "Morning Session: July 23", playback: 5.0 },
        { name: "videos/Screen_Recording_Asset_24.mov", caption: "Early Morning Session: July 25" },
        { name: "videos/Screen_Recording_Asset_25.mov", caption: "Morning Session: July 25", playback: 5.0},
        { name: "videos/Screen_Recording_Asset_26.mov", caption: "Demo: July 25", playback: 5.0 },
        { name: "videos/Screen_Recording_Asset_27.mov", caption: "Session: July 25", playback: 3.0},
        { name: "videos/Screen_Recording_Asset_28.mov", caption: "Recording: July 25", playback: 3.0},
        { name: "videos/Screen_Recording_Asset_29.mov", caption: "Morning Session: July 25", playback: 5.0 },
        { name: "videos/Screen_Recording_Asset_30.mov", caption: "Afternoon Session: September 23" },
        { name: "videos/Screen_Recording_Asset_31.mov", caption: "Recording: September 24" },
        { name: "videos/Screen_Recording_Asset_32.mov", caption: "Late Night Session: October 8" },
        { name: "videos/Screen_Recording_Asset_33.mov", caption: "Session: October 8, Late Night", playback: 1.5  },
        { name: "videos/Screen_Recording_Asset_34.mov", caption: "Night Session: October 9" },
        { name: "videos/Screen_Recording_Asset_35.mov", caption: "Afternoon Session: October 10" },
        { name: "videos/Screen_Recording_Asset_36.mov", caption: "Session: October 16" },
        { name: "videos/Screen_Recording_Asset_37.mov", caption: "Session: December 24" },
        { name: "videos/Screen_Recording_Asset_38.mov", caption: "Recording: January 16, 2025" },
        { name: "videos/add_Screen_Recording_Asset_1.mov", caption: "Direction Character Gain, Nontsi's Prints" },
        { name: "videos/add_Screen_Recording_Asset_2.mov", caption: "Hello, Thanks for Coming" },
        { name: "videos/add_Screen_Recording_Asset_3.mov", caption: "Masked Alt Type" },
        { name: "videos/add_Screen_Recording_Asset_4.mov", caption: "What Day Is It?" },
        { name: "videos/add2_Screen_Recording_Asset_1.mov", caption: "Monoline Type, One to Ten" },
        { name: "videos/add2_Screen_Recording_Asset_2.mov", caption: "Bird -- What's Up?" },
        { name: "videos/add2_Screen_Recording_Asset_3.mov", caption: "Walk" },
        { name: "videos/add2_Screen_Recording_Asset_5.mov", caption: "Run" },
        { name: "videos/add2_Screen_Recording_Asset_6.mov", caption: "Floral Moiré", playback: 5.0 },
        { name: "videos/add2_Screen_Recording_Asset_7.mov", caption: "Code & Interfaces", playback: 2.0},
        { name: "videos/add3_moire_Linear_circular.mov", caption: "Linear & Circular Moiré", playback: 2.0},
        { name: "videos/add4_Screen_Recording.mov", caption: "Leaf", playback: 2.0},
        { name: "videos/add4_visible_woman.mp4", caption: "Visible Woman"},
        { name: "videos/add5_screen_recordings1.mov", caption: "BASIS VOOR ACTUELE KUNST"},
        { name: "videos/add5_screen_recordings2.mov", caption: "Dot Gain"},
        { name: "videos/add5_screen_recordings3.mov", caption: "Dot Gain Two"},
        { name: "videos/stills_add_one6.png", caption: "Monoline Path Offset EXP" },
        { name: "videos/stills_add_one3.png", caption: "Directional Character Gain, Sphere" },
        { name: "videos/stills_add_one2.png", caption: "Directional Character Gain, Soccer" },
        { name: "videos/stills_add_one1.png", caption: "Directional Character Gain, Tech" },
        { name: "videos/stills_add_one5.png", caption: "Directional Character Gain, Shield-Arc" },
        { name: "videos/stills_add_one4.png", caption: "Directional Character Gain, Globe" },
        { name: "videos/stills_add_one9.png", caption: "Early Monoline Type Tool EXP" },
        { name: "videos/stills_add_one7.png", caption: "Park Schematic" },
        { name: "videos/text_drawing_150.jpg", caption: "Dot Gain, Figure" },
        { name: "videos/stills_add_one10.png", caption: "Optical" },
        { name: "videos/add2_stills1_.png", caption: "Char Gain Thresholds" },
        { name: "videos/add2_stills2_.png", caption: "Eggs Circle" },
        { name: "videos/add2_stills5_.png", caption: "Eggs Circle" },
        { name: "videos/add2_stills6_.png", caption: "Arc Modules" },
        { name: "videos/add2_stills7_.png", caption: "Software" },
        { name: "videos/add2_stills8_.png", caption: "abc" },
        { name: "videos/add2_stills11_.png", caption: "Durer -- Failure" },
        { name: "videos/add2_stills9_.png", caption: "Pocket WiFi Portal" },
        { name: "videos/add2_stills3_.png", caption: "Finkelstein" },
        { name: "videos/add2_stills4_.png", caption: "Data" },
        { name: "videos/add2_stills10_.png", caption: "Default" },
        { name: "videos/add2_stills12_.png", caption: "A" },
        { name: "videos/add2_stills13_.png", caption: "ABCDE" },
        { name: "videos/add2_stills14_.png", caption: "Schedule" },
        { name: "videos/monoline_video.mov", caption: "Monoline Show Taper" },
        { name: "videos/9d53ce277f6441019266486adffa3e13.mov", caption: "Monoline IG Docu" },
        { name: "videos/IMG_6851.mov", caption: "Custom Inktrap Tool" },
        { name: "videos/clock_cycle.mov", caption: "Counting" },
        { name: "videos/polycam_buddha.mov", caption: "3D Buddha's Hand" },
        { name: "videos/projection_metaball_times.mov", caption: "Projector Metaball Times" },   
        { name: "videos/stills_add_jn261.PNG", caption: "Schedule 261" },
        { name: "videos/stills_add_jn262.PNG", caption: "Schedule 262" },
        { name: "videos/stills_add_jn263.PNG", caption: "Schedule 263" },
        { name: "videos/stills_add_jn264.png", caption: "Schedule 264" },
        { name: "videos/stills_add_jn265.png", caption: "Schedule 265" },
        { name: "videos/stills_add_jn266.png", caption: "Schedule 266" },
        { name: "videos/stills_add_jn267.png", caption: "Schedule 267" },
        { name: "videos/stills_add_jn268.png", caption: "Schedule 268" },
        { name: "videos/stills_add_jn269.png", caption: "Schedule 269" },
        { name: "videos/stills_add_jn2610.png", caption: "Schedule 2610" },
        { name: "videos/stills_add_jn2611.png", caption: "Schedule 2611" },
        { name: "videos/stills_add_jn2612.png", caption: "Schedule 2612" },
        { name: "videos/stills_add_jn2613.png", caption: "Schedule 2613" },
        { name: "videos/stills_add_jn2614.png", caption: "Schedule 2614" },
        { name: "videos/stills_add_jn2615.PNG", caption: "Schedule 2615" },         
        
      // Add more entries as needed...
    ];
  
    // DOM Elements
    const container = document.querySelector(".freeform-container");
    const modal = document.getElementById("image-preview-modal");
    const modalContent = document.getElementById("modal-content");
    const previewImage = document.getElementById("preview-image");
    const closeModalButton = document.getElementById("close-modal");

    // State Management
    let zIndexCounter = 1;
    let isDragging = false;
    let startX, startY;
    let currentDraggedItem = null;
    let mouseDownTime;
    let mouseMoved = false;

    // Layout Configuration
    const itemWidth = 150;
    const itemHeight = 150;
    const minSpacing = 20;

    // Initialize Container
    function initializeContainer() {
        const containerHeight = Math.max(150, Math.ceil(files.length / 10) * 100);
        container.style.height = `${containerHeight}vh`;
    }

    // Utility Functions
    function checkOverlap(item1, item2, spacing) {
        const rect1 = item1.getBoundingClientRect();
        const rect2 = item2.getBoundingClientRect();
        return !(
            rect1.right + spacing < rect2.left ||
            rect1.left - spacing > rect2.right ||
            rect1.bottom + spacing < rect2.top ||
            rect1.top - spacing > rect2.bottom
        );
    }

    function getBiasedPosition(containerWidth, containerHeight) {
        const centerX = containerWidth / 2;
        const randomX = Math.min(
            Math.max(0, centerX + (Math.random() - 0.75) * containerWidth * 0.7 - itemWidth / 2),
            containerWidth - itemWidth
        );
        const randomY = Math.min(
            Math.max(0, Math.random() * containerHeight * 0.9 - itemHeight / 2),
            containerHeight - itemHeight
        );
        return { x: randomX, y: randomY };
    }

    // Item Creation and Positioning
    function createItem(file) {
        const item = document.createElement("div");
        item.className = "freeform-item";

        let position;
        let overlap;
        let attempts = 0;

        do {
            position = getBiasedPosition(container.offsetWidth, container.offsetHeight);
            item.style.left = `${position.x}px`;
            item.style.top = `${position.y}px`;

            overlap = false;
            const existingItems = container.querySelectorAll(".freeform-item");
            for (const existingItem of existingItems) {
                if (checkOverlap(item, existingItem, minSpacing)) {
                    overlap = true;
                    break;
                }
            }
            attempts++;
        } while (overlap && attempts < 100);

        const isVideo = file.name.endsWith(".mov") || file.name.endsWith(".mp4");
        const content = isVideo
            ? `<video src="${file.name}" autoplay loop muted></video>`
            : `<img src="${file.name}" alt="${file.caption}">`;

        item.innerHTML = `${content}<div class="caption">${file.caption}</div>`;
        
        if (isVideo) {
            const video = item.querySelector("video");
            if (video) {
                const playbackRate = file.playback || 1.0;
                video.playbackRate = Math.min(Math.max(playbackRate, 0.25), 16.0);
            }
        }

        return item;
    }

    // Drag Handlers
    function handleDragStart(e, item) {
        if (!modal.classList.contains("hidden")) return;
        
        e.preventDefault();
        mouseDownTime = Date.now();
        startX = e.clientX;
        startY = e.clientY;
        currentDraggedItem = item;
        mouseMoved = false;

        // Increment z-index for dragged item
        zIndexCounter++;
        item.style.zIndex = zIndexCounter;

        document.addEventListener("mousemove", handleDragMove);
        document.addEventListener("mouseup", handleDragEnd);
    }

    function handleDragMove(e) {
        if (!modal.classList.contains("hidden") || !currentDraggedItem) {
            handleDragEnd();
            return;
        }

        const deltaX = Math.abs(e.clientX - startX);
        const deltaY = Math.abs(e.clientY - startY);
        
        if (deltaX > 5 || deltaY > 5) {
            mouseMoved = true;
            isDragging = true;
            
            const newX = parseFloat(currentDraggedItem.style.left) + (e.clientX - startX);
            const newY = parseFloat(currentDraggedItem.style.top) + (e.clientY - startY);
            
            currentDraggedItem.style.left = `${newX}px`;
            currentDraggedItem.style.top = `${newY}px`;
            
            startX = e.clientX;
            startY = e.clientY;
        }
    }

    function handleDragEnd() {
        const wasPotentialClick = Date.now() - mouseDownTime < 200 && !mouseMoved;
        const itemToPreview = currentDraggedItem;
        
        isDragging = false;
        mouseMoved = false;
        currentDraggedItem = null;
        
        document.removeEventListener("mousemove", handleDragMove);
        document.removeEventListener("mouseup", handleDragEnd);
        
        if (wasPotentialClick && itemToPreview) {
            handlePreview(itemToPreview);
        }
    }

    // Modal Handlers
    function handlePreview(item) {
        const media = item.querySelector("img, video");
        if (!media) return;

        if (media.tagName === "VIDEO") {
            const video = document.createElement("video");
            video.src = media.src;
            video.autoplay = true;
            video.controls = true;
            video.loop = true;
            video.muted = true;
            video.style.maxWidth = "100%";
            video.style.maxHeight = "80vh";
            video.controlsList = "nodownload nofullscreen noremoteplayback";
            video.disablePictureInPicture = true;
            modalContent.replaceChildren(closeModalButton, video);
        } else {
            previewImage.src = media.src;
            previewImage.style.maxHeight = "80vh";
            modalContent.replaceChildren(closeModalButton, previewImage);
        }
        modal.classList.remove("hidden");
    }

    function closeModal() {
        modal.classList.add("hidden");
        previewImage.src = "";
        const video = modalContent.querySelector("video");
        if (video) {
            video.pause();
            video.remove();
        }
    }

    // Initialize
    function initialize() {
        initializeContainer();
        
        files.forEach(file => {
            const item = createItem(file);
            container.appendChild(item);
            item.addEventListener("mousedown", e => handleDragStart(e, item));
        });

        closeModalButton.addEventListener("click", e => {
            e.stopPropagation();
            closeModal();
        });

        modal.addEventListener("click", e => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    // Start the application
    initialize();
});

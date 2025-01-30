document.addEventListener("DOMContentLoaded", () => {
    const sliders = document.querySelectorAll(".slider");
    const fontSamples = document.querySelectorAll(".font-sample");

    // Initialize font sizes on page load
    sliders.forEach((slider, index) => {
        const initialSize = slider.value; // Get the initial value from the slider
        fontSamples[index].style.fontSize = `${initialSize}px`; // Set the initial font size
        slider.nextElementSibling.textContent = `${initialSize} px`; // Update the size display
    });

    // Adjust font size with the slider
    sliders.forEach((slider, index) => {
        slider.addEventListener("input", () => {
            const size = slider.value;
            fontSamples[index].style.fontSize = `${size}px`;
            slider.nextElementSibling.textContent = `${size} px`;
        });
    });

    // Enable inline text editing
    fontSamples.forEach((sample) => {
        sample.addEventListener("click", () => {
            sample.focus(); // Focus on the editable text
        });
    });

    // Buy button functionality
    const buyButtons = document.querySelectorAll(".buy-button");

    buyButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const fontName = button.getAttribute("data-font");
            const price = parseFloat(button.getAttribute("data-price"));

            // Add the font to the cart
            addToCart(fontName, price);
            alert(`${fontName} added to cart!`);
        });
    });

    function addToCart(fontName, price) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        const existingItem = cart.find((item) => item.fontName === fontName);

        if (existingItem) {
            existingItem.quantity += 1; // Increment quantity if the font is already in the cart
        } else {
            cart.push({ fontName, price, quantity: 1 }); // Add new font to the cart
        }

        localStorage.setItem("cart", JSON.stringify(cart)); // Save the updated cart to localStorage
    }

    // Array of words to cycle through
    const words = [
        "ART TERYX", 
        "PHALANX", 
        "BOOK", 
        "OREGON x2", 
        "Hershey New", 
        "Bang Pow Boom", 
        "Varsity Jacket", 
        "Simple", 
        "Comms", 
        "NORMA", 
        "Modulo", 
        "Centauri", 
        "PAISLEY", 
        "PARK WEST NEW YORK NEW YORK", 
        "Brown fox", 
        "IDEOGRAPHIC", 
        "Homebrew", 
        "Alternative", 
        "Complexity", 
        "Materials and Methods", 
        "Ascii", 
        "Buffalo, NY to Toronto, ON", 
        "Golden Record", 
        "Index", 
        "Emphemera", 
        "SOFTWARE-FOR-PEOPLE", 
        "Spectrogram", 
        "Liminal Spaces", 
        "Hypertext", 
        "Type Specimen", 
        "Manifesto", 
        "Gradient Worlds", 
        "Nonlinear Systems", 
        "Microcosm", 
        "Topology", 
        "Glyph", 
        "Syntax", 
        "Resolution", 
        "Palimpsest", 
        "Satellite", 
        "Entropy", 
        "Semiotics", 
        "Digital Archaeology", 
        "Algorithmic Poetry", 
        "PostScript", 
        "Data Structures", 
        "Kerning", 
        "Interference Patterns", 
        "Blueprints", 
        "Counterforms", 
        "Metaballs", 
        "Typewriter Aesthetic",
        "No Thoughts, Head Empty", 
        "Sussy Baka", 
        "GigaChad",
        "Always Has Been", 
        "Leonardo Pointing", 
        "Kaboom", 
        "Swoosh", 
        "everything is urgent nothing is urgent",
        "Operations",
        "Gabes Books",
        "Files_From_A_Computer",
        "Richmond to New York City",
      ];
      
      
    // Function to simulate typing and backspacing
    // Function to simulate typing and backspacing
    // Function to simulate typing and backspacing
    function getRandomDelay() {
        return Math.random() * (150 - 70) + 70;
    }

    function getRandomWord(previousWord) {
        let newWord;
        do {
            newWord = words[Math.floor(Math.random() * words.length)];
        } while (newWord === previousWord);
        return newWord;
    }

    function createTypeEffect(element) {
        // Check for static elements
        if (element.hasAttribute('data-static')) {
            return;
        }

        // Font family check
        const fontFamily = element.style.fontFamily;
        if (fontFamily.includes('DashDot')) {
            element.innerHTML = getRandomWord('');
            return;
        }

        let currentWord = getRandomWord('');
        let nextWord = getRandomWord(currentWord);
        let currentCharIndex = 0;
        let isDeleting = false;
        let delay = getRandomDelay();
        let isAnimating = true;

        // Create a span to wrap the text for better rendering
        const textSpan = document.createElement('span');
        element.innerHTML = '';
        element.appendChild(textSpan);

        function type() {
            if (!isAnimating) return;

            delay = getRandomDelay();

            if (isDeleting) {
                currentCharIndex--;
                delay *= 0.8;
            } else {
                currentCharIndex++;
                if (Math.random() < 0.1) {
                    delay *= 2;
                }
                // Auto-scroll to the end when adding text
                const fontRow = element.closest('.font-row');
                fontRow.scrollLeft = fontRow.scrollWidth;
            }

            // Update the span's innerHTML instead of the element's textContent
            textSpan.innerHTML = currentWord.substring(0, currentCharIndex);

            if (!isDeleting && currentCharIndex === currentWord.length) {
                isDeleting = true;
                delay = 1000;
            } else if (isDeleting && currentCharIndex === 0) {
                isDeleting = false;
                currentWord = nextWord;
                nextWord = getRandomWord(currentWord);
                delay = 500;
            }

            requestAnimationFrame(() => setTimeout(type, delay));
        }

        // Start the animation
        setTimeout(type, Math.random() * 1000);

        // Pause animation on focus
        element.addEventListener('focus', () => {
            isAnimating = false;
        });

        // Resume animation on blur
        element.addEventListener('blur', () => {
            isAnimating = true;
            type();
        });
    }

    // Initialize the typing effect for each font sample
    fontSamples.forEach((sample) => {
        createTypeEffect(sample);
    });
});

// Explore button functionality
const exploreButtons = document.querySelectorAll(".explore-button");

exploreButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const link = button.getAttribute("data-link");
        if (link) {
            window.open(link, "_blank"); // Open the link in a new tab
        }
    });
});
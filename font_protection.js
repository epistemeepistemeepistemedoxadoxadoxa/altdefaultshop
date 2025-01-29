// font-protection.js

// 1. Convert WOFF/WOFF2 files to Base64
function convertFontToBase64(fontUrl) {
    return fetch(fontUrl)
        .then(response => response.blob())
        .then(blob => {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onloadend = () => resolve(reader.result);
                reader.onerror = reject;
                reader.readAsDataURL(blob);
            });
        });
}

// 2. Dynamic Font Loading with Fingerprinting
class FontProtection {
    constructor() {
        this.validSessions = new Set();
        this.init();
    }

    init() {
        // Generate a session token
        const sessionToken = this.generateSessionToken();
        this.validSessions.add(sessionToken);
        
        // Add session validation to font requests
        this.injectFontProtection(sessionToken);
        
        // Add protection against dev tools
        this.addDevToolsProtection();
    }

    generateSessionToken() {
        return Math.random().toString(36).substring(2) + Date.now().toString(36);
    }

    injectFontProtection(sessionToken) {
        // Add session token to font-face rules
        const style = document.createElement('style');
        style.textContent = `
            @font-face {
                font-family: 'ProtectedFont';
                src: url('/fonts/protected?token=${sessionToken}') format('woff2');
                font-display: swap;
            }
        `;
        document.head.appendChild(style);
    }

    addDevToolsProtection() {
        // Detect and respond to dev tools opening
        const detectDevTools = () => {
            const threshold = 160;
            const widthThreshold = window.outerWidth - window.innerWidth > threshold;
            const heightThreshold = window.outerHeight - window.innerHeight > threshold;
            
            if (widthThreshold || heightThreshold) {
                this.handleDevToolsOpen();
            }
        };

        window.addEventListener('resize', detectDevTools);
        setInterval(detectDevTools, 1000);
    }

    handleDevToolsOpen() {
        // Replace font content with placeholder on dev tools open
        document.querySelectorAll('.font-sample').forEach(element => {
            element.style.fontFamily = 'sans-serif';
            element.dataset.protected = 'true';
        });
    }
}

// 3. CSS Updates (to be added to your CSS file)
const protectedFontStyles = `
    .font-sample {
        /* Prevent text selection */
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        
        /* Prevent drag and drop */
        -webkit-user-drag: none;
        -khtml-user-drag: none;
        -moz-user-drag: none;
        -o-user-drag: none;
    }

    /* Add protection against screenshots */
    @media print {
        .font-sample {
            visibility: hidden;
        }
    }
`;

// 4. Server-side implementation (example in Node.js/Express)
/*
app.get('/fonts/protected', (req, res) => {
    const sessionToken = req.query.token;
    const referer = req.headers.referer;
    
    // Validate session token and referer
    if (!isValidSession(sessionToken) || !isValidReferer(referer)) {
        return res.status(403).send('Unauthorized');
    }
    
    // Serve encrypted font file
    const fontPath = path.join(__dirname, 'fonts', 'encrypted', 'font.woff2');
    res.sendFile(fontPath);
});
*/

// Initialize protection
document.addEventListener('DOMContentLoaded', () => {
    new FontProtection();
});
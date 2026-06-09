/**
 * General Safe - Specialized AI Assistant
 * A high-end client-side RAG chatbot UI and knowledge matcher.
 * Provides instant answers based on official company pages (Leistungen, Über Uns, Karriere, Kontakt).
 */

const GENERAL_SAFE_KB = {
    company: {
        name: "General Safe GmbH & Co. KG",
        address: "Bürgermeister-Schade-Str. 18, 24232 Schönkirchen",
        location: "Kiel / Schönkirchen, Schleswig-Holstein",
        email: "info@general-safe.com",
        managing_director: "Ammar Jafar",
        register: "Amtsgericht Kiel (HRA 12907 K)",
        availability: "24/7 Einsatzbereitschaft, ständige Erreichbarkeit",
        philosophy: "Sicherheit auf höchstem Niveau: Präzise. Diskret. Verlässlich. Diskretion, Professionalität und Präzision sind unsere Kernsäulen. Wir nutzen modernste Technik kombiniert mit hochqualifiziertem Personal, um Gefahren vorausschauend abzuwehren."
    },
    services: [
        {
            id: "revierfahrer",
            title: "Revierfahrer & Revierdienste",
            description: "Mobile Streifenkontrollen, Schließdienste und Alarmverfolgung. Die flexible Einheit des Objektschutzes.",
            details: "Unsere Revierfahrer kontrollieren mehrere Standorte im Wechsel zu unregelmäßigen Zeiten. Sie prüfen Tore, Türen und Fenster, überwachen technische Anlagen, dokumentieren Rundgänge digital per GPS und reagieren sofort bei Alarmfällen (Alarmverfolgung). Ideal für Gewerbeobjekte, Baustellen und Logistikflächen.",
            benefits: "Flexibler Schutz für mehrere Objekte, hohe Präventionswirkung durch unvorhersehbare Streifen, kostengünstiger als permanenter Objektschutz vor Ort, 24/7 Alarmaufschaltung und schnelle Intervention."
        },
        {
            id: "detektei",
            title: "Detektei & Ermittlungsdienst",
            description: "Diskrete Wirtschaft- und Privatermittlungen mit gerichtsfester Dokumentation.",
            details: "Wirtschaftsermittlungen bei Verdacht auf Diebstahl, Betrug, Unterschlagung oder Arbeitszeitbetrug (Schwarzarbeit/Spesenbetrug). Privatermittlungen bei Untreue, Sorgerechtsstreitigkeiten, Unterhaltsfragen oder Bedrohungen. Alle Beweismittel werden streng legal, diskret und gerichtsverwertbar erbracht.",
            benefits: "Klare Fakten für rechtliche Auseinandersetzungen, diskreteste Handhabung, erfahrene Ermittler."
        },
        {
            id: "doorman",
            title: "Doorman",
            description: "Freundlicher Empfang und präventiver Schutz für exklusive Geschäfte, Hotels und Boutiquen.",
            details: "Verbindung von gehobener Empfangskultur mit aktiver Sicherheit. Doormen kontrollieren den Einlass, setzen das Hausrecht deeskalierend durch und wirken präventiv gegen Ladendiebstahl und Vandalismus.",
            benefits: "Gepflegtes Auftreten im Anzug oder Corporate Identity Kleidung, sicherer Empfang von Gästen, unauffällige Präsenz."
        },
        {
            id: "empfang",
            title: "Empfangs- und Pförtnerdienst",
            description: "Besuchersteuerung, Postdienste und Zutrittskontrollen für Unternehmen.",
            details: "Empfang von Kunden und Lieferanten, Schlüsselausgabe, Ausweiserstellung, Steuerung von Telefonanlagen, Post- und Paketverwaltung sowie Kontrollgänge außerhalb der Arbeitszeiten.",
            benefits: "Professioneller erster Eindruck für Ihr Unternehmen, sichere Zutrittskontrolle für Mitarbeiter und Gäste."
        },
        {
            id: "objektschutz",
            title: "Objektschutz",
            description: "Lückenlose Absicherung von Immobilien, Industrieanlagen und Baustellen.",
            details: "Permanenter Wachschutz vor Ort mit Streifengängen, Pfortendienst, Zustandskontrollen und unmittelbarer Gefahrenabwehr. Schutz gegen Vandalismus, Einbruch, Sabotage und Spionage.",
            benefits: "24/7 Vor-Ort-Präsenz, sofortige Gefahrenabwehr, Abschreckung potenzieller Täter."
        },
        {
            id: "ladendetektiv",
            title: "Ladendetektiv / Einzelhandelsschutz",
            description: "Aufdeckung und Verhinderung von Ladendiebstählen im Einzelhandel.",
            details: "Diskrete Überwachung der Verkaufsflächen in Zivil oder über Live-Videosysteme. Ansprache und Festnahme von Tätern auf frischer Tat sowie reibungslose Übergabe an die Polizei samt Anzeige.",
            benefits: "Direkte Reduzierung von Inventurdifferenzen, Schutz der Verkaufsmitarbeiter vor Konfrontationen."
        },
        {
            id: "veranstaltungsschutz",
            title: "Event- und Veranstaltungsschutz",
            description: "Sicherheitskonzepte und Einlasskontrollen für Events, Messen und Galas.",
            details: "Ganzheitlicher Schutz für Veranstaltungen jeder Größe: Einlass- und Taschenkontrollen, Absicherung von VIP-Bereichen und Bühnen, Fluchtwegüberwachung, Parkraum-Management und diskrete Deeskalation.",
            benefits: "Störungsfreier Eventverlauf, Entlastung des Veranstalters, Schutz aller Teilnehmer und prominenter Gäste."
        }
    ],
    careers: {
        benefits: "Faire, pünktliche Bezahlung nach Tarifvertrag, hochwertige moderne Dienstkleidung und Ausrüstung, flexible Schichten, Unterstützung bei Weiterbildung (Ersthelfer, Brandschutz).",
        requirements: "Erfolgreich abgelegte Sachkundeprüfung oder Unterrichtung nach § 34a GewO, einwandfreies Führungszeugnis, Zuverlässigkeit, Pünktlichkeit, gepflegtes Auftreten und gute Deutschkenntnisse.",
        positions: [
            "Revierfahrer/in (m/w/d) - Vollzeit / Teilzeit",
            "Detektiv / Ermittler (m/w/d) - Vollzeit / Teilzeit / Freiberuflich",
            "Doorman (m/w/d) - Vollzeit / Teilzeit / Minijob",
            "Empfangs- & Pförtnerkraft (m/w/d) - Vollzeit / Teilzeit",
            "Sicherheitskraft im Objektschutz (m/w/d) - Vollzeit / Teilzeit",
            "Ladendetektiv/in (m/w/d) - Vollzeit / Teilzeit",
            "Mitarbeiter Veranstaltungsschutz (m/w/d) - Teilzeit / Minijob"
        ]
    },
    greetings: [
        "Hallo! Ich bin der General Safe Assistent. Wie kann ich Ihnen heute in Sicherheitsfragen helfen?",
        "Guten Tag! Suchen Sie nach unseren Leistungen (z. B. Objektschutz, Revierfahrer) oder interessieren Sie sich für Karrierechancen?",
        "Willkommen bei General Safe. Ich beantworte Ihnen gerne Fragen zu unseren Leistungen, Standorten oder Jobangeboten."
    ]
};

class GeneralSafeBot {
    constructor() {
        this.isOpen = false;
        this.messages = [];
        this.init();
    }

    init() {
        // Inject styles dynamically
        const style = document.createElement('style');
        style.textContent = `
            .gs-chat-widget {
                position: fixed;
                bottom: 24px;
                right: 24px;
                z-index: 30;
                font-family: 'Inter', sans-serif;
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                pointer-events: none;
            }
            .gs-chat-trigger {
                width: 60px;
                height: 60px;
                border-radius: 50%;
                background: linear-gradient(135deg, #0090d4, #005f9e);
                color: white;
                border: none;
                cursor: pointer;
                box-shadow: 0 8px 30px rgba(0, 144, 212, 0.4);
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                pointer-events: auto;
            }
            .gs-chat-trigger:hover {
                transform: scale(1.05) translateY(-2px);
                box-shadow: 0 12px 35px rgba(0, 144, 212, 0.6);
            }
            .gs-chat-trigger:active {
                transform: scale(0.95);
            }
            .gs-chat-trigger span {
                font-size: 28px;
                transition: transform 0.3s ease;
            }
            .gs-chat-trigger.active span {
                transform: rotate(90deg);
            }
            .gs-chat-window {
                width: 380px;
                height: 520px;
                max-height: calc(100vh - 100px);
                max-width: calc(100vw - 48px);
                background: #ffffff;
                border: 1px solid rgba(0, 0, 0, 0.08);
                border-radius: 16px;
                box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
                display: flex;
                flex-direction: column;
                overflow: hidden;
                margin-bottom: 16px;
                opacity: 0;
                transform: translateY(20px) scale(0.95);
                pointer-events: none;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                transform-origin: bottom right;
            }
            .dark .gs-chat-window {
                background: #101827;
                border-color: rgba(255, 255, 255, 0.1);
                box-shadow: 0 16px 50px rgba(0, 0, 0, 0.5);
            }
            .gs-chat-window.show {
                opacity: 1;
                transform: translateY(0) scale(1);
                pointer-events: auto;
            }
            .gs-chat-header {
                padding: 16px 20px;
                background: linear-gradient(135deg, #101827, #1e293b);
                color: white;
                display: flex;
                align-items: center;
                gap: 12px;
                border-bottom: 1px solid rgba(255, 255, 255, 0.05);
            }
            .dark .gs-chat-header {
                background: linear-gradient(135deg, #0c0f10, #191c1d);
            }
            .gs-chat-header-img {
                width: 32px;
                height: 32px;
                object-fit: contain;
                border-radius: 6px;
                background: rgba(255, 255, 255, 0.1);
                padding: 4px;
            }
            .gs-chat-header-info h4 {
                margin: 0;
                font-size: 15px;
                font-family: 'Hanken Grotesk', sans-serif;
                font-weight: 700;
                letter-spacing: 0.05em;
                display: flex;
                align-items: center;
                gap: 6px;
            }
            .gs-chat-header-info h4 span.status-indicator {
                width: 8px;
                height: 8px;
                background: #10B981;
                border-radius: 50%;
                display: inline-block;
                box-shadow: 0 0 8px #10B981;
            }
            .gs-chat-header-info p {
                margin: 2px 0 0 0;
                font-size: 11px;
                opacity: 0.7;
                text-transform: uppercase;
                letter-spacing: 0.1em;
            }
            .gs-chat-messages {
                flex-grow: 1;
                padding: 20px;
                overflow-y: auto;
                display: flex;
                flex-direction: column;
                gap: 12px;
                background: #f8fafc;
            }
            .dark .gs-chat-messages {
                background: #111415;
            }
            .gs-msg {
                max-width: 85%;
                padding: 10px 14px;
                border-radius: 12px;
                font-size: 13.5px;
                line-height: 1.45;
            }
            .gs-msg-bot {
                background: #ffffff;
                color: #1e293b;
                align-self: flex-start;
                border-bottom-left-radius: 2px;
                box-shadow: 0 2px 5px rgba(0,0,0,0.02);
                border: 1px solid rgba(0, 0, 0, 0.05);
            }
            .dark .gs-msg-bot {
                background: #1d2021;
                color: #e1e3e4;
                border-color: rgba(255, 255, 255, 0.03);
            }
            .gs-msg-user {
                background: #0090d4;
                color: white;
                align-self: flex-end;
                border-bottom-right-radius: 2px;
                box-shadow: 0 3px 10px rgba(0, 144, 212, 0.25);
            }
            .gs-chat-suggestions {
                display: flex;
                flex-wrap: wrap;
                gap: 6px;
                padding: 10px 20px;
                background: #f8fafc;
                border-top: 1px solid rgba(0, 0, 0, 0.03);
            }
            .dark .gs-chat-suggestions {
                background: #111415;
                border-color: rgba(255, 255, 255, 0.03);
            }
            .gs-suggestion-btn {
                background: #ffffff;
                border: 1px solid #e2e8f0;
                color: #475569;
                padding: 6px 12px;
                border-radius: 20px;
                font-size: 11.5px;
                cursor: pointer;
                transition: all 0.2s ease;
                font-weight: 500;
            }
            .dark .gs-suggestion-btn {
                background: #1d2021;
                border-color: rgba(255, 255, 255, 0.1);
                color: #bec7d2;
            }
            .gs-suggestion-btn:hover {
                background: #0090d4;
                color: white;
                border-color: #0090d4;
                transform: translateY(-1px);
            }
            .gs-chat-input-area {
                padding: 12px 16px;
                background: white;
                border-top: 1px solid #e2e8f0;
                display: flex;
                gap: 8px;
            }
            .dark .gs-chat-input-area {
                background: #191c1d;
                border-color: rgba(255, 255, 255, 0.05);
            }
            .gs-chat-input {
                flex-grow: 1;
                border: 1px solid #cbd5e1;
                border-radius: 24px;
                padding: 8px 16px;
                font-size: 13.5px;
                outline: none;
                background: transparent;
                color: #1e293b;
                transition: border-color 0.2s;
            }
            .dark .gs-chat-input {
                border-color: rgba(255, 255, 255, 0.15);
                color: white;
            }
            .gs-chat-input:focus {
                border-color: #0090d4;
            }
            .gs-chat-send {
                background: #0090d4;
                color: white;
                border: none;
                width: 36px;
                height: 36px;
                border-radius: 50%;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: transform 0.2s, background 0.2s;
                flex-shrink: 0;
            }
            .gs-chat-send:hover {
                background: #007bb8;
                transform: scale(1.05);
            }
            .gs-chat-send:active {
                transform: scale(0.95);
            }
            .gs-chat-send span {
                font-size: 18px;
            }
            .gs-chat-loader {
                display: flex;
                gap: 4px;
                align-items: center;
                justify-content: center;
                padding: 4px 8px;
            }
            .gs-chat-dot {
                width: 6px;
                height: 6px;
                background: #94a3b8;
                border-radius: 50%;
                animation: gsPulse 1.4s infinite ease-in-out both;
            }
            .gs-chat-dot:nth-child(1) { animation-delay: -0.32s; }
            .gs-chat-dot:nth-child(2) { animation-delay: -0.16s; }
            @keyframes gsPulse {
                0%, 80%, 100% { transform: scale(0); }
                40% { transform: scale(1.0); }
            }
        `;
        document.head.appendChild(style);

        // Build widget container
        this.widget = document.createElement('div');
        this.widget.className = 'gs-chat-widget';

        this.widget.innerHTML = `
            <div class="gs-chat-window" id="gsChatWindow">
                <div class="gs-chat-header">
                    <img src="logo.png" class="gs-chat-header-img" alt="General Safe logo">
                    <div class="gs-chat-header-info">
                        <h4>General Safe Bot <span class="status-indicator"></span></h4>
                        <p>KI-Assistent 24/7</p>
                    </div>
                </div>
                <div class="gs-chat-messages" id="gsChatMessages"></div>
                <div class="gs-chat-suggestions" id="gsChatSuggestions">
                    <button class="gs-suggestion-btn" data-query="Welche Sicherheitsleistungen bieten Sie an?">Leistungen</button>
                    <button class="gs-suggestion-btn" data-query="Was sind die Voraussetzungen für Jobs bei Ihnen?">Karriere</button>
                    <button class="gs-suggestion-btn" data-query="Wie erreiche ich General Safe?">Kontakt & Anschrift</button>
                </div>
                <form class="gs-chat-input-area" id="gsChatForm">
                    <input type="text" class="gs-chat-input" id="gsChatInput" placeholder="Schreiben Sie eine Nachricht..." autocomplete="off" required>
                    <button type="submit" class="gs-chat-send" aria-label="Senden">
                        <span class="material-symbols-outlined">send</span>
                    </button>
                </form>
            </div>
            <button class="gs-chat-trigger" id="gsChatTrigger" aria-label="Chat öffnen">
                <span class="material-symbols-outlined" id="gsChatTriggerIcon">forum</span>
            </button>
        `;

        document.body.appendChild(this.widget);

        this.chatWindow = document.getElementById('gsChatWindow');
        this.messagesContainer = document.getElementById('gsChatMessages');
        this.chatInput = document.getElementById('gsChatInput');
        this.chatForm = document.getElementById('gsChatForm');
        this.chatTrigger = document.getElementById('gsChatTrigger');
        this.chatTriggerIcon = document.getElementById('gsChatTriggerIcon');

        // Bind events
        this.chatTrigger.addEventListener('click', () => this.toggleChat());
        this.chatForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSend();
        });

        // Add suggestions event listeners
        document.querySelectorAll('.gs-suggestion-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const query = e.target.getAttribute('data-query');
                this.chatInput.value = query;
                this.handleSend();
            });
        });

        // Add initial bot greeting
        setTimeout(() => {
            const randomGreeting = GENERAL_SAFE_KB.greetings[Math.floor(Math.random() * GENERAL_SAFE_KB.greetings.length)];
            this.addMessage(randomGreeting, 'bot');
        }, 1000);
    }

    toggleChat() {
        this.isOpen = !this.isOpen;
        if (this.isOpen) {
            this.chatWindow.classList.add('show');
            this.chatTriggerIcon.textContent = 'close';
            this.chatTrigger.classList.add('active');
            setTimeout(() => this.chatInput.focus(), 100);
        } else {
            this.chatWindow.classList.remove('show');
            this.chatTriggerIcon.textContent = 'forum';
            this.chatTrigger.classList.remove('active');
        }
    }

    addMessage(text, sender) {
        const msg = document.createElement('div');
        msg.className = `gs-msg gs-msg-${sender}`;
        msg.innerHTML = text.replace(/\n/g, '<br>');
        this.messagesContainer.appendChild(msg);
        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
        return msg;
    }

    showTypingLoader() {
        const loader = document.createElement('div');
        loader.className = 'gs-msg gs-msg-bot gs-chat-loader';
        loader.innerHTML = `
            <div class="gs-chat-dot"></div>
            <div class="gs-chat-dot"></div>
            <div class="gs-chat-dot"></div>
        `;
        this.messagesContainer.appendChild(loader);
        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
        return loader;
    }

    handleSend() {
        const query = this.chatInput.value.trim();
        if (!query) return;

        this.addMessage(query, 'user');
        this.chatInput.value = '';

        const loader = this.showTypingLoader();

        // Simulate thinking & response generation
        setTimeout(() => {
            loader.remove();
            const reply = this.generateResponse(query);
            this.addMessage(reply, 'bot');
        }, 800 + Math.random() * 700);
    }

    generateResponse(query) {
        const q = query.toLowerCase();

        // 1. Contact / Address / Impressum queries
        if (this.matchesAny(q, ['kontakt', 'adresse', 'anschrift', 'telefon', 'mail', 'email', 'erreichen', 'ort', 'schönkirchen', 'kiel', 'sitz'])) {
            return `Sie erreichen <strong>${GENERAL_SAFE_KB.company.name}</strong> wie folgt:
            <br><br>
            📍 <strong>Anschrift:</strong> ${GENERAL_SAFE_KB.company.address}
            <br>
            📧 <strong>E-Mail:</strong> <a href="mailto:${GENERAL_SAFE_KB.company.email}" style="color: #0090d4; text-decoration: underline;">${GENERAL_SAFE_KB.company.email}</a>
            <br>
            🕒 <strong>Bereitschaft:</strong> ${GENERAL_SAFE_KB.company.availability}
            <br><br>
            Sie können auch direkt über die Schaltfläche <strong>"Jetzt anfragen"</strong> in der Navigation ein unverbindliches Angebot anfordern.`;
        }

        // 2. Careers / Jobs / Requirements
        if (this.matchesAny(q, ['karriere', 'job', 'stellen', 'bewerben', 'arbeit', 'gehalt', 'lohn', 'voraussetzungen', 'gesucht', '34a', 'sachkunde'])) {
            let response = `Wir sind immer auf der Suche nach qualifizierten Sicherheitskräften! 💼
            <br><br>
            <strong>Aktuelle Stellenangebote:</strong>
            <ul style="list-style-type: disc; padding-left: 20px; margin-top: 5px;">`;
            
            GENERAL_SAFE_KB.careers.positions.forEach(pos => {
                response += `<li>${pos}</li>`;
            });
            response += `</ul>
            <br>
            <strong>Unsere Vorteile für Sie:</strong> ${GENERAL_SAFE_KB.careers.benefits}
            <br><br>
            <strong>Wichtigste Voraussetzungen:</strong> ${GENERAL_SAFE_KB.careers.requirements}
            <br><br>
            Bewerben Sie sich ganz einfach per E-Mail an <a href="mailto:${GENERAL_SAFE_KB.company.email}" style="color: #0090d4; text-decoration: underline;">${GENERAL_SAFE_KB.company.email}</a> oder nutzen Sie das Bewerbungsformular auf unserer <a href="karriere.html" style="color: #0090d4; text-decoration: underline;">Karriere-Seite</a>.`;
            return response;
        }

        // 3. Service details check
        for (const service of GENERAL_SAFE_KB.services) {
            if (q.includes(service.id) || this.matchesAny(q, service.title.toLowerCase().split(' '))) {
                return `🔎 <strong>${service.title}</strong>
                <br><br>
                ${service.details}
                <br><br>
                💡 <strong>Ihre Vorteile:</strong> ${service.benefits}
                <br><br>
                Möchten Sie hierzu ein konkretes Angebot? Klicken Sie einfach oben auf <strong>"Jetzt anfragen"</strong> oder schreiben Sie uns eine E-Mail an <a href="mailto:${GENERAL_SAFE_KB.company.email}" style="color: #0090d4; text-decoration: underline;">${GENERAL_SAFE_KB.company.email}</a>.`;
            }
        }

        // 4. General Services list request
        if (this.matchesAny(q, ['leistungen', 'services', 'angebot', 'was macht ihr', 'portfolio', 'dienstleistungen', 'sicherung', 'schutz'])) {
            let response = `General Safe bietet ein breites Portfolio an professionellen Sicherheitsdienstleistungen:
            <br><br>`;
            GENERAL_SAFE_KB.services.forEach(s => {
                response += `🛡️ <strong>${s.title}</strong>: ${s.description}<br>`;
            });
            response += `<br>Für Details zu einer bestimmten Leistung fragen Sie mich einfach danach (z. B. "Erzähl mir was über Revierfahrer").`;
            return response;
        }

        // 5. Boss / Founder / Legal
        if (this.matchesAny(q, ['chef', 'geschäftsführer', 'inhaber', 'ammar', 'jafar', 'gründer', 'leiter', 'impressum', 'haftung'])) {
            return `<strong>${GENERAL_SAFE_KB.company.name}</strong> wird vertreten durch den Geschäftsführer <strong>${GENERAL_SAFE_KB.company.managing_director}</strong>.
            <br>
            Die Gesellschaft ist beim Registergericht Kiel unter der Registernummer <strong>${GENERAL_SAFE_KB.company.register}</strong> eingetragen.
            <br><br>
            Unsere Philosophie lautet: <em>"${GENERAL_SAFE_KB.company.philosophy}"</em>`;
        }

        // 6. Generic Fallback (Dynamic Smart Match)
        return `Vielen Dank für Ihre Nachricht. Als digitaler Assistent für <strong>General Safe</strong> helfe ich Ihnen bei Fragen zu unseren Sicherheitsleistungen, Karrierechancen oder Kontaktmöglichkeiten.
        <br><br>
        Schreiben Sie mir einfach ein Stichwort wie <strong>"Revierfahrer"</strong>, <strong>"Objektschutz"</strong>, <strong>"Jobs"</strong> oder <strong>"Kontakt"</strong>, um die passenden Informationen zu erhalten.
        <br><br>
        Für dringende Anfragen können Sie uns jederzeit direkt unter <a href="mailto:${GENERAL_SAFE_KB.company.email}" style="color: #0090d4; text-decoration: underline;">${GENERAL_SAFE_KB.company.email}</a> kontaktieren.`;
    }

    matchesAny(text, keywords) {
        return keywords.some(keyword => keyword.length > 2 && text.includes(keyword));
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    window.generalSafeBot = new GeneralSafeBot();
});

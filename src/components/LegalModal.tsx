import React, { useEffect } from 'react';
import { X, ShieldCheck, FileText, Scale, Lock, ExternalLink } from 'lucide-react';

export type LegalTab = 'impressum' | 'datenschutz';

interface LegalModalProps {
  isOpen: boolean;
  initialTab?: LegalTab;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  initialTab = 'impressum',
  onClose,
}) => {
  const [activeTab, setActiveTab] = React.useState<LegalTab>(initialTab);

  // Sync tab when initialTab changes or modal opens
  useEffect(() => {
    if (isOpen) {
      setActiveTab(initialTab);
    }
  }, [isOpen, initialTab]);

  // Handle ESC key to dismiss modal
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-200 animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] flex flex-col bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header with Navigation Tabs & Close Button */}
        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-200 flex items-center justify-between gap-4">
          {/* Tab Switcher */}
          <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl">
            <button
              type="button"
              onClick={() => setActiveTab('impressum')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-heading font-bold transition-all duration-200 cursor-pointer ${
                activeTab === 'impressum'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Scale className="w-4 h-4" />
              <span>Impressum</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('datenschutz')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-heading font-bold transition-all duration-200 cursor-pointer ${
                activeTab === 'datenschutz'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Lock className="w-4 h-4" />
              <span>Datenschutzerklärung</span>
            </button>
          </div>

          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Modal schließen"
            className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Container */}
        <div className="overflow-y-auto px-6 sm:px-8 py-6 font-sans text-slate-700 text-sm sm:text-base leading-relaxed space-y-6">
          
          {/* ========================================================================= */}
          {/* TAB 1: IMPRESSUM                                                          */}
          {/* ========================================================================= */}
          {activeTab === 'impressum' && (
            <div className="space-y-6">
              <div>
                <h3
                  id="legal-modal-title"
                  className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight mb-2"
                >
                  Impressum
                </h3>
                <p className="text-xs text-slate-500">
                  Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG) und § 18 Abs. 2 Medienstaatsvertrag (MStV)
                </p>
              </div>

              {/* Company & Owner Box */}
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/80 space-y-3">
                <h4 className="font-heading font-bold text-slate-900 text-base">
                  Diensteanbieter
                </h4>
                <div className="text-slate-700 text-sm space-y-1">
                  <p className="font-semibold text-slate-900">Obazee Clement Reinigung</p>
                  <p>Inhaber: Clement Obazee</p>
                  <p>60311 Frankfurt am Main, Deutschland</p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-2">
                <h4 className="font-heading font-bold text-slate-900 text-base">
                  Kontakt
                </h4>
                <div className="text-sm space-y-1 text-slate-700">
                  <p>
                    <span className="font-medium text-slate-900">Telefon:</span>{' '}
                    <a href="tel:+4915210236967" className="text-primary hover:underline">
                      +49 1521 0236967
                    </a>
                  </p>
                  <p>
                    <span className="font-medium text-slate-900">E-Mail:</span>{' '}
                    <a href="mailto:info@obazee-clement-reinigung.de" className="text-primary hover:underline">
                      info@obazee-clement-reinigung.de
                    </a>
                  </p>
                </div>
              </div>

              {/* Tax Information */}
              <div className="space-y-2">
                <h4 className="font-heading font-bold text-slate-900 text-base">
                  Umsatzsteuer
                </h4>
                <p className="text-sm text-slate-600">
                  Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: [Falls vorhanden angeben, sonst Hinweis auf Kleinunternehmerregelung gemäß § 19 UStG: &quot;Gemäß § 19 UStG wird keine Umsatzsteuer berechnet und ausgewiesen.&quot;]
                </p>
              </div>

              {/* Responsible for Content */}
              <div className="space-y-2">
                <h4 className="font-heading font-bold text-slate-900 text-base">
                  Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
                </h4>
                <p className="text-sm text-slate-700">
                  Clement Obazee<br />
                  60311 Frankfurt am Main, Deutschland
                </p>
              </div>

              {/* EU Dispute Resolution */}
              <div className="space-y-2 pt-2 border-t border-slate-200">
                <h4 className="font-heading font-bold text-slate-900 text-base">
                  EU-Streitschlichtung &amp; Verbraucherstreitbeilegung
                </h4>
                <p className="text-sm text-slate-600">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                  <a
                    href="https://ec.europa.eu/consumers/odr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center gap-1"
                  >
                    https://ec.europa.eu/consumers/odr/
                    <ExternalLink className="w-3 h-3 inline" />
                  </a>
                  .<br />
                  Unsere E-Mail-Adresse finden Sie oben im Impressum.
                </p>
                <p className="text-sm text-slate-600 mt-2">
                  Wir sind weder verpflichtet noch bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>

              {/* Liability Notice */}
              <div className="space-y-2 text-xs text-slate-500 pt-2 border-t border-slate-200 leading-relaxed">
                <h5 className="font-bold text-slate-700">Haftung für Inhalte &amp; Urheberrecht</h5>
                <p>
                  Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.
                </p>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 2: DATENSCHUTZERKLÄRUNG                                               */}
          {/* ========================================================================= */}
          {activeTab === 'datenschutz' && (
            <div className="space-y-6">
              <div>
                <h3
                  id="legal-modal-title"
                  className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight mb-2"
                >
                  Datenschutzerklärung
                </h3>
                <p className="text-xs text-slate-500">
                  Informationen zur Verarbeitung Ihrer personenbezogenen Daten gemäß DSGVO
                </p>
              </div>

              {/* 1. Overview */}
              <div className="space-y-3">
                <h4 className="font-heading font-bold text-slate-900 text-base flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  <span>1. Datenschutz auf einen Blick</span>
                </h4>
                <p className="text-sm text-slate-600">
                  Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                </p>
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80 text-sm text-slate-700">
                  <p className="font-semibold text-slate-900 mb-1">Verantwortliche Stelle:</p>
                  <p>Obazee Clement Reinigung</p>
                  <p>Inhaber: Clement Obazee</p>
                  <p>60311 Frankfurt am Main, Deutschland</p>
                  <p>Telefon: +49 1521 0236967</p>
                  <p>E-Mail: info@obazee-clement-reinigung.de</p>
                </div>
              </div>

              {/* 2. Data Collection */}
              <div className="space-y-3 pt-2 border-t border-slate-200">
                <h4 className="font-heading font-bold text-slate-900 text-base flex items-center gap-2">
                  <FileText className="w-4 h-4 text-primary" />
                  <span>2. Datenerfassung auf dieser Website</span>
                </h4>
                
                <div className="space-y-3 text-sm text-slate-600">
                  <div>
                    <h5 className="font-semibold text-slate-800">Hosting &amp; Server-Log-Dateien</h5>
                    <p className="mt-1">
                      Diese Website wird extern über einen modernen Cloud-Hosting-Dienstleister (Vercel Inc.) bereitgestellt. Beim Besuch unserer Webseiten erfasst der Hostinganbieter automatisch Informationen in sogenannten Server-Log-Dateien (z. B. Browsertyp, Betriebssystem, Referrer URL, Uhrzeit des Zugriffs und IP-Adresse). Die Rechtsgrundlage hierfür ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer technisch fehlerfreien Bereitstellung und Stabilität der Website).
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-slate-800">Kontakt- &amp; Angebotsanfragen</h5>
                    <p className="mt-1">
                      Wenn Sie uns über das Online-Formular oder per E-Mail Anfragen zukommen lassen, verarbeiten wir die von Ihnen eingegebenen Daten (wie Name, E-Mail-Adresse, Telefonnummer, PLZ/Ort, gewünschte Reinigungsleistung, Flächengröße und Notizen) zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen. Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO zur Erfüllung eines Vertrags oder zur Durchführung vorvertraglicher Maßnahmen. Eine Weitergabe dieser Daten an unbefugte Dritte erfolgt nicht.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-slate-800">SSL- bzw. TLS-Verschlüsselung</h5>
                    <p className="mt-1">
                      Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte (wie z. B. Anfragen, die Sie an uns senden) eine durchgängige SSL-/TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von &quot;http://&quot; auf &quot;https://&quot; wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                    </p>
                  </div>
                </div>
              </div>

              {/* 3. User Rights */}
              <div className="space-y-3 pt-2 border-t border-slate-200">
                <h4 className="font-heading font-bold text-slate-900 text-base flex items-center gap-2">
                  <Scale className="w-4 h-4 text-primary" />
                  <span>3. Ihre Rechte als betroffene Person</span>
                </h4>
                <p className="text-sm text-slate-600">
                  Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf:
                </p>
                <ul className="list-disc list-inside text-sm text-slate-600 space-y-1.5 pl-1">
                  <li><strong className="text-slate-800">Auskunft (Art. 15 DSGVO):</strong> Kostenfreie Information über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten.</li>
                  <li><strong className="text-slate-800">Berichtigung (Art. 16 DSGVO):</strong> Unverzügliche Korrektur unrichtiger oder Vervollständigung Ihrer Daten.</li>
                  <li><strong className="text-slate-800">Löschung (Art. 17 DSGVO):</strong> Löschung Ihrer bei uns gespeicherten personenbezogenen Daten, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</li>
                  <li><strong className="text-slate-800">Einschränkung der Verarbeitung (Art. 18 DSGVO):</strong> Das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                  <li><strong className="text-slate-800">Beschwerderecht (Art. 77 DSGVO):</strong> Sie haben das Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde (z. B. Der Hessische Beauftragte für Datenschutz und Informationsfreiheit, Gustav-Stresemann-Ring 1, 65189 Wiesbaden).</li>
                </ul>
              </div>

              {/* 4. Cookies & Tracking */}
              <div className="space-y-3 pt-2 border-t border-slate-200">
                <h4 className="font-heading font-bold text-slate-900 text-base flex items-center gap-2">
                  <Lock className="w-4 h-4 text-primary" />
                  <span>4. Keine Tracking-Cookies &amp; Werbenetzwerke</span>
                </h4>
                <p className="text-sm text-slate-600">
                  Wir legen höchsten Wert auf Datensparsamkeit: Diese Website setzt <strong className="text-slate-800">keine Tracking-Cookies, Analysetools (wie Google Analytics) oder Werbenetzwerke von Drittanbietern</strong> ein. Es werden keine Benutzerprofile erstellt und kein nutzerübergreifendes Tracking durchgeführt.
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer Bar */}
        <div className="sticky bottom-0 z-10 bg-slate-50 px-6 py-3.5 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>Obazee Clement Reinigung • Frankfurt am Main</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-slate-800 font-heading font-bold transition-colors cursor-pointer"
          >
            Schließen
          </button>
        </div>

      </div>
    </div>
  );
};

export default LegalModal;

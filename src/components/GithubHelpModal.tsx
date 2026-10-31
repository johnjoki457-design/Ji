import React, { useState } from 'react';
import { X, Check, Copy, AlertCircle, ExternalLink, Globe, Terminal, FileCode2 } from 'lucide-react';

interface GithubHelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GithubHelpModal: React.FC<GithubHelpModalProps> = ({ isOpen, onClose }) => {
  const [copiedCode, setCopiedCode] = useState(false);

  if (!isOpen) return null;

  const fixedHtmlCode = `<!DOCTYPE html>
<html lang="en">
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Murrel Fish Videos</title>
<style>
body {
  font-family: Arial, sans-serif;
  text-align: center;
  background: #f0f8f0;
  margin: 0;
  padding: 20px;
}
h2 {
  color: #047857;
  margin-bottom: 16px;
}
.video-container {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  aspect-ratio: 16 / 9;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.15);
  background: #000;
}
iframe {
  width: 100%;
  height: 100%;
  border: none;
}
</style>
</head>
<body>

<h2>Our Murrel Fish Videos</h2>

<div class="video-container">
  <!-- FIXED: Replaced youtu.be link with embed link -->
  <iframe
    src="https://www.youtube.com/embed/s3YFytpSuFQ?rel=0"
    title="Murrel Fish Video"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
  </iframe>
</div>

</body>
</html>`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(fixedHtmlCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  const handleDownloadHtml = () => {
    const blob = new Blob([fixedHtmlCode], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'index.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-emerald-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-gradient-to-r from-emerald-50 to-teal-50">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-xs">
              <Globe className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">How to Open & Run on GitHub</h2>
              <p className="text-xs text-slate-500">Fix for GitHub Pages and broken YouTube iframe</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[75vh] overflow-y-auto space-y-5 text-sm text-slate-700">
          
          {/* Why it was failing explanation */}
          <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200/80">
            <div className="flex items-start gap-2.5">
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-xs uppercase tracking-wide text-amber-900">
                  Why it was failing on GitHub:
                </h3>
                <ul className="mt-1 text-xs text-amber-800 space-y-1 list-disc list-inside">
                  <li>
                    <strong>Broken Link in iframe:</strong> YouTube blocks <code className="bg-amber-100 px-1 py-0.5 rounded font-mono">https://youtu.be/...</code> inside iframes with an <em>X-Frame-Options</em> error. It must be <code className="bg-amber-100 px-1 py-0.5 rounded font-mono">https://www.youtube.com/embed/s3YFytpSuFQ</code>!
                  </li>
                  <li>
                    <strong>GitHub Repository view vs GitHub Pages:</strong> When you open a file on github.com, GitHub displays the source code. To make it open as a website, you need to enable <strong>GitHub Pages</strong>.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Quick Solution 1: Direct Single-File HTML */}
          <div className="p-4 bg-emerald-50/60 rounded-2xl border border-emerald-100">
            <h3 className="font-bold text-xs uppercase tracking-wider text-emerald-900 mb-1 flex items-center gap-1.5">
              <FileCode2 className="w-4 h-4 text-emerald-600" />
              Solution 1: Use Fixed Single-File HTML
            </h3>
            <p className="text-xs text-slate-600 mb-3">
              If you just want your simple single HTML file on GitHub, copy the fixed code below or download it directly:
            </p>

            <div className="flex items-center gap-2 mb-3">
              <button
                onClick={handleCopyCode}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs transition-colors cursor-pointer"
              >
                {copiedCode ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copiedCode ? 'Copied to Clipboard!' : 'Copy Fixed HTML Code'}</span>
              </button>

              <button
                onClick={handleDownloadHtml}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 transition-colors cursor-pointer"
              >
                Download index.html
              </button>
            </div>

            <pre className="text-[11px] font-mono bg-slate-900 text-slate-100 p-3 rounded-xl overflow-x-auto max-h-36">
              {fixedHtmlCode}
            </pre>
          </div>

          {/* Solution 2: Enable GitHub Pages for full app */}
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
            <h3 className="font-bold text-xs uppercase tracking-wider text-slate-800 mb-2 flex items-center gap-1.5">
              <Globe className="w-4 h-4 text-emerald-600" />
              Solution 2: Enable GitHub Pages (3 Steps)
            </h3>
            <ol className="text-xs text-slate-600 space-y-2 list-decimal list-inside">
              <li>Push or upload this repository to your GitHub account.</li>
              <li>Go to your repository on GitHub and click <strong>Settings</strong> &rarr; <strong>Pages</strong> (on left sidebar).</li>
              <li>
                Under <strong>Build and deployment</strong>, select <strong>GitHub Actions</strong> (we already added the automated <code className="bg-slate-200 px-1 py-0.5 rounded font-mono">.github/workflows/deploy.yml</code> workflow for you!).
              </li>
              <li>Your site will be live within 60 seconds at <code className="bg-slate-200 px-1 py-0.5 rounded font-mono">https://&lt;your-username&gt;.github.io/&lt;repo-name&gt;/</code>!</li>
            </ol>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 text-white text-xs font-semibold hover:bg-slate-900 transition-colors cursor-pointer"
          >
            Got it, thanks!
          </button>
        </div>
      </div>
    </div>
  );
};

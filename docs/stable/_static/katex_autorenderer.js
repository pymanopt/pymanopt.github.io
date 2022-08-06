katex_options = {
macros: {"\\manM":   "\\mathcal{M}",
"\\R":      "\\mathbb{R}",
"\\C":      "\\mathbb{C}",
"\\O":      "\\mathrm{O}",
"\\SO":     "\\mathrm{SO}",
"\\U":      "\\mathrm{U}",
"\\E":      "\\mathcal{E}",
"\\Skew":   "\\mathrm{Skew}",
"\\St":     "\\mathrm{St}",
"\\Id":     "\\mathrm{Id}",
"\\set":    "\\{#1\\}",
"\\inner":  "\\langle #1, #2 \\rangle",
"\\opt":    "#1^\\star",
"\\sphere": "\\mathcal{S}",
"\\transp": "#1^\\top",
"\\conj":   "#1^*",
"\\norm":   "\\|#1\\|",
"\\abs":    "|#1|",
"\\parens": "\\left(#1\\right)",
"\\tangent":"\\mathrm{T}_{#1}",
"\\vma":"\\mathbf{a}",
"\\vmb":"\\mathbf{b}",
"\\vmc":"\\mathbf{c}",
"\\vmd":"\\mathbf{d}",
"\\vme":"\\mathbf{e}",
"\\vmf":"\\mathbf{f}",
"\\vmg":"\\mathbf{g}",
"\\vmh":"\\mathbf{h}",
"\\vmi":"\\mathbf{i}",
"\\vmj":"\\mathbf{j}",
"\\vmk":"\\mathbf{k}",
"\\vml":"\\mathbf{l}",
"\\vmm":"\\mathbf{m}",
"\\vmn":"\\mathbf{n}",
"\\vmo":"\\mathbf{o}",
"\\vmp":"\\mathbf{p}",
"\\vmq":"\\mathbf{q}",
"\\vmr":"\\mathbf{r}",
"\\vms":"\\mathbf{s}",
"\\vmt":"\\mathbf{t}",
"\\vmu":"\\mathbf{u}",
"\\vmv":"\\mathbf{v}",
"\\vmw":"\\mathbf{w}",
"\\vmx":"\\mathbf{x}",
"\\vmy":"\\mathbf{y}",
"\\vmz":"\\mathbf{z}",
"\\vmA":"\\mathbf{A}",
"\\vmB":"\\mathbf{B}",
"\\vmC":"\\mathbf{C}",
"\\vmD":"\\mathbf{D}",
"\\vmE":"\\mathbf{E}",
"\\vmF":"\\mathbf{F}",
"\\vmG":"\\mathbf{G}",
"\\vmH":"\\mathbf{H}",
"\\vmI":"\\mathbf{I}",
"\\vmJ":"\\mathbf{J}",
"\\vmK":"\\mathbf{K}",
"\\vmL":"\\mathbf{L}",
"\\vmM":"\\mathbf{M}",
"\\vmN":"\\mathbf{N}",
"\\vmO":"\\mathbf{O}",
"\\vmP":"\\mathbf{P}",
"\\vmQ":"\\mathbf{Q}",
"\\vmR":"\\mathbf{R}",
"\\vmS":"\\mathbf{S}",
"\\vmT":"\\mathbf{T}",
"\\vmU":"\\mathbf{U}",
"\\vmV":"\\mathbf{V}",
"\\vmW":"\\mathbf{W}",
"\\vmX":"\\mathbf{X}",
"\\vmY":"\\mathbf{Y}",
"\\vmZ":"\\mathbf{Z}",
"\\vmOmega":"\\mathbf{\\Omega}",
"\\argmin":"\\mathop{\\operatorname{argmin}}\\limits",
"\\arccosh":"\\operatorname{arccosh}",
"\\dist":"\\operatorname{dist}"},
delimiters: [
        { left: "\\(", right: "\\)", display: false },
        { left: "\\[", right: "\\]", display: true }
        ]
}
document.addEventListener("DOMContentLoaded", function() {
  renderMathInElement(document.body, katex_options);
});

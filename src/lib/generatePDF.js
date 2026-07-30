import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

const PURPLE = [168, 85, 247]
const DARK = [17, 24, 39]
const GRAY = [107, 114, 128]
const LIGHT = [249, 250, 251]
const PURPLE_LIGHT = [237, 233, 254]

export function exportDevisPDF({ client, projet, devis }) {
  const doc = new jsPDF()
  const now = new Date()
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase()
  const devisNum = `DEV-${now.getFullYear().toString().slice(-2)}${String(now.getMonth() + 1).padStart(2, '0')}-${rand}`
  const dateStr = now.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })
  const expiry = new Date(now)
  expiry.setDate(expiry.getDate() + 30)
  const expiryStr = expiry.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })

  // ── Header band ──────────────────────────────────────────
  doc.setFillColor(...PURPLE)
  doc.rect(0, 0, 210, 44, 'F')

  doc.setFont('helvetica', 'bold')
  doc.setFontSize(24)
  doc.setTextColor(255, 255, 255)
  doc.text('SOZ-DEV', 14, 22)

  doc.setFont('helvetica', 'normal')
  doc.setFontSize(9)
  doc.setTextColor(...PURPLE_LIGHT)
  doc.text('Développeur indépendant  ·  soz-dev.com  ·  sofyan.devpro@gmail.com', 14, 31)

  doc.setFont('helvetica', 'bold')
  doc.setFontSize(13)
  doc.setTextColor(255, 255, 255)
  doc.text('DEVIS', 196, 18, { align: 'right' })

  doc.setFont('helvetica', 'normal')
  doc.setFontSize(8)
  doc.setTextColor(...PURPLE_LIGHT)
  doc.text(devisNum, 196, 25, { align: 'right' })
  doc.text(`Émis le ${dateStr}`, 196, 31, { align: 'right' })
  doc.text(`Valable jusqu\'au ${expiryStr}`, 196, 37, { align: 'right' })

  // ── Client & Projet ───────────────────────────────────────
  let cy = 57
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(8)
  doc.setTextColor(...GRAY)
  doc.text('CLIENT', 14, cy)
  doc.text('PROJET', 120, cy)
  cy += 7

  doc.setFont('helvetica', 'bold')
  doc.setFontSize(11)
  doc.setTextColor(...DARK)
  doc.text(client.nom || '', 14, cy)
  doc.text(projet.nom || '', 120, cy)
  cy += 6

  doc.setFont('helvetica', 'normal')
  doc.setFontSize(9)
  doc.setTextColor(...GRAY)
  if (client.entreprise) { doc.text(client.entreprise, 14, cy); cy += 5 }
  doc.text(client.email || '', 14, cy)
  if (devis.lignes[0]) doc.text(devis.lignes[0].label, 120, cy)
  cy += 5
  if (client.telephone) { doc.text(client.telephone, 14, cy); cy += 5 }

  // ── Separator ────────────────────────────────────────────
  doc.setDrawColor(220, 220, 220)
  doc.line(14, cy + 5, 196, cy + 5)

  // ── Items table ───────────────────────────────────────────
  autoTable(doc, {
    startY: cy + 12,
    head: [['Description', 'Montant HT']],
    body: devis.lignes.map(l => [l.label, `${l.montant.toLocaleString('fr-FR')} €`]),
    foot: [
      ['TOTAL HT', `${devis.sousTotal.toLocaleString('fr-FR')} €`],
      ['Acompte 30 % (à la signature)', `${devis.acompte.toLocaleString('fr-FR')} €`],
      ['Solde à la livraison', `${devis.solde.toLocaleString('fr-FR')} €`],
    ],
    theme: 'striped',
    headStyles: { fillColor: PURPLE, textColor: [255, 255, 255], fontSize: 10, fontStyle: 'bold', cellPadding: 6 },
    footStyles: { fillColor: LIGHT, textColor: DARK, fontSize: 9, fontStyle: 'bold', cellPadding: 5 },
    bodyStyles: { fontSize: 9, cellPadding: 5 },
    columnStyles: { 1: { halign: 'right', cellWidth: 44 } },
    alternateRowStyles: { fillColor: [252, 252, 255] },
  })

  const fy = doc.lastAutoTable.finalY + 8

  if (devis.maintenance) {
    doc.setFontSize(8.5)
    doc.setTextColor(...GRAY)
    doc.text(`Option : Maintenance mensuelle ${devis.maintenance}€/mois — non incluse dans ce devis, disponible sur demande.`, 14, fy)
  }

  // ── Conditions ────────────────────────────────────────────
  const bY = fy + (devis.maintenance ? 14 : 4)
  doc.setFillColor(...LIGHT)
  doc.roundedRect(14, bY, 182, 38, 2, 2, 'F')
  doc.setDrawColor(220, 220, 220)
  doc.roundedRect(14, bY, 182, 38, 2, 2, 'S')

  doc.setFont('helvetica', 'bold')
  doc.setFontSize(8.5)
  doc.setTextColor(...DARK)
  doc.text('CONDITIONS GÉNÉRALES', 20, bY + 8)

  doc.setFont('helvetica', 'normal')
  doc.setFontSize(8)
  doc.setTextColor(...GRAY)
  const col1 = ['• Acompte de 30% requis pour démarrer le projet', '• Délai de validité : 30 jours à compter de la date d\'émission', '• 1 mois de support inclus après livraison']
  const col2 = ['• Prix HT — non soumis à TVA (auto-entrepreneur)', '• Paiement par virement bancaire', '• Code source livré à la réception du solde']
  col1.forEach((line, i) => doc.text(line, 20, bY + 16 + i * 7))
  col2.forEach((line, i) => doc.text(line, 112, bY + 16 + i * 7))

  // ── Signature ─────────────────────────────────────────────
  const sY = bY + 48
  if (sY < 245) {
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(9)
    doc.setTextColor(...DARK)
    doc.text('Bon pour accord — Signature client :', 14, sY)
    doc.setDrawColor(180, 180, 180)
    doc.line(14, sY + 22, 110, sY + 22)
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(8)
    doc.setTextColor(...GRAY)
    doc.text('Date et signature précédés de « Bon pour accord »', 14, sY + 28)
  }

  // ── Footer ────────────────────────────────────────────────
  const pageCount = doc.internal.getNumberOfPages()
  doc.setPage(pageCount)
  doc.setFillColor(...PURPLE)
  doc.rect(0, 284, 210, 13, 'F')
  doc.setFontSize(8)
  doc.setTextColor(255, 255, 255)
  doc.text(
    'Sofyan Zarouri  ·  Développeur indépendant  ·  soz-dev.com  ·  sofyan.devpro@gmail.com',
    105, 292, { align: 'center' }
  )

  const fileName = `${devisNum}-${(client.nom || 'client').replace(/\s+/g, '-').toLowerCase()}.pdf`
  doc.save(fileName)
}

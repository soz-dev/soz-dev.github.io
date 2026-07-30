import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

const P   = [168, 85, 247]   // purple
const PD  = [126, 34, 206]   // purple dark
const PL  = [245, 243, 255]  // purple light bg
const PLB = [237, 233, 254]  // purple light border
const CY  = [6, 182, 212]    // cyan
const DK  = [17, 24, 39]     // dark text
const GR  = [107, 114, 128]  // gray
const WH  = [255, 255, 255]
const BG  = [249, 250, 251]
const BD  = [229, 231, 235]  // border

// Fix thousand separator — jsPDF ne gère pas l'espace insécable
function fmt(n) {
  return String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, '\u202f') + ' \u20ac'
}

export function exportDevisPDF({ client, projet, devis }) {
  const doc = new jsPDF({ unit: 'mm', format: 'a4' })
  const W = 210
  const now = new Date()
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase()
  const devisNum = `DEV-${now.getFullYear().toString().slice(-2)}${String(now.getMonth() + 1).padStart(2, '0')}-${rand}`
  const dateStr = now.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' })
  const expiry = new Date(now)
  expiry.setDate(expiry.getDate() + 30)
  const expiryStr = expiry.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' })

  // ── Header ────────────────────────────────────────────────
  // Bande principale
  doc.setFillColor(...P)
  doc.rect(0, 0, W, 44, 'F')
  // Bande secondaire plus foncée en bas du header
  doc.setFillColor(...PD)
  doc.rect(0, 34, W, 10, 'F')
  // Accent cyan (fine ligne décorative)
  doc.setFillColor(...CY)
  doc.rect(0, 43.5, W, 0.8, 'F')

  // Logo
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(26)
  doc.setTextColor(...WH)
  doc.text('SOZ-DEV', 14, 21)

  // Tagline
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(8.5)
  doc.setTextColor(220, 200, 255)
  doc.text('Développeur indépendant  ·  soz-dev.com  ·  sofyan.devpro@gmail.com', 14, 30)

  // DEVIS label
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(20)
  doc.setTextColor(...WH)
  doc.text('DEVIS', W - 14, 19, { align: 'right' })

  // Numéro & dates
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(8.5)
  doc.setTextColor(220, 200, 255)
  doc.text(devisNum, W - 14, 26.5, { align: 'right' })
  doc.text(`Émis le ${dateStr}`, W - 14, 32.5, { align: 'right' })
  doc.text(`Valable jusqu'au ${expiryStr}`, W - 14, 38.5, { align: 'right' })

  // ── Bloc client / projet ──────────────────────────────────
  let y = 58

  // Labels section
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(7)
  doc.setTextColor(...GR)
  doc.text('CLIENT', 14, y)
  doc.text('PROJET', 115, y)
  y += 6

  // Noms
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(13)
  doc.setTextColor(...DK)
  doc.text(client.nom || '', 14, y)
  doc.text(projet.nom || 'Nouveau projet', 115, y)
  y += 5.5

  // Infos client
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(9)
  doc.setTextColor(...GR)
  if (client.entreprise) {
    doc.text(client.entreprise, 14, y)
    y += 4.5
  }
  const rowY = y
  if (client.email) doc.text(client.email, 14, rowY)
  // Type projet côté droit
  if (devis.lignes[0]) {
    doc.setTextColor(148, 103, 220)
    doc.text(devis.lignes[0].label, 115, rowY)
    doc.setTextColor(...GR)
  }
  y = rowY + 4.5
  if (client.telephone) doc.text(client.telephone, 14, y)

  // Séparateur
  const sepY = Math.max(y + 7, 86)
  doc.setDrawColor(...BD)
  doc.setLineWidth(0.25)
  doc.line(14, sepY, W - 14, sepY)

  // ── Tableau des prestations ───────────────────────────────
  autoTable(doc, {
    startY: sepY + 5,
    head: [['Description', 'Montant HT']],
    body: devis.lignes.map(l => [l.label, fmt(l.montant)]),
    theme: 'plain',
    headStyles: {
      fillColor: P,
      textColor: WH,
      fontSize: 9.5,
      fontStyle: 'bold',
      cellPadding: { top: 6, bottom: 6, left: 8, right: 8 },
    },
    bodyStyles: {
      fontSize: 9,
      textColor: DK,
      cellPadding: { top: 5.5, bottom: 5.5, left: 8, right: 8 },
      lineColor: [240, 235, 255],
      lineWidth: 0.2,
    },
    alternateRowStyles: { fillColor: [251, 249, 255] },
    columnStyles: {
      1: { halign: 'right', cellWidth: 44, fontStyle: 'bold' },
    },
    tableLineColor: BD,
    tableLineWidth: 0.2,
  })

  const tEnd = doc.lastAutoTable.finalY

  // ── Bloc total ────────────────────────────────────────────
  const bx = W - 14 - 88
  const by = tEnd + 7
  const bh = devis.maintenance ? 42 : 35

  // Fond clair
  doc.setFillColor(...PL)
  doc.rect(bx, by, 88, bh, 'F')

  // Accent gauche violet
  doc.setFillColor(...P)
  doc.rect(bx, by, 3, bh, 'F')

  // Ligne TOTAL HT
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(10.5)
  doc.setTextColor(...DK)
  doc.text('TOTAL HT', bx + 8, by + 9)
  doc.setTextColor(...P)
  doc.setFontSize(12)
  doc.text(fmt(devis.sousTotal), bx + 88 - 6, by + 9, { align: 'right' })

  // Séparateur interne
  doc.setDrawColor(...PLB)
  doc.setLineWidth(0.3)
  doc.line(bx + 6, by + 12.5, bx + 82, by + 12.5)

  // Acompte
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(8.5)
  doc.setTextColor(...GR)
  doc.text('Acompte 30 % (à la signature)', bx + 8, by + 20)
  doc.setFont('helvetica', 'bold')
  doc.setTextColor(...DK)
  doc.text(fmt(devis.acompte), bx + 88 - 6, by + 20, { align: 'right' })

  // Solde
  doc.setFont('helvetica', 'normal')
  doc.setTextColor(...GR)
  doc.text('Solde à la livraison', bx + 8, by + 27)
  doc.setFont('helvetica', 'bold')
  doc.setTextColor(...DK)
  doc.text(fmt(devis.solde), bx + 88 - 6, by + 27, { align: 'right' })

  // Option maintenance
  if (devis.maintenance) {
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(7.5)
    doc.setTextColor(148, 103, 220)
    doc.text(`+ Maintenance ${devis.maintenance} €/mois (option)`, bx + 8, by + 36)
  }

  // ── Conditions ────────────────────────────────────────────
  const cy2 = by + bh + 10
  doc.setFillColor(...BG)
  doc.setDrawColor(...BD)
  doc.setLineWidth(0.2)
  doc.rect(14, cy2, W - 28, 35, 'FD')

  // Accent gauche violet
  doc.setFillColor(...P)
  doc.rect(14, cy2, 3, 35, 'F')

  doc.setFont('helvetica', 'bold')
  doc.setFontSize(7.5)
  doc.setTextColor(...DK)
  doc.text('CONDITIONS GÉNÉRALES', 22, cy2 + 7)

  doc.setFont('helvetica', 'normal')
  doc.setFontSize(7.5)
  doc.setTextColor(...GR)

  const c1 = [
    '• Acompte de 30% requis pour démarrer',
    '• Délai de validité : 30 jours',
    '• 1 mois de support inclus après livraison',
  ]
  const c2 = [
    '• Prix HT — non soumis à TVA (auto-entrepreneur)',
    '• Paiement par virement bancaire',
    '• Code source livré à réception du solde',
  ]
  c1.forEach((line, i) => doc.text(line, 22, cy2 + 14 + i * 6.5))
  c2.forEach((line, i) => doc.text(line, W / 2 + 5, cy2 + 14 + i * 6.5))

  // ── Signature ─────────────────────────────────────────────
  const sY = cy2 + 44
  if (sY < 246) {
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(8.5)
    doc.setTextColor(...DK)
    doc.text('Bon pour accord :', 14, sY)
    doc.setDrawColor(...BD)
    doc.setLineWidth(0.3)
    doc.line(14, sY + 18, 105, sY + 18)
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(7.5)
    doc.setTextColor(...GR)
    doc.text('Date et signature précédés de « Bon pour accord »', 14, sY + 24)
  }

  // ── Footer ────────────────────────────────────────────────
  const pages = doc.internal.getNumberOfPages()
  doc.setPage(pages)
  doc.setFillColor(...P)
  doc.rect(0, 284, W, 13, 'F')
  doc.setFillColor(...CY)
  doc.rect(0, 284, W, 0.7, 'F')
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(7.5)
  doc.setTextColor(...WH)
  doc.text(
    'Sofyan Zarouri  ·  Développeur indépendant  ·  soz-dev.com  ·  sofyan.devpro@gmail.com',
    W / 2, 292, { align: 'center' }
  )

  doc.save(`${devisNum}-${(client.nom || 'client').replace(/\s+/g, '-').toLowerCase()}.pdf`)
}

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

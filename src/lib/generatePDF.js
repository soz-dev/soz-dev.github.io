import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import { fmt } from './formatUtils'

// Palette identique au site
const DKK = [3,   7,  18]   // #030712 fond dark site
const DK2 = [15, 23,  42]   // #0f172a. slate-900
const P   = [168, 85, 247]  // #a855f7. purple-500
const CY  = [6, 182, 212]   // #06b6d4. cyan-500
const WH  = [255, 255, 255]
const T1  = [17,  24,  39]  // #111827. gray-900
const T2  = [107, 114, 128] // #6b7280. gray-500
const T3  = [148, 163, 184] // #94a3b8. slate-400
const T4  = [156, 163, 175] // #9ca3af. gray-400
const BG1 = [249, 250, 251] // #f9fafb. gray-50
const BD  = [229, 231, 235] // #e5e7eb. gray-200

// fmt from formatUtils. PDF accepts Unicode euro

export function exportDevisPDF({ client, projet, devis }) {
  const doc = new jsPDF({ unit: 'mm', format: 'a4' })
  const W = 210
  const now = new Date()
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase()
  const devisNum = `DEV-${now.getFullYear().toString().slice(-2)}${String(now.getMonth() + 1).padStart(2, '0')}-${rand}`
  const dateStr   = now.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' })
  const expiry    = new Date(now)
  expiry.setDate(expiry.getDate() + 30)
  const expiryStr = expiry.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' })

  // HEADER
  doc.setFillColor(...DKK)
  doc.rect(0, 0, W, 46, 'F')
  doc.setFillColor(...P)
  doc.rect(0, 0, 4, 45.3, 'F')
  doc.setFillColor(...CY)
  doc.rect(0, 45.3, W, 0.7, 'F')

  doc.setFont('helvetica', 'bold')
  doc.setFontSize(27)
  doc.setTextColor(...P)
  doc.text('SOZ-DEV', 17, 22)

  doc.setFont('helvetica', 'normal')
  doc.setFontSize(8)
  doc.setTextColor(...T3)
  doc.text('Developpeur independant .  soz-dev.com .  sofyan.devpro@gmail.com', 17, 31)

  doc.setFont('helvetica', 'bold')
  doc.setFontSize(22)
  doc.setTextColor(...WH)
  doc.text('DEVIS', W - 14, 19, { align: 'right' })

  doc.setFont('helvetica', 'bold')
  doc.setFontSize(8.5)
  doc.setTextColor(...P)
  doc.text(devisNum, W - 14, 27.5, { align: 'right' })

  doc.setFont('helvetica', 'normal')
  doc.setFontSize(8)
  doc.setTextColor(...T3)
  doc.text('Emis le ' + dateStr, W - 14, 34.5, { align: 'right' })
  doc.text("Valable jusqu'au " + expiryStr, W - 14, 41, { align: 'right' })

  // CLIENT / PROJET
  let y = 62
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(6.5)
  doc.setTextColor(...T4)
  doc.text('CLIENT', 14, y)
  doc.text('PROJET', 115, y)
  y += 5.5

  doc.setFont('helvetica', 'bold')
  doc.setFontSize(13)
  doc.setTextColor(...T1)
  doc.text(client.nom || '', 14, y)
  doc.text(projet.nom || 'Nouveau projet', 115, y)
  y += 5

  doc.setFont('helvetica', 'normal')
  doc.setFontSize(9)
  doc.setTextColor(...T2)
  if (client.entreprise) { doc.text(client.entreprise, 14, y); y += 4.5 }

  const rowY = y
  if (client.email) doc.text(client.email, 14, rowY)
  if (devis.lignes[0]) {
    doc.setTextColor(...P)
    doc.setFontSize(8.5)
    doc.text(devis.lignes[0].label, 115, rowY)
    doc.setTextColor(...T2)
    doc.setFontSize(9)
  }
  y = rowY + 4.5
  if (client.telephone) doc.text(client.telephone, 14, y)

  const sepY = Math.max(y + 8, 90)
  doc.setDrawColor(...BD)
  doc.setLineWidth(0.25)
  doc.line(14, sepY, W - 14, sepY)

  // TABLE
  autoTable(doc, {
    startY: sepY + 5,
    head: [['Description', 'Montant HT']],
    body: devis.lignes.map(l => [l.label, fmt(l.montant)]),
    theme: 'plain',
    headStyles: {
      fillColor: DKK,
      textColor: WH,
      fontSize: 9,
      fontStyle: 'bold',
      cellPadding: { top: 6, bottom: 6, left: 8, right: 8 },
    },
    bodyStyles: {
      fontSize: 9,
      textColor: T1,
      cellPadding: { top: 5.5, bottom: 5.5, left: 8, right: 8 },
      lineColor: BD,
      lineWidth: 0.2,
    },
    alternateRowStyles: { fillColor: BG1 },
    columnStyles: {
      1: { halign: 'right', cellWidth: 44, fontStyle: 'bold', textColor: P },
    },
    tableLineColor: BD,
    tableLineWidth: 0.2,
  })

  const tEnd = doc.lastAutoTable.finalY

  // BLOC TOTAL (fond sombre)
  const bx = W - 14 - 90
  const by = tEnd + 8
  const bh = devis.maintenance ? 46 : 38

  doc.setFillColor(...DKK)
  doc.rect(bx, by, 90, bh, 'F')
  doc.setFillColor(...P)
  doc.rect(bx, by, 3, bh, 'F')

  doc.setFont('helvetica', 'bold')
  doc.setFontSize(10)
  doc.setTextColor(...WH)
  doc.text('TOTAL HT', bx + 9, by + 9)
  doc.setFontSize(13)
  doc.setTextColor(...CY)
  doc.text(fmt(devis.sousTotal), bx + 90 - 8, by + 9, { align: 'right' })

  doc.setDrawColor(40, 55, 80)
  doc.setLineWidth(0.3)
  doc.line(bx + 7, by + 12.5, bx + 83, by + 12.5)

  doc.setFont('helvetica', 'normal')
  doc.setFontSize(8.5)
  doc.setTextColor(...T3)
  doc.text('Acompte 30 % (a la signature)', bx + 9, by + 21)
  doc.setFont('helvetica', 'bold')
  doc.setTextColor(...WH)
  doc.text(fmt(devis.acompte), bx + 90 - 8, by + 21, { align: 'right' })

  doc.setFont('helvetica', 'normal')
  doc.setTextColor(...T3)
  doc.text('Solde a la livraison', bx + 9, by + 29)
  doc.setFont('helvetica', 'bold')
  doc.setTextColor(...WH)
  doc.text(fmt(devis.solde), bx + 90 - 8, by + 29, { align: 'right' })

  if (devis.maintenance) {
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(7.5)
    doc.setTextColor(...P)
    doc.text('+ Maintenance ' + devis.maintenance + ' EUR/mois (option)', bx + 9, by + 39)
  }

  // INCLUS
  const inclus = devis.inclus || []
  let nextY = by + bh + 6

  if (inclus.length > 0) {
    const rows = []
    for (let i = 0; i < inclus.length; i += 4) rows.push(inclus.slice(i, i + 4))
    const inclH = rows.length * 6.5 + 10

    doc.setFillColor(2, 18, 10)
    doc.rect(14, nextY, W - 28, inclH, 'F')
    doc.setFillColor(16, 185, 129)
    doc.rect(14, nextY, 3, inclH, 'F')

    doc.setFont('helvetica', 'bold')
    doc.setFontSize(6.5)
    doc.setTextColor(52, 211, 153)
    doc.text('INCLUS', 22, nextY + 5.5)

    doc.setFont('helvetica', 'normal')
    doc.setFontSize(7.5)
    doc.setTextColor(167, 243, 208)
    rows.forEach((row, i) => {
      doc.text('+  ' + row.join(' .  '), 22, nextY + 5.5 + (i + 1) * 6.5)
    })
    nextY += inclH + 5
  }

  // CONDITIONS
  doc.setFillColor(...DK2)
  doc.rect(14, nextY, W - 28, 35, 'F')
  doc.setFillColor(...P)
  doc.rect(14, nextY, 3, 35, 'F')

  doc.setFont('helvetica', 'bold')
  doc.setFontSize(7.5)
  doc.setTextColor(...WH)
  doc.text('CONDITIONS GENERALES', 22, nextY + 7)

  doc.setFont('helvetica', 'normal')
  doc.setFontSize(7.5)
  doc.setTextColor(...T3)
  const c1 = [
    '- Acompte de 30% requis pour demarrer',
    '- Delai de validite : 30 jours',
    '- 1 mois de support inclus apres livraison',
  ]
  const c2 = [
    '- Prix HT - non soumis a TVA (auto-entrepreneur)',
    '- Paiement par virement bancaire',
    '- Code source livre a reception du solde',
  ]
  c1.forEach((line, i) => doc.text(line, 22, nextY + 14 + i * 6.5))
  c2.forEach((line, i) => doc.text(line, W / 2 + 5, nextY + 14 + i * 6.5))
  nextY += 40

  // SIGNATURE
  if (nextY < 248) {
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(8.5)
    doc.setTextColor(...T1)
    doc.text('Bon pour accord :', 14, nextY)
    doc.setDrawColor(...BD)
    doc.setLineWidth(0.3)
    doc.line(14, nextY + 18, 105, nextY + 18)
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(7.5)
    doc.setTextColor(...T2)
    doc.text('Date et signature precedees de "Bon pour accord"', 14, nextY + 24)
  }

  // FOOTER
  const pages = doc.internal.getNumberOfPages()
  doc.setPage(pages)
  doc.setFillColor(...DKK)
  doc.rect(0, 284, W, 13, 'F')
  doc.setFillColor(...CY)
  doc.rect(0, 284, W, 0.7, 'F')
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(7.5)
  doc.setTextColor(...T3)
  doc.text(
    'Sofyan Zarouri .  Developpeur independant .  soz-dev.com .  sofyan.devpro@gmail.com',
    W / 2, 292, { align: 'center' }
  )

  doc.save(`${devisNum}-${(client.nom || 'client').replace(/\s+/g, '-').toLowerCase()}.pdf`)
}

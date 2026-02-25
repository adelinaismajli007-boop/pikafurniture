/**
 * ============================================================
 *  PIKA FURNITURE — PRODUCT DATA
 *  THIS is the only file you need to edit to manage products.
 *
 *  WORKFLOW:
 *  1. Add / edit / remove products in this file
 *  2. Select all (Ctrl+A / Cmd+A) and copy
 *  3. Open products.html
 *  4. Find the section marked "PRODUCT DATA START"
 *  5. Select everything from that comment down to "PRODUCT DATA END"
 *  6. Paste — this replaces the old data with your new version
 *  7. Save products.html — done!
 *
 *  TO ADD A PRODUCT:
 *  Copy the template at the bottom of this file, paste it before
 *  the closing "];", fill in your details, give it the next id.
 *
 *  FIELDS:
 *   id          — unique number, increment from last one
 *   cat         — category: 'Living Room' | 'Bedroom' | 'Dining' | 'Office' | 'Outdoor'
 *   name        — product name
 *   price       — display price string e.g. 'From $1,200'
 *   material    — main material(s)
 *   dimensions  — size string e.g. 'W200 × D90 × H75cm'
 *   finish      — finish type
 *   weight      — weight string e.g. '42kg'
 *   lead        — lead time string e.g. '4–6 weeks'
 *   desc        — full product description (shown on detail page)
 *   features    — array of bullet-point feature strings
 *   color1      — hex background gradient start (placeholder image)
 *   color2      — hex background gradient end
 *   svgPath     — SVG illustration string (leave empty `` for plain gradient)
 * ============================================================
 */

const PRODUCTS = [
  {
    id: 1,
    cat: 'Living Room',
    name: 'Arco Sofa',
    price: 'From $2,400',
    material: 'Linen / Walnut',
    dimensions: 'W220 × D90 × H78cm',
    finish: 'Natural',
    weight: '85kg',
    lead: '6–8 weeks',
    desc: 'The Arco Sofa is a masterwork of restrained elegance. Its wide three-seater frame is built from solid walnut with hand-crafted mortise and tenon joints, upholstered in a natural linen that softens with age. The deep seat cushions use high-resilience foam wrapped in wool batting for comfort that lasts years, not months.',
    features: [
      'Solid walnut frame with hand-finished joinery',
      'Deep seat cushions with wool batting wrap',
      'Removable and dry-cleanable linen covers',
      'Available in 6 upholstery options',
      'Also available in 2-seater and L-shape configurations',
      '10-year structural warranty'
    ],
    color1: '#d4cfc6',
    color2: '#bfb9ae',
    svgPath: `<rect x="20" y="55" width="160" height="10" rx="2" fill="#888"/><rect x="20" y="65" width="10" height="40" rx="2" fill="#888"/><rect x="170" y="65" width="10" height="40" rx="2" fill="#888"/><rect x="45" y="65" width="10" height="30" rx="2" fill="#888"/><rect x="145" y="65" width="10" height="30" rx="2" fill="#888"/><rect x="20" y="30" width="160" height="25" rx="3" fill="#666"/><rect x="15" y="25" width="10" height="30" rx="2" fill="#777"/><rect x="175" y="25" width="10" height="30" rx="2" fill="#777"/>`
  },
  {
    id: 2,
    cat: 'Dining',
    name: 'Mesa Dining Table',
    price: 'From $1,850',
    material: 'Solid Oak',
    dimensions: 'W200 × D90 × H75cm',
    finish: 'Oiled',
    weight: '68kg',
    lead: '4–6 weeks',
    desc: 'The Mesa Dining Table is crafted from a single continuous slab of solid European oak, oil-finished to enhance the natural grain. The tapered steel hairpin legs provide structural integrity without visual weight, making it feel light despite its generous proportions. Seats up to 8 comfortably.',
    features: [
      'Single-slab solid European oak top',
      'Hand-applied oil finish for easy maintenance',
      'Powder-coated hairpin steel legs',
      'Available in 160cm, 180cm, and 220cm lengths',
      'Also available with trestle base',
      'Matching bench available'
    ],
    color1: '#c8b99a',
    color2: '#b5a589',
    svgPath: `<rect x="15" y="60" width="170" height="12" rx="2" fill="#888"/><rect x="25" y="72" width="8" height="50" rx="2" fill="#888"/><rect x="167" y="72" width="8" height="50" rx="2" fill="#888"/><rect x="60" y="72" width="6" height="50" rx="2" fill="#888"/><rect x="128" y="72" width="6" height="50" rx="2" fill="#888"/>`
  },
  {
    id: 3,
    cat: 'Bedroom',
    name: 'Lune Bed Frame',
    price: 'From $3,100',
    material: 'Beech / Brass',
    dimensions: 'W160 × L210 × H100cm',
    finish: 'Matte',
    weight: '72kg',
    lead: '6–10 weeks',
    desc: 'The Lune Bed Frame pairs a fully upholstered headboard with a slim beech wood base accented with satin brass detailing. The headboard\'s generous height creates a dramatic focal point while its padded surface offers practical comfort for reading. Available in Queen and King sizes with a choice of eight premium fabrics.',
    features: [
      'Fully upholstered headboard — 8 fabric options',
      'Solid beech slat base for mattress support',
      'Satin brass accent rail and feet',
      'No box spring required',
      'Optional under-bed storage drawer system',
      'Available in EU Queen (160×200) and King (180×200)'
    ],
    color1: '#d8d3cc',
    color2: '#c5bfb7',
    svgPath: `<rect x="20" y="70" width="160" height="45" rx="3" fill="#666"/><rect x="20" y="45" width="160" height="28" rx="4" fill="#555"/><rect x="22" y="115" width="14" height="20" rx="2" fill="#888"/><rect x="164" y="115" width="14" height="20" rx="2" fill="#888"/><rect x="30" y="50" width="5" height="5" rx="1" fill="#aaa"/><rect x="165" y="50" width="5" height="5" rx="1" fill="#aaa"/>`
  },
  {
    id: 4,
    cat: 'Office',
    name: 'Strato Desk',
    price: 'From $1,200',
    material: 'Steel / Birch',
    dimensions: 'W160 × D70 × H75cm',
    finish: 'Powder-coated',
    weight: '38kg',
    lead: '3–5 weeks',
    desc: 'The Strato Desk is designed for people who work seriously. The birch plywood top — void-free and sanded to a smooth matte finish — sits on powder-coated steel legs engineered for zero flex. A discrete cable tray runs below the surface, keeping your workspace clean. The optional monitor shelf is integrated, not bolted on.',
    features: [
      'Birch plywood top (18mm void-free)',
      'Powder-coated tubular steel frame',
      'Built-in under-desk cable management tray',
      'Integrated monitor shelf option',
      'Available in black, white and raw steel frames',
      'Optional matching filing cabinet'
    ],
    color1: '#d0cec8',
    color2: '#bebcb6',
    svgPath: `<rect x="15" y="65" width="170" height="10" rx="2" fill="#888"/><rect x="20" y="75" width="6" height="55" rx="2" fill="#888"/><rect x="174" y="75" width="6" height="55" rx="2" fill="#888"/><rect x="22" y="50" width="30" height="15" rx="1" fill="#777"/><rect x="60" y="55" width="60" height="10" rx="1" fill="#777"/>`
  },
  {
    id: 5,
    cat: 'Living Room',
    name: 'Oslo Armchair',
    price: 'From $980',
    material: 'Boucle / Oak',
    dimensions: 'W75 × D80 × H82cm',
    finish: 'Natural',
    weight: '24kg',
    lead: '4–6 weeks',
    desc: 'Compact in footprint but generous in comfort, the Oslo Armchair features a deep-set boucle upholstered seat on a solid oak frame. Its slightly reclined back angle is designed for extended sitting without strain. The perfect reading chair or accent piece, available in four fabric textures and two frame stains.',
    features: [
      'Solid oak frame, natural or smoked finish',
      'Deep boucle seat with high-density foam core',
      '4 fabric options (boucle, velvet, linen, wool)',
      'Angled back for ergonomic seated comfort',
      'Matching ottoman available',
      'Machine-washable seat cover option'
    ],
    color1: '#e0dbd2',
    color2: '#d0cab9',
    svgPath: `<rect x="50" y="60" width="100" height="10" rx="2" fill="#888"/><rect x="50" y="70" width="8" height="40" rx="2" fill="#888"/><rect x="142" y="70" width="8" height="40" rx="2" fill="#888"/><rect x="45" y="35" width="110" height="28" rx="3" fill="#666"/><rect x="38" y="38" width="8" height="38" rx="2" fill="#777"/><rect x="154" y="38" width="8" height="38" rx="2" fill="#777"/>`
  },
  {
    id: 6,
    cat: 'Outdoor',
    name: 'Teak Lounge Set',
    price: 'From $2,200',
    material: 'Reclaimed Teak',
    dimensions: 'Sofa: W180 × D80 × H70cm',
    finish: 'Natural Oil',
    weight: '110kg',
    lead: '5–7 weeks',
    desc: 'Our Teak Lounge Set is built from responsibly reclaimed teak — every piece has earned its character. The weathered grey patina develops naturally over time, or can be maintained with teak oil for a warmer tone. Cushions are made with UV-stable, water-resistant Sunbrella® fabric in six colourways.',
    features: [
      'Reclaimed FSC-certified teak construction',
      'Natural grey patina or oiled finish option',
      'Sunbrella® UV-stable cushion covers',
      'All-weather stainless steel hardware',
      '3-piece set: sofa, armchair, side table',
      'Stackable chairs for easy storage'
    ],
    color1: '#c4b99e',
    color2: '#b5a88e',
    svgPath: `<rect x="20" y="60" width="160" height="8" rx="2" fill="#888"/><rect x="20" y="68" width="8" height="35" rx="2" fill="#888"/><rect x="172" y="68" width="8" height="35" rx="2" fill="#888"/><rect x="20" y="35" width="160" height="25" rx="3" fill="#666"/><path d="M20 60 Q100 48 180 60" stroke="#777" stroke-width="2" fill="none"/>`
  },
  {
    id: 7,
    cat: 'Dining',
    name: 'Nido Chair',
    price: 'From $420',
    material: 'Ash Wood / Cane',
    dimensions: 'W48 × D52 × H85cm',
    finish: 'Smoked',
    weight: '6kg',
    lead: '3–4 weeks',
    desc: 'The Nido Chair brings warmth to any dining space with its handwoven cane back and smoked ash frame. Lightweight but sturdy, it stacks easily and pairs well with any of our dining tables. Each cane panel is hand-woven by skilled artisans, making every chair uniquely its own.',
    features: [
      'Solid smoked ash or natural ash frame',
      'Hand-woven natural cane back panel',
      'Ergonomically shaped saddle seat',
      'Stackable (up to 6 chairs)',
      'Sold individually or in sets of 2, 4, 6',
      'Optional seat cushion available'
    ],
    color1: '#ccc4b4',
    color2: '#bbb2a2',
    svgPath: `<rect x="65" y="70" width="70" height="8" rx="2" fill="#888"/><rect x="65" y="78" width="7" height="45" rx="2" fill="#888"/><rect x="128" y="78" width="7" height="45" rx="2" fill="#888"/><rect x="65" y="30" width="70" height="40" rx="3" fill="#777"/><rect x="75" y="38" width="50" height="24" rx="2" fill="#999" fill-opacity="0.4"/><rect x="65" y="15" width="7" height="20" rx="2" fill="#888"/><rect x="128" y="15" width="7" height="20" rx="2" fill="#888"/>`
  },
  {
    id: 8,
    cat: 'Bedroom',
    name: 'Kalo Wardrobe',
    price: 'From $2,600',
    material: 'MDF / Walnut Veneer',
    dimensions: 'W180 × D55 × H220cm',
    finish: 'Matt Black',
    weight: '145kg',
    lead: '8–10 weeks',
    desc: 'The Kalo Wardrobe combines the warmth of walnut veneer with a matt black frame for a result that feels both luxurious and quietly modern. Its two push-to-open doors swing open to reveal a fully customizable interior — hanging space, shelves, and drawers can be arranged to suit your specific needs.',
    features: [
      'Walnut veneer on MDF carcass',
      'Push-to-open mechanism — no handles needed',
      'Interior LED strip lighting (warm white)',
      'Fully modular interior arrangement',
      'Integrated soft-close hinges',
      'White glove delivery and installation service available'
    ],
    color1: '#c8c5c0',
    color2: '#b8b5b0',
    svgPath: `<rect x="30" y="20" width="140" height="170" rx="3" fill="#666"/><line x1="100" y1="20" x2="100" y2="190" stroke="#888" stroke-width="2"/><rect x="94" y="100" width="12" height="4" rx="2" fill="#aaa"/><rect x="30" y="190" width="140" height="10" rx="2" fill="#555"/><rect x="38" y="200" width="8" height="18" rx="2" fill="#888"/><rect x="154" y="200" width="8" height="18" rx="2" fill="#888"/>`
  },
  {
    id: 9,
    cat: 'Living Room',
    name: 'Drift Coffee Table',
    price: 'From $740',
    material: 'Marble / Blackened Steel',
    dimensions: 'W120 × D60 × H38cm',
    finish: 'Honed',
    weight: '42kg',
    lead: '4–6 weeks',
    desc: 'Honed Carrara marble sits atop a hand-formed blackened steel base in a composition that feels both weighty and refined. The honed finish is matte and tactile, resistant to fingerprints, and more forgiving than polished surfaces. A piece that anchors a room while remaining visually light.',
    features: [
      '2cm thick honed Carrara marble top',
      'Hand-formed blackened mild steel base',
      'Protective rubber feet to prevent floor marking',
      'Marble sealed for stain resistance',
      'Available in oval or rectangular top',
      'Matching side table available'
    ],
    color1: '#dddad4',
    color2: '#ccc9c2',
    svgPath: `<rect x="25" y="75" width="150" height="14" rx="3" fill="#aaa"/><rect x="50" y="89" width="8" height="35" rx="2" fill="#888"/><rect x="142" y="89" width="8" height="35" rx="2" fill="#888"/><rect x="30" y="70" width="140" height="5" rx="2" fill="#ccc"/>`
  },
  {
    id: 10,
    cat: 'Office',
    name: 'Alto Shelving Unit',
    price: 'From $880',
    material: 'Solid Pine / Steel',
    dimensions: 'W90 × D30 × H180cm',
    finish: 'Waxed',
    weight: '28kg',
    lead: '3–4 weeks',
    desc: 'The Alto Shelving Unit is designed for those who treat books, objects, and plants as part of their interior composition. Solid waxed pine shelves slot into precision-welded steel uprights — no tools required for shelf adjustment. Freestanding but wall-anchorable for safety in seismic zones.',
    features: [
      'Solid pine shelves with beeswax finish',
      'Precision-welded steel upright frame',
      'Tool-free shelf height adjustment',
      'Wall-mountable anchor kit included',
      'Available in 2-bay and 3-bay configurations',
      'Max load 30kg per shelf'
    ],
    color1: '#d8d0c4',
    color2: '#c8c0b4',
    svgPath: `<rect x="55" y="15" width="6" height="175" rx="2" fill="#888"/><rect x="139" y="15" width="6" height="175" rx="2" fill="#888"/><rect x="55" y="20" width="90" height="6" rx="1" fill="#aaa"/><rect x="55" y="65" width="90" height="6" rx="1" fill="#aaa"/><rect x="55" y="110" width="90" height="6" rx="1" fill="#aaa"/><rect x="55" y="155" width="90" height="6" rx="1" fill="#aaa"/>`
  },
  {
    id: 11,
    cat: 'Outdoor',
    name: 'Plinth Garden Bench',
    price: 'From $650',
    material: 'Reconstituted Stone',
    dimensions: 'W150 × D40 × H45cm',
    finish: 'Raw',
    weight: '180kg',
    lead: '3–5 weeks',
    desc: 'The Plinth Garden Bench is a single-form object: monolithic, permanent, and unfussy. Cast in reconstituted limestone aggregate, its raw textured surface develops a beautiful patina outdoors while remaining equally at home in a minimal interior. No assembly required.',
    features: [
      'Cast reconstituted limestone aggregate',
      'Single-pour monolithic form',
      'Frost-resistant for year-round outdoor use',
      'Textured raw surface — no sealing required',
      'Also suitable for indoor use',
      'Made to order — allow 3–5 week lead time'
    ],
    color1: '#c0bcb6',
    color2: '#b0aca6',
    svgPath: `<rect x="20" y="90" width="160" height="18" rx="2" fill="#999"/><rect x="20" y="108" width="30" height="30" rx="2" fill="#888"/><rect x="150" y="108" width="30" height="30" rx="2" fill="#888"/>`
  },
  {
    id: 12,
    cat: 'Dining',
    name: 'Round Pedestal Table',
    price: 'From $1,400',
    material: 'Lacquered MDF / Cast Iron',
    dimensions: 'Ø120 × H75cm',
    finish: 'Gloss White',
    weight: '52kg',
    lead: '4–5 weeks',
    desc: 'A modern reinterpretation of the tulip table silhouette. The gloss white lacquer top is moulded MDF with a high-durability topcoat, sitting on a sand-cast iron pedestal with a powder-coated finish. The round form naturally encourages conversation and fits comfortably into tighter dining areas.',
    features: [
      'High-gloss lacquer MDF top (5 colour options)',
      'Sand-cast iron pedestal base',
      'Powder-coated for durability',
      'Seats 4 comfortably, 5 with smaller chairs',
      'Extension leaf option for oval format',
      'Base available in black or white'
    ],
    color1: '#e8e6e0',
    color2: '#d8d6d0',
    svgPath: `<ellipse cx="100" cy="65" rx="75" ry="12" fill="#aaa"/><rect x="90" y="77" width="20" height="55" rx="3" fill="#888"/><ellipse cx="100" cy="132" rx="35" ry="8" fill="#888"/>`
  },

  // ── ADD NEW PRODUCTS BELOW THIS LINE ────────────────────────
  // Copy the template below, fill in your details, save the file.
  //
  // {
  //   id: 13,
  //   cat: 'Living Room',         // Living Room | Bedroom | Dining | Office | Outdoor
  //   name: 'Your Product Name',
  //   price: 'From $0,000',
  //   material: 'Material / Material',
  //   dimensions: 'W000 × D000 × H000cm',
  //   finish: 'Finish Type',
  //   weight: '00kg',
  //   lead: '0–0 weeks',
  //   desc: 'Full product description shown on the detail page. Write 2-3 sentences about the design, materials, and craftsmanship.',
  //   features: [
  //     'Feature one',
  //     'Feature two',
  //     'Feature three',
  //     'Feature four',
  //   ],
  //   color1: '#d4cfc6',           // background gradient start hex
  //   color2: '#bfb9ae',           // background gradient end hex
  //   svgPath: ``                  // leave empty for a plain gradient placeholder
  // },

];

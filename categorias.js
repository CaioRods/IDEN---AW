/* =====================================================================
   categorias.js  -  Classificação visual de materiais (IDEN)
   ---------------------------------------------------------------------
   Define o "DNA visual" de cada tipo de material: um ícone em SVG usado
   como marca d'água discreta nos cards do catálogo e no fundo da folha
   de identificação impressa.
   ===================================================================== */

/* Ícones desenhados em traço (viewBox 0 0 64 64).
   Usam currentColor + stroke, então cor e opacidade ficam a cargo do CSS. */
const IDEN_ICONS = {
    caixa: `<path d="M32 6 58 18 32 30 6 18Z"/><path d="M6 18v28l26 12 26-12V18"/><path d="M32 30v28"/><path d="M19 12v13" opacity=".55"/>`,

    frasco: `<path d="M26 4h12v10c0 4 8 9 8 18v26a4 4 0 0 1-4 4H22a4 4 0 0 1-4-4V32c0-9 8-14 8-18Z"/><path d="M18 38h28"/><path d="M24 4h16"/>`,

    tampa: `<ellipse cx="32" cy="20" rx="21" ry="8"/><path d="M11 20v13c0 4.4 9.4 8 21 8s21-3.6 21-8V20"/><path d="M18 25v13M25 27v14M32 28v14M39 27v14M46 25v13" opacity=".6"/>`,

    rotulo: `<path d="M33 6H13a7 7 0 0 0-7 7v20a7 7 0 0 0 2 4.9l21 21a7 7 0 0 0 9.9 0l18-18a7 7 0 0 0 0-9.9l-21-21A7 7 0 0 0 33 6Z"/><circle cx="19" cy="19" r="4.5"/>`,

    etiqueta: `<rect x="5" y="14" width="54" height="36" rx="4"/><path d="M13 23v18M19 23v18M25 23v18M31 23v18M40 23v18M48 23v18" opacity=".8"/>`,

    filme: `<ellipse cx="32" cy="13" rx="22" ry="7"/><path d="M10 13v38c0 3.9 9.9 7 22 7s22-3.1 22-7V13"/><path d="M21 21c6 8 6 22 0 30M43 21c-6 8-6 22 0 30" opacity=".5"/>`,

    materiaPrima: `<path d="M26 5v18L11 48a5 5 0 0 0 4.3 7.6h33.4A5 5 0 0 0 53 48L38 23V5"/><path d="M22 5h20"/><path d="M18 40h28"/><circle cx="27" cy="47" r="2.6"/><circle cx="37" cy="50" r="2.1"/>`,

    tempero: `<path d="M22 23a10 10 0 0 1 20 0"/><path d="M17 23h30l3 29a5 5 0 0 1-5 5.5H19a5 5 0 0 1-5-5.5Z"/><path d="M17 35h30" opacity=".6"/><circle cx="27" cy="16" r="1.7"/><circle cx="37" cy="16" r="1.7"/><circle cx="32" cy="11" r="1.7"/>`,

    alho: `<path d="M32 17c-9 0-19 12-19 25 0 9 8 14 19 14s19-5 19-14c0-13-10-25-19-25Z"/><path d="M32 17c-5 7-8 17-8 26M32 17c5 7 8 17 8 26" opacity=".75"/><path d="M32 17c0-6 3-10 8-12-1 7-3 11-8 12Z"/>`,

    cebola: `<path d="M32 15c-10 0-19 11-19 24 0 10 8 17 19 17s19-7 19-17c0-13-9-24-19-24Z"/><path d="M32 15c-4 8-7 17-7 25M32 15c4 8 7 17 7 25" opacity=".7"/><path d="M32 15 26 5M32 15l6-10M32 15V3" opacity=".85"/>`,

    salsa: `<path d="M32 60V28"/><path d="M32 32c-9 0-15-6-15-13 9-2 15 3 15 13ZM32 32c9 0 15-6 15-13-9-2-15 3-15 13ZM32 19c-6-2-10-8-9-14 7 1 10 7 9 14ZM32 19c6-2 10-8 9-14-7 1-10 7-9 14Z"/>`,

    pimenta: `<path d="M34 18c1-7 5-10 10-11"/><path d="M34 18c9 2 14 11 14 21 0 14-10 23-22 23-8 0-13-5-13-10s4-8 9-9c9-1 14-7 14-16 0-4-1-7-2-9Z"/>`,

    pimentao: `<path d="M32 21c-5-7-13-6-17 0-6 9-4 24 2 32 4 6 11 6 15 1 4 5 11 5 15-1 6-8 8-23 2-32-4-6-12-7-17 0Z"/><path d="M32 21V11"/><path d="M25 9c4-3 10-3 14 0" opacity=".8"/>`,

    tomate: `<circle cx="32" cy="38" r="19"/><path d="M32 19v-7"/><path d="M32 19c-6-4-13-4-15-9 7-1 12 1 15 5 3-4 9-6 15-5-2 5-9 5-15 9Z"/>`,

    cenoura: `<path d="M41 24 24 41c-6 6-9 15-6.5 17.5S32 56 38 50l17-17Z"/><path d="M41 24c-1-6 1-11 5-14M41 24c4-5 10-5 15-3M41 24c-3-5-2-11 0-15" opacity=".85"/>`,

    milho: `<path d="M32 6c9 0 15 11 15 24s-6 28-15 28-15-15-15-28S23 6 32 6Z"/><path d="M32 10v46" opacity=".7"/><path d="M23 19c6 3 12 3 18 0M20 30c7 4 17 4 24 0M21 41c7 4 15 4 22 0" opacity=".7"/>`,

    citrico: `<circle cx="32" cy="32" r="25"/><circle cx="32" cy="32" r="19"/><path d="M32 13v38M13 32h38M18.5 18.5l27 27M45.5 18.5l-27 27" opacity=".7"/>`,

    suco: `<path d="M16 16h32l-4 36a6 6 0 0 1-6 5.5H26a6 6 0 0 1-6-5.5Z"/><path d="M18.5 31h27" opacity=".7"/><path d="M41 11c4-5 11-5 13-3-2 6-8 8-13 6Z"/>`,

    oleo: `<path d="M26 4h12v10l8 11v29a5 5 0 0 1-5 5H23a5 5 0 0 1-5-5V25l8-11Z"/><path d="M32 33c5 6 7 10 7 13a7 7 0 0 1-14 0c0-3 2-7 7-13Z"/>`,

    molho: `<path d="M27 4h10v8l7 9v33a6 6 0 0 1-6 6H26a6 6 0 0 1-6-6V21Z"/><rect x="24" y="29" width="16" height="15" rx="2"/>`,

    carne: `<path d="M50 12a13 13 0 0 0-21 9c0 4-2 6-4 8l-4 4 11 11 4-4c2-2 4-4 8-4A13 13 0 0 0 50 12Z"/><path d="M28 37 17 48"/><circle cx="14" cy="51" r="6.5"/>`,

    queijo: `<path d="M7 26 43 11l14 15v21L7 47Z"/><path d="M7 26h50" opacity=".8"/><circle cx="19" cy="36" r="3"/><circle cx="34" cy="39" r="4"/><circle cx="47" cy="35" r="2.5"/>`,

    ovo: `<path d="M32 6c10 0 19 17 19 30a19 19 0 0 1-38 0C13 23 22 6 32 6Z"/><path d="M22 38c0 6 3 10 7 12" opacity=".5"/>`,

    granel: `<path d="M20 15h24l6 34a11 11 0 0 1-11 12H25a11 11 0 0 1-11-12Z"/><path d="M20 15c0-4 5-7 12-7s12 3 12 7"/><path d="M21 31h22" opacity=".7"/>`,

    lata: `<ellipse cx="32" cy="13" rx="16" ry="6"/><path d="M16 13v38c0 3.3 7.2 6 16 6s16-2.7 16-6V13"/><path d="M16 23c0 3.3 7.2 6 16 6s16-2.7 16-6" opacity=".55"/>`,

    pote: `<path d="M14 23h36l-3 30a6 6 0 0 1-6 5.5H23a6 6 0 0 1-6-5.5Z"/><rect x="11" y="11" width="42" height="12" rx="4"/>`,

    balde: `<path d="M11 21h42l-4 34a5 5 0 0 1-5 4.5H20a5 5 0 0 1-5-4.5Z"/><path d="M18 21a14 14 0 0 1 28 0"/><path d="M13 33h38" opacity=".55"/>`,

    saco: `<path d="M13 21h38v32a7 7 0 0 1-7 7H20a7 7 0 0 1-7-7Z"/><path d="m13 21 8-15h22l8 15"/><path d="M32 6v15" opacity=".55"/><path d="M23 33h18" opacity=".7"/>`,

    fita: `<circle cx="32" cy="32" r="23"/><circle cx="32" cy="32" r="8.5"/><path d="M32 9v14.5M32 40.5V55" opacity=".6"/>`,

    tinta: `<path d="M32 5s17 19 17 29a17 17 0 0 1-34 0C15 24 32 5 32 5Z"/><path d="M23 36c0 7 4 11 9 12" opacity=".55"/>`,

    cola: `<path d="M26 13h12v39a6 6 0 0 1-12 0Z"/><path d="M28 13V7h8v6"/><path d="M32 7V2"/><path d="M26 27h12" opacity=".7"/>`,

    aroma: `<path d="M25 4h12v13l6 12v27a5 5 0 0 1-5 5H24a5 5 0 0 1-5-5V29l6-12Z"/><path d="M19 33h24" opacity=".65"/><path d="M48 15c4-3 4-8 0-11M55 19c6-5 6-15 0-20" opacity=".8"/>`,

    quimico: `<path d="M18 7h28"/><path d="M23 7v39a10 10 0 0 0 20 0V7"/><path d="M23 33h20" opacity=".7"/><circle cx="29" cy="42" r="2.2"/><circle cx="37" cy="46" r="2.8"/>`,

    lacteo: `<path d="M20 25h24v30a5 5 0 0 1-5 5H25a5 5 0 0 1-5-5Z"/><path d="m20 25 6-17h12l6 17"/><path d="M26 8h12" opacity=".8"/><path d="M20 37h24" opacity=".6"/>`,

    chocolate: `<rect x="9" y="14" width="46" height="37" rx="4"/><path d="M9 26.5h46M9 38.5h46M24.5 14v37M39.5 14v37" opacity=".7"/>`,

    palete: `<path d="M6 36h52M6 46h52M6 56h52"/><path d="M14 36v20M32 36v20M50 36v20" opacity=".7"/><path d="M11 36V22h42v14" opacity=".8"/>`,

    padrao: `<path d="M32 5 57 18v28L32 59 7 46V18Z"/><path d="M7 18l25 13 25-13M32 31v28" opacity=".7"/>`
};

/* Catálogo de categorias.
   `first` = casa com a PRIMEIRA palavra do nome (a base do IDEN é quase toda
             nomeada assim: "CX ...", "ROTULO ...", "FILME ...").
   `any`   = casa com qualquer palavra do nome, avaliado depois do `first`.
   A ordem do array define a prioridade de desempate. */
const IDEN_CATEGORIES = [
    { id: 'caixa', label: 'Caixa', icon: 'caixa', color: '#b45309',
      first: ['CX', 'CAIXA', 'CXS', 'CAIXAS', 'DISPLAY'], any: ['CAIXA'] },

    { id: 'rotulo', label: 'Rótulo', icon: 'rotulo', color: '#7c3aed',
      first: ['ROTULO', 'ROT', 'ROTULOS', 'RTL'], any: ['ROTULO', 'SLEEVE'] },

    { id: 'etiqueta', label: 'Etiqueta', icon: 'etiqueta', color: '#4f46e5',
      first: ['ETIQUETA', 'ETIQUETAS', 'ETIQ', 'SELO', 'SELOS', 'LACRE', 'LACRES', 'BARCODE'],
      any: ['ETIQUETA', 'LACRE'] },

    { id: 'filme', label: 'Filme', icon: 'filme', color: '#0891b2',
      first: ['FILME', 'FILM', 'BOBINA', 'LAMINADO'], any: ['STRETCH', 'FILME'] },

    { id: 'tampa', label: 'Tampa', icon: 'tampa', color: '#0d9488',
      first: ['TAMPA', 'TAMPAS', 'TP', 'BATOQUE', 'VALVULA', 'CAPA', 'FLIPTOP', 'ROSQUEAVEL',
              'CONTA'],
      any: ['TAMPA', 'BATOQUE'] },

    { id: 'frasco', label: 'Frasco', icon: 'frasco', color: '#2563eb',
      first: ['FRASCO', 'FRASCOS', 'FR', 'GARRAFA', 'BISNAGA', 'AMPOLA'], any: ['FRASCO'] },

    { id: 'aroma', label: 'Aroma', icon: 'aroma', color: '#db2777',
      first: ['AROMA', 'AROMAS', 'AN', 'AR', 'ESSENCIA', 'FRAGRANCIA'], any: ['AROMA'] },

    { id: 'alho', label: 'Alho', icon: 'alho', color: '#a16207',
      first: ['ALHO', 'AJO'], any: ['ALHO'] },

    { id: 'cebola', label: 'Cebola', icon: 'cebola', color: '#9333ea',
      first: ['CEBOLA', 'CEBOLINHA'], any: ['CEBOLA', 'CEBOLINHA'] },

    { id: 'salsa', label: 'Salsa e Ervas', icon: 'salsa', color: '#16a34a',
      first: ['SALSA', 'SALSINHA', 'CHEIRO', 'COENTRO', 'MANJERICAO', 'OREGANO',
              'TOMILHO', 'TONILHO', 'ALECRIM', 'ERVA', 'ERVAS', 'LOURO', 'HORTELA', 'AIPO',
              'ESTRAGAO', 'FOLHA', 'FOLHAS', 'CEBOLETE', 'ENDRO', 'FUNCHO', 'HISSOPO',
              'SANDALO', 'CARDOMOMO', 'CARDAMOMO', 'MANJERONA', 'AQUILEIA', 'MENTA', 'GERGELIM',
              // botânicos usados em extratos e infusões
              'BOLDO', 'CAMOMILA', 'CARQUEJA', 'JURUBEBA', 'ALCACHOFRA', 'LOSNA', 'SALVIA',
              'QUINA', 'QUASSIA', 'SABUGUEIRO', 'CARDO', 'ANIZ', 'ANIS', 'AGARICO', 'ALOES',
              'CENTEUREA', 'CAMEDRIO', 'DICTAMO', 'FENOGREGO', 'LIRIO', 'SATURELA', 'GENCIANA',
              'BALSAMO', 'TILIA', 'CALAMO', 'ANGELICA', 'CALENDULA', 'MELISSA', 'RUIBARBO'],
      any: ['SALSA', 'MANJERICAO', 'OREGANO', 'ERVAS'] },

    { id: 'tempero', label: 'Tempero', icon: 'tempero', color: '#c2410c',
      first: ['TEMPERO', 'TEMP', 'REFOGA', 'REFOGADO', 'CONDIMENTO', 'COND', 'MIX',
              'PREPARADO', 'SAZONADOR', 'CURRY', 'PAPRICA', 'COMINHO',
              'CANELA', 'CRAVO', 'NOZ', 'GENGIBRE', 'CURCUMA', 'ACAFRAO', 'MOSTARDA',
              'WASABI', 'ZEDORIA', 'FAVA', 'SEMENTE', 'RAIZ', 'CASCA', 'ABSINTO', 'MACIS'],
      any: ['TEMPERO', 'REFOGA', 'CONDIMENTO'] },

    { id: 'pimenta', label: 'Pimenta', icon: 'pimenta', color: '#dc2626',
      first: ['PIMENTA', 'PIM', 'CHILLI', 'CHILI', 'MALAGUETA'], any: ['PIMENTA'] },

    { id: 'pimentao', label: 'Pimentão', icon: 'pimentao', color: '#65a30d',
      first: ['PIMENTAO'], any: ['PIMENTAO'] },

    { id: 'tomate', label: 'Tomate', icon: 'tomate', color: '#e11d48',
      first: ['TOMATE'], any: ['TOMATE'] },

    { id: 'cenoura', label: 'Cenoura', icon: 'cenoura', color: '#ea580c',
      first: ['CENOURA'], any: ['CENOURA'] },

    { id: 'milho', label: 'Milho', icon: 'milho', color: '#ca8a04',
      first: ['MILHO', 'PIPOCA', 'FLAKES'], any: ['MILHO'] },

    { id: 'citrico', label: 'Cítricos', icon: 'citrico', color: '#f59e0b',
      first: ['LIMAO', 'LARANJA', 'TANGERINA', 'MEXIRICA', 'LIMA', 'BERGAMOTA',
              'ACEROLA', 'MARACUJA'],
      any: ['LIMAO', 'LARANJA', 'TANGERINA'] },

    { id: 'suco', label: 'Suco e Polpa', icon: 'suco', color: '#f97316',
      first: ['SUCO', 'POLPA', 'PEDACOS', 'MORANGO', 'UVA', 'ABACAXI', 'MANGA',
              'GOIABA', 'PESSEGO', 'CAJU', 'GUARANA', 'FRUTA', 'BANANA', 'COCO', 'AMEIXA',
              'MEL', 'TILIA'],
      any: ['POLPA', 'SUCO'] },

    { id: 'oleo', label: 'Óleo', icon: 'oleo', color: '#a16207',
      first: ['OLEO', 'AZEITE', 'GORDURA'], any: ['OLEO'] },

    { id: 'molho', label: 'Molho', icon: 'molho', color: '#be123c',
      first: ['MOLHO', 'KETCHUP', 'CATCHUP', 'MAIONESE', 'SHOYU', 'BARBECUE', 'CALDO',
              'SOPAO', 'MAYO', 'VINAGRE', 'VINAGRETE', 'EXTRATO'],
      any: ['MOLHO', 'KETCHUP', 'CATCHUP', 'MAIONESE'] },

    { id: 'carne', label: 'Carnes', icon: 'carne', color: '#9f1239',
      first: ['CARNE', 'FRANGO', 'BACON', 'PRESUNTO', 'CACHORRO', 'COSTELA', 'PEITO'],
      any: ['FRANGO', 'CARNE', 'BACON'] },

    { id: 'queijo', label: 'Queijo', icon: 'queijo', color: '#d97706',
      first: ['QUEIJO', 'PARMESAO', 'CHEDDAR'], any: ['QUEIJO'] },

    { id: 'ovo', label: 'Ovo', icon: 'ovo', color: '#b45309',
      first: ['OVO', 'OVOS', 'GEMA', 'CLARA'], any: ['GEMA'] },

    { id: 'lacteo', label: 'Lácteos', icon: 'lacteo', color: '#0284c7',
      first: ['LEITE', 'CREME', 'COMPOSTO', 'SORO', 'NATA', 'IOGURTE', 'MANTEIGA'],
      any: ['LACTEO', 'LEITE'] },

    { id: 'chocolate', label: 'Cacau e Chocolate', icon: 'chocolate', color: '#78350f',
      first: ['CACAU', 'CHOCOLATE', 'COBERTURA', 'BAUNILHA'], any: ['CACAU', 'CHOCOLATE'] },

    { id: 'granel', label: 'Secos e Pós', icon: 'granel', color: '#78716c',
      first: ['SAL', 'ACUCAR', 'AMIDO', 'FARINHA', 'TRIGO', 'GOMA',
              'FAROFA', 'MACARRAO', 'GLUCOSE', 'SORBITOL', 'XANTHAN', 'PASTA', 'MASSA',
              'FIBRA', 'PROTEINA', 'FECULA', 'ARROZ', 'FEIJAO', 'SOJA', 'MALTO', 'MALTE',
              'CARAMELO', 'DEXTROSE', 'FRUTOSE', 'MALTODEXTRINA', 'AVEIA', 'CEVADA'],
      any: ['AMIDO', 'FARINHA'] },

    { id: 'corante', label: 'Corantes e Tintas', icon: 'tinta', color: '#7e22ce',
      first: ['CORANTE', 'TINTA', 'PIGMENTO', 'TURVADOR', 'RIBBON'], any: ['CORANTE', 'PIGMENTO'] },

    { id: 'quimico', label: 'Químicos', icon: 'quimico', color: '#0f766e',
      first: ['ACIDO', 'CLORETO', 'METABISSULFITO', 'SOLVENTE', 'SOLUCAO',
              'DILUENTE', 'ADITIVO', 'ACETATO', 'ALDEIDO', 'ALCOOL', 'TBHQ',
              'TITRIPLEX', 'BENZOATO', 'SORBATO', 'CITRATO', 'FOSFATO', 'ENZIMA', 'ENZ', 'SWAB',
              'BICARBONATO', 'GLUTAMATO', 'PROPILENO', 'POLIETILENO', 'BUTIRATO', 'DIACETIL',
              'ANETOL', 'ETHER', 'CELULOSE', 'CARBOX', 'LECITINA', 'LECETINA', 'EMULSIFICANTE',
              'ESTABILIZANTE', 'CONSERVANTE', 'ANTIOXIDANTE', 'ANTI', 'SILICONE', 'NITRITO',
              'NITRATO', 'CARBONATO', 'SULFATO'],
      any: ['ACIDO'] },

    { id: 'cola', label: 'Colas e Adesivos', icon: 'cola', color: '#475569',
      first: ['COLA', 'ADESIVO', 'RESINA'], any: ['COLA'] },

    { id: 'fita', label: 'Fitas e Cartuchos', icon: 'fita', color: '#334155',
      first: ['FITA', 'FITAS', 'CARTUCHO', 'CINTA'], any: ['FITA'] },

    { id: 'lata', label: 'Lata', icon: 'lata', color: '#525252',
      first: ['LATA', 'LATAS', 'LATINHA'], any: ['LATA'] },

    { id: 'pote', label: 'Pote e Vidro', icon: 'pote', color: '#0369a1',
      first: ['POTE', 'POTES', 'VIDRO', 'VIDROS', 'COPO', 'JARRA'], any: ['POTE', 'VIDRO'] },

    { id: 'balde', label: 'Balde e Galão', icon: 'balde', color: '#1d4ed8',
      first: ['BALDE', 'BOMBONA', 'GALAO', 'TAMBOR', 'BARRICA', 'CONTAINER'],
      any: ['BALDE', 'GALAO', 'BOMBONA'] },

    { id: 'saco', label: 'Sacos e Bags', icon: 'saco', color: '#57534e',
      first: ['SACO', 'SACOS', 'BAG', 'BAGS', 'BOLSA', 'SACHET', 'ENVELOPE'],
      any: ['BAG', 'BOLSA'] },

    { id: 'palete', label: 'Estrutura e Logística', icon: 'palete', color: '#57534e',
      first: ['PALETE', 'PALLET', 'TABULEIRO', 'ESTRADO', 'GRADE'], any: ['PALETE', 'PALLET'] },

    { id: 'materia-prima', label: 'Matéria Prima', icon: 'materiaPrima', color: '#15803d',
      first: ['MATERIA', 'MP', 'INSUMO', 'BIONIS', 'BIOTASTE', 'STAMIST',
              'CONCENTRADO', 'ARTESA'],
      any: ['MATERIA PRIMA'] }
];

/* Categoria neutra usada quando nada casa. */
const IDEN_CATEGORY_DEFAULT = {
    id: 'geral', label: 'Material', icon: 'padrao', color: '#64748b', first: [], any: []
};

/* Remove acentos, pontuação e normaliza para caixa alta. */
function idenNormalize(text) {
    return String(text || '')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toUpperCase()
        .replace(/[^A-Z0-9 ]+/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

/* Índice montado uma única vez para busca O(1) na primeira palavra. */
const IDEN_FIRST_INDEX = (() => {
    const map = new Map();
    IDEN_CATEGORIES.forEach(cat => {
        (cat.first || []).forEach(word => {
            const key = idenNormalize(word);
            if (key && !map.has(key)) map.set(key, cat);
        });
    });
    return map;
})();

/**
 * Descobre a categoria visual de um produto pelo nome.
 * Estratégia em camadas: primeira palavra -> qualquer palavra -> trecho livre.
 */
function getProductCategory(produtoName) {
    const clean = idenNormalize(produtoName);
    if (!clean) return IDEN_CATEGORY_DEFAULT;

    const words = clean.split(' ');

    // 1. Primeira palavra (cobre a esmagadora maioria da base).
    const byFirst = IDEN_FIRST_INDEX.get(words[0]);
    if (byFirst) return byFirst;

    // 1b. Prefixo colado ao número, ex.: "CX173", "ROT44" — comum no cadastro.
    const glued = words[0].match(/^([A-Z]+)\d/);
    if (glued) {
        const byGlued = IDEN_FIRST_INDEX.get(glued[1]);
        if (byGlued) return byGlued;
    }

    // 2. Qualquer palavra do nome, respeitando a prioridade do catálogo.
    const wordSet = new Set(words);
    for (const cat of IDEN_CATEGORIES) {
        if ((cat.any || []).some(k => wordSet.has(idenNormalize(k)))) return cat;
        if ((cat.first || []).some(k => wordSet.has(idenNormalize(k)))) return cat;
    }

    // 3. Último recurso: expressões compostas ("MATERIA PRIMA").
    for (const cat of IDEN_CATEGORIES) {
        if ((cat.any || []).some(k => clean.includes(idenNormalize(k)))) return cat;
    }

    return IDEN_CATEGORY_DEFAULT;
}

/** Monta o markup SVG de uma categoria pronto para injetar no DOM. */
function buildCategorySvg(category, className) {
    const cat = category || IDEN_CATEGORY_DEFAULT;
    const inner = IDEN_ICONS[cat.icon] || IDEN_ICONS.padrao;
    return `<svg class="${className}" viewBox="0 0 64 64" aria-hidden="true" focusable="false"`
        + ` fill="none" stroke="currentColor" stroke-width="2.4"`
        + ` stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`;
}
